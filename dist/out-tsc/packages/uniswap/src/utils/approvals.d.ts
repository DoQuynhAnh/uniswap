type ERC20ApprovalTransactionParts = {
    /** The amount approved for spend */
    amount: bigint;
    /** The address approved for spend */
    spender: string;
};
export declare function parseERC20ApproveCalldata(data: string): ERC20ApprovalTransactionParts;
export {};
//# sourceMappingURL=approvals.d.ts.map