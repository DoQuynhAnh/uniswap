import { queryOptions } from '@tanstack/react-query';
import { ReactQueryCacheKey } from 'utilities/src/reactQuery/cache';
/**
 * [public] getIsMismatchAccountQueryOptions -- gets the query options for the mismatch account status for the current account
 * @param ctx - the context object: hasMismatch (callback)
 * @returns a function that returns the query options for the mismatch account status for the passed in address
 */
export const getIsMismatchAccountQueryOptions = (ctx) => (input) => {
    return queryOptions({
        queryKey: [ReactQueryCacheKey.MismatchAccount, input.address, input.chainId, ctx.isMainnet],
        queryFn: async () => {
            if (!input.address || !input.chainId) {
                return {
                    chainId: input.chainId,
                    hasMismatch: false,
                };
            }
            const hasMismatch = await ctx.hasMismatch({ address: input.address, chainId: input.chainId });
            const result = {
                chainId: input.chainId,
                hasMismatch,
            };
            return result;
        },
        enabled: !!input.address,
        refetchInterval: false,
        refetchOnWindowFocus: true,
        refetchOnMount: true,
        refetchOnReconnect: false,
        retry: false,
    });
};
//# sourceMappingURL=queryOptions.js.map