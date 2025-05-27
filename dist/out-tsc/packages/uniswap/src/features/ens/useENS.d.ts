import { UniverseChainId } from 'uniswap/src/features/chains/types';
type UseENSParams = {
    nameOrAddress?: string | null;
    chainId?: UniverseChainId;
    autocompleteDomain?: boolean;
};
/**
 * Given a name or address, does a lookup to resolve to an address and name
 * @param nameOrAddress ENS name or address
 */
export declare function useENS({ nameOrAddress, autocompleteDomain }: UseENSParams): {
    loading: boolean;
    address?: string | null;
    name: string | null;
};
export declare function getCompletedENSName(name: string | null): string | null;
export {};
//# sourceMappingURL=useENS.d.ts.map