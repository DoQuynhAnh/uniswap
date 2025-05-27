export declare enum HomeTabs {
    Tokens = "Tokens",
    NFTs = "NFTs",
    Activity = "Activity"
}
export declare enum ExtensionScreens {
    Home = "home",
    PopupOpenExtension = "PopupOpenExtension",
    UnsupportedBrowserScreen = "UnsupportedBrowserScreen",
    ManageDappConnectionsScreen = "ManageDappConnectionsScreen",
    Settings = "Settings"
}
export declare enum ExtensionOnboardingFlow {
    New = "New",
    Import = "Import",// Import via seed phrase
    Scantastic = "Scantastic",
    Passkey = "Passkey"
}
export declare enum ExtensionOnboardingScreens {
    Landing = "OnboardingLanding",
    SetPassword = "SetPassword",
    ClaimUnitag = "ClaimUnitag",
    SelectImportMethod = "SelectImportMethod",
    InitiatePasskeyAuth = "InitiatePasskeyAuth",
    PasskeyImport = "PasskeyImport",
    SeedPhraseInput = "SeedPhraseInput",
    SelectWallet = "SelectWallet",
    OnboardingQRCode = "OnboardingQRCode",
    EnterOTP = "EnterOTP"
}
export declare enum ExtensionUnitagClaimScreens {
    Intro = "Intro",
    CreateUsername = "CreateUsername"
}
export type ExtensionScreen = HomeTabs | ExtensionScreens | ExtensionOnboardingScreens | ExtensionUnitagClaimScreens;
//# sourceMappingURL=extension.d.ts.map