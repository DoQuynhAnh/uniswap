import { createQueryOptions, useInfiniteQuery, useQuery } from '@connectrpc/connect-query';
import { keepPreviousData, useQueries, } from '@tanstack/react-query';
import { getPosition, listPositions } from '@uniswap/client-pools/dist/pools/v1/api-PoolsService_connectquery';
import { ProtocolVersion } from '@uniswap/client-pools/dist/pools/v1/types_pb';
import { Pair } from '@uniswap/v2-sdk';
import { useMemo } from 'react';
import { uniswapGetTransport } from 'uniswap/src/data/rest/base';
import { deserializeToken } from 'uniswap/src/utils/currency';
export function useGetPositionsQuery(input, disabled) {
    return useQuery(listPositions, input, {
        transport: uniswapGetTransport,
        enabled: !!input && !disabled,
        placeholderData: keepPreviousData,
    });
}
export function useGetPositionsInfiniteQuery(input, disabled) {
    return useInfiniteQuery(listPositions, input, {
        transport: uniswapGetTransport,
        enabled: !!input && !disabled,
        pageParamKey: 'pageToken',
        getNextPageParam: (lastPage) => lastPage.nextPageToken,
        placeholderData: keepPreviousData,
    });
}
export function useGetPositionsForPairs(serializedPairs, account) {
    const positionsQueryOptions = useMemo(() => {
        return Object.keys(serializedPairs || {})
            .flatMap((chainId) => {
            const pairsForChain = serializedPairs[Number(chainId)];
            if (!pairsForChain) {
                return [];
            }
            return Object.keys(pairsForChain).map((pairId) => {
                const pair = pairsForChain[pairId];
                if (!pair) {
                    return undefined;
                }
                const [token0, token1] = [deserializeToken(pair.token0), deserializeToken(pair.token1)];
                const pairAddress = Pair.getAddress(token0, token1);
                return createQueryOptions(getPosition, account
                    ? {
                        chainId: Number(chainId),
                        protocolVersion: ProtocolVersion.V2,
                        pairAddress,
                        owner: account,
                    }
                    : undefined, { transport: uniswapGetTransport });
            });
        })
            .filter(isDefined);
    }, [serializedPairs, account]);
    return useQueries({
        queries: positionsQueryOptions,
    });
}
function isDefined(value) {
    return value !== undefined;
}
//# sourceMappingURL=getPositions.js.map