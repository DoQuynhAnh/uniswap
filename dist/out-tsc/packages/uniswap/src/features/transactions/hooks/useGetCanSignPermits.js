import { FeatureFlags } from 'uniswap/src/features/gating/flags';
import { useFeatureFlag } from 'uniswap/src/features/gating/hooks';
import { useHasAccountMismatchCallback } from 'uniswap/src/features/smartWallet/mismatch/hooks';
import { useEvent } from 'utilities/src/react/hooks';
export function useGetCanSignPermits() {
    const forceTrue = useFeatureFlag(FeatureFlags.ForcePermitTransactions);
    const mismatchUXEnabled = useFeatureFlag(FeatureFlags.EnablePermitMismatchUX);
    const getHasMismatch = useHasAccountMismatchCallback();
    return useEvent((chainId) => {
        return forceTrue || (getHasMismatch(chainId) && mismatchUXEnabled);
    });
}
//# sourceMappingURL=useGetCanSignPermits.js.map