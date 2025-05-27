import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { TransactionDetails } from 'uniswap/src/features/transactions/types/transactionDetails';
export declare function refetchGQLQueriesViaOnchainOverrideVariant({ transaction, apolloClient, activeAddress, }: {
    transaction: TransactionDetails;
    apolloClient: ApolloClient<NormalizedCacheObject>;
    activeAddress: string | null;
}): Generator;
//# sourceMappingURL=refetchGQLQueriesViaOnchainOverrideVariantSaga.d.ts.map