import { useMemo } from 'react';
import { getCommonBase } from 'uniswap/src/constants/routing';
import { useTokenQuery, useTokensQuery } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
import { currencyIdToContractInput, gqlTokenToCurrencyInfo } from 'uniswap/src/features/dataApi/utils';
import { buildNativeCurrencyId, buildWrappedNativeCurrencyId, currencyIdToAddress, currencyIdToChain, isNativeCurrencyAddress, } from 'uniswap/src/utils/currencyId';
export function useCurrencyInfo(_currencyId, options) {
    const { data } = useTokenQuery({
        variables: currencyIdToContractInput(_currencyId !== null && _currencyId !== void 0 ? _currencyId : ''),
        skip: !_currencyId || (options === null || options === void 0 ? void 0 : options.skip),
        fetchPolicy: (options === null || options === void 0 ? void 0 : options.refetch) ? 'cache-and-network' : 'cache-first',
    });
    return useMemo(() => {
        var _a, _b;
        if (!_currencyId) {
            return undefined;
        }
        const chainId = currencyIdToChain(_currencyId);
        let address;
        try {
            address = currencyIdToAddress(_currencyId);
        }
        catch (error) {
            return undefined;
        }
        if (chainId && address) {
            const commonBase = getCommonBase(chainId, isNativeCurrencyAddress(chainId, address), address);
            if (commonBase) {
                // Creating new object to avoid error "Cannot assign to read only property"
                const copyCommonBase = { ...commonBase };
                // Related to TODO(WEB-5111)
                // Some common base images are broken so this'll ensure we read from uniswap images
                if ((_b = (_a = data === null || data === void 0 ? void 0 : data.token) === null || _a === void 0 ? void 0 : _a.project) === null || _b === void 0 ? void 0 : _b.logoUrl) {
                    copyCommonBase.logoUrl = data.token.project.logoUrl;
                }
                copyCommonBase.currencyId = _currencyId;
                return copyCommonBase;
            }
        }
        return (data === null || data === void 0 ? void 0 : data.token) && gqlTokenToCurrencyInfo(data.token);
    }, [_currencyId, data === null || data === void 0 ? void 0 : data.token]);
}
export function useCurrencyInfos(_currencyIds, options) {
    const { data } = useTokensQuery({
        variables: {
            contracts: _currencyIds.map(currencyIdToContractInput),
        },
        skip: !_currencyIds.length || (options === null || options === void 0 ? void 0 : options.skip),
        fetchPolicy: (options === null || options === void 0 ? void 0 : options.refetch) ? 'cache-and-network' : 'cache-first',
    });
    return useMemo(() => {
        var _a, _b;
        return (_b = (_a = data === null || data === void 0 ? void 0 : data.tokens) === null || _a === void 0 ? void 0 : _a.map((token) => token && gqlTokenToCurrencyInfo(token))) !== null && _b !== void 0 ? _b : [];
    }, [data]);
}
export function useNativeCurrencyInfo(chainId) {
    const nativeCurrencyId = buildNativeCurrencyId(chainId);
    return useCurrencyInfo(nativeCurrencyId);
}
export function useWrappedNativeCurrencyInfo(chainId) {
    const wrappedCurrencyId = buildWrappedNativeCurrencyId(chainId);
    return useCurrencyInfo(wrappedCurrencyId);
}
//# sourceMappingURL=useCurrencyInfo.js.map