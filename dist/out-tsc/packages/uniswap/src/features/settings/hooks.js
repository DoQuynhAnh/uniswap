import { useSelector } from 'react-redux';
import { useEnabledChains } from 'uniswap/src/features/chains/hooks/useEnabledChains';
import { 
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
selectIsTestnetModeEnabled, selectWalletHideSmallBalancesSetting, selectWalletHideSpamTokensSetting, } from 'uniswap/src/features/settings/selectors';
import { isMobileApp } from 'utilities/src/platform';
export function useHideSmallBalancesSetting() {
    const { isTestnetModeEnabled } = useEnabledChains();
    return useSelector(selectWalletHideSmallBalancesSetting) && !isTestnetModeEnabled;
}
export function useHideSpamTokensSetting() {
    return useSelector(selectWalletHideSpamTokensSetting);
}
export const TESTNET_MODE_BANNER_HEIGHT = 44;
function useIsTestnetModeEnabled() {
    return useSelector(selectIsTestnetModeEnabled);
}
/**
 * Use to account for an inset when `useAppInsets()` is not available
 *
 * @returns The height of the testnet mode banner if testnet mode is enabled, otherwise 0
 */
export function useTestnetModeBannerHeight() {
    const isTestnetModeEnabled = useIsTestnetModeEnabled();
    return isTestnetModeEnabled && isMobileApp ? TESTNET_MODE_BANNER_HEIGHT : 0;
}
//# sourceMappingURL=hooks.js.map