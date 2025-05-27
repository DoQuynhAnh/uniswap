export var AppNotificationType;
(function (AppNotificationType) {
    AppNotificationType[AppNotificationType["Default"] = 0] = "Default";
    AppNotificationType[AppNotificationType["Error"] = 1] = "Error";
    AppNotificationType[AppNotificationType["WalletConnect"] = 2] = "WalletConnect";
    AppNotificationType[AppNotificationType["Transaction"] = 3] = "Transaction";
    AppNotificationType[AppNotificationType["TransactionPending"] = 4] = "TransactionPending";
    AppNotificationType[AppNotificationType["Favorites"] = 5] = "Favorites";
    AppNotificationType[AppNotificationType["Copied"] = 6] = "Copied";
    AppNotificationType[AppNotificationType["CopyFailed"] = 7] = "CopyFailed";
    AppNotificationType[AppNotificationType["Success"] = 8] = "Success";
    AppNotificationType[AppNotificationType["NetworkChanged"] = 9] = "NetworkChanged";
    AppNotificationType[AppNotificationType["NetworkChangedBridge"] = 10] = "NetworkChangedBridge";
    AppNotificationType[AppNotificationType["ChooseCountry"] = 11] = "ChooseCountry";
    AppNotificationType[AppNotificationType["AssetVisibility"] = 12] = "AssetVisibility";
    AppNotificationType[AppNotificationType["SwapPending"] = 13] = "SwapPending";
    AppNotificationType[AppNotificationType["TransferCurrencyPending"] = 14] = "TransferCurrencyPending";
    AppNotificationType[AppNotificationType["ScantasticComplete"] = 15] = "ScantasticComplete";
    AppNotificationType[AppNotificationType["DappConnected"] = 16] = "DappConnected";
    AppNotificationType[AppNotificationType["DappDisconnected"] = 17] = "DappDisconnected";
    AppNotificationType[AppNotificationType["NotSupportedNetwork"] = 18] = "NotSupportedNetwork";
    AppNotificationType[AppNotificationType["PasswordChanged"] = 19] = "PasswordChanged";
})(AppNotificationType || (AppNotificationType = {}));
export var CopyNotificationType;
(function (CopyNotificationType) {
    CopyNotificationType["Address"] = "address";
    CopyNotificationType["Unitag"] = "unitag";
    CopyNotificationType["ContractAddress"] = "contractAddress";
    CopyNotificationType["Calldata"] = "calldata";
    CopyNotificationType["TransactionId"] = "transactionId";
    CopyNotificationType["Image"] = "image";
    CopyNotificationType["TokenUrl"] = "tokenUrl";
    CopyNotificationType["BlockExplorerUrl"] = "blockExplorerUrl";
    CopyNotificationType["NftUrl"] = "nftUrl";
})(CopyNotificationType || (CopyNotificationType = {}));
//# sourceMappingURL=types.js.map