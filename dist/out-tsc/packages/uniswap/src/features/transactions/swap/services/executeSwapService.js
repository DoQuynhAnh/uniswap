import { AccountType } from 'uniswap/src/features/accounts/types';
import { isValidSwapTxContext } from 'uniswap/src/features/transactions/swap/types/swapTxAndGasInfo';
import { isUniswapX } from 'uniswap/src/features/transactions/swap/utils/routing';
import { CurrencyField } from 'uniswap/src/types/currency';
export function createExecuteSwapService(ctx) {
    function executeSwap(input) {
        var _a, _b, _c;
        const swapTxContext = (_a = ctx.getSwapTxContext) === null || _a === void 0 ? void 0 : _a.call(ctx);
        const account = (_b = ctx.getAccount) === null || _b === void 0 ? void 0 : _b.call(ctx);
        if (!account ||
            !swapTxContext ||
            account.type !== AccountType.SignerMnemonic ||
            !isValidSwapTxContext(swapTxContext)) {
            return;
        }
        const { presetPercentage, preselectAsset } = ctx.getPresetInfo();
        ctx.swapCallback({
            // input
            txId: input.txId,
            currencyInAmountUSD: input.currencyInAmountUSD,
            currencyOutAmountUSD: input.currencyOutAmountUSD,
            isAutoSlippage: input.isAutoSlippage,
            // ctx
            isFiatInputMode: (_c = ctx.getIsFiatMode) === null || _c === void 0 ? void 0 : _c.call(ctx),
            account,
            swapTxContext,
            presetPercentage,
            preselectAsset,
            onSuccess: ctx.onSuccess,
            onFailure: ctx.onFailure,
            onPending: ctx.onPending,
            setCurrentStep: ctx.setCurrentStep,
            setSteps: ctx.setSteps,
        });
    }
    function executeWrap(input) {
        var _a, _b, _c;
        const account = (_a = ctx.getAccount) === null || _a === void 0 ? void 0 : _a.call(ctx);
        const swapTxContext = (_b = ctx.getSwapTxContext) === null || _b === void 0 ? void 0 : _b.call(ctx);
        // validate that the account and swapTxContext are defined
        if (!account || !swapTxContext) {
            return;
        }
        const txRequest = isUniswapX(swapTxContext) ? undefined : (_c = swapTxContext.txRequests) === null || _c === void 0 ? void 0 : _c[0];
        if (!txRequest || !input.inputCurrencyAmount || !input.wrapType) {
            return;
        }
        ctx.wrapCallback({
            // input
            inputCurrencyAmount: input.inputCurrencyAmount,
            txRequest,
            txId: input.txId,
            wrapType: input.wrapType,
            // ctx
            account,
            gasEstimates: swapTxContext.gasFeeEstimation.wrapEstimates,
            onSuccess: ctx.onSuccess,
            onFailure: ctx.onFailure,
        });
    }
    // Our unified interface - determines which operation to execute
    return {
        executeSwap: () => {
            var _a, _b, _c;
            const { currencyAmounts, currencyAmountsUSDValue, txId, wrapType } = ctx.getDerivedSwapInfo();
            const { customSlippageTolerance } = ctx.getTxSettings();
            if (wrapType) {
                executeWrap({
                    txId,
                    wrapType,
                    inputCurrencyAmount: (_a = currencyAmounts.input) !== null && _a !== void 0 ? _a : undefined,
                });
            }
            else {
                executeSwap({
                    txId,
                    currencyInAmountUSD: (_b = currencyAmountsUSDValue[CurrencyField.INPUT]) !== null && _b !== void 0 ? _b : undefined,
                    currencyOutAmountUSD: (_c = currencyAmountsUSDValue[CurrencyField.OUTPUT]) !== null && _c !== void 0 ? _c : undefined,
                    isAutoSlippage: !customSlippageTolerance,
                });
            }
        },
    };
}
//# sourceMappingURL=executeSwapService.js.map