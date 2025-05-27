import { CurrencyField } from 'uniswap/src/types/currency';
export const getShouldResetExactAmountToken = (swapCtx, newState) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const isEditingInput = swapCtx.exactCurrencyField === CurrencyField.INPUT;
    const isEditingOutput = swapCtx.exactCurrencyField === CurrencyField.OUTPUT;
    const newInputAddress = (_b = (_a = newState.input) === null || _a === void 0 ? void 0 : _a.address) !== null && _b !== void 0 ? _b : (_c = swapCtx.input) === null || _c === void 0 ? void 0 : _c.address;
    const newOutputAddress = (_e = (_d = newState.output) === null || _d === void 0 ? void 0 : _d.address) !== null && _e !== void 0 ? _e : (_f = swapCtx.output) === null || _f === void 0 ? void 0 : _f.address;
    const shouldResetInputAmount = isEditingInput && ((_g = swapCtx.input) === null || _g === void 0 ? void 0 : _g.address) !== newInputAddress;
    const shouldResetOutputAmount = isEditingOutput && ((_h = swapCtx.output) === null || _h === void 0 ? void 0 : _h.address) !== newOutputAddress;
    return shouldResetInputAmount || shouldResetOutputAmount;
};
//# sourceMappingURL=utils.js.map