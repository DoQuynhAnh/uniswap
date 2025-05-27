import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { AnimateTransition, Flex, LabeledCheckbox, Text, useSporeColors } from 'ui/src';
import { BlockaidLogo } from 'ui/src/components/logos/BlockaidLogo';
import { Modal } from 'uniswap/src/components/modals/Modal';
import { WarningModalContent } from 'uniswap/src/components/modals/WarningModal/WarningModal';
import { getAlertColor } from 'uniswap/src/components/modals/WarningModal/getAlertColor';
import { WarningSeverity } from 'uniswap/src/components/modals/WarningModal/types';
import { LearnMoreLink } from 'uniswap/src/components/text/LearnMoreLink';
import WarningIcon from 'uniswap/src/components/warnings/WarningIcon';
import { uniswapUrls } from 'uniswap/src/constants/urls';
import Trace from 'uniswap/src/features/telemetry/Trace';
import { ModalName } from 'uniswap/src/features/telemetry/constants';
import { TokenWarningFlagsTable } from 'uniswap/src/features/tokens/TokenWarningFlagsTable';
import { useBlockaidFeeComparisonAnalytics } from 'uniswap/src/features/tokens/hooks/useBlockaidFeeComparisonAnalytics';
import { TokenProtectionWarning, getCurrencyFeeOnTransfer, getFeeWarning, getIsFeeRelatedWarning, getSeverityFromTokenProtectionWarning, getShouldHaveCombinedPluralTreatment, getTokenProtectionFeeOnTransfer, getTokenProtectionWarning, getTokenWarningSeverity, useModalHeaderText, useModalSubtitleText, } from 'uniswap/src/features/tokens/safetyUtils';
import { useDismissedTokenWarnings } from 'uniswap/src/features/tokens/slice/hooks';
import { currencyIdToAddress } from 'uniswap/src/utils/currencyId';
// eslint-disable-next-line complexity
function TokenWarningModalContent({ currencyInfo0, currencyInfo1, isInfoOnlyWarning, onRejectButton, onAcknowledgeButton, shouldBeCombinedPlural, hasSecondWarning, feeOnTransferOverride, onDismissTokenWarning0, onDismissTokenWarning1, }) {
    var _a, _b, _c, _d, _e, _f, _g;
    const { t } = useTranslation();
    useBlockaidFeeComparisonAnalytics(currencyInfo0);
    const tokenProtectionWarning = (feeOnTransferOverride === null || feeOnTransferOverride === void 0 ? void 0 : feeOnTransferOverride.buyFeePercent) || (feeOnTransferOverride === null || feeOnTransferOverride === void 0 ? void 0 : feeOnTransferOverride.sellFeePercent)
        ? getFeeWarning(Math.max((_a = feeOnTransferOverride.buyFeePercent) !== null && _a !== void 0 ? _a : 0, (_b = feeOnTransferOverride.sellFeePercent) !== null && _b !== void 0 ? _b : 0))
        : getTokenProtectionWarning(currencyInfo0);
    const severity = getSeverityFromTokenProtectionWarning(tokenProtectionWarning);
    const tokenSymbol = currencyInfo0.currency.symbol;
    // If Blockaid marks the token as having high fees, but we don't have data on token fees, show Blockaid's fees data
    const isFeeRelatedWarning = getIsFeeRelatedWarning(tokenProtectionWarning);
    const { buyFeePercent: currencyBuyFeePercent, sellFeePercent: currencySellFeePercent } = getCurrencyFeeOnTransfer(currencyInfo0.currency);
    const { buyFeePercent, sellFeePercent } = getTokenProtectionFeeOnTransfer(currencyInfo0);
    const blockaidFeesData = (_c = currencyInfo0.safetyInfo) === null || _c === void 0 ? void 0 : _c.blockaidFees;
    const showBlockaidFeesData = isFeeRelatedWarning &&
        blockaidFeesData &&
        ((blockaidFeesData.buyFeePercent &&
            ((_d = feeOnTransferOverride === null || feeOnTransferOverride === void 0 ? void 0 : feeOnTransferOverride.buyFeePercent) !== null && _d !== void 0 ? _d : currencyBuyFeePercent) === undefined) ||
            (blockaidFeesData.sellFeePercent &&
                ((_e = feeOnTransferOverride === null || feeOnTransferOverride === void 0 ? void 0 : feeOnTransferOverride.sellFeePercent) !== null && _e !== void 0 ? _e : currencySellFeePercent) === undefined));
    const displayedBuyFeePercent = (_f = feeOnTransferOverride === null || feeOnTransferOverride === void 0 ? void 0 : feeOnTransferOverride.buyFeePercent) !== null && _f !== void 0 ? _f : buyFeePercent;
    const displayedSellFeePercent = (_g = feeOnTransferOverride === null || feeOnTransferOverride === void 0 ? void 0 : feeOnTransferOverride.sellFeePercent) !== null && _g !== void 0 ? _g : sellFeePercent;
    const showBlockaidLogo = (!isFeeRelatedWarning && severity !== WarningSeverity.Low && severity !== WarningSeverity.Blocked) ||
        showBlockaidFeesData;
    const titleText = useModalHeaderText({
        tokenSymbol0: tokenSymbol,
        tokenSymbol1: currencyInfo1 === null || currencyInfo1 === void 0 ? void 0 : currencyInfo1.currency.symbol,
        tokenProtectionWarning,
        shouldHavePluralTreatment: shouldBeCombinedPlural,
    });
    const subtitleText = useModalSubtitleText({
        tokenProtectionWarning,
        tokenSymbol,
        buyFeePercent: displayedBuyFeePercent,
        sellFeePercent: displayedSellFeePercent,
        shouldHavePluralTreatment: shouldBeCombinedPlural,
    });
    const { headerText: titleTextColor } = getAlertColor(severity);
    // Logic for "don't show again" dismissal of warnings
    const [dontShowAgain, setDontShowAgain] = useState(false);
    const showCheckbox = !isInfoOnlyWarning && severity === WarningSeverity.Low;
    const onAcknowledge = () => {
        if (showCheckbox) {
            if (dontShowAgain) {
                onDismissTokenWarning0();
                onDismissTokenWarning1 === null || onDismissTokenWarning1 === void 0 ? void 0 : onDismissTokenWarning1();
            }
        }
        onAcknowledgeButton();
    };
    if (severity === WarningSeverity.None) {
        return null;
    }
    const { rejectText, acknowledgeText } = getWarningModalButtonTexts(t, !!isInfoOnlyWarning, severity, !!hasSecondWarning);
    const analyticsProperties = {
        tokenSymbol,
        tokenAddress: currencyIdToAddress(currencyInfo0.currencyId),
        chainId: currencyInfo0.currency.chainId,
        // if both tokens are low or blocked severities, their warnings are combined into 1 plural screen
        tokenSymbol1: currencyInfo1 === null || currencyInfo1 === void 0 ? void 0 : currencyInfo1.currency.symbol,
        tokenAddress1: currencyInfo1 && currencyIdToAddress(currencyInfo1.currencyId),
        warningSeverity: WarningSeverity[severity],
        tokenProtectionWarning: TokenProtectionWarning[tokenProtectionWarning],
        buyFeePercent: displayedBuyFeePercent,
        sellFeePercent: displayedSellFeePercent,
        safetyInfo: currencyInfo0.safetyInfo,
        ...(showCheckbox && { dismissTokenWarningCheckbox: dontShowAgain }),
    };
    return (_jsx(Trace, { logImpression: true, modal: ModalName.TokenWarningModal, properties: analyticsProperties, children: _jsx(Flex, { children: _jsxs(WarningModalContent, { modalName: ModalName.TokenWarningModal, captionComponent: _jsxs(Text, { color: "$neutral2", textAlign: "center", variant: "body3", children: [`${subtitleText} `, _jsx(LearnMoreLink, { display: "inline", textColor: "$neutral1", textVariant: "buttonLabel3", url: uniswapUrls.helpArticleUrls.tokenWarning })] }), rejectText: rejectText, acknowledgeText: acknowledgeText, icon: _jsx(WarningIcon, { heroIcon: true, inModal: true, severity: severity, size: "$icon.24" }), backgroundIconColor: false, severity: severity, titleComponent: _jsx(Text, { color: titleTextColor, variant: "subheading1", children: titleText }), onReject: onRejectButton, onClose: onRejectButton, onAcknowledge: onAcknowledge, children: [tokenProtectionWarning !== TokenProtectionWarning.NonDefault && (_jsx(TokenWarningFlagsTable, { currencyInfo: currencyInfo0, tokenProtectionWarning: tokenProtectionWarning })), showBlockaidLogo && (_jsx(Flex, { row: true, centered: true, children: _jsx(Text, { variant: "body3", color: "$neutral3", children: _jsx(Trans, { i18nKey: "common.poweredBy", components: { name: _jsx(BlockaidLogo, { minHeight: 10, minWidth: 50, color: "$neutral3" }) } }) }) })), showCheckbox && (
                    // only show "Don't show this warning again" checkbox if this is an actionable modal & the token is low-severity
                    _jsx(LabeledCheckbox, { checked: dontShowAgain, checkedColor: "$neutral1", text: _jsx(Text, { color: "$neutral2", variant: "buttonLabel3", children: t('token.safety.warning.dontShowWarningAgain') }), size: "$icon.16", gap: "$spacing8", onCheckPressed: () => setDontShowAgain((s) => !s) }))] }) }) }));
}
// Handle if user has previously dismissed a warning for either token
function useWarningModalCurrenciesDismissed(t0, t1, isInfoOnlyWarning) {
    const address0 = currencyIdToAddress(t0.currencyId);
    const address1 = t1 && currencyIdToAddress(t1.currencyId);
    const { tokenWarningDismissed: tokenWarningDismissed0, onDismissTokenWarning: onDismissTokenWarning0 } = useDismissedTokenWarnings((t0 === null || t0 === void 0 ? void 0 : t0.currency.isNative) ? undefined : { chainId: t0.currency.chainId, address: address0 });
    const { tokenWarningDismissed: tokenWarningDismissed1, onDismissTokenWarning: onDismissTokenWarning1 } = useDismissedTokenWarnings(!t1 || !address1 || (t1 === null || t1 === void 0 ? void 0 : t1.currency.isNative) ? undefined : { chainId: t1.currency.chainId, address: address1 });
    let currencyInfo0 = t0;
    let currencyInfo1 = t1;
    if (!isInfoOnlyWarning) {
        if (tokenWarningDismissed0 && tokenWarningDismissed1) {
            // If both tokens are dismissed
            return null;
        }
        else if (tokenWarningDismissed0) {
            // If only the first token is dismissed, we use currencyInfo1 as primary token to show warning
            if (!t1) {
                return null;
            }
            currencyInfo0 = t1 !== null && t1 !== void 0 ? t1 : undefined;
        }
        else if (tokenWarningDismissed1) {
            // If only the second token is dismissed, we use currencyInfo0 as primary token to show warning
            currencyInfo0 = t0;
            currencyInfo1 = undefined;
        }
    }
    return { currencyInfo0, onDismissTokenWarning0, currencyInfo1, onDismissTokenWarning1 };
}
/**
 * Warning speedbump for selecting certain tokens.
 */
export default function TokenWarningModal({ isVisible, currencyInfo0: t0, currencyInfo1: t1, isInfoOnlyWarning, feeOnTransferOverride, onReject, onToken0BlockAcknowledged, onToken1BlockAcknowledged, onAcknowledge, closeModalOnly, }) {
    const colors = useSporeColors();
    const [warningIndex, setWarningIndex] = useState(0);
    // Check for dismissed warnings
    const warningModalCurrencies = useWarningModalCurrenciesDismissed(t0, t1, isInfoOnlyWarning);
    if (!warningModalCurrencies) {
        return null;
    }
    const { currencyInfo0, currencyInfo1, onDismissTokenWarning0, onDismissTokenWarning1 } = warningModalCurrencies;
    // If BOTH tokens are blocked or BOTH are low-severity, they'll be combined into one plural modal
    const combinedPlural = getShouldHaveCombinedPluralTreatment(currencyInfo0, currencyInfo1);
    const isBlocked0 = getTokenWarningSeverity(currencyInfo0) === WarningSeverity.Blocked;
    const isBlocked1 = getTokenWarningSeverity(currencyInfo1) === WarningSeverity.Blocked;
    const hasSecondWarning = Boolean(!combinedPlural && getTokenWarningSeverity(currencyInfo1) !== WarningSeverity.None);
    return (_jsxs(Modal, { backgroundColor: colors.surface1.val, isModalOpen: isVisible, name: ModalName.TokenWarningModal, skipLogImpression: true, onClose: onReject !== null && onReject !== void 0 ? onReject : closeModalOnly, children: [hasSecondWarning && (_jsxs(Flex, { row: true, "$sm": { position: 'absolute', top: -16 }, children: [_jsx(Text, { variant: "body2", children: warningIndex + 1 }), _jsx(Text, { color: "$neutral2", variant: "body2", children: ' / 2' })] })), _jsxs(AnimateTransition, { currentIndex: warningIndex, animationType: warningIndex === 0 ? 'forward' : 'backward', children: [_jsx(TokenWarningModalContent, { currencyInfo0: currencyInfo0, currencyInfo1: currencyInfo1, isInfoOnlyWarning: !hasSecondWarning && isInfoOnlyWarning, hasSecondWarning: hasSecondWarning, shouldBeCombinedPlural: combinedPlural, feeOnTransferOverride: feeOnTransferOverride, onRejectButton: onReject !== null && onReject !== void 0 ? onReject : closeModalOnly, onAcknowledgeButton: () => {
                            if (hasSecondWarning) {
                                setWarningIndex(1);
                            }
                            else if (isBlocked0) {
                                // If both tokens are blocked, they'll be combined into one plural modal. See `getShouldHaveCombinedPluralTreatment`.
                                combinedPlural && isBlocked1 && (onToken1BlockAcknowledged === null || onToken1BlockAcknowledged === void 0 ? void 0 : onToken1BlockAcknowledged());
                                onToken0BlockAcknowledged === null || onToken0BlockAcknowledged === void 0 ? void 0 : onToken0BlockAcknowledged();
                                closeModalOnly();
                            }
                            else if (isInfoOnlyWarning) {
                                closeModalOnly();
                            }
                            else {
                                onAcknowledge();
                            }
                        }, onDismissTokenWarning0: onDismissTokenWarning0, onDismissTokenWarning1: onDismissTokenWarning1 }), hasSecondWarning && currencyInfo1 && (_jsx(TokenWarningModalContent, { hasSecondWarning: true, currencyInfo0: currencyInfo1, onDismissTokenWarning0: onDismissTokenWarning1, onRejectButton: () => {
                            setWarningIndex(0);
                        }, onAcknowledgeButton: () => {
                            if (isBlocked0 || isBlocked1) {
                                isBlocked0 && (onToken0BlockAcknowledged === null || onToken0BlockAcknowledged === void 0 ? void 0 : onToken0BlockAcknowledged());
                                isBlocked1 && (onToken1BlockAcknowledged === null || onToken1BlockAcknowledged === void 0 ? void 0 : onToken1BlockAcknowledged());
                                closeModalOnly();
                            }
                            else {
                                onAcknowledge();
                            }
                        } }))] })] }));
}
/*
Logic explanation

Reject button text
- if this is an informational-only warning or a 2-token warning, we should always show the Reject / back button
- or, if a token is blocked, it should not have a Reject button, only an Acknowledge button

Acknowledge button text
- if this is an informational-only warning, we don't show the Acknowledge button at all
- if a token is blocked & is not part of a 2-token warning, the Acknowledge button should say "Close"
- otherwise, Acknowledge button should say "Continue"
*/
export function getWarningModalButtonTexts(t, isInfoOnlyWarning, severity, hasSecondWarning) {
    if (isInfoOnlyWarning) {
        return {
            rejectText: t('common.button.close'),
            acknowledgeText: undefined,
        };
    }
    if (severity === WarningSeverity.Blocked && !hasSecondWarning) {
        return {
            rejectText: undefined,
            acknowledgeText: t('common.button.close'),
        };
    }
    return {
        rejectText: t('common.button.goBack'),
        acknowledgeText: t('common.button.continue'),
    };
}
//# sourceMappingURL=TokenWarningModal.js.map