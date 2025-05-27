import { ApolloError } from '@apollo/client';
import { useMemo } from 'react';
import { OnchainItemListOptionType } from 'uniswap/src/components/lists/items/types';
import { BRIDGED_BASE_ADDRESSES } from 'uniswap/src/constants/addresses';
import { useTokenProjects } from 'uniswap/src/features/dataApi/tokenProjects';
import { usePersistedError } from 'uniswap/src/features/dataApi/utils';
import { areAddressesEqual } from 'uniswap/src/utils/addresses';
export function useCurrencies(currencyIds) {
    const { data: baseCurrencyInfos, loading, error, refetch } = useTokenProjects(currencyIds);
    const persistedError = usePersistedError(loading, error instanceof ApolloError ? error : undefined);
    // TokenProjects returns tokens on every network, so filter out native assets that have a
    // bridged version on other networks
    const filteredBaseCurrencyInfos = useMemo(() => {
        return baseCurrencyInfos === null || baseCurrencyInfos === void 0 ? void 0 : baseCurrencyInfos.filter((currencyInfo) => {
            if (currencyInfo.currency.isNative) {
                return true;
            }
            const { address } = currencyInfo.currency;
            const bridgedAsset = BRIDGED_BASE_ADDRESSES.find((bridgedAddress) => areAddressesEqual(bridgedAddress, address));
            if (!bridgedAsset) {
                return true;
            }
            return false;
        });
    }, [baseCurrencyInfos]);
    return { data: filteredBaseCurrencyInfos, loading, error: persistedError, refetch };
}
export function currencyInfosToTokenOptions(currencyInfos) {
    return currencyInfos === null || currencyInfos === void 0 ? void 0 : currencyInfos.filter((cI) => Boolean(cI)).map((currencyInfo) => ({
        type: OnchainItemListOptionType.Token,
        currencyInfo,
        quantity: null,
        balanceUSD: undefined,
    }));
}
export function createEmptyBalanceOption(currencyInfo) {
    return {
        type: OnchainItemListOptionType.Token,
        currencyInfo,
        balanceUSD: null,
        quantity: null,
    };
}
export function useCurrencyInfosToTokenOptions({ currencyInfos, portfolioBalancesById, sortAlphabetically, }) {
    // we use useMemo here to avoid recalculation of internals when function params are the same,
    // but the component, where this hook is used is re-rendered
    return useMemo(() => {
        if (!currencyInfos) {
            return undefined;
        }
        const sortedCurrencyInfos = sortAlphabetically
            ? [...currencyInfos].sort((a, b) => {
                if (a.currency.name && b.currency.name) {
                    return a.currency.name.localeCompare(b.currency.name);
                }
                return 0;
            })
            : currencyInfos;
        return sortedCurrencyInfos.map((currencyInfo) => {
            const portfolioBalance = portfolioBalancesById === null || portfolioBalancesById === void 0 ? void 0 : portfolioBalancesById[currencyInfo.currencyId.toLowerCase()];
            return portfolioBalance
                ? { type: OnchainItemListOptionType.Token, ...portfolioBalance }
                : createEmptyBalanceOption(currencyInfo);
        });
    }, [currencyInfos, portfolioBalancesById, sortAlphabetically]);
}
//# sourceMappingURL=useCurrencyInfosToTokenOptions.js.map