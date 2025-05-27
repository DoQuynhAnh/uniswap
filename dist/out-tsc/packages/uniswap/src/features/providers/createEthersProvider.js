import { providers as ethersProviders } from 'ethers/lib/ethers';
import { getChainInfo } from 'uniswap/src/features/chains/chainInfo';
import { RPCType, UniverseChainId } from 'uniswap/src/features/chains/types';
import { Experiments, PrivateRpcProperties } from 'uniswap/src/features/gating/experiments';
import { getExperimentValue } from 'uniswap/src/features/gating/hooks';
import { FLASHBOTS_DEFAULT_REFUND_PERCENT, FlashbotsRpcProvider, } from 'uniswap/src/features/providers/FlashbotsRpcProvider';
import { logger } from 'utilities/src/logger/logger';
export const DEFAULT_FLASHBOTS_ENABLED = true;
// Should use ProviderManager for provider access unless being accessed outside of ProviderManagerContext (e.g., Apollo initialization)
export function createEthersProvider(chainId, rpcType = RPCType.Public, signerInfo) {
    var _a, _b, _c, _d, _e, _f;
    try {
        if (rpcType === RPCType.Private) {
            const privateRPCUrl = (_b = (_a = getChainInfo(chainId).rpcUrls) === null || _a === void 0 ? void 0 : _a[RPCType.Private]) === null || _b === void 0 ? void 0 : _b.http[0];
            if (!privateRPCUrl) {
                throw new Error(`No private RPC available for chain ${chainId}`);
            }
            const flashbotsEnabled = getExperimentValue(Experiments.PrivateRpc, PrivateRpcProperties.FlashbotsEnabled, DEFAULT_FLASHBOTS_ENABLED);
            if (chainId === UniverseChainId.Mainnet && flashbotsEnabled) {
                const flashbotsRefundPercent = getExperimentValue(Experiments.PrivateRpc, PrivateRpcProperties.RefundPercent, FLASHBOTS_DEFAULT_REFUND_PERCENT);
                return new FlashbotsRpcProvider(signerInfo, flashbotsRefundPercent);
            }
            return new ethersProviders.JsonRpcProvider(privateRPCUrl);
        }
        try {
            const publicRPCUrl = (_d = (_c = getChainInfo(chainId).rpcUrls) === null || _c === void 0 ? void 0 : _c[RPCType.Public]) === null || _d === void 0 ? void 0 : _d.http[0];
            if (publicRPCUrl) {
                return new ethersProviders.JsonRpcProvider(publicRPCUrl);
            }
            throw new Error(`No public RPC available for chain ${chainId}`);
        }
        catch (error) {
            const altPublicRPCUrl = (_f = (_e = getChainInfo(chainId).rpcUrls) === null || _e === void 0 ? void 0 : _e[RPCType.PublicAlt]) === null || _f === void 0 ? void 0 : _f.http[0];
            return new ethersProviders.JsonRpcProvider(altPublicRPCUrl);
        }
    }
    catch (error) {
        logger.error(error, {
            tags: { file: 'createEthersProvider', function: 'createProvider' },
            extra: { chainId },
        });
        return null;
    }
}
//# sourceMappingURL=createEthersProvider.js.map