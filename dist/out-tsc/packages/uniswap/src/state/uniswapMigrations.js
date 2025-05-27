import { getValidAddress } from 'uniswap/src/utils/addresses';
// Mobile: 82
// Extension: 18
// Web: 21
export function unchecksumDismissedTokenWarningKeys(state) {
    var _a;
    if (!((_a = state === null || state === void 0 ? void 0 : state.tokens) === null || _a === void 0 ? void 0 : _a.dismissedTokenWarnings)) {
        return state;
    }
    const newDismissedWarnings = Object.entries(state.tokens.dismissedTokenWarnings).reduce((acc, [chainId, warningsForChain]) => ({
        ...acc,
        [chainId]: Object.entries(warningsForChain).reduce((chainAcc, [address, warning]) => {
            const lowercasedAddress = getValidAddress(address, false);
            return lowercasedAddress ? { ...chainAcc, [lowercasedAddress]: warning } : chainAcc;
        }, {}),
    }), {});
    return {
        ...state,
        tokens: {
            ...state.tokens,
            dismissedTokenWarnings: newDismissedWarnings,
        },
    };
}
//# sourceMappingURL=uniswapMigrations.js.map