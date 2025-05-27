import { AccountMeta } from 'uniswap/src/features/accounts/types';
import { TransactionRequestInfo } from 'uniswap/src/features/transactions/swap/review/services/swapTxAndGasInfoService/utils';
import { DerivedSwapInfo } from 'uniswap/src/features/transactions/swap/types/derivedSwapInfo';
import { TokenApprovalInfo } from 'uniswap/src/features/transactions/swap/types/trade';
export declare function useWrapTransactionRequestInfo({ derivedSwapInfo, account, }: {
    derivedSwapInfo: DerivedSwapInfo;
    account?: AccountMeta;
}): TransactionRequestInfo;
export declare function useSwapTransactionRequestInfo({ derivedSwapInfo, tokenApprovalInfo, }: {
    derivedSwapInfo: DerivedSwapInfo;
    tokenApprovalInfo: TokenApprovalInfo | undefined;
}): TransactionRequestInfo;
export declare function useTransactionRequestInfo({ derivedSwapInfo, tokenApprovalInfo, account, }: {
    derivedSwapInfo: DerivedSwapInfo;
    tokenApprovalInfo: TokenApprovalInfo | undefined;
    account?: AccountMeta;
}): TransactionRequestInfo;
//# sourceMappingURL=useTransactionRequestInfo.d.ts.map