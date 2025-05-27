import { Action, Authenticator, RegistrationOptions_AuthenticatorAttachment as AuthenticatorAttachment, WalletSigninResponse } from '@uniswap/client-embeddedwallet/dist/uniswap/embeddedwallet/v1/service_pb';
export { Action, Authenticator, RegistrationOptions_AuthenticatorAttachment as AuthenticatorAttachment, AuthenticatorNameType, } from '@uniswap/client-embeddedwallet/dist/uniswap/embeddedwallet/v1/service_pb';
export declare function createNewEmbeddedWallet(unitag: string): Promise<`0x${string}` | undefined>;
export declare function authenticateWithPasskey(action: Action, walletAddress?: string): Promise<string | undefined>;
export declare function authenticateWithPasskeyForSeedPhraseExport(): Promise<string | undefined>;
export declare function signInWithPasskey(): Promise<WalletSigninResponse | undefined>;
export declare function signMessagesWithPasskey(messages: string[], walletAddress?: string): Promise<string[] | undefined>;
export declare function signTransactionWithPasskey(transactions: string[], walletAddress?: string): Promise<string[] | undefined>;
export declare function signTypedDataWithPasskey(typedDataBatch: string[], walletAddress?: string): Promise<string[] | undefined>;
export declare function exportEncryptedSeedPhrase(encryptionKey: string): Promise<string | undefined>;
export declare function disconnectWallet(): Promise<void>;
export declare function listAuthenticators(walletAddress?: string): Promise<Authenticator[]>;
export declare function registerNewAuthenticator({ authenticatorAttachment, existingCredential, username, }: {
    authenticatorAttachment: AuthenticatorAttachment;
    existingCredential?: string;
    username?: string;
}): Promise<boolean | undefined>;
export declare function deleteAuthenticator({ authenticator, credential, }: {
    authenticator: Authenticator;
    credential?: string;
}): Promise<boolean | undefined>;
//# sourceMappingURL=embeddedWallet.d.ts.map