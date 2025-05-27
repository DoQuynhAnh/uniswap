import { createSelector } from '@reduxjs/toolkit';
export const selectTokenBalanceOverrides = (state) => state.portfolio.tokenBalanceOverrides;
export const makeSelectTokenBalanceOverridesForWalletAddress = () => createSelector(selectTokenBalanceOverrides, (_, walletAddress) => walletAddress, (tokenBalanceOverrides, walletAddress) => tokenBalanceOverrides[walletAddress.toLowerCase()]);
//# sourceMappingURL=selectors.js.map