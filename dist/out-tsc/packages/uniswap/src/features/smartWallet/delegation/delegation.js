import { isDelegatedEOA } from 'uniswap/src/features/smartWallet/delegation/isDelegatedEOA';
import { ensure0xHex } from 'uniswap/src/utils/hex';
export function createDelegationService(ctx) {
    return {
        getIsAddressDelegated: async (input) => {
            var _a, _b, _c;
            const bytecode = ensure0xHex(await ctx.delegationRepository.getWalletBytecode(input));
            (_a = ctx.logger) === null || _a === void 0 ? void 0 : _a.info('delegation.ts', 'getIsAddressDelegated', `Checking if address ${input.address} is delegated on chain ${input.chainId}`, {
                bytecode,
            });
            const isDelegatedEOAOutput = isDelegatedEOA({
                bytecode,
            });
            if (isDelegatedEOAOutput.isDelegated && isDelegatedEOAOutput.delegateTo) {
                (_b = ctx.onDelegationDetected) === null || _b === void 0 ? void 0 : _b.call(ctx, { address: isDelegatedEOAOutput.delegateTo, chainId: input.chainId });
                (_c = ctx.logger) === null || _c === void 0 ? void 0 : _c.info('delegation.ts', 'getIsAddressDelegated', `Address ${input.address} is delegated on chain ${input.chainId} to ${isDelegatedEOAOutput.delegateTo}`);
                return {
                    isDelegated: true,
                    delegatedAddress: isDelegatedEOAOutput.delegateTo,
                };
            }
            else {
                return {
                    isDelegated: false,
                    delegatedAddress: null,
                };
            }
        },
    };
}
//# sourceMappingURL=delegation.js.map