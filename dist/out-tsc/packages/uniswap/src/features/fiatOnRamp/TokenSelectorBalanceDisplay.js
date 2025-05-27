import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, SpinningLoader, Text, TouchableArea, useIsDarkMode } from 'ui/src';
import { RotatableChevron } from 'ui/src/components/icons/RotatableChevron';
import { iconSizes, spacing } from 'ui/src/theme';
import { CurrencyLogo } from 'uniswap/src/components/CurrencyLogo/CurrencyLogo';
import { useFormatExactCurrencyAmount } from 'uniswap/src/features/fiatOnRamp/hooks';
import { getSymbolDisplayText } from 'uniswap/src/utils/currency';
export function TokenSelectorBalanceDisplay({ selectedCurrencyInfo, onPress, disabled, loading, chevronDirection = 'end', testID, portfolioBalance, }) {
    const balanceQuantity = (portfolioBalance === null || portfolioBalance === void 0 ? void 0 : portfolioBalance.quantity.toString()) || '0';
    const formattedAmount = useFormatExactCurrencyAmount(balanceQuantity, selectedCurrencyInfo === null || selectedCurrencyInfo === void 0 ? void 0 : selectedCurrencyInfo.currency) || '-';
    const isDarkMode = useIsDarkMode();
    return (_jsx(TouchableArea, { borderRadius: "$roundedFull", disabled: disabled, testID: testID, onPress: onPress, children: _jsxs(Flex, { row: true, alignItems: "center", backgroundColor: isDarkMode ? '$surface2' : '$surface1', borderColor: "$surface3", borderRadius: "$rounded20", borderWidth: "$spacing1", flexDirection: "row", gap: "$gap8", p: "$spacing12", shadowColor: "$shadowColor", shadowOpacity: 0.03, shadowRadius: 4, children: [loading ? (_jsx(SpinningLoader, { size: iconSizes.icon40 })) : (_jsx(CurrencyLogo, { currencyInfo: selectedCurrencyInfo, networkLogoBorderWidth: spacing.spacing1, size: iconSizes.icon40 })), _jsxs(Flex, { grow: true, children: [_jsx(Text, { color: "$neutral1", variant: "body2", children: selectedCurrencyInfo.currency.name }), _jsxs(Text, { color: "$neutral2", variant: "body3", children: ["Balance: ", formattedAmount, getSymbolDisplayText(selectedCurrencyInfo.currency.symbol)] })] }), _jsx(RotatableChevron, { color: "$neutral3", direction: chevronDirection, height: iconSizes.icon24 })] }) }));
}
//# sourceMappingURL=TokenSelectorBalanceDisplay.js.map