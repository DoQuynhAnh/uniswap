import { type UseQueryOptions, type UseQueryResult } from '@tanstack/react-query';
import { ReactQueryCacheKey } from 'utilities/src/reactQuery/cache';
/**
 * [public] getIsMismatchAccountQueryOptions -- gets the query options for the mismatch account status for the current account
 * @param ctx - the context object: hasMismatch (callback)
 * @returns a function that returns the query options for the mismatch account status for the passed in address
 */
export declare const getIsMismatchAccountQueryOptions: (ctx: {
    hasMismatch: (input: {
        address: string;
        chainId: number;
    }) => Promise<boolean>;
    isMainnet: boolean;
}) => (input: {
    address?: string;
    chainId?: number;
}) => MisMatchQueryOptions;
export interface MismatchResult {
    chainId?: number;
    hasMismatch: boolean;
}
type OptionalString = string | undefined;
type OptionalNumber = number | undefined;
type QueryKey = [ReactQueryCacheKey.MismatchAccount, OptionalString, OptionalNumber, boolean];
export type MisMatchQueryOptions = UseQueryOptions<MismatchResult, Error, MismatchResult, QueryKey>;
export type MisMatchQueryResult = UseQueryResult<MismatchResult, Error>;
export {};
//# sourceMappingURL=queryOptions.d.ts.map