import { z } from 'zod';
export declare enum ExtensionToInterfaceRequestType {
    PasskeyRequest = "PasskeyRequest"
}
export declare const PasskeyRequestSchema: z.ZodObject<{
    type: z.ZodLiteral<ExtensionToInterfaceRequestType>;
    requestId: z.ZodString;
    challengeJson: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: ExtensionToInterfaceRequestType;
    requestId: string;
    challengeJson: string;
}, {
    type: ExtensionToInterfaceRequestType;
    requestId: string;
    challengeJson: string;
}>;
export type PasskeyRequest = z.infer<typeof PasskeyRequestSchema>;
export declare enum InterfaceToExtensionRequestType {
    PasskeySignInFlowOpened = "PasskeySignInFlowOpened",
    PasskeyCredentialRetrieved = "PasskeyCredentialRetrieved",
    PasskeyCredentialError = "PasskeyCredentialError"
}
export declare const PasskeySignInFlowOpenedSchema: z.ZodObject<{
    type: z.ZodLiteral<InterfaceToExtensionRequestType.PasskeySignInFlowOpened>;
    requestId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: InterfaceToExtensionRequestType.PasskeySignInFlowOpened;
    requestId: string;
}, {
    type: InterfaceToExtensionRequestType.PasskeySignInFlowOpened;
    requestId: string;
}>;
export type PasskeySignInFlowOpened = z.infer<typeof PasskeySignInFlowOpenedSchema>;
export declare const PasskeyCredentialRetrievedSchema: z.ZodObject<{
    type: z.ZodLiteral<InterfaceToExtensionRequestType.PasskeyCredentialRetrieved>;
    requestId: z.ZodString;
    credential: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: InterfaceToExtensionRequestType.PasskeyCredentialRetrieved;
    requestId: string;
    credential: string;
}, {
    type: InterfaceToExtensionRequestType.PasskeyCredentialRetrieved;
    requestId: string;
    credential: string;
}>;
export type PasskeyCredentialRetrieved = z.infer<typeof PasskeyCredentialRetrievedSchema>;
export declare const PasskeyCredentialErrorSchema: z.ZodObject<{
    type: z.ZodLiteral<InterfaceToExtensionRequestType.PasskeyCredentialError>;
    requestId: z.ZodString;
    error: z.ZodString;
}, "strip", z.ZodTypeAny, {
    error: string;
    type: InterfaceToExtensionRequestType.PasskeyCredentialError;
    requestId: string;
}, {
    error: string;
    type: InterfaceToExtensionRequestType.PasskeyCredentialError;
    requestId: string;
}>;
export type PasskeyCredentialError = z.infer<typeof PasskeyCredentialErrorSchema>;
//# sourceMappingURL=requests.d.ts.map