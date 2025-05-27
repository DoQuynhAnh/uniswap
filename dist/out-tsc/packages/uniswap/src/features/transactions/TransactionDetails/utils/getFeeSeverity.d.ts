import { Percent } from '@uniswap/sdk-core';
import { WarningSeverity } from 'uniswap/src/components/modals/WarningModal/types';
import { TokenProtectionWarning } from 'uniswap/src/features/tokens/safetyUtils';
import { FeeOnTransferFeeGroupProps, FoTFeeType, TokenFeeInfo } from 'uniswap/src/features/transactions/TransactionDetails/types';
export declare function getFeeSeverity(fee: Percent): {
    severity: WarningSeverity;
    tokenProtectionWarning: TokenProtectionWarning;
};
export declare function getHighestFeeSeverity(feeOnTransferProps: FeeOnTransferFeeGroupProps | undefined): {
    highestFeeTokenInfo?: TokenFeeInfo;
    tokenProtectionWarning: TokenProtectionWarning;
    severity: WarningSeverity;
    feeType?: FoTFeeType;
};
//# sourceMappingURL=getFeeSeverity.d.ts.map