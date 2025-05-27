import { createProcessSwapResponse, getSwapInputExceedsBalance, } from 'uniswap/src/features/transactions/swap/review/services/swapTxAndGasInfoService/utils';
import { ApprovalAction } from 'uniswap/src/features/transactions/swap/types/trade';
import { tryCatch } from 'utilities/src/errors';
export function createGetEVMSwapTransactionRequestInfo(ctx) {
    const { activeGasStrategy, transactionSettings, instructionService } = ctx;
    const processSwapResponse = createProcessSwapResponse({ activeGasStrategy });
    const getEVMSwapTransactionRequestInfo = async ({ trade, approvalTxInfo, derivedSwapInfo, }) => {
        var _a, _b;
        const { tokenApprovalInfo } = approvalTxInfo;
        const swapQuoteResponse = trade.quote;
        const swapQuote = swapQuoteResponse.quote;
        const approvalAction = tokenApprovalInfo.action;
        const approvalUnknown = approvalAction === ApprovalAction.Unknown;
        const skip = getSwapInputExceedsBalance({ derivedSwapInfo }) || approvalUnknown;
        const { data, error } = await tryCatch(skip
            ? Promise.resolve(undefined)
            : instructionService.getSwapInstructions({ swapQuoteResponse, transactionSettings, approvalAction }));
        const isRevokeNeeded = tokenApprovalInfo.action === ApprovalAction.RevokeAndPermit2Approve;
        const swapTxInfo = processSwapResponse({
            response: (_a = data === null || data === void 0 ? void 0 : data.response) !== null && _a !== void 0 ? _a : undefined,
            error,
            permitData: data === null || data === void 0 ? void 0 : data.unsignedPermit,
            swapQuote,
            isSwapLoading: false,
            isRevokeNeeded,
            swapRequestParams: (_b = data === null || data === void 0 ? void 0 : data.swapRequestParams) !== null && _b !== void 0 ? _b : undefined,
        });
        return swapTxInfo;
    };
    return getEVMSwapTransactionRequestInfo;
}
//# sourceMappingURL=utils.js.map