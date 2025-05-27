import { UseQueryResult } from '@tanstack/react-query';
import { UseQueryApiHelperHookArgs } from 'uniswap/src/data/apiClients/types';
import { UnitagAddressRequest, UnitagAddressResponse, UnitagAddressesRequest, UnitagAddressesResponse } from 'uniswap/src/features/unitags/types';
export declare function useUnitagsAddressQuery({ params, ...rest }: UseQueryApiHelperHookArgs<UnitagAddressRequest, UnitagAddressResponse>): UseQueryResult<UnitagAddressResponse>;
export declare function useUnitagsAddressesQuery({ params, ...rest }: UseQueryApiHelperHookArgs<UnitagAddressesRequest, UnitagAddressesResponse>): UseQueryResult<UnitagAddressesResponse>;
//# sourceMappingURL=useUnitagsAddressQuery.d.ts.map