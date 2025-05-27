import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { ElementAfterText, Flex, Text, isWeb } from 'ui/src';
import { CheckmarkCircle } from 'ui/src/components/icons/CheckmarkCircle';
import { iconSizes } from 'ui/src/theme';
import { NetworkLogo } from 'uniswap/src/components/CurrencyLogo/NetworkLogo';
import { NewTag } from 'uniswap/src/components/pill/NewTag';
import { getChainInfo } from 'uniswap/src/features/chains/chainInfo';
const NETWORK_OPTION_ICON_SIZE = iconSizes.icon24;
const OPTION_GAP = isWeb ? '$spacing8' : '$spacing6';
export function NetworkOption({ chainId, currentlySelected, isNew, }) {
    const { t } = useTranslation();
    const info = chainId && getChainInfo(chainId);
    let content = null;
    if (!(info === null || info === void 0 ? void 0 : info.label)) {
        content = (_jsxs(Flex, { row: true, gap: "$spacing12", children: [_jsx(NetworkLogo, { chainId: null, size: NETWORK_OPTION_ICON_SIZE }), _jsx(Text, { color: "$neutral1", variant: "body2", children: t('transaction.network.all') })] }));
    }
    else {
        content = (_jsxs(Flex, { row: true, gap: "$spacing12", children: [(chainId && _jsx(NetworkLogo, { chainId: chainId, size: NETWORK_OPTION_ICON_SIZE })) || (_jsx(Flex, { width: NETWORK_OPTION_ICON_SIZE })), _jsx(ElementAfterText, { element: isNew ? _jsx(NewTag, { ml: OPTION_GAP }) : undefined, text: info.label, textProps: { color: '$neutral1', variant: 'body2' } })] }));
    }
    return (_jsxs(Flex, { row: true, alignItems: "center", justifyContent: "space-between", px: "$spacing8", py: 10, children: [content, _jsx(Flex, { centered: true, height: NETWORK_OPTION_ICON_SIZE, width: NETWORK_OPTION_ICON_SIZE, children: currentlySelected && _jsx(CheckmarkCircle, { color: "$neutral1", ml: OPTION_GAP, size: "$icon.20" }) })] }));
}
//# sourceMappingURL=NetworkOption.js.map