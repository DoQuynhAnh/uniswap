import { jsx as _jsx } from "react/jsx-runtime";
import { iconSizes } from 'ui/src/theme';
import { NetworkLogo } from 'uniswap/src/components/CurrencyLogo/NetworkLogo';
import { Pill } from 'uniswap/src/components/pill/Pill';
import { getChainLabel } from 'uniswap/src/features/chains/utils';
import { useNetworkColors } from 'uniswap/src/utils/colors';
export function NetworkPill({ chainId, showBackgroundColor = true, showBorder, showIcon = false, iconSize = iconSizes.icon16, ...rest }) {
    const label = getChainLabel(chainId);
    const colors = useNetworkColors(chainId);
    return (_jsx(Pill, { customBackgroundColor: showBackgroundColor ? colors === null || colors === void 0 ? void 0 : colors.background : undefined, customBorderColor: showBorder ? colors.foreground : 'transparent', foregroundColor: colors.foreground, icon: showIcon ? _jsx(NetworkLogo, { chainId: chainId, size: iconSize }) : null, label: label, ...rest }));
}
export function InlineNetworkPill(props) {
    return _jsx(NetworkPill, { borderRadius: "$rounded8", px: "$spacing4", py: "$none", textVariant: "buttonLabel3", ...props });
}
//# sourceMappingURL=NetworkPill.js.map