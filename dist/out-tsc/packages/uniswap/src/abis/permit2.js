export const PERMIT2_ABI = [
    {
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        name: 'allowance',
        outputs: [
            {
                internalType: 'uint160',
                name: 'amount',
                type: 'uint160',
            },
            {
                internalType: 'uint48',
                name: 'expiration',
                type: 'uint48',
            },
            {
                internalType: 'uint48',
                name: 'nonce',
                type: 'uint48',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'wordPos',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'mask',
                type: 'uint256',
            },
        ],
        name: 'invalidateUnorderedNonces',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
];
//# sourceMappingURL=permit2.js.map