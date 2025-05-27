import { AppTFunction } from 'ui/src/i18n/types';
import { TokenApprovalTransactionStep } from 'uniswap/src/features/transactions/steps/approve';
import { TokenRevocationTransactionStep } from 'uniswap/src/features/transactions/steps/revoke';
import { TransactionStep } from 'uniswap/src/features/transactions/steps/types';
/** Superclass used to differentiate categorized/known transaction errors from generic/unknown errors. */
export declare abstract class TransactionError extends Error {
}
/** Thrown in code paths that should be unreachable, serving both typechecking and critical alarm purposes. */
export declare class UnexpectedTransactionStateError extends TransactionError {
    constructor(message: string);
}
/** Thrown when a transaction step fails for an unknown reason. */
export declare class TransactionStepFailedError extends TransactionError {
    step: TransactionStep;
    isBackendRejection: boolean;
    originalError?: Error;
    originalErrorStringified?: string;
    originalErrorString?: string;
    stepStringified?: string;
    constructor({ message, step, isBackendRejection, originalError, }: {
        message: string;
        step: TransactionStep;
        isBackendRejection?: boolean;
        originalError?: Error;
    });
    getFingerprint(): string[];
}
export declare class ApprovalEditedInWalletError extends TransactionStepFailedError {
    logError: boolean;
    constructor({ step }: {
        step: TokenApprovalTransactionStep | TokenRevocationTransactionStep;
    });
}
/** Thrown when a transaction flow is interrupted by a known circumstance; should be handled gracefully in UI */
export declare class HandledTransactionInterrupt extends TransactionError {
    constructor(message: string);
}
export declare function getErrorContent(t: AppTFunction, error: Error): {
    title: string;
    buttonText?: string;
    message: string;
    supportArticleURL?: string;
};
//# sourceMappingURL=errors.d.ts.map