import { createHasMismatchUtil } from 'uniswap/src/features/smartWallet/mismatch/mismatch';
describe('createHasMismatchUtil', () => {
    const mockAddress = '0xMockAddress';
    const mockDelegatedAddress = '0xDelegatedAddress';
    test.each([
        {
            name: 'returns false when atomic batching is supported and address is delegated',
            isDelegated: true,
            isAtomicSupported: true,
            expected: false,
        },
        {
            name: 'returns false when atomic batching is supported and address is not delegated',
            isDelegated: false,
            isAtomicSupported: true,
            expected: false,
        },
        {
            name: 'returns false when atomic batching is not supported and address is not delegated',
            isDelegated: false,
            isAtomicSupported: false,
            expected: false,
        },
        {
            name: 'returns true when atomic batching is not supported but address is delegated (the mismatch case)',
            isDelegated: true,
            isAtomicSupported: false,
            expected: true,
        },
    ])('$name', async ({ isDelegated, isAtomicSupported, expected }) => {
        const mockOnMismatchDetected = jest.fn();
        const hasMismatch = createHasMismatchUtil({
            delegationService: {
                getIsAddressDelegated: async () => ({
                    isDelegated,
                    delegatedAddress: isDelegated ? mockDelegatedAddress : null,
                }),
            },
            getIsAtomicBatchingSupported: async () => isAtomicSupported,
            onMismatchDetected: mockOnMismatchDetected,
        });
        expect(await hasMismatch({ address: mockAddress, chainId: 1 })).toBe(expected);
        if (expected) {
            expect(mockOnMismatchDetected).toHaveBeenCalledWith({
                chainId: 1,
                isDelegated,
                delegatedAddress: mockDelegatedAddress,
            });
        }
        else {
            expect(mockOnMismatchDetected).not.toHaveBeenCalled();
        }
    });
});
//# sourceMappingURL=mismatch.test.js.map