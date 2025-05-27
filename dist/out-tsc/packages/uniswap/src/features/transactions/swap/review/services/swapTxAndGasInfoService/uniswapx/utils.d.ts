import { NullablePermit } from 'uniswap/src/data/tradingApi/__generated__';
import { ApprovalTxInfo } from 'uniswap/src/features/transactions/swap/contexts/hooks/useTokenApprovalInfo';
import { TransactionRequestInfo } from 'uniswap/src/features/transactions/swap/review/services/swapTxAndGasInfoService/utils';
import { UniswapXSwapTxAndGasInfo } from 'uniswap/src/features/transactions/swap/types/swapTxAndGasInfo';
import { UniswapXTrade } from 'uniswap/src/features/transactions/swap/types/trade';
export declare function processUniswapXResponse({ wrapTransactionRequestInfo, permitData, needsWrap, }: {
    wrapTransactionRequestInfo?: TransactionRequestInfo;
    permitData: NullablePermit | undefined;
    needsWrap?: boolean;
}): TransactionRequestInfo;
export declare function getUniswapXSwapTxAndGasInfo({ trade, swapTxInfo, approvalTxInfo, }: {
    trade: UniswapXTrade;
    swapTxInfo: TransactionRequestInfo;
    approvalTxInfo: ApprovalTxInfo;
}): UniswapXSwapTxAndGasInfo;
//# sourceMappingURL=utils.d.ts.map