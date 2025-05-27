import { UniswapEventName } from 'uniswap/src/features/telemetry/constants';
import { sendAnalyticsEvent } from 'uniswap/src/features/telemetry/send';
import { TransactionScreen, } from 'uniswap/src/features/transactions/components/TransactionModal/TransactionModalContext';
import { CurrencyField } from 'uniswap/src/types/currency';
import { createTransactionId } from 'uniswap/src/utils/createTransactionId';
// this will be in swapService
export function createPrepareSwap(ctx) {
    function prepareSwap() {
        var _a;
        try {
            const getAction = createGetAction(ctx);
            const handleEventAction = createHandleEventAction(ctx);
            const action = getAction({
                skipBridgingWarning: ctx.warningService.getSkipBridgingWarning(),
                skipMaxTransferWarning: ctx.warningService.getSkipMaxTransferWarning(),
                skipTokenProtectionWarning: ctx.warningService.getSkipTokenProtectionWarning(),
            });
            handleEventAction(action);
        }
        catch (error) {
            (_a = ctx.logger) === null || _a === void 0 ? void 0 : _a.error(error, {
                tags: {
                    file: 'useOnReviewPress',
                    function: 'prepareSwap',
                },
            });
        }
        // always reset the warning service after the action is handled
        ctx.warningService.reset();
    }
    return prepareSwap;
}
const ReviewActionType = {
    REDIRECT: 'REDIRECT',
    CONNECT_WALLET: 'CONNECT_WALLET',
    SHOW_VIEW_ONLY: 'SHOW_VIEW_ONLY',
    INTERFACE_WRAP: 'INTERFACE_WRAP',
    SHOW_TOKEN_WARNING: 'SHOW_TOKEN_WARNING',
    SHOW_BRIDGING_WARNING: 'SHOW_BRIDGING_WARNING',
    SHOW_LOW_BALANCE: 'SHOW_LOW_BALANCE',
    PROCEED_TO_REVIEW: 'PROCEED_TO_REVIEW',
};
function createGetAction(ctx) {
    const { swapRedirectCallback, activeAccount, onConnectWallet, isViewOnlyWallet, isInterfaceWrap, currencies, exactAmountToken, exactCurrencyField, chainId, needsTokenProtectionWarning, needsBridgingWarning, needsLowNativeBalanceWarning, } = ctx;
    function getAction(args) {
        var _a, _b;
        if (swapRedirectCallback) {
            const redirectPayload = {
                inputCurrency: (_a = currencies[CurrencyField.INPUT]) === null || _a === void 0 ? void 0 : _a.currency,
                outputCurrency: (_b = currencies[CurrencyField.OUTPUT]) === null || _b === void 0 ? void 0 : _b.currency,
                typedValue: exactAmountToken,
                independentField: exactCurrencyField,
                chainId,
            };
            return {
                type: ReviewActionType.REDIRECT,
                payload: redirectPayload,
            };
        }
        else if (!activeAccount && onConnectWallet) {
            return { type: ReviewActionType.CONNECT_WALLET };
        }
        else if (isViewOnlyWallet) {
            return { type: ReviewActionType.SHOW_VIEW_ONLY };
        }
        else if (isInterfaceWrap) {
            return { type: ReviewActionType.INTERFACE_WRAP };
        }
        else if (needsTokenProtectionWarning && !args.skipTokenProtectionWarning) {
            return { type: ReviewActionType.SHOW_TOKEN_WARNING };
        }
        else if (needsBridgingWarning && !args.skipBridgingWarning) {
            return { type: ReviewActionType.SHOW_BRIDGING_WARNING };
        }
        else if (needsLowNativeBalanceWarning && !args.skipMaxTransferWarning) {
            const lowBalancePayload = { location: 'swap' };
            return {
                type: ReviewActionType.SHOW_LOW_BALANCE,
                payload: lowBalancePayload,
            };
        }
        return { type: ReviewActionType.PROCEED_TO_REVIEW };
    }
    return getAction;
}
function createHandleEventAction(ctx) {
    const { handleShowViewOnlyModal, handleShowTokenWarningModal, handleShowBridgingWarningModal, handleShowMaxNativeTransferModal, swapRedirectCallback, onConnectWallet, onInterfaceWrap, updateSwapForm, setScreen, } = ctx;
    function handleEventAction(action) {
        switch (action.type) {
            case ReviewActionType.REDIRECT:
                swapRedirectCallback === null || swapRedirectCallback === void 0 ? void 0 : swapRedirectCallback(action.payload);
                break;
            case ReviewActionType.CONNECT_WALLET:
                onConnectWallet === null || onConnectWallet === void 0 ? void 0 : onConnectWallet();
                break;
            case ReviewActionType.SHOW_VIEW_ONLY:
                handleShowViewOnlyModal();
                break;
            case ReviewActionType.INTERFACE_WRAP:
                onInterfaceWrap === null || onInterfaceWrap === void 0 ? void 0 : onInterfaceWrap();
                break;
            case ReviewActionType.SHOW_TOKEN_WARNING:
                handleShowTokenWarningModal();
                break;
            case ReviewActionType.SHOW_BRIDGING_WARNING:
                handleShowBridgingWarningModal();
                break;
            case ReviewActionType.SHOW_LOW_BALANCE:
                handleShowMaxNativeTransferModal();
                sendAnalyticsEvent(UniswapEventName.LowNetworkTokenInfoModalOpened, action.payload);
                break;
            case ReviewActionType.PROCEED_TO_REVIEW:
                updateSwapForm({ txId: createTransactionId() });
                setScreen(TransactionScreen.Review);
                break;
        }
    }
    return handleEventAction;
}
//# sourceMappingURL=prepareSwapService.js.map