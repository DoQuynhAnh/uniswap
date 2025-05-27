export declare function getErrorMessageToDisplay({ calldataError, approvalError, }: {
    calldataError: unknown;
    approvalError?: unknown;
}): string | boolean;
export declare function parseErrorMessageTitle(error: unknown, { defaultTitle }: {
    defaultTitle: string;
    includeRequestId?: boolean;
}): string;
export declare function parseErrorMessageTitle(error: unknown, { includeRequestId }: {
    includeRequestId?: boolean;
}): string | undefined;
//# sourceMappingURL=utils.d.ts.map