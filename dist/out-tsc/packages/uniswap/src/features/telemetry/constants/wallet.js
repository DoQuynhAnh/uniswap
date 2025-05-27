import { SharedEventName, SwapEventName } from '@uniswap/analytics-events';
import { ExtensionEventName } from 'uniswap/src/features/telemetry/constants/extension';
import { UniswapEventName } from 'uniswap/src/features/telemetry/constants/uniswap';
export var WalletEventName;
(function (WalletEventName) {
    WalletEventName["AppRating"] = "App Rating";
    WalletEventName["BackupMethodAdded"] = "Backup Method Added";
    WalletEventName["BackupMethodRemoved"] = "Backup Method Removed";
    WalletEventName["DappRequestCardClosed"] = "DappRequestCardClosed";
    WalletEventName["DappRequestCardPressed"] = "DappRequestCardPressed";
    WalletEventName["ExploreSearchCancel"] = "Explore Search Cancel";
    WalletEventName["ExternalLinkOpened"] = "External Link Opened";
    WalletEventName["GasEstimateAccuracy"] = "Gas Estimate Accuracy";
    WalletEventName["KeyringMissingMnemonic"] = "Keyring Missing Mnemonic";
    WalletEventName["ModalClosed"] = "Modal Closed";
    WalletEventName["MismatchAccountSignatureRequestBlocked"] = "Mismatch Account Signature Request Blocked";
    WalletEventName["NFTVisibilityChanged"] = "NFT Visibility Changed";
    WalletEventName["NFTsLoaded"] = "NFTs Loaded";
    WalletEventName["NetworkFilterSelected"] = "Network Filter Selected";
    WalletEventName["OnboardingIntroCardClosed"] = "Onboarding Intro Card Closed";
    WalletEventName["OnboardingIntroCardPressed"] = "Onboarding Intro Card Pressed";
    WalletEventName["OnboardingIntroCardSwiped"] = "Onboarding Intro Card Swiped";
    WalletEventName["PendingTransactionTimeout"] = "Pending Transaction Timeout";
    WalletEventName["PerformanceGraphql"] = "Performance GraphQL";
    WalletEventName["PortfolioBalanceFreshnessLag"] = "Portfolio Balance Freshness Lag";
    WalletEventName["SendRecipientSelected"] = "Send Recipient Selected";
    WalletEventName["ShareButtonClicked"] = "Share Button Clicked";
    WalletEventName["SwapSubmitted"] = "Swap Submitted to Provider";
    WalletEventName["TestnetEvent"] = "Testnet Event";
    WalletEventName["TestnetModeToggled"] = "Testnet Mode Toggled";
    WalletEventName["TokenVisibilityChanged"] = "Token Visibility Changed";
    WalletEventName["TransferCompleted"] = "Transfer Completed";
    WalletEventName["TransferSubmitted"] = "Transfer Submitted";
    WalletEventName["ViewRecoveryPhrase"] = "View Recovery Phrase";
    WalletEventName["WalletAdded"] = "Wallet Added";
    WalletEventName["WalletRemoved"] = "Wallet Removed";
})(WalletEventName || (WalletEventName = {}));
export const WALLET_TESTNET_CONFIG = {
    allowlistEvents: [
        SharedEventName.PAGE_VIEWED,
        SharedEventName.ELEMENT_CLICKED,
        UniswapEventName.TokenSelected,
        UniswapEventName.TooltipOpened,
        WalletEventName.ExternalLinkOpened,
        WalletEventName.NetworkFilterSelected,
        WalletEventName.SwapSubmitted,
        WalletEventName.TransferCompleted,
        WalletEventName.TransferSubmitted,
        SwapEventName.SWAP_SUBMITTED_BUTTON_CLICKED,
        SwapEventName.SWAP_TRANSACTION_COMPLETED,
        SwapEventName.SWAP_TRANSACTION_FAILED,
        SwapEventName.SWAP_QUOTE_RECEIVED,
        ExtensionEventName.DappChangeChain,
        ExtensionEventName.DappRequest,
    ],
    passthroughAllowlistEvents: [
        ExtensionEventName.DappConnect,
        ExtensionEventName.DappDisconnect,
        ExtensionEventName.DappDisconnectAll,
        ExtensionEventName.DappTroubleConnecting,
    ],
    aggregateEventName: WalletEventName.TestnetEvent,
};
//# sourceMappingURL=wallet.js.map