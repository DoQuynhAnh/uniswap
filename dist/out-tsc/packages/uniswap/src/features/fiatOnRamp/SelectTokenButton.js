import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Trans } from 'react-i18next';
import { Flex, SpinningLoader, Text, TouchableArea } from 'ui/src';
import { RotatableChevron } from 'ui/src/components/icons/RotatableChevron';
import { iconSizes, spacing } from 'ui/src/theme';
import { CurrencyLogo } from 'uniswap/src/components/CurrencyLogo/CurrencyLogo';
import { getSymbolDisplayText } from 'uniswap/src/utils/currency';
export function SelectTokenButton({ selectedCurrencyInfo, onPress, formattedAmount, disabled, loading, iconSize = iconSizes.icon24, chevronDirection = 'end', testID, }) {
    const textColor = selectedCurrencyInfo ? '$neutral1' : '$white';
    const backgroundColor = selectedCurrencyInfo ? '$surface1' : '$accent1';
    return (_jsx(TouchableArea, { borderRadius: "$roundedFull", disabled: disabled, testID: testID, onPress: onPress, children: _jsxs(Flex, { centered: true, row: true, flexDirection: "row", gap: "$none", pr: "$spacing4", backgroundColor: backgroundColor, borderRadius: "$roundedFull", p: "$spacing4", borderColor: "$surface3", borderWidth: "$spacing1", children: [selectedCurrencyInfo ? (_jsxs(_Fragment, { children: [loading ? (_jsx(SpinningLoader, {})) : (_jsx(CurrencyLogo, { currencyInfo: selectedCurrencyInfo, networkLogoBorderWidth: spacing.spacing1, size: iconSize })), _jsx(Text, { color: textColor, pl: "$spacing8", variant: "buttonLabel1", children: formattedAmount }), _jsx(Text, { color: textColor, pl: "$spacing4", variant: "buttonLabel1", children: getSymbolDisplayText(selectedCurrencyInfo.currency.symbol) })] })) : (_jsx(Text, { color: textColor, pl: "$spacing4", variant: "buttonLabel1", children: _jsx(Trans, { i18nKey: "common.selectToken.label" }) })), _jsx(RotatableChevron, { color: textColor, direction: chevronDirection, height: iconSizes.icon16 })] }) }));
}
//# sourceMappingURL=SelectTokenButton.js.map