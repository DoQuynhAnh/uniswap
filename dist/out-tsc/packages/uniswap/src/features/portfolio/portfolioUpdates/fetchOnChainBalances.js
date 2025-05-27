import { getNativeAddress } from 'uniswap/src/constants/addresses';
import { fetchTradingApiIndicativeQuoteIgnoring404 } from 'uniswap/src/data/apiClients/tradingApi/useTradingApiIndicativeQuoteQuery';
import { TokenDocument, } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
import { TradeType } from 'uniswap/src/data/tradingApi/__generated__';
import { fromGraphQLChain } from 'uniswap/src/features/chains/utils';
import { currencyIdToContractInput, gqlTokenToCurrencyInfo } from 'uniswap/src/features/dataApi/utils';
import { getOnChainBalancesFetch } from 'uniswap/src/features/portfolio/api';
import { ValueType, getCurrencyAmount } from 'uniswap/src/features/tokens/getCurrencyAmount';
import { STABLECOIN_AMOUNT_OUT } from 'uniswap/src/features/transactions/hooks/useUSDCPrice';
import { toTradingApiSupportedChainId } from 'uniswap/src/features/transactions/swap/utils/tradingApi';
import { currencyIdToAddress, currencyIdToChain, isNativeCurrencyAddress } from 'uniswap/src/utils/currencyId';
import { logger } from 'utilities/src/logger/logger';
export async function fetchOnChainBalances({ apolloCache, cachedPortfolio, accountAddress, currencyIds, }) {
    const onchainBalancesByCurrencyId = new Map();
    logger.debug('getOnChainBalances.ts', 'getOnChainBalances', '[ITBU] Fetching onchain balances', currencyIds);
    await Promise.all(Array.from(currencyIds).map(async (currencyId) => {
        var _a;
        const currencyAddress = currencyIdToAddress(currencyId);
        const chainId = currencyIdToChain(currencyId);
        if (!currencyAddress || !chainId) {
            logger.error(new Error('Unable to parse `currencyId`'), {
                tags: { file: 'fetchOnChainBalances.ts', function: 'fetchOnChainBalances' },
                extra: { currencyId },
            });
            return;
        }
        const { balance: onchainBalance } = await getOnChainBalancesFetch({
            currencyAddress,
            chainId,
            currencyIsNative: isNativeCurrencyAddress(chainId, currencyAddress),
            accountAddress,
        });
        const token = (_a = apolloCache.readQuery({
            query: TokenDocument,
            variables: currencyIdToContractInput(currencyId),
        })) === null || _a === void 0 ? void 0 : _a.token;
        if (!token) {
            logger.warn('fetchOnChainBalances.ts', 'fetchOnChainBalances', 'No `token` found', { currencyId });
            return;
        }
        const currencyInfo = gqlTokenToCurrencyInfo(token);
        if (!currencyInfo) {
            logger.warn('fetchOnChainBalances.ts', 'fetchOnChainBalances', 'No `currency` found');
            return;
        }
        const onchainQuantityCurrencyAmount = getCurrencyAmount({
            value: onchainBalance,
            valueType: ValueType.Raw,
            currency: currencyInfo.currency,
        });
        const quantity = onchainQuantityCurrencyAmount === null || onchainQuantityCurrencyAmount === void 0 ? void 0 : onchainQuantityCurrencyAmount.toExact();
        const denominatedValue = onchainQuantityCurrencyAmount
            ? await getDenominatedValue({
                onchainQuantityCurrencyAmount,
                token,
                cachedPortfolio,
            })
            : undefined;
        onchainBalancesByCurrencyId.set(currencyId, {
            currencyAddress,
            chainId,
            rawBalance: onchainBalance,
            quantity: quantity ? parseFloat(quantity) : undefined,
            denominatedValue,
        });
    }));
    logger.debug('getOnChainBalances.ts', 'getOnChainBalances', '[ITBU] Onchain balances fetched', JSON.stringify(Object.fromEntries(onchainBalancesByCurrencyId)));
    return onchainBalancesByCurrencyId;
}
async function getDenominatedValue({ onchainQuantityCurrencyAmount, token, cachedPortfolio, }) {
    var _a, _b;
    const inferredDenominatedValue = getInferredCachedDenominatedValue({
        cachedPortfolio,
        token,
        onchainQuantityCurrencyAmount,
    });
    if (inferredDenominatedValue) {
        return inferredDenominatedValue;
    }
    // If we don't have enough data to calculate the USD value, we continue by fetching an indicative quote.
    // For logging purposes.
    const extra = {
        cachedPortfolio,
        token,
        onchainQuantityCurrencyAmount,
    };
    const chainId = toTradingApiSupportedChainId(fromGraphQLChain(token.chain));
    if (!chainId) {
        logger.error(new Error('[ITBU] No `chainId` found'), {
            tags: {
                file: 'fetchOnChainBalances.ts',
                function: 'getDenominatedValue',
            },
            extra,
        });
        return undefined;
    }
    const universeChainId = fromGraphQLChain(token.chain);
    // Skip any unsupported chains
    if (!universeChainId) {
        return undefined;
    }
    const tokenAddress = (_a = token.address) !== null && _a !== void 0 ? _a : getNativeAddress(universeChainId);
    const stablecoinCurrency = (_b = STABLECOIN_AMOUNT_OUT[universeChainId]) === null || _b === void 0 ? void 0 : _b.currency;
    if (!stablecoinCurrency) {
        logger.error(new Error('[ITBU] No `stablecoinCurrency` found'), {
            tags: {
                file: 'fetchOnChainBalances.ts',
                function: 'getDenominatedValue',
            },
            extra,
        });
        return undefined;
    }
    const indicativeQuote = await fetchIndicativeQuote({
        type: TradeType.EXACT_INPUT,
        amount: onchainQuantityCurrencyAmount.quotient.toString(),
        tokenInChainId: chainId,
        tokenOutChainId: chainId,
        tokenIn: tokenAddress,
        tokenOut: stablecoinCurrency.address,
    });
    const amountOut = indicativeQuote === null || indicativeQuote === void 0 ? void 0 : indicativeQuote.output.amount;
    if (!amountOut) {
        return undefined;
    }
    const currencyAmountOut = getCurrencyAmount({
        value: amountOut,
        valueType: ValueType.Raw,
        currency: stablecoinCurrency,
    });
    return currencyAmountOut
        ? {
            value: parseFloat(currencyAmountOut.toFixed()),
            currency: 'USD',
        }
        : undefined;
}
function getInferredCachedDenominatedValue({ cachedPortfolio, token, onchainQuantityCurrencyAmount, }) {
    var _a, _b;
    const cachedTokenBalance = (_a = cachedPortfolio === null || cachedPortfolio === void 0 ? void 0 : cachedPortfolio.tokenBalances) === null || _a === void 0 ? void 0 : _a.find((balance) => { var _a, _b; return ((_a = balance === null || balance === void 0 ? void 0 : balance.token) === null || _a === void 0 ? void 0 : _a.address) === token.address && ((_b = balance === null || balance === void 0 ? void 0 : balance.token) === null || _b === void 0 ? void 0 : _b.chain) === token.chain; });
    if ((cachedTokenBalance === null || cachedTokenBalance === void 0 ? void 0 : cachedTokenBalance.denominatedValue) && cachedTokenBalance.quantity) {
        // If we have the cached USD quantity and USD value, we can use it to calculate the new USD value.
        const onchainQuantity = onchainQuantityCurrencyAmount.toExact();
        return {
            value: (cachedTokenBalance.denominatedValue.value * parseFloat(onchainQuantity)) / cachedTokenBalance.quantity,
            currency: (_b = cachedTokenBalance.denominatedValue.currency) !== null && _b !== void 0 ? _b : 'USD',
        };
    }
    return undefined;
}
async function fetchIndicativeQuote(params) {
    try {
        return await fetchTradingApiIndicativeQuoteIgnoring404({ params });
    }
    catch (error) {
        // We log any other errors, but we don't want to throw and instead just continue with an "N/A" value.
        logger.error(error, {
            tags: {
                file: 'fetchOnChainBalances.ts',
                function: 'getIndicativeQuote',
            },
            extra: {
                params,
            },
        });
        return undefined;
    }
}
//# sourceMappingURL=fetchOnChainBalances.js.map