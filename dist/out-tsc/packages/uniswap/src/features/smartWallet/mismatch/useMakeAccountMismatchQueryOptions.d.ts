import { type MisMatchQueryOptions } from 'uniswap/src/features/smartWallet/mismatch/queryOptions';
/**
 * [public] useMakeAccountMismatchQueryOptions -- gets the query options for the mismatch account status for the current account
 * @returns a function that returns the query options for the mismatch account status for the passed in address
 */
export declare function useMakeAccountMismatchQueryOptions(ctx: {
    hasMismatch: (input: {
        address: string;
        chainId: number;
    }) => Promise<boolean>;
    account: {
        address?: string;
        chainId?: number;
    };
}): (chainId?: number) => MisMatchQueryOptions;
//# sourceMappingURL=useMakeAccountMismatchQueryOptions.d.ts.map