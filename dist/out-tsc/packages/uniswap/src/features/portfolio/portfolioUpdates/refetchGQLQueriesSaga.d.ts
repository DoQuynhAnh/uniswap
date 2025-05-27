import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { TransactionDetails } from 'uniswap/src/features/transactions/types/transactionDetails';
export declare function refetchGQLQueries({ transaction, apolloClient, activeAddress, }: {
    transaction: TransactionDetails;
    apolloClient: ApolloClient<NormalizedCacheObject>;
    activeAddress: string | null;
}): Generator<unknown, void, unknown>;
//# sourceMappingURL=refetchGQLQueriesSaga.d.ts.map