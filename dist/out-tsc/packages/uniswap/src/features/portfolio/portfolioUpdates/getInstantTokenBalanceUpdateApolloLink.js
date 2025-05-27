import { ApolloLink } from '@apollo/client';
import { asyncMap } from '@apollo/client/utilities';
import { Buffer } from 'buffer';
import { getNativeAddress } from 'uniswap/src/constants/addresses';
import { Currency, TokenBalancePartsFragmentDoc, TokenDocument, } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
import { GQLQueries } from 'uniswap/src/data/graphql/uniswap-data-api/queries';
import { fromGraphQLChain } from 'uniswap/src/features/chains/utils';
import { currencyIdToContractInput } from 'uniswap/src/features/dataApi/utils';
import { fetchOnChainBalances } from 'uniswap/src/features/portfolio/portfolioUpdates/fetchOnChainBalances';
import { makeSelectTokenBalanceOverridesForWalletAddress } from 'uniswap/src/features/portfolio/slice/selectors';
import { removeExpiredBalanceOverrides, removeTokenFromBalanceOverride, } from 'uniswap/src/features/portfolio/slice/slice';
import { buildCurrencyId } from 'uniswap/src/utils/currencyId';
import { logger } from 'utilities/src/logger/logger';
const APPROXIMATE_EQUALITY_THRESHOLD_PERCENT = 0.02; // 2%
export function getInstantTokenBalanceUpdateApolloLink({ reduxStore }) {
    return new ApolloLink((operation, forward) => {
        if (operation.operationName !== GQLQueries.PortfolioBalances) {
            return forward(operation);
        }
        return asyncMap(forward(operation), async (response) => {
            var _a, _b, _c;
            try {
                const walletAddress = operation.variables.ownerAddress;
                reduxStore.dispatch(removeExpiredBalanceOverrides());
                const selectTokenBalanceOverridesForWalletAddress = makeSelectTokenBalanceOverridesForWalletAddress();
                const tokenBalanceOverrides = selectTokenBalanceOverridesForWalletAddress(reduxStore.getState(), walletAddress);
                if (!tokenBalanceOverrides) {
                    return response;
                }
                logger.debug('getInstantTokenBalanceUpdateApolloLink.ts', 'getInstantTokenBalanceUpdateApolloLink', '[ITBU] Maybe overriding token balance in apollo response', tokenBalanceOverrides);
                if (!((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.portfolios)) {
                    logger.warn('getInstantTokenBalanceUpdateApolloLink.ts', 'getInstantTokenBalanceUpdateApolloLink', '[ITBU] Unexpected response from `PortfolioBalances` query', { response });
                    return response;
                }
                const data = response.data;
                const tokenBalances = (_c = (_b = data === null || data === void 0 ? void 0 : data.portfolios) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.tokenBalances;
                if (!tokenBalances) {
                    logger.warn('getInstantTokenBalanceUpdateApolloLink.ts', 'getInstantTokenBalanceUpdateApolloLink', '[ITBU] No `tokenBalances` array found in `PortfolioBalances` response', { response });
                    return response;
                }
                const { cache: apolloCache } = operation.getContext();
                const onchainBalancesByCurrencyId = await fetchOnChainBalances({
                    apolloCache,
                    cachedPortfolio: data.portfolios[0],
                    accountAddress: walletAddress,
                    currencyIds: new Set(Object.keys(tokenBalanceOverrides)),
                });
                const tokenBalanceAlreadyExists = {};
                tokenBalances.forEach((tokenBalance) => {
                    var _a, _b, _c, _d;
                    if (!tokenBalance) {
                        return;
                    }
                    const chainId = fromGraphQLChain((_a = tokenBalance.token) === null || _a === void 0 ? void 0 : _a.chain);
                    if (!chainId) {
                        logger.warn('getInstantTokenBalanceUpdateApolloLink.ts', 'getInstantTokenBalanceUpdateApolloLink', '[ITBU] No `chain` found for token', { tokenBalance });
                        return;
                    }
                    const tokenAddress = (_c = (_b = tokenBalance.token) === null || _b === void 0 ? void 0 : _b.address) !== null && _c !== void 0 ? _c : getNativeAddress(chainId);
                    const currencyId = buildCurrencyId(chainId, tokenAddress).toLowerCase();
                    const tokenBalanceOverride = tokenBalanceOverrides[currencyId];
                    if (!tokenBalanceOverride) {
                        return;
                    }
                    tokenBalanceAlreadyExists[currencyId] = true;
                    const onchainBalance = onchainBalancesByCurrencyId.get(currencyId);
                    if (!(onchainBalance === null || onchainBalance === void 0 ? void 0 : onchainBalance.quantity)) {
                        logger.warn('getInstantTokenBalanceUpdateApolloLink.ts', 'getInstantTokenBalanceUpdateApolloLink', '[ITBU] No `onchainBalance.quantity` found for token', { currencyId, walletAddress });
                        return;
                    }
                    const onchainQuantity = onchainBalance.quantity;
                    const cachedQuantity = tokenBalance.quantity;
                    // The backend seems to be truncating some decimals for certain tokens,
                    // so instead of checking for exact equality, we check if the quantities are "aproximately" equal.
                    const areQuantitiesAproximatelyEqual = typeof cachedQuantity === 'number'
                        ? Math.abs(onchainQuantity - cachedQuantity) / cachedQuantity <= APPROXIMATE_EQUALITY_THRESHOLD_PERCENT
                        : false;
                    if (areQuantitiesAproximatelyEqual) {
                        logger.debug('getInstantTokenBalanceUpdateApolloLink.ts', 'getInstantTokenBalanceUpdateApolloLink', '[ITBU] Quantities are aproximately equal, removing from store', { cachedQuantity, onchainQuantity });
                        reduxStore.dispatch(removeTokenFromBalanceOverride({
                            ownerAddress: walletAddress,
                            chainId,
                            tokenAddress,
                        }));
                        return;
                    }
                    tokenBalance.quantity = onchainQuantity;
                    logger.debug('getInstantTokenBalanceUpdateApolloLink.ts', 'getInstantTokenBalanceUpdateApolloLink', '[ITBU] Overriding quantity', { cachedQuantity, onchainQuantity });
                    if (cachedQuantity && ((_d = tokenBalance.denominatedValue) === null || _d === void 0 ? void 0 : _d.value)) {
                        tokenBalance.denominatedValue = {
                            ...tokenBalance.denominatedValue,
                            value: (tokenBalance.denominatedValue.value * onchainQuantity) / cachedQuantity,
                        };
                    }
                });
                if (tokenBalanceOverrides.length === tokenBalanceAlreadyExists.length) {
                    return response;
                }
                const missingTokenBalances = Object.keys(tokenBalanceOverrides).filter((currencyId) => !tokenBalanceAlreadyExists[currencyId]);
                missingTokenBalances.forEach((currencyId) => {
                    var _a, _b, _c;
                    const onchainBalanceQuantity = (_a = onchainBalancesByCurrencyId.get(currencyId)) === null || _a === void 0 ? void 0 : _a.quantity;
                    const denominatedValue = (_c = (_b = onchainBalancesByCurrencyId.get(currencyId)) === null || _b === void 0 ? void 0 : _b.denominatedValue) !== null && _c !== void 0 ? _c : null;
                    if (onchainBalanceQuantity === undefined) {
                        logger.warn('getInstantTokenBalanceUpdateApolloLink.ts', 'getInstantTokenBalanceUpdateApolloLink', '[ITBU] No `onchainBalance.quantity` found for token', { currencyId, walletAddress });
                        return;
                    }
                    const newTokenBalance = createTokenBalance({
                        apolloCache,
                        ownerAddress: walletAddress,
                        currencyId,
                        onchainBalanceQuantity,
                        denominatedValue,
                    });
                    if (!newTokenBalance) {
                        // This shouldn't happen, but if it does, we're already logging it in `createTokenBalance`.
                        return;
                    }
                    tokenBalances.push(newTokenBalance);
                });
                return response;
            }
            catch (error) {
                logger.error(error, {
                    tags: {
                        file: 'getInstantTokenBalanceUpdateApolloLink.ts',
                        function: 'getInstantTokenBalanceUpdateApolloLink',
                    },
                });
                return response;
            }
        });
    });
}
export function createTokenBalanceRef({ apolloCache, ownerAddress, currencyId, onchainBalanceQuantity, denominatedValue, }) {
    var _a;
    const token = (_a = apolloCache.readQuery({
        query: TokenDocument,
        variables: currencyIdToContractInput(currencyId),
    })) === null || _a === void 0 ? void 0 : _a.token;
    if (!token) {
        logger.warn('getInstantTokenBalanceUpdateApolloLink.ts', 'createTokenBalance', '[ITBU] No `token` found', {
            currencyId,
        });
        return null;
    }
    // This must match our graphql backend ID generation.
    const tokenBalanceId = generateEntityId('TokenBalance', [ownerAddress, token.id, Currency.Usd]);
    logger.debug('getInstantTokenBalanceUpdateApolloLink.ts', 'createTokenBalanceRef', `[ITBU]Calling apolloCache.writeFragment for ${currencyId}`, {
        onchainBalanceQuantity,
        denominatedValue,
    });
    const newTokenBalanceRef = apolloCache.writeFragment({
        data: {
            __typename: 'TokenBalance',
            id: tokenBalanceId,
            quantity: onchainBalanceQuantity,
            denominatedValue: denominatedValue
                ? {
                    __typename: 'Amount',
                    value: denominatedValue.value,
                    currency: denominatedValue.currency,
                }
                : null,
            isHidden: false,
            token,
            tokenProjectMarket: {
                relativeChange24: null,
            },
        },
        fragment: TokenBalancePartsFragmentDoc,
        fragmentName: 'TokenBalanceParts',
    });
    if (!newTokenBalanceRef) {
        logger.warn('getInstantTokenBalanceUpdateApolloLink.ts', 'createTokenBalanceRef', '[ITBU] Failed to write `newTokenBalanceRef`', {
            tokenBalanceId,
            ownerAddress,
            currencyId,
        });
        return null;
    }
    return newTokenBalanceRef;
}
function createTokenBalance({ apolloCache, ownerAddress, currencyId, onchainBalanceQuantity, denominatedValue, }) {
    const newTokenBalanceRef = createTokenBalanceRef({
        apolloCache,
        ownerAddress,
        currencyId,
        onchainBalanceQuantity,
        denominatedValue,
    });
    if (!newTokenBalanceRef) {
        return null;
    }
    const newTokenBalance = apolloCache.readFragment({
        id: apolloCache.identify(newTokenBalanceRef),
        fragment: TokenBalancePartsFragmentDoc,
        fragmentName: 'TokenBalanceParts',
    });
    if (!newTokenBalance) {
        logger.warn('getInstantTokenBalanceUpdateApolloLink.ts', 'createTokenBalance', '[ITBU] Failed to read `newTokenBalance` from cache', { currencyId, ownerAddress });
        return null;
    }
    return newTokenBalance;
}
// Copy/pasted from our graphql backend
function generateEntityId(typeName, identifiers) {
    const id = identifiers
        .map((x) => {
        return x === null ? 'null' : x; // we allow null identifiers because null is a valid value for addresses (ex. native eth)
    })
        .join('_');
    return Buffer.from(`${typeName}:${id}`).toString('base64');
}
//# sourceMappingURL=getInstantTokenBalanceUpdateApolloLink.js.map