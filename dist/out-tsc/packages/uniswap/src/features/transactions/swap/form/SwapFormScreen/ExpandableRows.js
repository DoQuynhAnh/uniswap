import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Accordion, Flex, Text } from 'ui/src';
import { TransactionDetails } from 'uniswap/src/features/transactions/TransactionDetails/TransactionDetails';
import { useTransactionSettingsContext } from 'uniswap/src/features/transactions/components/settings/contexts/TransactionSettingsContext';
import { useSwapFormContext } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
import { useSwapTxContext } from 'uniswap/src/features/transactions/swap/contexts/SwapTxContext';
import { useFeeOnTransferAmounts } from 'uniswap/src/features/transactions/swap/hooks/useFeeOnTransferAmount';
import { useParsedSwapWarnings } from 'uniswap/src/features/transactions/swap/hooks/useSwapWarnings';
import { SwapRateRatio } from 'uniswap/src/features/transactions/swap/review/SwapRateRatio';
import { AcrossRoutingInfo } from 'uniswap/src/features/transactions/swap/shared-components/AcrossRoutingInfo';
import { MaxSlippageRow } from 'uniswap/src/features/transactions/swap/shared-components/MaxSlippageRow/MaxSlippageRow';
import { PriceImpactRow } from 'uniswap/src/features/transactions/swap/shared-components/PriceImpactRow/PriceImpactRow';
import { RoutingInfo } from 'uniswap/src/features/transactions/swap/shared-components/RoutingInfo';
import { getSwapFeeUsdFromDerivedSwapInfo } from 'uniswap/src/features/transactions/swap/utils/getSwapFeeUsd';
import { isUniswapX } from 'uniswap/src/features/transactions/swap/utils/routing';
import { CurrencyField } from 'uniswap/src/types/currency';
export function ExpandableRows({ isBridge }) {
    const { t } = useTranslation();
    const swapTxContext = useSwapTxContext();
    const { gasFee } = swapTxContext;
    const uniswapXGasBreakdown = isUniswapX(swapTxContext) ? swapTxContext.gasFeeBreakdown : undefined;
    const { derivedSwapInfo } = useSwapFormContext();
    const { priceImpactWarning } = useParsedSwapWarnings();
    const showPriceImpactWarning = Boolean(priceImpactWarning);
    const { autoSlippageTolerance, customSlippageTolerance } = useTransactionSettingsContext();
    const { chainId, trade } = derivedSwapInfo;
    const swapFeeUsd = getSwapFeeUsdFromDerivedSwapInfo(derivedSwapInfo);
    const feeOnTransferProps = useFeeOnTransferAmounts(derivedSwapInfo);
    if (!trade.trade) {
        return null;
    }
    return (_jsx(Accordion.HeightAnimator, { animation: "fast", mt: "$spacing8", children: _jsx(Accordion.Content, { animation: "fast", p: "$none", exitStyle: { opacity: 0 }, children: _jsxs(TransactionDetails, { isSwap: true, showExpandedChildren: true, chainId: trade.trade.inputAmount.currency.chainId, gasFee: gasFee, swapFee: trade.trade.swapFee, swapFeeUsd: swapFeeUsd, indicative: trade.trade.indicative, feeOnTransferProps: feeOnTransferProps, showGasFeeError: false, showSeparatorToggle: false, outputCurrency: trade.trade.outputAmount.currency, transactionUSDValue: derivedSwapInfo.currencyAmountsUSDValue[CurrencyField.OUTPUT], uniswapXGasBreakdown: uniswapXGasBreakdown, RoutingInfo: isBridge ? _jsx(AcrossRoutingInfo, {}) : _jsx(RoutingInfo, { gasFee: gasFee, chainId: chainId }), RateInfo: showPriceImpactWarning && trade.trade ? (_jsxs(Flex, { row: true, alignItems: "center", justifyContent: "space-between", children: [_jsx(Text, { color: "$neutral2", variant: "body3", children: t('swap.details.rate') }), _jsx(Flex, { row: true, shrink: true, justifyContent: "flex-end", children: _jsx(SwapRateRatio, { trade: trade.trade }) })] })) : undefined, children: [_jsx(PriceImpactRow, { derivedSwapInfo: derivedSwapInfo, hide: showPriceImpactWarning }), !isBridge && (_jsx(MaxSlippageRow, { acceptedDerivedSwapInfo: derivedSwapInfo, autoSlippageTolerance: autoSlippageTolerance, customSlippageTolerance: customSlippageTolerance }))] }) }) }));
}
//# sourceMappingURL=ExpandableRows.js.map