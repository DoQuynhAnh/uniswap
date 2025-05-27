import { useMemo } from 'react';
import { Routing } from 'uniswap/src/data/tradingApi/__generated__/index';
import { useTokenApprovalInfo } from 'uniswap/src/features/transactions/swap/contexts/hooks/useTokenApprovalInfo';
import { useTransactionRequestInfo } from 'uniswap/src/features/transactions/swap/contexts/hooks/useTransactionRequestInfo';
import { getUniswapXSwapTxAndGasInfo } from 'uniswap/src/features/transactions/swap/review/services/swapTxAndGasInfoService/uniswapx/utils';
import { getBridgeSwapTxAndGasInfo, getClassicSwapTxAndGasInfo, getFallbackSwapTxAndGasInfo, getWrapTxAndGasInfo, usePermitTxInfo, } from 'uniswap/src/features/transactions/swap/review/services/swapTxAndGasInfoService/utils';
import { isWrapAction } from 'uniswap/src/features/transactions/swap/utils/wrap';
import { CurrencyField } from 'uniswap/src/types/currency';
export function useSwapTxAndGasInfo({ derivedSwapInfo, account, }) {
    const { chainId, wrapType, currencyAmounts, trade: { trade }, } = derivedSwapInfo;
    const approvalTxInfo = useTokenApprovalInfo({
        account,
        chainId,
        wrapType,
        currencyInAmount: currencyAmounts[CurrencyField.INPUT],
        currencyOutAmount: currencyAmounts[CurrencyField.OUTPUT],
        routing: trade === null || trade === void 0 ? void 0 : trade.routing,
    });
    const { tokenApprovalInfo } = approvalTxInfo;
    // TODO(MOB-3425) decouple wrap tx from swap tx to simplify UniswapX code
    const swapTxInfo = useTransactionRequestInfo({
        account,
        derivedSwapInfo,
        tokenApprovalInfo,
    });
    const permitTxInfo = usePermitTxInfo({ quote: trade === null || trade === void 0 ? void 0 : trade.quote });
    return useMemo(() => {
        switch (trade === null || trade === void 0 ? void 0 : trade.routing) {
            case Routing.DUTCH_V2:
            case Routing.DUTCH_V3:
            case Routing.PRIORITY:
                return getUniswapXSwapTxAndGasInfo({ trade, swapTxInfo, approvalTxInfo });
            case Routing.BRIDGE:
                return getBridgeSwapTxAndGasInfo({ trade, swapTxInfo, approvalTxInfo });
            case Routing.CLASSIC:
                return getClassicSwapTxAndGasInfo({ trade, swapTxInfo, approvalTxInfo, permitTxInfo });
            default:
                if (isWrapAction(wrapType)) {
                    return getWrapTxAndGasInfo({ swapTxInfo });
                }
                return getFallbackSwapTxAndGasInfo({ swapTxInfo, approvalTxInfo });
        }
    }, [approvalTxInfo, permitTxInfo, swapTxInfo, trade, wrapType]);
}
//# sourceMappingURL=useSwapTxAndGasInfo.js.map