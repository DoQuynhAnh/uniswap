import { CurrencyInfo } from 'uniswap/src/features/dataApi/types';
import { TokenProtectionWarning } from 'uniswap/src/features/tokens/safetyUtils';
import { FeeOnTransferFeeGroupProps, FoTFeeType, TokenFeeInfo, TokenWarningProps } from 'uniswap/src/features/transactions/TransactionDetails/types';
export declare function getShouldDisplayTokenWarningCard({ feeOnTransferProps, tokenWarningProps, }: {
    tokenWarningProps: TokenWarningProps;
    feeOnTransferProps?: FeeOnTransferFeeGroupProps;
}): {
    shouldDisplayTokenWarningCard: boolean;
    tokenProtectionWarningToDisplay: TokenProtectionWarning;
    feePercent: number | undefined;
    feeType: FoTFeeType | undefined;
    tokenFeeInfo: TokenFeeInfo | undefined;
    currencyInfoToDisplay: Maybe<CurrencyInfo>;
    showFeeSeverityWarning: boolean;
};
//# sourceMappingURL=getShouldDisplayTokenWarningCard.d.ts.map