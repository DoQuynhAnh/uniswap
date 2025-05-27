/* eslint-disable max-lines */
import { useApolloClient } from '@apollo/client';
import isEqual from 'lodash/isEqual';
import { useCallback, useMemo } from 'react';
import { PortfolioBalancesDocument, 
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
usePortfolioBalancesQuery, } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
import { SpamCode } from 'uniswap/src/data/types';
import { useEnabledChains } from 'uniswap/src/features/chains/hooks/useEnabledChains';
import { fromGraphQLChain } from 'uniswap/src/features/chains/utils';
import { buildCurrency, buildCurrencyInfo, currencyIdToContractInput, getCurrencySafetyInfo, sortByName, usePersistedError, } from 'uniswap/src/features/dataApi/utils';
import { useHideSmallBalancesSetting, useHideSpamTokensSetting } from 'uniswap/src/features/settings/hooks';
import { NativeCurrency } from 'uniswap/src/features/tokens/NativeCurrency';
import { useCurrencyIdToVisibility } from 'uniswap/src/features/transactions/selectors';
import { currencyId } from 'uniswap/src/utils/currencyId';
import { usePlatformBasedFetchPolicy } from 'uniswap/src/utils/usePlatformBasedFetchPolicy';
import { logger } from 'utilities/src/logger/logger';
/**
 * Returns all balances indexed by checksummed currencyId for a given address
 * @param address
 * @param queryOptions.pollInterval optional `PollingInterval` representing polling frequency.
 *  If undefined, will query once and not poll.
 * NOTE:
 *  on TokenDetails, useBalances relies rely on usePortfolioBalances but don't need polling versions of it.
 *  Including polling was causing multiple polling intervals to be kicked off with usePortfolioBalances.
 *  Same with on Token Selector's TokenSearchResultList, since the home screen has a usePortfolioBalances polling hook,
 *  we don't need to duplicate the polling interval when token selector is open
 * @param queryOptions - QueryHookOptions type for usePortfolioBalancesQuery to be set if not already set internally.
 */
export function usePortfolioBalances({ address, ...queryOptions }) {
    var _a, _b;
    const { fetchPolicy: internalFetchPolicy, pollInterval: internalPollInterval } = usePlatformBasedFetchPolicy({
        fetchPolicy: queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.fetchPolicy,
        pollInterval: queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.pollInterval,
    });
    const valueModifiers = usePortfolioValueModifiers(address);
    const { gqlChains } = useEnabledChains();
    const { data: balancesData, loading, networkStatus, refetch, error, } = usePortfolioBalancesQuery({
        ...queryOptions,
        fetchPolicy: internalFetchPolicy,
        notifyOnNetworkStatusChange: true,
        pollInterval: internalPollInterval,
        variables: address ? { ownerAddress: address, valueModifiers, chains: gqlChains } : undefined,
        skip: !address || (queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.skip),
        // Prevents wiping out the cache with partial data on error.
        errorPolicy: 'none',
    });
    const persistedError = usePersistedError(loading, error);
    const balancesForAddress = (_b = (_a = balancesData === null || balancesData === void 0 ? void 0 : balancesData.portfolios) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.tokenBalances;
    const formattedData = useMemo(() => {
        if (!balancesForAddress) {
            return undefined;
        }
        const byId = {};
        balancesForAddress.forEach((balance) => {
            var _a;
            if (!balance) {
                return;
            }
            const { __typename: tokenBalanceType, id: tokenBalanceId, denominatedValue, token, tokenProjectMarket, quantity, isHidden, } = balance;
            // require all of these fields to be defined
            if (!quantity || !token) {
                return;
            }
            const { name, address: tokenAddress, chain, decimals, symbol, project, feeData, protectionInfo } = token;
            const { logoUrl, isSpam, safetyLevel, spamCode } = project || {};
            const chainId = fromGraphQLChain(chain);
            const currency = buildCurrency({
                chainId,
                address: tokenAddress,
                decimals,
                symbol,
                name,
                buyFeeBps: feeData === null || feeData === void 0 ? void 0 : feeData.buyFeeBps,
                sellFeeBps: feeData === null || feeData === void 0 ? void 0 : feeData.sellFeeBps,
            });
            if (!currency) {
                return;
            }
            const id = currencyId(currency);
            const currencyInfo = buildCurrencyInfo({
                currency,
                currencyId: id,
                logoUrl,
                isSpam,
                safetyInfo: getCurrencySafetyInfo(safetyLevel, protectionInfo),
                spamCode,
            });
            const portfolioBalance = buildPortfolioBalance({
                id: tokenBalanceId,
                cacheId: `${tokenBalanceType}:${tokenBalanceId}`,
                quantity,
                balanceUSD: denominatedValue === null || denominatedValue === void 0 ? void 0 : denominatedValue.value,
                currencyInfo,
                relativeChange24: (_a = tokenProjectMarket === null || tokenProjectMarket === void 0 ? void 0 : tokenProjectMarket.relativeChange24) === null || _a === void 0 ? void 0 : _a.value,
                isHidden,
            });
            byId[id] = portfolioBalance;
        });
        return byId;
    }, [balancesForAddress]);
    const retry = useCallback(() => refetch({ ownerAddress: address, valueModifiers }), [address, valueModifiers, refetch]);
    return {
        data: formattedData,
        loading,
        networkStatus,
        refetch: retry,
        error: persistedError,
    };
}
const PORTFOLIO_BALANCE_CACHE = new Map();
function buildPortfolioBalance(args) {
    const cachedPortfolioBalance = PORTFOLIO_BALANCE_CACHE.get(args.cacheId);
    if (cachedPortfolioBalance && isEqual(cachedPortfolioBalance, args)) {
        // This allows us to better memoize components that use a `portfolioBalance` as a dependency.
        return cachedPortfolioBalance;
    }
    PORTFOLIO_BALANCE_CACHE.set(args.cacheId, args);
    return args;
}
export function usePortfolioTotalValue({ address, pollInterval, onCompleted, fetchPolicy, }) {
    var _a;
    const { fetchPolicy: internalFetchPolicy, pollInterval: internalPollInterval } = usePlatformBasedFetchPolicy({
        fetchPolicy,
        pollInterval,
    });
    const valueModifiers = usePortfolioValueModifiers(address);
    const { gqlChains } = useEnabledChains();
    const { data: balancesData, loading, networkStatus, refetch, error, } = usePortfolioBalancesQuery({
        fetchPolicy: internalFetchPolicy,
        notifyOnNetworkStatusChange: true,
        onCompleted,
        pollInterval: internalPollInterval,
        variables: address ? { ownerAddress: address, valueModifiers, chains: gqlChains } : undefined,
        skip: !address,
        // Prevents wiping out the cache with partial data on error.
        errorPolicy: 'none',
    });
    const persistedError = usePersistedError(loading, error);
    const portfolioForAddress = (_a = balancesData === null || balancesData === void 0 ? void 0 : balancesData.portfolios) === null || _a === void 0 ? void 0 : _a[0];
    const formattedData = useMemo(() => {
        var _a, _b, _c, _d, _e;
        if (!portfolioForAddress) {
            return undefined;
        }
        return {
            balanceUSD: (_a = portfolioForAddress === null || portfolioForAddress === void 0 ? void 0 : portfolioForAddress.tokensTotalDenominatedValue) === null || _a === void 0 ? void 0 : _a.value,
            percentChange: (_c = (_b = portfolioForAddress === null || portfolioForAddress === void 0 ? void 0 : portfolioForAddress.tokensTotalDenominatedValueChange) === null || _b === void 0 ? void 0 : _b.percentage) === null || _c === void 0 ? void 0 : _c.value,
            absoluteChangeUSD: (_e = (_d = portfolioForAddress === null || portfolioForAddress === void 0 ? void 0 : portfolioForAddress.tokensTotalDenominatedValueChange) === null || _d === void 0 ? void 0 : _d.absolute) === null || _e === void 0 ? void 0 : _e.value,
        };
    }, [portfolioForAddress]);
    const retry = useCallback(() => refetch({ ownerAddress: address, valueModifiers }), [address, valueModifiers, refetch]);
    return {
        data: formattedData,
        loading,
        networkStatus,
        refetch: retry,
        error: persistedError,
    };
}
export function usePortfolioValueModifiers(addresses) {
    // Memoize array creation if passed a string to avoid recomputing at every render
    const addressArray = useMemo(() => (!addresses ? [] : Array.isArray(addresses) ? addresses : [addresses]), [addresses]);
    const currencyIdToTokenVisibility = useCurrencyIdToVisibility(addressArray);
    const hideSpamTokens = useHideSpamTokensSetting();
    const hideSmallBalances = useHideSmallBalancesSetting();
    const modifiers = useMemo(() => {
        const { tokenIncludeOverrides, tokenExcludeOverrides } = Object.entries(currencyIdToTokenVisibility).reduce((acc, [key, tokenVisibility]) => {
            const contractInput = currencyIdToContractInput(key);
            if (tokenVisibility.isVisible) {
                acc.tokenIncludeOverrides.push(contractInput);
            }
            else {
                acc.tokenExcludeOverrides.push(contractInput);
            }
            return acc;
        }, {
            tokenIncludeOverrides: [],
            tokenExcludeOverrides: [],
        });
        return addressArray.map((addr) => ({
            ownerAddress: addr,
            tokenIncludeOverrides,
            tokenExcludeOverrides,
            includeSmallBalances: !hideSmallBalances,
            includeSpamTokens: !hideSpamTokens,
        }));
    }, [addressArray, currencyIdToTokenVisibility, hideSmallBalances, hideSpamTokens]);
    return modifiers.length > 0 ? modifiers : undefined;
}
/**
 * Returns NativeCurrency with highest balance.
 *
 * @param address to get portfolio balances for
 * @param chainId if present will only return the NativeCurrency with the highest balance for the given chainId
 * @returns CurrencyId of the NativeCurrency with highest balance, or the native address for the given chainId
 *          (or defaultChainId if no chainId is provided) when no highest balance is found
 *
 */
export function useHighestBalanceNativeCurrencyId(address, chainId) {
    var _a;
    const { data } = useSortedPortfolioBalances({ address });
    const { defaultChainId } = useEnabledChains();
    const highestBalance = (_a = data === null || data === void 0 ? void 0 : data.balances.find((balance) => balance.currencyInfo.currency.isNative && (!chainId || balance.currencyInfo.currency.chainId === chainId))) === null || _a === void 0 ? void 0 : _a.currencyInfo.currencyId;
    if (highestBalance) {
        return highestBalance;
    }
    // If no highest balance is found, return native address for the given chainId or defaultChainId
    const targetChainId = chainId !== null && chainId !== void 0 ? chainId : defaultChainId;
    const nativeCurrency = NativeCurrency.onChain(targetChainId);
    return currencyId(nativeCurrency);
}
/**
 * Custom hook to group Token Balances fetched from API to shown and hidden.
 *
 * @param balancesById - An object where keys are token ids and values are the corresponding balances. May be undefined.
 *
 * @returns {object} An object containing two fields:
 *  - `shownTokens`: shown tokens.
 *  - `hiddenTokens`: hidden tokens.
 *
 * @example
 * const { shownTokens, hiddenTokens } = useTokenBalancesGroupedByVisibility({ balancesById });
 */
export function useTokenBalancesGroupedByVisibility({ balancesById, }) {
    const { isTestnetModeEnabled } = useEnabledChains();
    return useMemo(() => {
        if (!balancesById) {
            return { shownTokens: undefined, hiddenTokens: undefined };
        }
        const { shown, hidden } = Object.values(balancesById).reduce((acc, balance) => {
            const isTokenHidden = isTestnetModeEnabled
                ? (balance.currencyInfo.spamCode || SpamCode.LOW) >= SpamCode.HIGH
                : balance.isHidden;
            if (isTokenHidden) {
                acc.hidden.push(balance);
            }
            else {
                acc.shown.push(balance);
            }
            return acc;
        }, { shown: [], hidden: [] });
        return {
            shownTokens: shown.length ? shown : undefined,
            hiddenTokens: hidden.length ? hidden : undefined,
        };
    }, [balancesById, isTestnetModeEnabled]);
}
/**
 * Returns portfolio balances for a given address sorted by USD value.
 *
 * @param address to get portfolio balances for
 * @param pollInterval optional polling interval for auto refresh.
 *    If undefined, query will run only once.
 * @param onCompleted callback
 * @returns SortedPortfolioBalances object with `balances` and `hiddenBalances`
 */
export function useSortedPortfolioBalances({ address, pollInterval, onCompleted, }) {
    const { isTestnetModeEnabled } = useEnabledChains();
    // Fetch all balances including small balances and spam tokens because we want to return those in separate arrays
    const { data: balancesById, loading, networkStatus, refetch, } = usePortfolioBalances({
        address,
        pollInterval,
        onCompleted,
        fetchPolicy: 'cache-and-network',
    });
    const { shownTokens, hiddenTokens } = useTokenBalancesGroupedByVisibility({ balancesById });
    return {
        data: {
            balances: sortPortfolioBalances({ balances: shownTokens || [], isTestnetModeEnabled }),
            hiddenBalances: sortPortfolioBalances({ balances: hiddenTokens || [], isTestnetModeEnabled }),
        },
        loading,
        networkStatus,
        refetch,
    };
}
/**
 * Helper function to stable sort balances by descending balanceUSD – or native balance tokens in testnet mode –
 * followed by all other tokens sorted alphabetically
 * */
export function sortPortfolioBalances({ balances, isTestnetModeEnabled, }) {
    if (isTestnetModeEnabled) {
        const sortedNativeBalances = balances
            .filter((b) => b.currencyInfo.currency.isNative)
            .sort((a, b) => b.quantity - a.quantity);
        const sortedNonNativeBalances = sortByName(balances.filter((b) => !b.currencyInfo.currency.isNative));
        return [...sortedNativeBalances, ...sortedNonNativeBalances];
    }
    const balancesWithUSDValue = balances.filter((b) => b.balanceUSD);
    const balancesWithoutUSDValue = balances.filter((b) => !b.balanceUSD);
    return [
        ...balancesWithUSDValue.sort((a, b) => {
            if (!a.balanceUSD) {
                return 1;
            }
            if (!b.balanceUSD) {
                return -1;
            }
            return b.balanceUSD - a.balanceUSD;
        }),
        ...sortByName(balancesWithoutUSDValue),
    ];
}
/**
 * Creates a function to update the Apollo cache when a token is shown or hidden.
 * We manually modify the cache to avoid having to wait for the server's response,
 * so that the change is immediately reflected in the UI.
 *
 * @param address active wallet address
 * @returns a `PortfolioCacheUpdater` function that will update the Apollo cache
 */
export function usePortfolioCacheUpdater(address) {
    const apolloClient = useApolloClient();
    const { gqlChains } = useEnabledChains();
    const updater = useCallback((hidden, portfolioBalance) => {
        var _a, _b;
        if (!portfolioBalance) {
            return;
        }
        const cachedPortfolio = (_b = (_a = apolloClient.readQuery({
            query: PortfolioBalancesDocument,
            variables: {
                ownerAddress: address,
                chains: gqlChains,
            },
        })) === null || _a === void 0 ? void 0 : _a.portfolios) === null || _b === void 0 ? void 0 : _b[0];
        if (!cachedPortfolio) {
            return;
        }
        apolloClient.cache.modify({
            id: portfolioBalance.cacheId,
            fields: {
                isHidden() {
                    return hidden;
                },
            },
        });
        apolloClient.cache.modify({
            id: apolloClient.cache.identify(cachedPortfolio),
            fields: {
                tokensTotalDenominatedValue(amount, { isReference }) {
                    if (isReference(amount)) {
                        // I don't think this should ever happen, but this is required to keep TS happy after upgrading to @apollo/client > 3.8.
                        logger.error(new Error('Unable to modify cache for `tokensTotalDenominatedValue`'), {
                            tags: {
                                file: 'balances.ts',
                                function: 'usePortfolioCacheUpdater',
                            },
                            extra: {
                                portfolioId: apolloClient.cache.identify(cachedPortfolio),
                            },
                        });
                        return amount;
                    }
                    const newValue = portfolioBalance.balanceUSD
                        ? hidden
                            ? amount.value - portfolioBalance.balanceUSD
                            : amount.value + portfolioBalance.balanceUSD
                        : amount.value;
                    return { ...amount, value: newValue };
                },
            },
        });
    }, [apolloClient, address, gqlChains]);
    return updater;
}
//# sourceMappingURL=balances.js.map