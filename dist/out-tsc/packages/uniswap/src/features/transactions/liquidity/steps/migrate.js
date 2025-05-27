import { migrateLpPosition } from 'uniswap/src/data/apiClients/tradingApi/TradingApiClient';
import { parseErrorMessageTitle } from 'uniswap/src/features/transactions/liquidity/utils';
import { TransactionStepType } from 'uniswap/src/features/transactions/steps/types';
import { validateTransactionRequest, } from 'uniswap/src/features/transactions/swap/utils/trade';
export function createMigratePositionStep(txRequest) {
    return {
        type: TransactionStepType.MigratePositionTransaction,
        txRequest,
    };
}
export function createMigratePositionAsyncStep(migratePositionRequestArgs, signatureDeadline) {
    return {
        type: TransactionStepType.MigratePositionTransactionAsync,
        getTxRequest: async (signature) => {
            if (!migratePositionRequestArgs || !signatureDeadline) {
                return undefined;
            }
            try {
                const { migrate } = await migrateLpPosition({
                    ...migratePositionRequestArgs,
                    signature,
                    signatureDeadline,
                });
                return validateTransactionRequest(migrate);
            }
            catch (e) {
                throw new Error('migrate failed to get transaction request', {
                    cause: parseErrorMessageTitle(e, { includeRequestId: true }),
                });
            }
        },
    };
}
//# sourceMappingURL=migrate.js.map