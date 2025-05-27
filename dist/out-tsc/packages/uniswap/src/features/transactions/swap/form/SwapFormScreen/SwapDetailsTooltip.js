import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Anchor, Separator as BaseSeparator, Flex, Text, UniswapXText, } from 'ui/src';
const Outer = ({ children, gap }) => {
    return (_jsx(Flex, { flexDirection: "column", gap: gap !== null && gap !== void 0 ? gap : '$spacing12', px: "$spacing12", width: 300, children: children }));
};
const Header = ({ title, Icon, iconColor, logo, }) => {
    return (_jsxs(Flex, { row: true, alignItems: "center", gap: "$spacing4", children: [logo, Icon && _jsx(Icon, { size: "$icon.16", color: iconColor }), title.uniswapX ? (_jsx(UniswapXText, { variant: "body3", children: title.title })) : (_jsx(Text, { variant: "body3", color: "$neutral1", children: title.title }))] }));
};
const Content = ({ children }) => {
    return (_jsx(Flex, { flexDirection: "column", gap: "$spacing4", position: "relative", children: children }));
};
const Row = ({ children }) => {
    return (_jsx(Flex, { row: true, justifyContent: "space-between", alignItems: "center", py: "$spacing4", children: children }));
};
const LineItemLabel = ({ label }) => {
    return (_jsx(Text, { variant: "body4", color: "$neutral2", children: label }));
};
const LineItemValue = ({ Icon, value, usdValue, iconColor, logo, }) => {
    return (_jsxs(Flex, { row: true, gap: "$spacing4", alignItems: "center", children: [logo, Icon && _jsx(Icon, { size: "$icon.16", color: iconColor !== null && iconColor !== void 0 ? iconColor : '$neutral2' }), _jsx(Text, { variant: "body4", color: "$neutral1", children: value !== null && value !== void 0 ? value : '-' }), usdValue && (_jsxs(Text, { variant: "body4", color: "$neutral2", children: ["(", usdValue, ")"] }))] }));
};
const Description = ({ text, learnMoreUrl }) => {
    const { t } = useTranslation();
    return (_jsxs(Flex, { gap: "$spacing4", children: [_jsx(Text, { variant: "body4", color: "$neutral2", alignSelf: "stretch", children: text }), learnMoreUrl && (_jsx(Anchor, { href: learnMoreUrl, rel: "noopener noreferrer", target: "_blank", textDecorationLine: "none", children: _jsx(Text, { variant: "buttonLabel4", color: "$neutral1", children: t('common.button.learn') }) }))] }));
};
const Separator = () => {
    return _jsx(BaseSeparator, { borderColor: "$surface3" });
};
export { Content, Description, Header, LineItemLabel, LineItemValue, Outer, Row, Separator };
//# sourceMappingURL=SwapDetailsTooltip.js.map