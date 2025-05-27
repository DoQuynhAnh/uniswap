import { DynamicConfigs, ForceUpgradeConfigKey } from 'uniswap/src/features/gating/configs';
import { useDynamicConfigValue } from 'uniswap/src/features/gating/hooks';
export function useForceUpgradeTranslations() {
    return useDynamicConfigValue(DynamicConfigs.ForceUpgrade, ForceUpgradeConfigKey.Translations, {});
}
//# sourceMappingURL=useForceUpgradeTranslations.js.map