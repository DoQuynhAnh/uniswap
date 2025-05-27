import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flex, Text } from 'ui/src';
import { TransactionDetails } from 'uniswap/src/features/transactions/TransactionDetails/TransactionDetails';
import { usePriceUXEnabled } from 'uniswap/src/features/transactions/swap/hooks/usePriceUXEnabled';
import { useV4SwapEnabled } from 'uniswap/src/features/transactions/swap/hooks/useV4SwapEnabled';
import { EstimatedTime } from 'uniswap/src/features/transactions/swap/review/EstimatedTime';
import { AcceptNewQuoteRow } from 'uniswap/src/features/transactions/swap/review/SwapDetails/AcceptNewQuoteRow';
import { HeightAnimatorWrapper } from 'uniswap/src/features/transactions/swap/review/SwapDetails/HeightAnimatorWrapper';
import { SwapRateRatio } from 'uniswap/src/features/transactions/swap/review/SwapRateRatio';
import { AcrossRoutingInfo } from 'uniswap/src/features/transactions/swap/shared-components/AcrossRoutingInfo';
import { MaxSlippageRow } from 'uniswap/src/features/transactions/swap/shared-components/MaxSlippageRow/MaxSlippageRow';
import { PriceImpactRow } from 'uniswap/src/features/transactions/swap/shared-components/PriceImpactRow/PriceImpactRow';
import { RoutingInfo } from 'uniswap/src/features/transactions/swap/shared-components/RoutingInfo';
import { getSwapFeeUsdFromDerivedSwapInfo } from 'uniswap/src/features/transactions/swap/utils/getSwapFeeUsd';
import { isBridge } from 'uniswap/src/features/transactions/swap/utils/routing';
import { CurrencyField } from 'uniswap/src/types/currency';
export function SwapDetails({ acceptedDerivedSwapInfo, autoSlippageTolerance, customSlippageTolerance, derivedSwapInfo, feeOnTransferProps, tokenWarningProps, tokenWarningChecked, gasFee, uniswapXGasBreakdown, newTradeRequiresAcceptance, warning, onAcceptTrade, onShowWarning, setTokenWarningChecked, txSimulationErrors, }) {
    var _a, _b, _c, _d;
    const v4SwapEnabled = useV4SwapEnabled(derivedSwapInfo.chainId);
    const priceUxEnabled = usePriceUXEnabled();
    const { t } = useTranslation();
    const isBridgeTrade = derivedSwapInfo.trade.trade && isBridge(derivedSwapInfo.trade.trade);
    const trade = (_a = derivedSwapInfo.trade.trade) !== null && _a !== void 0 ? _a : derivedSwapInfo.trade.indicativeTrade;
    const acceptedTrade = (_b = acceptedDerivedSwapInfo.trade.trade) !== null && _b !== void 0 ? _b : acceptedDerivedSwapInfo.trade.indicativeTrade;
    const swapFeeUsd = getSwapFeeUsdFromDerivedSwapInfo(derivedSwapInfo);
    if (!trade) {
        throw new Error('Invalid render of `SwapDetails` with no `trade`');
    }
    if (!acceptedTrade) {
        throw new Error('Invalid render of `SwapDetails` with no `acceptedTrade`');
    }
    const estimatedBridgingTime = useMemo(() => {
        var _a;
        const tradeQuote = (_a = derivedSwapInfo.trade.trade) === null || _a === void 0 ? void 0 : _a.quote;
        if (!tradeQuote || !isBridge(tradeQuote)) {
            return undefined;
        }
        return tradeQuote.quote.estimatedFillTimeMs;
    }, [(_c = derivedSwapInfo.trade.trade) === null || _c === void 0 ? void 0 : _c.quote]);
    return (_jsx(HeightAnimatorWrapper, { children: _jsxs(TransactionDetails, { isSwap: true, banner: newTradeRequiresAcceptance && (_jsx(AcceptNewQuoteRow, { acceptedDerivedSwapInfo: acceptedDerivedSwapInfo, derivedSwapInfo: derivedSwapInfo, onAcceptTrade: onAcceptTrade })), chainId: acceptedTrade.inputAmount.currency.chainId, feeOnTransferProps: feeOnTransferProps, tokenWarningProps: tokenWarningProps, tokenWarningChecked: tokenWarningChecked, setTokenWarningChecked: setTokenWarningChecked, gasFee: gasFee, swapFee: acceptedTrade.swapFee, swapFeeUsd: swapFeeUsd, indicative: acceptedTrade.indicative, outputCurrency: acceptedTrade.outputAmount.currency, showExpandedChildren: !!customSlippageTolerance, showWarning: warning && !newTradeRequiresAcceptance, transactionUSDValue: derivedSwapInfo.currencyAmountsUSDValue[CurrencyField.OUTPUT], uniswapXGasBreakdown: uniswapXGasBreakdown, warning: warning, estimatedBridgingTime: estimatedBridgingTime, isBridgeTrade: isBridgeTrade !== null && isBridgeTrade !== void 0 ? isBridgeTrade : false, txSimulationErrors: txSimulationErrors, amountUserWillReceive: (_d = derivedSwapInfo.outputAmountUserWillReceive) !== null && _d !== void 0 ? _d : undefined, onShowWarning: onShowWarning, children: [_jsxs(Flex, { row: true, alignItems: "center", justifyContent: "space-between", children: [_jsx(Text, { color: "$neutral2", variant: "body3", children: t('swap.details.rate') }), _jsx(SwapRateRatio, { trade: trade, justifyContent: "flex-end" })] }), isBridgeTrade && _jsx(EstimatedTime, { visibleIfLong: false, timeMs: estimatedBridgingTime }), isBridgeTrade && _jsx(AcrossRoutingInfo, {}), !isBridgeTrade && (_jsx(MaxSlippageRow, { acceptedDerivedSwapInfo: acceptedDerivedSwapInfo, autoSlippageTolerance: autoSlippageTolerance, customSlippageTolerance: customSlippageTolerance })), !isBridgeTrade && v4SwapEnabled && (_jsx(RoutingInfo, { gasFee: gasFee, chainId: acceptedTrade.inputAmount.currency.chainId })), !priceUxEnabled && _jsx(PriceImpactRow, { derivedSwapInfo: acceptedDerivedSwapInfo })] }) }));
}
//# sourceMappingURL=SwapDetails.js.map