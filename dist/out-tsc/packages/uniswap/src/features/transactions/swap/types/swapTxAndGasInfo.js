import { validateGasFeeResult } from "uniswap/src/features/gas/types";
import { isBridge, isClassic, isUniswapX } from "uniswap/src/features/transactions/swap/utils/routing";
import { isInterface } from "utilities/src/platform";
export function isValidSwapTxContext(swapTxContext) {
    // Validation fn prevents/future-proofs typeguard against illicit casts
    return validateSwapTxContext(swapTxContext) !== undefined;
}
export var PermitMethod;
(function (PermitMethod) {
    PermitMethod["Transaction"] = "Transaction";
    PermitMethod["TypedData"] = "TypedData";
})(PermitMethod || (PermitMethod = {}));
function validateSwapTxContext(swapTxContext) {
    if (!isSwapTx(swapTxContext)) {
        return undefined;
    }
    const gasFee = validateGasFeeResult(swapTxContext.gasFee);
    if (!gasFee) {
        return undefined;
    }
    if (swapTxContext.trade) {
        if (isClassic(swapTxContext)) {
            const { trade, unsigned, permit, txRequests } = swapTxContext;
            if (unsigned) {
                // SwapTxContext should only ever be unsigned / still require a signature on interface.
                if (!isInterface || !permit || permit.method !== PermitMethod.TypedData) {
                    return undefined;
                }
                return { ...swapTxContext, trade, gasFee, unsigned, txRequests: undefined, permit };
            }
            else if (txRequests) {
                return { ...swapTxContext, trade, gasFee, unsigned, txRequests, permit: undefined };
            }
        }
        else if (isBridge(swapTxContext)) {
            const { trade, txRequests } = swapTxContext;
            if (txRequests) {
                return { ...swapTxContext, trade, gasFee, txRequests };
            }
        }
        else if (isUniswapX(swapTxContext) && swapTxContext.permit) {
            const { trade, permit } = swapTxContext;
            return { ...swapTxContext, trade, gasFee, permit };
        }
    }
    return undefined;
}
function isSwapTx(swapTxContext) {
    return typeof swapTxContext === 'object' && swapTxContext !== null && 'trade' in swapTxContext && 'routing' in swapTxContext;
}
//# sourceMappingURL=swapTxAndGasInfo.js.map