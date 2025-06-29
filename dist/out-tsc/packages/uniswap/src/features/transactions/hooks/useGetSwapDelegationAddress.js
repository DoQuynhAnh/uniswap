import { FeatureFlags } from 'uniswap/src/features/gating/flags';
import { useFeatureFlag } from 'uniswap/src/features/gating/hooks';
import { useEvent } from 'utilities/src/react/hooks';
export function useGetSwapDelegationAddress() {
    const smartWalletEnabled = useFeatureFlag(FeatureFlags.SmartWallet);
    const swap7702Disabled = useFeatureFlag(FeatureFlags.DisableSwap7702);
    return useEvent((_chainId) => {
        if (smartWalletEnabled && !swap7702Disabled) {
            return '0x227380efd3392EC33cf148Ade5e0a89D33121814'; // TODO: Implement
        }
        return undefined;
    });
}
//# sourceMappingURL=useGetSwapDelegationAddress.js.map