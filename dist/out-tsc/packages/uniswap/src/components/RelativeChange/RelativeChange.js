import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, Text } from 'ui/src';
import { Caret } from 'ui/src/components/icons/Caret';
import { useAppFiatCurrencyInfo } from 'uniswap/src/features/fiatCurrency/hooks';
import { useLocalizationContext } from 'uniswap/src/features/language/LocalizationContext';
import { TestID } from 'uniswap/src/test/fixtures/testIDs';
import { NumberType } from 'utilities/src/format/types';
export function RelativeChange(props) {
    const { absoluteChange, change, variant = 'subheading2', semanticColor, positiveChangeColor = '$statusSuccess', negativeChangeColor = '$statusCritical', arrowSize = '$icon.16', loading = false, alignRight = false, } = props;
    const { formatNumberOrString, formatPercent } = useLocalizationContext();
    const currency = useAppFiatCurrencyInfo();
    const isPositiveChange = change !== undefined ? change >= 0 : undefined;
    const arrowColor = isPositiveChange ? positiveChangeColor : negativeChangeColor;
    const formattedChange = formatPercent(change !== undefined ? Math.abs(change) : change);
    const formattedAbsChange = absoluteChange
        ? `${formatNumberOrString({
            value: Math.abs(absoluteChange),
            type: NumberType.PortfolioBalance,
            currencyCode: currency.code,
        })}`
        : '';
    return (_jsxs(Flex, { row: true, alignItems: "center", gap: "$spacing2", justifyContent: alignRight ? 'flex-end' : 'flex-start', testID: "relative-change", children: [change !== undefined && _jsx(Caret, { color: arrowColor, direction: isPositiveChange ? 'n' : 's', size: arrowSize }), _jsx(Flex, { children: _jsx(Text, { color: semanticColor ? (isPositiveChange ? '$statusSuccess' : '$statusCritical') : '$neutral2', loading: loading, loadingPlaceholderText: "\u25B2 00.00 (0.00)%", testID: TestID.PortfolioRelativeChange, variant: variant, children: absoluteChange ? `${formattedAbsChange} (${formattedChange})` : formattedChange }) })] }));
}
//# sourceMappingURL=RelativeChange.js.map