/// <reference types="react" />
interface SwapFormWarningState {
    isTokenWarningModalVisible: boolean;
    isBridgingWarningModalVisible: boolean;
    isMaxNativeTransferModalVisible: boolean;
    isViewOnlyModalVisible: boolean;
    handleShowTokenWarningModal: () => void;
    handleHideTokenWarningModal: () => void;
    handleShowBridgingWarningModal: () => void;
    handleHideBridgingWarningModal: () => void;
    handleShowMaxNativeTransferModal: () => void;
    handleHideMaxNativeTransferModal: () => void;
    handleShowViewOnlyModal: () => void;
    handleHideViewOnlyModal: () => void;
}
export declare const SwapFormWarningStateContext: import("react").Context<SwapFormWarningState>;
export declare const useSwapFormWarningState: () => SwapFormWarningState;
export {};
//# sourceMappingURL=SwapFormWarningStateContext.d.ts.map