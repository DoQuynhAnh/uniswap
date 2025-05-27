import { createSlice } from '@reduxjs/toolkit';
export const initialUniswapBehaviorHistoryState = {
    hasViewedBridgingBanner: false,
    hasDismissedBridgingWarning: false,
    hasDismissedLowNetworkTokenWarning: false,
    hasViewedContractAddressExplainer: false,
    unichainPromotion: {
        coldBannerDismissed: false,
        warmBannerDismissed: false,
        networkSelectorAnimationSeen: false,
        networkSelectorTooltipSeen: false,
        bridgingTooltipSeen: false,
        bridgingAnimationSeen: false,
        isFirstUnichainBridgeSelection: true,
    },
    hasShownMismatchToast: false,
};
const slice = createSlice({
    name: 'uniswapBehaviorHistory',
    initialState: initialUniswapBehaviorHistoryState,
    reducers: {
        setHasViewedBridgingBanner: (state, action) => {
            state.hasViewedBridgingBanner = action.payload;
        },
        setHasDismissedBridgingWarning: (state, action) => {
            state.hasDismissedBridgingWarning = action.payload;
        },
        setHasDismissedLowNetworkTokenWarning: (state, action) => {
            state.hasDismissedLowNetworkTokenWarning = action.payload;
        },
        setHasViewedContractAddressExplainer: (state, action) => {
            state.hasViewedContractAddressExplainer = action.payload;
        },
        setHasDismissedUnichainColdBanner: (state, action) => {
            var _a;
            (_a = state.unichainPromotion) !== null && _a !== void 0 ? _a : (state.unichainPromotion = {});
            state.unichainPromotion.coldBannerDismissed = action.payload;
        },
        setHasDismissedUnichainWarmBanner: (state, action) => {
            var _a;
            (_a = state.unichainPromotion) !== null && _a !== void 0 ? _a : (state.unichainPromotion = {});
            state.unichainPromotion.warmBannerDismissed = action.payload;
        },
        setHasSeenNetworkSelectorAnimation: (state, action) => {
            var _a;
            (_a = state.unichainPromotion) !== null && _a !== void 0 ? _a : (state.unichainPromotion = {});
            state.unichainPromotion.networkSelectorAnimationSeen = action.payload;
        },
        setHasSeenNetworkSelectorTooltip: (state, action) => {
            var _a;
            (_a = state.unichainPromotion) !== null && _a !== void 0 ? _a : (state.unichainPromotion = {});
            state.unichainPromotion.networkSelectorTooltipSeen = action.payload;
        },
        setHasSeenBridgingTooltip: (state, action) => {
            var _a;
            (_a = state.unichainPromotion) !== null && _a !== void 0 ? _a : (state.unichainPromotion = {});
            state.unichainPromotion.bridgingTooltipSeen = action.payload;
        },
        setIsFirstUnichainBridgeSelection: (state, action) => {
            var _a;
            (_a = state.unichainPromotion) !== null && _a !== void 0 ? _a : (state.unichainPromotion = {});
            state.unichainPromotion.isFirstUnichainBridgeSelection = action.payload;
        },
        setHasSeenBridgingAnimation: (state, action) => {
            var _a;
            (_a = state.unichainPromotion) !== null && _a !== void 0 ? _a : (state.unichainPromotion = {});
            state.unichainPromotion.bridgingAnimationSeen = action.payload;
        },
        // Should only be used for testing
        resetUniswapBehaviorHistory: (_state, _action) => {
            return initialUniswapBehaviorHistoryState;
        },
        setHasShownMismatchToast: (state, action) => {
            state.hasShownMismatchToast = action.payload;
        },
        setEmbeddedWalletGraduateCardDismissed: (state, action) => {
            var _a;
            (_a = state.embeddedWalletGraduateCardDismissed) !== null && _a !== void 0 ? _a : (state.embeddedWalletGraduateCardDismissed = {});
            state.embeddedWalletGraduateCardDismissed[action.payload.walletAddress] = new Date().getTime();
        },
    },
});
export const { setHasViewedBridgingBanner, setHasDismissedBridgingWarning, setHasDismissedLowNetworkTokenWarning, setHasDismissedUnichainColdBanner, setHasDismissedUnichainWarmBanner, setHasSeenNetworkSelectorAnimation, setHasSeenNetworkSelectorTooltip, setHasSeenBridgingTooltip, setIsFirstUnichainBridgeSelection, setHasSeenBridgingAnimation, resetUniswapBehaviorHistory, setHasViewedContractAddressExplainer, setHasShownMismatchToast, setEmbeddedWalletGraduateCardDismissed, } = slice.actions;
export const uniswapBehaviorHistoryReducer = slice.reducer;
//# sourceMappingURL=slice.js.map