import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { MisMatchQueryResult } from 'uniswap/src/features/smartWallet/mismatch/queryOptions';
/**
 * [public] useIsMismatchAccountQuery -- gets the mismatch account status for the current account, specific to a chain
 * @returns the mismatch account status for the current account (useQuery result)
 */
export declare function useIsMismatchAccountQuery(input?: {
    chainId?: number;
}): MisMatchQueryResult;
/**
 * [public] useHasAccountMismatchOnAnyChain -- gets the mismatch account status for the current account
 * @returns the mismatch account status for the current account
 */
export declare function useHasAccountMismatchOnAnyChain(): boolean;
/**
 * [public] useHasAccountMismatchCallback --
 * @returns a callback that checks if the current account has a mismatch for a given chain
 */
export declare function useHasAccountMismatchCallback(): (chainId?: UniverseChainId) => boolean;
/**
 * [public] useCurrentAccountChainMismatchEffect -- invalidates the current account chain mismatch query on chain change
 * NB: only call this once per app instance, eg in the root component
 */
export declare function useCurrentAccountChainMismatchEffect(): void;
/**
 * [public] useAllAccountChainMismatchEffect -- checks all account chain mismatch queries on wallet connect
 * NB: only call this once per app instance, eg in the root component
 */
export declare function useOnConnectCheckAllAccountChainMismatchEffect(): void;
//# sourceMappingURL=hooks.d.ts.map