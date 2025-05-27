import { DynamicConfigs, ForceUpgradeConfigKey } from 'uniswap/src/features/gating/configs';
import { useDynamicConfigValue } from 'uniswap/src/features/gating/hooks';
export function useForceUpgradeStatus() {
    return useDynamicConfigValue(DynamicConfigs.ForceUpgrade, ForceUpgradeConfigKey.Status, 'not-required');
}
//# sourceMappingURL=useForceUpgradeStatus.js.map