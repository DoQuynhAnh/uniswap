export declare const PERMIT2_ABI: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "allowance";
    readonly outputs: readonly [{
        readonly internalType: "uint160";
        readonly name: "amount";
        readonly type: "uint160";
    }, {
        readonly internalType: "uint48";
        readonly name: "expiration";
        readonly type: "uint48";
    }, {
        readonly internalType: "uint48";
        readonly name: "nonce";
        readonly type: "uint48";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "wordPos";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "mask";
        readonly type: "uint256";
    }];
    readonly name: "invalidateUnorderedNonces";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}];
//# sourceMappingURL=permit2.d.ts.map