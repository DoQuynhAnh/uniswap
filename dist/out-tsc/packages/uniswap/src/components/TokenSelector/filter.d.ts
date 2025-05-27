import { TokenOption } from 'uniswap/src/components/lists/items/types';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
/**
 * Returns a flat list of `TokenOption`s filtered by chainFilter and searchFilter
 * @param tokenOptions list of `TokenOption`s to filter
 * @param chainFilter chain id to keep
 * @param searchFilter filter to apply to currency adddress, name, and symbol
 */
export declare function filter(tokenOptions: TokenOption[] | null, chainFilter: UniverseChainId | null, searchFilter?: string): TokenOption[];
//# sourceMappingURL=filter.d.ts.map