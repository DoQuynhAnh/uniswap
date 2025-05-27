import { ExtensionToInterfaceRequestType, InterfaceToExtensionRequestType, PasskeyCredentialErrorSchema, PasskeyCredentialRetrievedSchema, PasskeyRequestSchema, PasskeySignInFlowOpenedSchema, } from 'uniswap/src/extension/messagePassing/types/requests';
export const extensionToInterfaceMessageParsers = {
    [ExtensionToInterfaceRequestType.PasskeyRequest]: (message) => PasskeyRequestSchema.parse(message),
};
export const interfaceToExtensionMessageParsers = {
    [InterfaceToExtensionRequestType.PasskeySignInFlowOpened]: (message) => PasskeySignInFlowOpenedSchema.parse(message),
    [InterfaceToExtensionRequestType.PasskeyCredentialRetrieved]: (message) => PasskeyCredentialRetrievedSchema.parse(message),
    [InterfaceToExtensionRequestType.PasskeyCredentialError]: (message) => PasskeyCredentialErrorSchema.parse(message),
};
//# sourceMappingURL=messageChannels.js.map