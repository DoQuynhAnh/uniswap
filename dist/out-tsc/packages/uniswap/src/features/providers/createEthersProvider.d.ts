import { providers as ethersProviders } from 'ethers/lib/ethers';
import { RPCType, UniverseChainId } from 'uniswap/src/features/chains/types';
import { SignerInfo } from 'uniswap/src/features/providers/FlashbotsRpcProvider';
export declare const DEFAULT_FLASHBOTS_ENABLED = true;
export declare function createEthersProvider(chainId: UniverseChainId, rpcType?: RPCType, signerInfo?: SignerInfo): ethersProviders.JsonRpcProvider | null;
//# sourceMappingURL=createEthersProvider.d.ts.map