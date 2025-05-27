export const EIP2612_ABI = [
    {
        constant: true,
        inputs: [{ name: 'owner', type: 'address' }],
        name: 'nonces',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'DOMAIN_SEPARATOR',
        outputs: [{ name: '', type: 'bytes32' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
];
//# sourceMappingURL=eip_2612.js.map