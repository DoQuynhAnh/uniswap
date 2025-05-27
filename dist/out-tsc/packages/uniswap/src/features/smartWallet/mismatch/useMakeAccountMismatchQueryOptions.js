import { useCallback, useMemo } from 'react';
import { useMismatchContext } from 'uniswap/src/features/smartWallet/mismatch/MismatchContext';
import { getIsMismatchAccountQueryOptions, } from 'uniswap/src/features/smartWallet/mismatch/queryOptions';
/**
 * [public] useMakeAccountMismatchQueryOptions -- gets the query options for the mismatch account status for the current account
 * @returns a function that returns the query options for the mismatch account status for the passed in address
 */
export function useMakeAccountMismatchQueryOptions(ctx) {
    const { isTestnetModeEnabled, defaultChainId } = useMismatchContext();
    const getQueryOptions = useMemo(() => getIsMismatchAccountQueryOptions({ hasMismatch: ctx.hasMismatch, isMainnet: !isTestnetModeEnabled }), [ctx.hasMismatch, isTestnetModeEnabled]);
    return useCallback((chainId) => {
        var _a;
        return getQueryOptions({
            address: ctx.account.address,
            chainId: (_a = chainId !== null && chainId !== void 0 ? chainId : ctx.account.chainId) !== null && _a !== void 0 ? _a : defaultChainId,
        });
    }, [ctx.account.address, ctx.account.chainId, defaultChainId, getQueryOptions]);
}
//# sourceMappingURL=useMakeAccountMismatchQueryOptions.js.map