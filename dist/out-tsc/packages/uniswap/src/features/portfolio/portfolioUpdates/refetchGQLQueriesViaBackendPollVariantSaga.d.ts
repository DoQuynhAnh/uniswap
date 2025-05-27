import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { TransactionDetails } from 'uniswap/src/features/transactions/types/transactionDetails';
export declare function refetchGQLQueriesViaBackendPollVariant({ transaction, apolloClient, activeAddress, }: {
    transaction: TransactionDetails;
    apolloClient: ApolloClient<NormalizedCacheObject>;
    activeAddress: string | null;
}): Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").CallEffect<true> | import("redux-saga/effects").CallEffect<unknown[]>, void, unknown>;
//# sourceMappingURL=refetchGQLQueriesViaBackendPollVariantSaga.d.ts.map