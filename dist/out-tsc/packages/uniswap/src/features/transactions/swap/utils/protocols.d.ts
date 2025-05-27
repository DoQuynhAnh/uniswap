import { ProtocolItems } from 'uniswap/src/data/tradingApi/__generated__';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
export declare const DEFAULT_PROTOCOL_OPTIONS: (ProtocolItems.V2 | ProtocolItems.V3 | ProtocolItems.V4 | ProtocolItems.UNISWAPX_V2)[];
export type FrontendSupportedProtocol = (typeof DEFAULT_PROTOCOL_OPTIONS)[number];
/** Given a list of `userSelectedProtocols`, returns protocol items that are allowed for the given chain. */
export declare function useProtocolsForChain(userSelectedProtocols: FrontendSupportedProtocol[], chainId?: UniverseChainId): ProtocolItems[];
export declare function useUniswapXPriorityOrderFlag(chainId?: UniverseChainId): boolean;
//# sourceMappingURL=protocols.d.ts.map