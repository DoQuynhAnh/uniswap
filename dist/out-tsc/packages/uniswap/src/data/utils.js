export const objectToQueryString = (obj) => {
    return Object.entries(obj)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
};
export async function createSignedRequestBody({ data, address, signMessage, }) {
    const requestBody = {
        ...data,
        'x-uni-address': address,
        'x-uni-timestamp': Date.now(),
    };
    const message = JSON.stringify(requestBody);
    const signature = await signMessage(message);
    return { requestBody, signature };
}
export async function createSignedRequestParams({ data, address, signMessage, }) {
    const requestParams = {
        ...data,
        'x-uni-address': address,
        'x-uni-timestamp': Date.now(),
    };
    const message = objectToQueryString(requestParams);
    const signature = await signMessage(message);
    return { requestParams, signature };
}
//# sourceMappingURL=utils.js.map