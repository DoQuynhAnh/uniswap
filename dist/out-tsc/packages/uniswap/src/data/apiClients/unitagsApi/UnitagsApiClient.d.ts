import { SignedRequestParams } from 'uniswap/src/data/utils';
import { UnitagAddressRequest, UnitagAddressResponse, UnitagAddressesRequest, UnitagAddressesResponse, UnitagChangeUsernameRequestBody, UnitagClaimEligibilityRequest, UnitagClaimEligibilityResponse, UnitagClaimUsernameRequestBody, UnitagDeleteUsernameRequestBody, UnitagGetAvatarUploadUrlResponse, UnitagResponse, UnitagUpdateMetadataRequestBody, UnitagUpdateMetadataResponse, UnitagUsernameRequest, UnitagUsernameResponse } from 'uniswap/src/features/unitags/types';
export declare function fetchUsername(params: UnitagUsernameRequest): Promise<UnitagUsernameResponse>;
export declare function fetchAddress(params: UnitagAddressRequest): Promise<UnitagAddressResponse>;
export declare function fetchUnitagsByAddresses({ addresses }: UnitagAddressesRequest): Promise<UnitagAddressesResponse>;
export declare function fetchClaimEligibility(params: UnitagClaimEligibilityRequest): Promise<UnitagClaimEligibilityResponse>;
export declare function claimUnitag({ data, address, signMessage, }: SignedRequestParams<UnitagClaimUsernameRequestBody>): Promise<UnitagResponse>;
export declare function updateUnitagMetadata({ username, data, address, signMessage, }: {
    username: string;
} & SignedRequestParams<UnitagUpdateMetadataRequestBody>): Promise<UnitagUpdateMetadataResponse>;
export declare function changeUnitag({ data, address, signMessage, }: SignedRequestParams<UnitagChangeUsernameRequestBody>): Promise<UnitagResponse>;
export declare function deleteUnitag({ data, address, signMessage, }: SignedRequestParams<UnitagDeleteUsernameRequestBody>): Promise<UnitagResponse>;
export declare function getUnitagAvatarUploadUrl({ data, address, signMessage, }: SignedRequestParams<{
    username: string;
}>): Promise<UnitagGetAvatarUploadUrlResponse>;
//# sourceMappingURL=UnitagsApiClient.d.ts.map