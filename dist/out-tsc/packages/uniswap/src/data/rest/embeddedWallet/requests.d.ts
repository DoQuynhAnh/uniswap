import { Action, AuthenticationTypes, ChallengeResponse, CreateWalletResponse, DeleteAuthenticatorResponse, DisconnectWalletResponse, ExportSeedPhraseResponse, ListAuthenticatorsResponse, RegisterNewAuthenticatorResponse, RegistrationOptions, SecuredChallengeResponse, SignMessagesResponse, SignTransactionsResponse, SignTypedDataBatchResponse, WalletSigninResponse } from '@uniswap/client-embeddedwallet/dist/uniswap/embeddedwallet/v1/service_pb';
export declare const EMBEDDED_WALLET_CLIENT: import("@connectrpc/connect").PromiseClient<{
    readonly typeName: "uniswap.embeddedwallet.v1.EmbeddedWalletService";
    readonly methods: {
        readonly challenge: {
            readonly name: "Challenge";
            readonly I: typeof import("@uniswap/client-embeddedwallet/dist/uniswap/embeddedwallet/v1/service_pb").ChallengeRequest;
            readonly O: typeof ChallengeResponse;
            readonly kind: import("@bufbuild/protobuf").MethodKind.Unary;
        };
        readonly securedChallenge: {
            readonly name: "SecuredChallenge";
            readonly I: typeof import("@uniswap/client-embeddedwallet/dist/uniswap/embeddedwallet/v1/service_pb").SecuredChallengeRequest;
            readonly O: typeof SecuredChallengeResponse;
            readonly kind: import("@bufbuild/protobuf").MethodKind.Unary;
        };
        readonly createWallet: {
            readonly name: "CreateWallet";
            readonly I: typeof import("@uniswap/client-embeddedwallet/dist/uniswap/embeddedwallet/v1/service_pb").CreateWalletRequest;
            readonly O: typeof CreateWalletResponse;
            readonly kind: import("@bufbuild/protobuf").MethodKind.Unary;
        };
        readonly signMessages: {
            readonly name: "SignMessages";
            readonly I: typeof import("@uniswap/client-embeddedwallet/dist/uniswap/embeddedwallet/v1/service_pb").SignMessagesRequest;
            readonly O: typeof SignMessagesResponse;
            readonly kind: import("@bufbuild/protobuf").MethodKind.Unary;
        };
        readonly signTransactions: {
            readonly name: "SignTransactions";
            readonly I: typeof import("@uniswap/client-embeddedwallet/dist/uniswap/embeddedwallet/v1/service_pb").SignTransactionsRequest;
            readonly O: typeof SignTransactionsResponse;
            readonly kind: import("@bufbuild/protobuf").MethodKind.Unary;
        };
        readonly walletSignin: {
            readonly name: "WalletSignin";
            readonly I: typeof import("@uniswap/client-embeddedwallet/dist/uniswap/embeddedwallet/v1/service_pb").WalletSigninRequest;
            readonly O: typeof WalletSigninResponse;
            readonly kind: import("@bufbuild/protobuf").MethodKind.Unary;
        };
        readonly signTypedDataBatch: {
            readonly name: "SignTypedDataBatch";
            readonly I: typeof import("@uniswap/client-embeddedwallet/dist/uniswap/embeddedwallet/v1/service_pb").SignTypedDataBatchRequest;
            readonly O: typeof SignTypedDataBatchResponse;
            readonly kind: import("@bufbuild/protobuf").MethodKind.Unary;
        };
        readonly exportSeedPhrase: {
            readonly name: "ExportSeedPhrase";
            readonly I: typeof import("@uniswap/client-embeddedwallet/dist/uniswap/embeddedwallet/v1/service_pb").ExportSeedPhraseRequest;
            readonly O: typeof ExportSeedPhraseResponse;
            readonly kind: import("@bufbuild/protobuf").MethodKind.Unary;
        };
        readonly deleteAuthenticator: {
            readonly name: "DeleteAuthenticator";
            readonly I: typeof import("@uniswap/client-embeddedwallet/dist/uniswap/embeddedwallet/v1/service_pb").DeleteAuthenticatorRequest;
            readonly O: typeof DeleteAuthenticatorResponse;
            readonly kind: import("@bufbuild/protobuf").MethodKind.Unary;
        };
        readonly disconnectWallet: {
            readonly name: "DisconnectWallet";
            readonly I: typeof import("@uniswap/client-embeddedwallet/dist/uniswap/embeddedwallet/v1/service_pb").DisconnectWalletRequest;
            readonly O: typeof DisconnectWalletResponse;
            readonly kind: import("@bufbuild/protobuf").MethodKind.Unary;
        };
        readonly registerNewAuthenticator: {
            readonly name: "RegisterNewAuthenticator";
            readonly I: typeof import("@uniswap/client-embeddedwallet/dist/uniswap/embeddedwallet/v1/service_pb").RegisterNewAuthenticatorRequest;
            readonly O: typeof RegisterNewAuthenticatorResponse;
            readonly kind: import("@bufbuild/protobuf").MethodKind.Unary;
        };
        readonly listAuthenticators: {
            readonly name: "ListAuthenticators";
            readonly I: typeof import("@uniswap/client-embeddedwallet/dist/uniswap/embeddedwallet/v1/service_pb").ListAuthenticatorsRequest;
            readonly O: typeof ListAuthenticatorsResponse;
            readonly kind: import("@bufbuild/protobuf").MethodKind.Unary;
        };
    };
}>;
export declare function fetchChallengeRequest({ type, action, options, }: {
    type: AuthenticationTypes;
    action: Action;
    options?: RegistrationOptions;
}): Promise<ChallengeResponse>;
export declare function fetchSecuredChallengeRequest({ type, action, b64EncryptionPublicKey, }: {
    type: AuthenticationTypes;
    action: Action;
    b64EncryptionPublicKey: string;
}): Promise<SecuredChallengeResponse>;
export declare function fetchCreateWalletRequest({ credential }: {
    credential: string;
}): Promise<CreateWalletResponse>;
export declare function fetchWalletSigninRequest({ credential }: {
    credential: string;
}): Promise<WalletSigninResponse>;
export declare function fetchSignMessagesRequest({ messages, credential, }: {
    messages: string[];
    credential: string | undefined;
}): Promise<SignMessagesResponse>;
export declare function fetchSignTransactionRequest({ transactions, credential, }: {
    transactions: string[];
    credential: string | undefined;
}): Promise<SignTransactionsResponse>;
export declare function fetchSignTypedDataRequest({ typedDataBatch, credential, }: {
    typedDataBatch: string[];
    credential: string | undefined;
}): Promise<SignTypedDataBatchResponse>;
export declare function fetchExportSeedPhraseRequest({ encryptionKey, credential, }: {
    encryptionKey: string;
    credential: string;
}): Promise<ExportSeedPhraseResponse>;
export declare function fetchDisconnectRequest(): Promise<DisconnectWalletResponse>;
export declare function fetchListAuthenticatorsRequest({ credential, }: {
    credential?: string;
}): Promise<ListAuthenticatorsResponse>;
export declare function fetchRegisterNewAuthenticatorRequest({ newCredential, newAuthenticationType, existingCredential, existingAuthenticationType, }: {
    newCredential: string;
    newAuthenticationType: AuthenticationTypes;
    existingCredential: string;
    existingAuthenticationType: AuthenticationTypes;
}): Promise<RegisterNewAuthenticatorResponse>;
export declare function fetchDeleteAuthenticatorRequest({ credential, authenticationType, authenticatorId, authenticatorType, }: {
    credential: string;
    authenticationType: AuthenticationTypes;
    authenticatorId: string;
    authenticatorType: string;
}): Promise<DeleteAuthenticatorResponse>;
//# sourceMappingURL=requests.d.ts.map