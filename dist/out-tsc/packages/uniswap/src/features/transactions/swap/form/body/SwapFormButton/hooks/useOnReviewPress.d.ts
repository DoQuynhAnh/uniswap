type CallbackArgs = Record<'skipBridgingWarning' | 'skipTokenProtectionWarning' | 'skipMaxTransferWarning', boolean>;
export type OnReviewPress = (options: CallbackArgs) => void;
type PressHandler = () => void;
type UseOnReviewPress = () => {
    onReviewPress: OnReviewPress;
    handleOnReviewPress: PressHandler;
    handleOnAcknowledgeTokenWarningPress: PressHandler;
    handleOnAcknowledgeLowNativeBalancePress: PressHandler;
};
/**
 * TODO(WALL-5600): refactor this so all previous warnings are skipped
 *
 * Order of modals:
 * 1. Token protection warning
 * 2. Bridging warning
 * 3. Low native balance warning
 *
 * When skipping, ensure the previous modals are skipped as well to prevent an infinite loop
 * (eg if you skip bridging warning, you should also skip token protection warning)
 */
export declare const useOnReviewPress: UseOnReviewPress;
export {};
//# sourceMappingURL=useOnReviewPress.d.ts.map