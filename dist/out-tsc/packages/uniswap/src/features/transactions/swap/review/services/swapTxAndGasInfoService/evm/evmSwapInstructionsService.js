import { create5792EVMSwapRepository, create7702EVMSwapRepository, createLegacyEVMSwapRepository, } from 'uniswap/src/features/transactions/swap/review/services/swapTxAndGasInfoService/evm/evmSwapRepository';
import { createPrepareSwapRequestParams } from 'uniswap/src/features/transactions/swap/review/services/swapTxAndGasInfoService/utils';
import { ApprovalAction } from 'uniswap/src/features/transactions/swap/types/trade';
import { tradingApiToUniverseChainId } from 'uniswap/src/features/transactions/swap/utils/tradingApi';
function createLegacyEVMSwapInstructionsService(ctx) {
    const { v4SwapEnabled, activeGasStrategy, shadowGasStrategies, swapRepository } = ctx;
    const prepareSwapRequestParams = createPrepareSwapRequestParams({
        activeGasStrategy,
        shadowGasStrategies,
        v4SwapEnabled,
    });
    const service = {
        getSwapInstructions: async ({ swapQuoteResponse, transactionSettings, approvalAction }) => {
            var _a;
            const { permitData, permitTransaction } = swapQuoteResponse;
            const signature = permitData ? await ((_a = ctx.presignPermit) === null || _a === void 0 ? void 0 : _a.call(ctx, permitData)) : undefined;
            const signatureMissing = permitData && !signature;
            const alreadyApproved = approvalAction === ApprovalAction.None && !permitTransaction;
            const swapRequestParams = prepareSwapRequestParams({
                swapQuoteResponse,
                signature,
                transactionSettings,
                alreadyApproved,
            });
            if (signatureMissing) {
                return { response: null, unsignedPermit: permitData, swapRequestParams };
            }
            const response = await swapRepository.fetchSwapData(swapRequestParams);
            return { response, unsignedPermit: null, swapRequestParams: null };
        },
    };
    return service;
}
function createBatchedEVMSwapInstructionsService(ctx) {
    const { v4SwapEnabled, activeGasStrategy, shadowGasStrategies, swapRepository } = ctx;
    const prepareSwapRequestParams = createPrepareSwapRequestParams({
        activeGasStrategy,
        shadowGasStrategies,
        v4SwapEnabled,
    });
    const service = {
        getSwapInstructions: async ({ swapQuoteResponse, transactionSettings, approvalAction }) => {
            const swapRequestParams = prepareSwapRequestParams({
                swapQuoteResponse,
                signature: undefined,
                transactionSettings,
                alreadyApproved: approvalAction === ApprovalAction.None,
            });
            const response = await swapRepository.fetchSwapData(swapRequestParams);
            return { response, unsignedPermit: null, swapRequestParams: null };
        },
    };
    return service;
}
export function createEVMSwapInstructionsService(ctx) {
    const { getSwapDelegationAddress } = ctx;
    const smartContractWalletInstructionService = getSwapDelegationAddress
        ? createBatchedEVMSwapInstructionsService({
            ...ctx,
            swapRepository: create7702EVMSwapRepository({ getSwapDelegationAddress }),
        })
        : undefined;
    const batchedInstructionsService = createBatchedEVMSwapInstructionsService({
        ...ctx,
        swapRepository: create5792EVMSwapRepository(),
    });
    const legacyInstructionsService = createLegacyEVMSwapInstructionsService({
        ...ctx,
        swapRepository: createLegacyEVMSwapRepository(),
    });
    const service = {
        getSwapInstructions: async (params) => {
            var _a, _b;
            const chainId = tradingApiToUniverseChainId(params.swapQuoteResponse.quote.chainId);
            if (smartContractWalletInstructionService && ((_a = ctx.getSwapDelegationAddress) === null || _a === void 0 ? void 0 : _a.call(ctx, chainId))) {
                return smartContractWalletInstructionService.getSwapInstructions(params);
            }
            if ((_b = ctx.getCanBatchTransactions) === null || _b === void 0 ? void 0 : _b.call(ctx, chainId)) {
                return batchedInstructionsService.getSwapInstructions(params);
            }
            return legacyInstructionsService.getSwapInstructions(params);
        },
    };
    return service;
}
//# sourceMappingURL=evmSwapInstructionsService.js.map