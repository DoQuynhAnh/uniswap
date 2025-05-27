import { useTrmScreenQuery } from 'uniswap/src/data/apiClients/uniswapApi/useTrmScreenQuery';
import { ONE_MINUTE_MS } from 'utilities/src/time/time';
/** Returns TRM status for an address that has been passed in. */
export function useIsBlocked(address, isViewOnly = false) {
    const shouldSkip = !address || isViewOnly;
    const { data, isLoading } = useTrmScreenQuery({
        params: shouldSkip ? undefined : { address },
        staleTime: 5 * ONE_MINUTE_MS,
    });
    return {
        isBlocked: (data === null || data === void 0 ? void 0 : data.block) || false,
        isBlockedLoading: isLoading,
    };
}
//# sourceMappingURL=hooks.js.map