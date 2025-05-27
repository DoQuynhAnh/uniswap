import { UniverseChainId } from 'uniswap/src/features/chains/types';
type VisibilityCheckParams = {
    poolId: string;
    tokenId: string | undefined;
    chainId: UniverseChainId;
    isFlaggedSpam?: boolean;
};
export declare function usePositionVisibilityCheck(): (params: VisibilityCheckParams) => boolean;
export {};
//# sourceMappingURL=usePositionVisibilityCheck.d.ts.map