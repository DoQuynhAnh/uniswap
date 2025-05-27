import { SLIPPAGE_CRITICAL_TOLERANCE } from 'uniswap/src/constants/transactions';
export const getSlippageWarningColor = (customSlippageValue, autoSlippageTolerance, fallbackColorValue) => {
    if (customSlippageValue >= SLIPPAGE_CRITICAL_TOLERANCE) {
        return '$statusCritical';
    }
    if (customSlippageValue > autoSlippageTolerance) {
        return '$statusWarning';
    }
    return fallbackColorValue !== null && fallbackColorValue !== void 0 ? fallbackColorValue : '$neutral2';
};
//# sourceMappingURL=styleHelpers.js.map