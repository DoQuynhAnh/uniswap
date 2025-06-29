import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { useSporeColors } from 'ui/src';
import { Settings } from 'ui/src/components/icons/Settings';
import { zIndexes } from 'ui/src/theme';
import { WarningInfo } from 'uniswap/src/components/modals/WarningModal/WarningInfo';
import { WarningSeverity } from 'uniswap/src/components/modals/WarningModal/types';
import { LearnMoreLink } from 'uniswap/src/components/text/LearnMoreLink';
import { uniswapUrls } from 'uniswap/src/constants/urls';
import { ModalName } from 'uniswap/src/features/telemetry/constants';
import { MaxSlippageTooltip } from 'uniswap/src/features/transactions/swap/form/SwapFormScreen/SwapFormTooltips';
import { usePriceUXEnabled } from 'uniswap/src/features/transactions/swap/hooks/usePriceUXEnabled';
import { SlippageInfoCaption } from 'uniswap/src/features/transactions/swap/shared-components/MaxSlippageRow/SlippageInfo/SlippageInfoCaption';
import { slippageToleranceToPercent } from 'uniswap/src/features/transactions/swap/utils/format';
import { isMobileApp } from 'utilities/src/platform';
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { formatCurrencyAmount } from 'utilities/src/format/localeBased';
import { NumberType } from 'utilities/src/format/types';
export function SlippageInfo({ children, trade, isCustomSlippage, autoSlippageTolerance, }) {
    const { t } = useTranslation();
    const colors = useSporeColors();
    const priceUxEnabled = usePriceUXEnabled();
    // Avoid showing min out / max in UI when on an indicative quote.
    if (trade.indicative) {
        return _jsx(_Fragment, { children: children });
    }
    const minimumAmount = trade === null || trade === void 0 ? void 0 : trade.minimumAmountOut(slippageToleranceToPercent(trade.slippageTolerance));
    const formattedMinimumAmount = `${formatCurrencyAmount({
        amount: minimumAmount,
        locale: 'en-US',
        type: NumberType.TokenTx,
        placeholder: '-',
    })} ${trade.outputAmount.currency.symbol}`;
    const captionContent = (_jsx(SlippageInfoCaption, { trade: trade, isCustomSlippage: isCustomSlippage, autoSlippageTolerance: autoSlippageTolerance }));
    return (_jsx(WarningInfo, { infoButton: isMobileApp ? _jsx(LearnMoreLink, { url: uniswapUrls.helpArticleUrls.swapSlippage }) : null, modalProps: {
            backgroundIconColor: colors.surface2.get(),
            captionComponent: captionContent,
            rejectText: t('common.button.close'),
            icon: _jsx(Settings, { color: "$neutral2", size: "$icon.28" }),
            modalName: ModalName.SlippageInfo,
            severity: WarningSeverity.None,
            title: t('swap.slippage.settings.title'),
            zIndex: zIndexes.popover,
        }, tooltipProps: {
            text: priceUxEnabled ? (_jsx(MaxSlippageTooltip, { receivedAmount: formattedMinimumAmount, minimumAmount: formattedMinimumAmount, autoSlippageEnabled: !isCustomSlippage, currentSlippageTolerance: formattedMinimumAmount })) : (captionContent),
            maxWidth: priceUxEnabled ? 300 : 272,
            placement: 'top',
        }, analyticsTitle: "Max Slippage", children: children }));
}
//# sourceMappingURL=SlippageInfo.js.map