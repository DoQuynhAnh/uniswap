import { isInstantTokenBalanceUpdateEnabled } from 'uniswap/src/features/portfolio/portfolioUpdates/isInstantTokenBalanceUpdateEnabled';
import { refetchGQLQueriesViaBackendPollVariant } from 'uniswap/src/features/portfolio/portfolioUpdates/refetchGQLQueriesViaBackendPollVariantSaga';
import { refetchGQLQueriesViaOnchainOverrideVariant } from 'uniswap/src/features/portfolio/portfolioUpdates/refetchGQLQueriesViaOnchainOverrideVariantSaga';
export function* refetchGQLQueries({ transaction, apolloClient, activeAddress, }) {
    if (isInstantTokenBalanceUpdateEnabled()) {
        yield* refetchGQLQueriesViaOnchainOverrideVariant({ transaction, apolloClient, activeAddress });
    }
    else {
        yield* refetchGQLQueriesViaBackendPollVariant({ transaction, apolloClient, activeAddress });
    }
}
//# sourceMappingURL=refetchGQLQueriesSaga.js.map