import { Currency, CurrencyAmount } from '@uniswap/sdk-core';
import { Routing } from 'uniswap/src/data/tradingApi/__generated__/index';
import { AccountMeta } from 'uniswap/src/features/accounts/types';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { GasFeeResult } from 'uniswap/src/features/gas/types';
import { TokenApprovalInfo } from 'uniswap/src/features/transactions/swap/types/trade';
import { WrapType } from 'uniswap/src/features/transactions/types/wrap';
export interface TokenApprovalInfoParams {
    chainId: UniverseChainId;
    wrapType: WrapType;
    currencyInAmount: Maybe<CurrencyAmount<Currency>>;
    currencyOutAmount?: Maybe<CurrencyAmount<Currency>>;
    routing: Routing | undefined;
    account?: AccountMeta;
}
export type ApprovalTxInfo = {
    tokenApprovalInfo: TokenApprovalInfo;
    approvalGasFeeResult: GasFeeResult;
    revokeGasFeeResult: GasFeeResult;
};
export declare function useTokenApprovalInfo(params: TokenApprovalInfoParams): ApprovalTxInfo;
//# sourceMappingURL=useTokenApprovalInfo.d.ts.map