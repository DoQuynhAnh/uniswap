import { PermitMethod, } from 'uniswap/src/features/transactions/swap/types/swapTxAndGasInfo';
export var LiquidityTransactionType;
(function (LiquidityTransactionType) {
    LiquidityTransactionType["Create"] = "create";
    LiquidityTransactionType["Increase"] = "increase";
    LiquidityTransactionType["Decrease"] = "decrease";
    LiquidityTransactionType["Migrate"] = "migrate";
    LiquidityTransactionType["Collect"] = "collect";
})(LiquidityTransactionType || (LiquidityTransactionType = {}));
export function isValidLiquidityTxContext(liquidityTxContext) {
    // Validation fn prevents/future-proofs typeguard against illicit casts
    return validateLiquidityTxContext(liquidityTxContext) !== undefined;
}
function validateLiquidityTxContext(liquidityTxContext) {
    if (!isLiquidityTx(liquidityTxContext)) {
        return undefined;
    }
    if (liquidityTxContext.type === LiquidityTransactionType.Collect) {
        if (liquidityTxContext.txRequest) {
            return { ...liquidityTxContext, txRequest: liquidityTxContext.txRequest };
        }
        return undefined;
    }
    if (liquidityTxContext.action) {
        const { action, txRequest, permit } = liquidityTxContext;
        const unsigned = (liquidityTxContext.type === 'increase' || liquidityTxContext.type === 'create') && liquidityTxContext.unsigned;
        if (unsigned) {
            if (!permit || permit.method !== PermitMethod.TypedData) {
                return undefined;
            }
            return { ...liquidityTxContext, action, unsigned, txRequest: undefined, permit };
        }
        else if (txRequest) {
            return { ...liquidityTxContext, action, unsigned, txRequest, permit: undefined };
        }
    }
    return undefined;
}
function isLiquidityTx(liquidityTxContext) {
    return (typeof liquidityTxContext === 'object' &&
        liquidityTxContext !== null &&
        'action' in liquidityTxContext &&
        'protocolVersion' in liquidityTxContext);
}
//# sourceMappingURL=types.js.map