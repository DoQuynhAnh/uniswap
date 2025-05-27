import { MessageSchema } from 'uniswap/src/extension/messagePassing/messageTypes';
import { z } from 'zod';
// Requests from the Extension to the Interface (Web App) and vice versa
export var ExtensionToInterfaceRequestType;
(function (ExtensionToInterfaceRequestType) {
    ExtensionToInterfaceRequestType["PasskeyRequest"] = "PasskeyRequest";
})(ExtensionToInterfaceRequestType || (ExtensionToInterfaceRequestType = {}));
export const PasskeyRequestSchema = MessageSchema.extend({
    type: z.literal(ExtensionToInterfaceRequestType.PasskeyRequest),
    requestId: z.string(),
    challengeJson: z.string(),
});
// Requests from the Interface (Web App) to the Extension
export var InterfaceToExtensionRequestType;
(function (InterfaceToExtensionRequestType) {
    InterfaceToExtensionRequestType["PasskeySignInFlowOpened"] = "PasskeySignInFlowOpened";
    InterfaceToExtensionRequestType["PasskeyCredentialRetrieved"] = "PasskeyCredentialRetrieved";
    InterfaceToExtensionRequestType["PasskeyCredentialError"] = "PasskeyCredentialError";
})(InterfaceToExtensionRequestType || (InterfaceToExtensionRequestType = {}));
export const PasskeySignInFlowOpenedSchema = MessageSchema.extend({
    type: z.literal(InterfaceToExtensionRequestType.PasskeySignInFlowOpened),
    requestId: z.string(),
});
export const PasskeyCredentialRetrievedSchema = MessageSchema.extend({
    type: z.literal(InterfaceToExtensionRequestType.PasskeyCredentialRetrieved),
    requestId: z.string(),
    credential: z.string(),
});
export const PasskeyCredentialErrorSchema = MessageSchema.extend({
    type: z.literal(InterfaceToExtensionRequestType.PasskeyCredentialError),
    requestId: z.string(),
    error: z.string(),
});
//# sourceMappingURL=requests.js.map