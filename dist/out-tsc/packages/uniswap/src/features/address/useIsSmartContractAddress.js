import { queryOptions, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useProvider } from 'uniswap/src/contexts/UniswapContext';
import { isDelegatedEOA } from 'uniswap/src/features/smartWallet/delegation/isDelegatedEOA';
import { ensure0xHex } from 'uniswap/src/utils/hex';
import { ReactQueryCacheKey } from 'utilities/src/reactQuery/cache';
export function useIsSmartContractAddress(address, chainId) {
    var _a;
    const provider = useProvider(chainId);
    const getQueryOptions = useMemo(() => createGetQueryOptions({ provider }), [provider]);
    const { data, isLoading } = useQuery(getQueryOptions({ address, chainId }));
    return {
        isSmartContractAddress: (_a = data === null || data === void 0 ? void 0 : data.isSmartContractAddress) !== null && _a !== void 0 ? _a : false,
        loading: isLoading,
    };
}
const createGetQueryOptions = (ctx) => {
    return (input) => queryOptions({
        queryKey: [ReactQueryCacheKey.IsSmartContractAddress, input.address, input.chainId],
        queryFn: async () => {
            var _a;
            if (!input.address) {
                return null;
            }
            const result = await ((_a = ctx.provider) === null || _a === void 0 ? void 0 : _a.getCode(input.address));
            return result !== null && result !== void 0 ? result : null;
        },
        enabled: !!input.address,
        select: selectIsSmartContractAddress,
        refetchInterval: false,
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        refetchOnReconnect: false,
    });
};
function selectIsSmartContractAddress(bytecode) {
    // provider.getCode(address) will return a hex string if a smart contract is deployed at that address
    // returning just 0x means there's no code and it's not a smart contract
    if (!bytecode || bytecode === '0x') {
        return {
            isSmartContractAddress: false,
            isDelegatedAddress: false,
        };
    }
    const result = isDelegatedEOA({ bytecode: ensure0xHex(bytecode) });
    return {
        isSmartContractAddress: !result.isDelegated,
        isDelegatedAddress: result.isDelegated,
    };
}
//# sourceMappingURL=useIsSmartContractAddress.js.map