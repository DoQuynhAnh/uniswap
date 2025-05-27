import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Flex, Text, isWeb } from 'ui/src';
import { Wrench } from 'ui/src/components/icons/Wrench';
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { useDeviceInsets } from 'ui/src/hooks/useDeviceInsets';
import { zIndexes } from 'ui/src/theme';
import { useEnabledChains } from 'uniswap/src/features/chains/hooks/useEnabledChains';
import { TESTNET_MODE_BANNER_HEIGHT } from 'uniswap/src/features/settings/hooks';
import { isInterface, isMobileApp } from 'utilities/src/platform';
export function TestnetModeBanner(props) {
    const { isTestnetModeEnabled } = useEnabledChains();
    const { t } = useTranslation();
    const { top } = useDeviceInsets();
    if (!isTestnetModeEnabled) {
        return null;
    }
    return (_jsxs(Flex, { row: true, centered: true, top: top, position: isMobileApp ? 'absolute' : 'relative', zIndex: zIndexes.fixed, width: isInterface ? 'auto' : '100%', p: "$padding12", gap: "$gap8", backgroundColor: "$statusSuccess2", borderWidth: isWeb ? '$none' : '$spacing1', borderBottomWidth: "$spacing1", height: TESTNET_MODE_BANNER_HEIGHT, borderStyle: "dashed", borderColor: "$surface3", ...props, children: [_jsx(Wrench, { color: "$statusSuccess", size: "$icon.20" }), _jsx(Text, { color: "$statusSuccess", variant: "body3", children: t('home.banner.testnetMode') })] }));
}
//# sourceMappingURL=TestnetModeBanner.js.map