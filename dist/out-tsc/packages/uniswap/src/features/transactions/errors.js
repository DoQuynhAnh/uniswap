import { datadogRum } from '@datadog/browser-rum';
import { uniswapUrls } from 'uniswap/src/constants/urls';
import { FetchError } from 'uniswap/src/data/apiClients/FetchError';
import { TransactionStepType } from 'uniswap/src/features/transactions/steps/types';
import { isInterface } from 'utilities/src/platform';
/** Superclass used to differentiate categorized/known transaction errors from generic/unknown errors. */
export class TransactionError extends Error {
}
/** Thrown in code paths that should be unreachable, serving both typechecking and critical alarm purposes. */
export class UnexpectedTransactionStateError extends TransactionError {
    constructor(message) {
        super(message);
        this.name = 'UnexpectedTransactionStateError';
    }
}
/** Thrown when a transaction step fails for an unknown reason. */
export class TransactionStepFailedError extends TransactionError {
    constructor({ message, step, isBackendRejection = false, originalError, }) {
        super(message);
        this.name = 'TransactionStepFailedError';
        this.step = step;
        this.isBackendRejection = isBackendRejection;
        this.originalError = originalError;
        try {
            this.originalErrorString = originalError === null || originalError === void 0 ? void 0 : originalError.toString();
            this.originalErrorStringified = JSON.stringify(originalError, null, 2);
            this.stepStringified = JSON.stringify(step, null, 2);
        }
        catch { }
    }
    getFingerprint() {
        var _a, _b, _c, _d;
        const fingerprint = [this.step.type];
        try {
            if (this.originalError &&
                'code' in this.originalError &&
                (typeof this.originalError.code === 'string' || typeof this.originalError.code === 'number')) {
                fingerprint.push(String((_a = this.originalError) === null || _a === void 0 ? void 0 : _a.code));
            }
            if ((_b = this.originalError) === null || _b === void 0 ? void 0 : _b.message) {
                fingerprint.push(String((_c = this.originalError) === null || _c === void 0 ? void 0 : _c.message));
            }
            if (this.isBackendRejection && this.originalError instanceof FetchError && ((_d = this.originalError.data) === null || _d === void 0 ? void 0 : _d.detail)) {
                fingerprint.push(String(this.originalError.data.detail));
            }
        }
        catch (e) {
            if (isInterface) {
                datadogRum.addAction('Transaction Action', {
                    message: `problem determining fingerprint for ${this.step.type}`,
                    level: 'info',
                    step: this.step.type,
                    data: {
                        errorMessage: e instanceof Error ? e.message : undefined,
                    },
                });
            }
        }
        return fingerprint;
    }
}
export class ApprovalEditedInWalletError extends TransactionStepFailedError {
    constructor({ step }) {
        super({ message: 'Approval decreased to insufficient amount in wallet', step });
        this.logError = false;
    }
}
/** Thrown when a transaction flow is interrupted by a known circumstance; should be handled gracefully in UI */
export class HandledTransactionInterrupt extends TransactionError {
    constructor(message) {
        super(message);
        this.name = 'HandledTransactionInterrupt';
    }
}
export function getErrorContent(t, error) {
    if (error instanceof TransactionStepFailedError) {
        return getStepSpecificErrorContent(t, error);
    }
    // Generic / default error
    return {
        title: t('common.unknownError.error'),
        message: t('common.swap.failed'),
    };
}
function getStepSpecificErrorContent(t, error) {
    switch (error.step.type) {
        case TransactionStepType.WrapTransaction:
            return {
                title: t('common.wrap.failed'),
                message: t('token.wrap.fail.message'),
                supportArticleURL: uniswapUrls.helpArticleUrls.wethExplainer,
            };
        case TransactionStepType.SwapTransaction:
        case TransactionStepType.SwapTransactionAsync:
            return {
                title: t('common.swap.failed'),
                message: t('swap.fail.message'),
                supportArticleURL: uniswapUrls.helpArticleUrls.transactionFailure,
            };
        case TransactionStepType.SwapTransactionBatched:
            return {
                title: t('swap.fail.batched.title'),
                buttonText: t('swap.fail.batched.retry'),
                message: t('swap.fail.batched'),
                supportArticleURL: uniswapUrls.helpArticleUrls.transactionFailure,
            };
        case TransactionStepType.UniswapXSignature:
            if (error.isBackendRejection) {
                return {
                    title: t('common.swap.failed'),
                    message: t('swap.fail.uniswapX'),
                    supportArticleURL: uniswapUrls.helpArticleUrls.uniswapXFailure,
                };
            }
            return {
                title: t('common.swap.failed'),
                message: t('swap.fail.message'),
                supportArticleURL: uniswapUrls.helpArticleUrls.uniswapXFailure,
            };
        case TransactionStepType.Permit2Signature:
            return {
                title: t('permit.approval.fail'),
                message: t('permit.approval.fail.message'),
                supportArticleURL: uniswapUrls.helpArticleUrls.approvalsExplainer,
            };
        case TransactionStepType.TokenApprovalTransaction:
            if (error instanceof ApprovalEditedInWalletError) {
                return {
                    title: t('error.tokenApprovalEdited'),
                    message: t('error.tokenApprovalEdited.message'),
                    supportArticleURL: uniswapUrls.helpArticleUrls.approvalsExplainer,
                };
            }
            return {
                title: t('error.tokenApproval'),
                message: t('error.access.expiry'),
                supportArticleURL: uniswapUrls.helpArticleUrls.approvalsExplainer,
            };
        case TransactionStepType.TokenRevocationTransaction:
            return {
                title: t('common.revoke.approval.failed'),
                message: t('revoke.failed.message'),
                supportArticleURL: uniswapUrls.helpArticleUrls.revokeExplainer,
            };
        default:
            return {
                title: t('common.unknownError.error'),
                message: t('common.swap.failed'),
            };
    }
}
//# sourceMappingURL=errors.js.map