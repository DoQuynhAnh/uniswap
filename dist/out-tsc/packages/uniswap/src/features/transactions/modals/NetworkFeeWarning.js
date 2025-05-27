import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Trans, useTranslation } from 'react-i18next';
import { Flex, Separator, Text, UniswapXText, isWeb, useSporeColors } from 'ui/src';
import { AlertTriangleFilled } from 'ui/src/components/icons/AlertTriangleFilled';
import { Gas } from 'ui/src/components/icons/Gas';
import { NATIVE_LINE_HEIGHT_SCALE, fonts, zIndexes } from 'ui/src/theme';
import { UniswapXFee } from 'uniswap/src/components/gas/NetworkFee';
import { WarningInfo } from 'uniswap/src/components/modals/WarningModal/WarningInfo';
import { WarningSeverity } from 'uniswap/src/components/modals/WarningModal/types';
import { LearnMoreLink } from 'uniswap/src/components/text/LearnMoreLink';
import { uniswapUrls } from 'uniswap/src/constants/urls';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { ModalName } from 'uniswap/src/features/telemetry/constants';
import { NetworkCostTooltipClassic, NetworkCostTooltipUniswapX, } from 'uniswap/src/features/transactions/swap/form/SwapFormScreen/SwapFormTooltips';
import { usePriceUXEnabled } from 'uniswap/src/features/transactions/swap/hooks/usePriceUXEnabled';
import { isInterface, isMobileApp } from 'utilities/src/platform';
export function NetworkFeeWarning({ gasFeeHighRelativeToValue, children, tooltipTrigger, placement = 'top', uniswapXGasFeeInfo, chainId, }) {
    const colors = useSporeColors();
    const { t } = useTranslation();
    const priceUxEnabled = usePriceUXEnabled();
    const showHighGasFeeUI = gasFeeHighRelativeToValue && !uniswapXGasFeeInfo && !isInterface; // Avoid high gas UI on interface
    return (_jsx(WarningInfo, { infoButton: priceUxEnabled ? null : uniswapXGasFeeInfo ? (_jsx(UniswapXFeeContent, { uniswapXGasFeeInfo: uniswapXGasFeeInfo })) : (_jsx(LearnMoreLink, { textVariant: isWeb ? 'body4' : undefined, url: uniswapUrls.helpArticleUrls.networkFeeInfo })), modalProps: {
            backgroundIconColor: showHighGasFeeUI ? colors.statusCritical2.get() : colors.surface2.get(),
            captionComponent: (_jsx(NetworkFeeText, { showHighGasFeeUI: showHighGasFeeUI, uniswapXGasFeeInfo: uniswapXGasFeeInfo, chainId: chainId })),
            rejectText: t('common.button.close'),
            icon: showHighGasFeeUI ? (_jsx(AlertTriangleFilled, { color: "$statusCritical", size: "$icon.24" })) : (_jsx(Gas, { color: "$neutral2", size: "$icon.24" })),
            modalName: ModalName.NetworkFeeInfo,
            severity: WarningSeverity.None,
            title: showHighGasFeeUI ? t('transaction.networkCost.veryHigh.label') : t('transaction.networkCost.label'),
            zIndex: zIndexes.popover,
        }, tooltipProps: {
            text: priceUxEnabled ? (uniswapXGasFeeInfo ? (_jsx(NetworkCostTooltipUniswapX, { uniswapXGasFeeInfo: uniswapXGasFeeInfo })) : (_jsx(NetworkCostTooltipClassic, {}))) : (_jsx(NetworkFeeText, { showHighGasFeeUI: showHighGasFeeUI, uniswapXGasFeeInfo: uniswapXGasFeeInfo, chainId: chainId })),
            placement,
            icon: null,
            maxWidth: priceUxEnabled ? 300 : undefined,
        }, trigger: tooltipTrigger, analyticsTitle: "Network cost", children: children }));
}
function NetworkFeeText({ showHighGasFeeUI, uniswapXGasFeeInfo, chainId, }) {
    const { t } = useTranslation();
    const variant = isWeb ? 'body4' : 'body2';
    // we need to remove `NATIVE_LINE_HEIGHT_SCALE` if we switch to a button label font
    const lineHeight = fonts[variant].lineHeight / (isWeb ? 1 : NATIVE_LINE_HEIGHT_SCALE);
    if (uniswapXGasFeeInfo) {
        // TODO(WEB-4313): Remove need to manually adjust the height of the UniswapXText component for mobile.
        const components = { gradient: _jsx(UniswapXText, { height: lineHeight, variant: variant }) };
        return (_jsx(Text, { color: "$neutral2", textAlign: isWeb ? 'left' : 'center', variant: variant, children: chainId === UniverseChainId.Unichain ? (_jsx(Trans, { components: components, i18nKey: "swap.warning.networkFee.message.uniswapX.unichain" })) : (_jsx(Trans, { components: components, i18nKey: "swap.warning.networkFee.message.uniswapX" })) }));
    }
    return (_jsx(Text, { color: "$neutral2", textAlign: isWeb ? 'left' : 'center', variant: variant, children: showHighGasFeeUI
            ? chainId === UniverseChainId.Unichain
                ? t('swap.warning.networkFee.highRelativeToValue.unichain')
                : t('swap.warning.networkFee.highRelativeToValue')
            : chainId === UniverseChainId.Unichain
                ? t('swap.warning.networkFee.message.unichain')
                : t('swap.warning.networkFee.message') }));
}
function UniswapXFeeContent({ uniswapXGasFeeInfo }) {
    const { approvalFeeFormatted, wrapFeeFormatted, swapFeeFormatted, inputTokenSymbol } = uniswapXGasFeeInfo;
    const { t } = useTranslation();
    return (_jsxs(Flex, { gap: "$spacing12", children: [_jsx(Flex, { row: true, centered: isMobileApp, width: "100%", children: _jsx(LearnMoreLink, { textVariant: isWeb ? 'body4' : undefined, url: uniswapUrls.helpArticleUrls.uniswapXInfo }) }), _jsx(Separator, {}), wrapFeeFormatted && (_jsxs(Flex, { row: true, justifyContent: "space-between", width: "100%", children: [_jsx(Text, { color: "$neutral2", variant: "body4", children: t('swap.warning.networkFee.wrap') }), _jsx(Text, { variant: "body4", children: wrapFeeFormatted })] })), approvalFeeFormatted && (_jsxs(Flex, { row: true, justifyContent: "space-between", width: "100%", children: [_jsx(Text, { color: "$neutral2", variant: "body4", children: t('swap.warning.networkFee.allow', { inputTokenSymbol: inputTokenSymbol !== null && inputTokenSymbol !== void 0 ? inputTokenSymbol : '' }) }), _jsx(Text, { variant: "body4", children: approvalFeeFormatted })] })), _jsxs(Flex, { row: true, justifyContent: "space-between", width: "100%", children: [_jsx(Text, { color: "$neutral2", variant: "body4", children: t('common.button.swap') }), _jsx(UniswapXFee, { gasFee: swapFeeFormatted })] })] }));
}
//# sourceMappingURL=NetworkFeeWarning.js.map