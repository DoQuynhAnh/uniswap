import { createLpPosition, increaseLpPosition } from 'uniswap/src/data/apiClients/tradingApi/TradingApiClient';
import { InterfaceEventNameLocal } from 'uniswap/src/features/telemetry/constants';
import { sendAnalyticsEvent } from 'uniswap/src/features/telemetry/send';
import { parseErrorMessageTitle } from 'uniswap/src/features/transactions/liquidity/utils';
import { TransactionStepType } from 'uniswap/src/features/transactions/steps/types';
import { validateTransactionRequest, } from 'uniswap/src/features/transactions/swap/utils/trade';
import { logger } from 'utilities/src/logger/logger';
export function createIncreasePositionStep(txRequest) {
    return {
        type: TransactionStepType.IncreasePositionTransaction,
        txRequest,
    };
}
export function createCreatePositionAsyncStep(createPositionRequestArgs) {
    return {
        type: TransactionStepType.IncreasePositionTransactionAsync,
        getTxRequest: async (signature) => {
            if (!createPositionRequestArgs) {
                return undefined;
            }
            try {
                const { create } = await createLpPosition({
                    ...createPositionRequestArgs,
                    signature,
                    simulateTransaction: true,
                });
                return validateTransactionRequest(create);
            }
            catch (e) {
                const message = parseErrorMessageTitle(e, { includeRequestId: true });
                if (message) {
                    logger.error(message, {
                        tags: {
                            file: 'increasePosition',
                            function: 'createCreatePositionAsyncStep',
                        },
                    });
                    if (createPositionRequestArgs) {
                        sendAnalyticsEvent(InterfaceEventNameLocal.CreatePositionFailed, {
                            message,
                            ...createPositionRequestArgs,
                        });
                    }
                }
                throw new Error('create failed to get transaction request', {
                    cause: message,
                });
            }
        },
    };
}
export function createIncreasePositionAsyncStep(increasePositionRequestArgs) {
    return {
        type: TransactionStepType.IncreasePositionTransactionAsync,
        getTxRequest: async (signature) => {
            if (!increasePositionRequestArgs) {
                return undefined;
            }
            try {
                const { increase } = await increaseLpPosition({
                    ...increasePositionRequestArgs,
                    signature,
                    simulateTransaction: true,
                });
                return validateTransactionRequest(increase);
            }
            catch (e) {
                const message = parseErrorMessageTitle(e, { includeRequestId: true });
                if (message) {
                    logger.error(message, {
                        tags: {
                            file: 'generateTransactionSteps',
                            function: 'createIncreasePositionAsyncStep',
                        },
                    });
                    if (increasePositionRequestArgs) {
                        sendAnalyticsEvent(InterfaceEventNameLocal.IncreaseLiquidityFailed, {
                            message,
                            ...increasePositionRequestArgs,
                        });
                    }
                }
                throw new Error('increase failed to get transaction request', {
                    cause: message,
                });
            }
        },
    };
}
//# sourceMappingURL=increasePosition.js.map