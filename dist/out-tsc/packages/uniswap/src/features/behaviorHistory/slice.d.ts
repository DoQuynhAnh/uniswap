/**
 * Used to store persisted info about a users interactions with UI.
 * We use this to show conditional UI, usually only for the first time a user views a new feature.
 */
export interface UniswapBehaviorHistoryState {
    hasViewedBridgingBanner?: boolean;
    hasDismissedBridgingWarning?: boolean;
    hasDismissedLowNetworkTokenWarning?: boolean;
    hasViewedContractAddressExplainer?: boolean;
    unichainPromotion?: {
        coldBannerDismissed?: boolean;
        warmBannerDismissed?: boolean;
        networkSelectorAnimationSeen?: boolean;
        networkSelectorTooltipSeen?: boolean;
        bridgingTooltipSeen?: boolean;
        bridgingAnimationSeen?: boolean;
        isFirstUnichainBridgeSelection?: boolean;
    };
    hasShownMismatchToast?: boolean;
    /** Wallet addresses with timestamps that have dismissed the graduate wallet card for 30 days. The same property in the application reducer is a list of wallet addresses that have dismissed the graduated wallet card for this session. */
    embeddedWalletGraduateCardDismissed?: {
        [walletAddress: string]: number;
    };
}
export declare const initialUniswapBehaviorHistoryState: UniswapBehaviorHistoryState;
export declare const setHasViewedBridgingBanner: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "uniswapBehaviorHistory/setHasViewedBridgingBanner">, setHasDismissedBridgingWarning: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "uniswapBehaviorHistory/setHasDismissedBridgingWarning">, setHasDismissedLowNetworkTokenWarning: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "uniswapBehaviorHistory/setHasDismissedLowNetworkTokenWarning">, setHasDismissedUnichainColdBanner: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "uniswapBehaviorHistory/setHasDismissedUnichainColdBanner">, setHasDismissedUnichainWarmBanner: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "uniswapBehaviorHistory/setHasDismissedUnichainWarmBanner">, setHasSeenNetworkSelectorAnimation: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "uniswapBehaviorHistory/setHasSeenNetworkSelectorAnimation">, setHasSeenNetworkSelectorTooltip: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "uniswapBehaviorHistory/setHasSeenNetworkSelectorTooltip">, setHasSeenBridgingTooltip: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "uniswapBehaviorHistory/setHasSeenBridgingTooltip">, setIsFirstUnichainBridgeSelection: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "uniswapBehaviorHistory/setIsFirstUnichainBridgeSelection">, setHasSeenBridgingAnimation: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "uniswapBehaviorHistory/setHasSeenBridgingAnimation">, resetUniswapBehaviorHistory: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"uniswapBehaviorHistory/resetUniswapBehaviorHistory">, setHasViewedContractAddressExplainer: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "uniswapBehaviorHistory/setHasViewedContractAddressExplainer">, setHasShownMismatchToast: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "uniswapBehaviorHistory/setHasShownMismatchToast">, setEmbeddedWalletGraduateCardDismissed: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    walletAddress: string;
}, "uniswapBehaviorHistory/setEmbeddedWalletGraduateCardDismissed">;
export declare const uniswapBehaviorHistoryReducer: import("redux").Reducer<UniswapBehaviorHistoryState>;
//# sourceMappingURL=slice.d.ts.map