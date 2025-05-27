import { skipToken } from '@tanstack/react-query';
import { uniswapUrls } from 'uniswap/src/constants/urls';
import { useQueryWithImmediateGarbageCollection } from 'uniswap/src/data/apiClients/hooks/useQueryWithImmediateGarbageCollection';
import { createFetchGasFee } from 'uniswap/src/data/apiClients/uniswapApi/UniswapApiClient';
import { useActiveGasStrategy, useShadowGasStrategies } from 'uniswap/src/features/gas/hooks';
import { useEvent } from 'utilities/src/react/hooks';
import { ReactQueryCacheKey } from 'utilities/src/reactQuery/cache';
export function useGasFeeQuery({ params, ...rest }) {
    const activeGasStrategy = useActiveGasStrategy(params === null || params === void 0 ? void 0 : params.tx.chainId, 'general');
    const shadowGasStrategies = useShadowGasStrategies(params === null || params === void 0 ? void 0 : params.tx.chainId, 'general');
    const fetchGasFee = useEvent(createFetchGasFee({ activeGasStrategy, shadowGasStrategies }));
    const queryKey = [ReactQueryCacheKey.UniswapApi, uniswapUrls.gasServicePath, params];
    return useQueryWithImmediateGarbageCollection({
        queryKey,
        queryFn: params ? () => fetchGasFee(params) : skipToken,
        ...rest,
    });
}
//# sourceMappingURL=useGasFeeQuery.js.map