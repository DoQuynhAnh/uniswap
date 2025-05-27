/**
 * Marks if a transaction was initiated natively within app, or from external source.
 * External transactions are initiated from dapps, WC, uwulink, etc.
 */
export var TransactionOriginType;
(function (TransactionOriginType) {
    TransactionOriginType["Internal"] = "internal";
    TransactionOriginType["External"] = "external";
})(TransactionOriginType || (TransactionOriginType = {}));
export var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["Canceled"] = "cancelled";
    TransactionStatus["Cancelling"] = "cancelling";
    TransactionStatus["FailedCancel"] = "failedCancel";
    TransactionStatus["Success"] = "confirmed";
    TransactionStatus["Failed"] = "failed";
    TransactionStatus["Pending"] = "pending";
    TransactionStatus["Replacing"] = "replacing";
    TransactionStatus["Expired"] = "expired";
    TransactionStatus["InsufficientFunds"] = "insufficientFunds";
    TransactionStatus["Unknown"] = "unknown";
    // May want more granular options here later like InMemPool
})(TransactionStatus || (TransactionStatus = {}));
export var QueuedOrderStatus;
(function (QueuedOrderStatus) {
    QueuedOrderStatus["Waiting"] = "waiting";
    QueuedOrderStatus["ApprovalFailed"] = "approvalFailed";
    QueuedOrderStatus["WrapFailed"] = "wrapFailed";
    QueuedOrderStatus["AppClosed"] = "appClosed";
    QueuedOrderStatus["Stale"] = "stale";
    QueuedOrderStatus["SubmissionFailed"] = "submissionFailed";
    QueuedOrderStatus["Submitted"] = "submitted";
})(QueuedOrderStatus || (QueuedOrderStatus = {}));
export const TEMPORARY_TRANSACTION_STATUSES = [
    TransactionStatus.Pending,
    TransactionStatus.Replacing,
    TransactionStatus.Cancelling,
];
const FINAL_STATUSES = [
    TransactionStatus.Success,
    TransactionStatus.Failed,
    TransactionStatus.Canceled,
    TransactionStatus.FailedCancel,
    TransactionStatus.Expired,
];
export var NFTTradeType;
(function (NFTTradeType) {
    NFTTradeType["BUY"] = "buy";
    NFTTradeType["SELL"] = "sell";
})(NFTTradeType || (NFTTradeType = {}));
/**
 * Be careful adding to this enum, always assign a unique value (typescript will not prevent duplicate values).
 * These values are persisted in state and if you change the value it will cause errors
 */
export var TransactionType;
(function (TransactionType) {
    // Token Specific
    TransactionType["Approve"] = "approve";
    TransactionType["Permit2Approve"] = "permit2-approve";
    TransactionType["Bridge"] = "bridge";
    TransactionType["Swap"] = "swap";
    TransactionType["Wrap"] = "wrap";
    // NFT specific
    TransactionType["NFTApprove"] = "nft-approve";
    TransactionType["NFTTrade"] = "nft-trade";
    TransactionType["NFTMint"] = "nft-mint";
    // All asset types
    TransactionType["Send"] = "send";
    TransactionType["Receive"] = "receive";
    // Fiat onramp
    TransactionType["FiatPurchaseDeprecated"] = "fiat-purchase";
    TransactionType["LocalOnRamp"] = "local-onramp";
    TransactionType["LocalOffRamp"] = "local-offramp";
    TransactionType["OnRampPurchase"] = "onramp-purchase";
    TransactionType["OnRampTransfer"] = "onramp-transfer";
    TransactionType["OffRampSale"] = "offramp-sale";
    // General
    TransactionType["WCConfirm"] = "wc-confirm";
    TransactionType["Unknown"] = "unknown";
    // Send Calls
    TransactionType["SendCalls"] = "send-calls";
})(TransactionType || (TransactionType = {}));
export function isConfirmedSwapTypeInfo(typeInfo) {
    return Boolean(typeInfo.inputCurrencyAmountRaw &&
        typeInfo.outputCurrencyAmountRaw);
}
export function isBridgeTypeInfo(typeInfo) {
    return typeInfo.type === TransactionType.Bridge;
}
export function isFinalizedTxStatus(status) {
    return FINAL_STATUSES.some((finalStatus) => finalStatus === status);
}
export function isFinalizedTx(tx) {
    const validateFinalizedTx = () => {
        const { status, hash } = tx;
        if (status === TransactionStatus.Success) {
            if (!hash) {
                return undefined;
            }
            return { ...tx, status, hash };
        }
        else if (isFinalizedTxStatus(status)) {
            return { ...tx, status };
        }
        return undefined;
    };
    // Validation fn prevents & future-proofs the typeguard from illicit casting
    return Boolean(validateFinalizedTx());
}
export var TransactionDetailsType;
(function (TransactionDetailsType) {
    TransactionDetailsType["Transaction"] = "TransactionDetails";
    TransactionDetailsType["OnRamp"] = "OnRampTransactionDetails";
    TransactionDetailsType["OffRamp"] = "OffRampTransactionDetails";
    TransactionDetailsType["UniswapXOrder"] = "SwapOrderDetails";
})(TransactionDetailsType || (TransactionDetailsType = {}));
//# sourceMappingURL=transactionDetails.js.map