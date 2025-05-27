export const selectWalletHideSmallBalancesSetting = (state) => state.userSettings.hideSmallBalances;
export const selectWalletHideSpamTokensSetting = (state) => state.userSettings.hideSpamTokens;
export const selectCurrentLanguage = (state) => state.userSettings.currentLanguage;
export const selectIsTestnetModeEnabled = (state) => { var _a; return (_a = state.userSettings.isTestnetModeEnabled) !== null && _a !== void 0 ? _a : false; };
//# sourceMappingURL=selectors.js.map