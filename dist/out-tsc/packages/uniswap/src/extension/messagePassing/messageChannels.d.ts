import { MessageParsers } from 'uniswap/src/extension/messagePassing/platform';
import { ExtensionToInterfaceRequestType, InterfaceToExtensionRequestType, PasskeyCredentialError, PasskeyCredentialRetrieved, PasskeyRequest, PasskeySignInFlowOpened } from 'uniswap/src/extension/messagePassing/types/requests';
export type ExtensionToInterfaceMessageSchemas = {
    [ExtensionToInterfaceRequestType.PasskeyRequest]: PasskeyRequest;
};
export declare const extensionToInterfaceMessageParsers: MessageParsers<ExtensionToInterfaceRequestType, ExtensionToInterfaceMessageSchemas>;
export type InterfaceToExtensionMessageSchemas = {
    [InterfaceToExtensionRequestType.PasskeySignInFlowOpened]: PasskeySignInFlowOpened;
    [InterfaceToExtensionRequestType.PasskeyCredentialRetrieved]: PasskeyCredentialRetrieved;
    [InterfaceToExtensionRequestType.PasskeyCredentialError]: PasskeyCredentialError;
};
export declare const interfaceToExtensionMessageParsers: MessageParsers<InterfaceToExtensionRequestType, InterfaceToExtensionMessageSchemas>;
//# sourceMappingURL=messageChannels.d.ts.map