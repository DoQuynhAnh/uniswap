import { uniswapUrls } from 'uniswap/src/constants/urls';
import { createApiClient } from 'uniswap/src/data/apiClients/createApiClient';
import { createSignedRequestBody, createSignedRequestParams } from 'uniswap/src/data/utils';
const UnitagsApiClient = createApiClient({
    baseUrl: uniswapUrls.unitagsApiUrl,
});
export async function fetchUsername(params) {
    return await UnitagsApiClient.get('/username', { params });
}
export async function fetchAddress(params) {
    return await UnitagsApiClient.get('/address', { params });
}
export async function fetchUnitagsByAddresses({ addresses }) {
    return await UnitagsApiClient.get(`/addresses?addresses=${encodeURIComponent(addresses.join(','))}`);
}
export async function fetchClaimEligibility(params) {
    return await UnitagsApiClient.get('/claim/eligibility', { params });
}
// Post requests with signature authentication
export async function claimUnitag({ data, address, signMessage, }) {
    const { requestBody, signature } = await createSignedRequestBody({
        data,
        address,
        signMessage,
    });
    return await UnitagsApiClient.post('/username', {
        body: JSON.stringify(requestBody),
        headers: {
            'x-uni-sig': signature,
        },
    });
}
export async function updateUnitagMetadata({ username, data, address, signMessage, }) {
    const { requestBody, signature } = await createSignedRequestBody({
        data,
        address,
        signMessage,
    });
    return await UnitagsApiClient.put(`/username/${username}/metadata`, {
        body: JSON.stringify(requestBody),
        headers: {
            'x-uni-sig': signature,
        },
    });
}
export async function changeUnitag({ data, address, signMessage, }) {
    const { requestBody, signature } = await createSignedRequestBody({
        data,
        address,
        signMessage,
    });
    return await UnitagsApiClient.post('/username/change', {
        body: JSON.stringify(requestBody),
        headers: {
            'x-uni-sig': signature,
        },
    });
}
export async function deleteUnitag({ data, address, signMessage, }) {
    const { requestBody, signature } = await createSignedRequestBody({
        data,
        address,
        signMessage,
    });
    return UnitagsApiClient.delete('/username', {
        body: JSON.stringify(requestBody),
        headers: {
            'x-uni-sig': signature,
        },
    });
}
export async function getUnitagAvatarUploadUrl({ data, address, signMessage, }) {
    const { requestParams, signature } = await createSignedRequestParams({ data, address, signMessage });
    return await UnitagsApiClient.get('/username/avatar-upload-url', {
        params: requestParams,
        headers: {
            'x-uni-sig': signature,
        },
    });
}
//# sourceMappingURL=UnitagsApiClient.js.map