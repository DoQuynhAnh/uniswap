import { jsx as _jsx } from "react/jsx-runtime";
import { Flex } from 'ui/src';
import { getWarningIcon, getWarningIconColors, safetyLevelToWarningSeverity, } from 'uniswap/src/components/warnings/utils';
export default function WarningIcon({ safetyLevel, severity, strokeColorOverride, heroIcon, inModal, ...rest }) {
    const severityToUse = severity !== null && severity !== void 0 ? severity : safetyLevelToWarningSeverity(safetyLevel);
    const { color: defaultIconColor, backgroundColor, inModalColor } = getWarningIconColors(severityToUse);
    const color = strokeColorOverride !== null && strokeColorOverride !== void 0 ? strokeColorOverride : defaultIconColor;
    const Icon = getWarningIcon(severityToUse);
    const icon = Icon ? _jsx(Icon, { color: inModal && inModalColor ? inModalColor : color, ...rest }) : null;
    return heroIcon ? (_jsx(Flex, { borderRadius: "$rounded12", p: "$spacing12", backgroundColor: backgroundColor, children: icon })) : (icon);
}
//# sourceMappingURL=WarningIcon.js.map