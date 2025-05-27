import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { TouchableArea } from 'ui/src';
import { InlineWarningCard } from 'uniswap/src/components/InlineWarningCard/InlineWarningCard';
import { WarningSeverity } from 'uniswap/src/components/modals/WarningModal/types';
import Trace from 'uniswap/src/features/telemetry/Trace';
import { ElementName } from 'uniswap/src/features/telemetry/constants';
import { useBlockaidFeeComparisonAnalytics } from 'uniswap/src/features/tokens/hooks/useBlockaidFeeComparisonAnalytics';
import { TokenProtectionWarning, getSeverityFromTokenProtectionWarning, getTokenProtectionFeeOnTransfer, getTokenProtectionWarning, getTokenWarningSeverity, useCardHeaderText, useCardSubtitleText, useTokenWarningCardText, } from 'uniswap/src/features/tokens/safetyUtils';
import { currencyIdToAddress } from 'uniswap/src/utils/currencyId';
function useTokenWarningOverrides(currencyInfo, tokenProtectionWarningOverride, feeOnTransferOverride) {
    var _a, _b;
    const { heading: headingDefault, description: descriptionDefault } = useTokenWarningCardText(currencyInfo);
    const { buyFeePercent, sellFeePercent } = getTokenProtectionFeeOnTransfer(currencyInfo);
    const severity = tokenProtectionWarningOverride
        ? getSeverityFromTokenProtectionWarning(tokenProtectionWarningOverride)
        : getTokenWarningSeverity(currencyInfo);
    const headingOverride = useCardHeaderText({
        tokenProtectionWarning: tokenProtectionWarningOverride !== null && tokenProtectionWarningOverride !== void 0 ? tokenProtectionWarningOverride : TokenProtectionWarning.None,
    });
    const displayedBuyFeePercent = (_a = feeOnTransferOverride === null || feeOnTransferOverride === void 0 ? void 0 : feeOnTransferOverride.buyFeePercent) !== null && _a !== void 0 ? _a : buyFeePercent;
    const displayedSellFeePercent = (_b = feeOnTransferOverride === null || feeOnTransferOverride === void 0 ? void 0 : feeOnTransferOverride.sellFeePercent) !== null && _b !== void 0 ? _b : sellFeePercent;
    const descriptionOverride = useCardSubtitleText({
        tokenProtectionWarning: tokenProtectionWarningOverride !== null && tokenProtectionWarningOverride !== void 0 ? tokenProtectionWarningOverride : TokenProtectionWarning.None,
        tokenSymbol: currencyInfo === null || currencyInfo === void 0 ? void 0 : currencyInfo.currency.symbol,
        buyFeePercent: displayedBuyFeePercent,
        sellFeePercent: displayedSellFeePercent,
    });
    const heading = tokenProtectionWarningOverride ? headingOverride : headingDefault;
    const description = tokenProtectionWarningOverride ? descriptionOverride : descriptionDefault;
    return { severity, heading, description };
}
export function TokenWarningCard({ currencyInfo, tokenProtectionWarningOverride, feeOnTransferOverride, headingTestId, descriptionTestId, hideCtaIcon, checked, setChecked, onPress, }) {
    var _a, _b;
    const { t } = useTranslation();
    const { severity, heading, description } = useTokenWarningOverrides(currencyInfo, tokenProtectionWarningOverride, feeOnTransferOverride);
    useBlockaidFeeComparisonAnalytics(currencyInfo);
    if (!currencyInfo || !severity || !description) {
        return null;
    }
    const { buyFeePercent, sellFeePercent } = getTokenProtectionFeeOnTransfer(currencyInfo);
    const analyticsProperties = {
        tokenSymbol: currencyInfo.currency.symbol,
        chainId: currencyInfo.currency.chainId,
        tokenAddress: currencyIdToAddress(currencyInfo.currencyId),
        warningSeverity: WarningSeverity[severity],
        tokenProtectionWarning: TokenProtectionWarning[tokenProtectionWarningOverride !== null && tokenProtectionWarningOverride !== void 0 ? tokenProtectionWarningOverride : getTokenProtectionWarning(currencyInfo)],
        buyFeePercent: (_a = feeOnTransferOverride === null || feeOnTransferOverride === void 0 ? void 0 : feeOnTransferOverride.buyFeePercent) !== null && _a !== void 0 ? _a : buyFeePercent,
        sellFeePercent: (_b = feeOnTransferOverride === null || feeOnTransferOverride === void 0 ? void 0 : feeOnTransferOverride.sellFeePercent) !== null && _b !== void 0 ? _b : sellFeePercent,
        safetyInfo: currencyInfo.safetyInfo,
    };
    return (_jsx(Trace, { logPress: !!onPress, element: ElementName.TokenWarningCard, properties: analyticsProperties, children: _jsx(TouchableArea, { onPress: onPress, children: _jsx(InlineWarningCard, { hideCtaIcon: hideCtaIcon, severity: severity, checkboxLabel: setChecked ? t('common.button.understand') : undefined, heading: heading !== null && heading !== void 0 ? heading : undefined, description: description, headingTestId: headingTestId, descriptionTestId: descriptionTestId, checked: checked, setChecked: setChecked, analyticsProperties: analyticsProperties, onPressCtaButton: onPress }) }) }));
}
//# sourceMappingURL=TokenWarningCard.js.map