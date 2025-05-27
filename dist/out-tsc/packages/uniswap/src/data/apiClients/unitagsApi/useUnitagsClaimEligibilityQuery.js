import { skipToken, useQuery } from '@tanstack/react-query';
import { fetchClaimEligibility } from 'uniswap/src/data/apiClients/unitagsApi/UnitagsApiClient';
import { ReactQueryCacheKey } from 'utilities/src/reactQuery/cache';
import { ONE_MINUTE_MS } from 'utilities/src/time/time';
export function useUnitagsClaimEligibilityQuery({ params, ...rest }) {
    const queryKey = [ReactQueryCacheKey.UnitagsApi, 'claim/eligibility', params];
    return useQuery({
        queryKey,
        queryFn: params
            ? async () => await fetchClaimEligibility(params)
            : skipToken,
        staleTime: 2 * ONE_MINUTE_MS,
        ...rest,
    });
}
//# sourceMappingURL=useUnitagsClaimEligibilityQuery.js.map