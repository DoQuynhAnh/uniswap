import { uniswapUrls } from 'uniswap/src/constants/urls';
import { FetchError } from 'uniswap/src/data/apiClients/FetchError';
import { REQUEST_SOURCE, getVersionHeader } from 'uniswap/src/data/constants';
import { isMobileApp } from 'utilities/src/platform';
export const BASE_UNISWAP_HEADERS = {
    'x-request-source': REQUEST_SOURCE,
    'x-app-version': getVersionHeader(),
    ...(isMobileApp ? { Origin: uniswapUrls.apiOrigin } : {}),
};
export function createApiClient({ baseUrl, includeBaseUniswapHeaders = true, additionalHeaders = {}, }) {
    const headers = includeBaseUniswapHeaders ? { ...BASE_UNISWAP_HEADERS, ...additionalHeaders } : additionalHeaders;
    return {
        get fetch() {
            return (path, options) => {
                return fetch(`${baseUrl}${path}`, {
                    ...options,
                    headers: {
                        ...headers,
                        ...options === null || options === void 0 ? void 0 : options.headers,
                    },
                });
            };
        },
        get get() {
            return async (path, options) => {
                if (options === null || options === void 0 ? void 0 : options.params) {
                    const searchParams = new URLSearchParams();
                    for (const [key, value] of Object.entries(options.params)) {
                        if (value !== undefined && value !== null) {
                            searchParams.append(key, value.toString());
                        }
                    }
                    path += '?' + searchParams.toString();
                }
                const { on404, ...standardOptions } = options !== null && options !== void 0 ? options : {};
                const response = await this.fetch(path, standardOptions);
                if (on404 && response.status === 404) {
                    on404();
                }
                if (!response.ok) {
                    let data;
                    try {
                        data = await response.json();
                    }
                    catch (e) {
                        throw new FetchError({ response, cause: e });
                    }
                    throw new FetchError({ response, data });
                }
                return (await response.json());
            };
        },
        get post() {
            return async (path, options) => {
                var _a;
                const _options = options !== null && options !== void 0 ? options : {};
                _options.headers = {
                    'Content-Type': 'application/json',
                    ...((_a = options === null || options === void 0 ? void 0 : options.headers) !== null && _a !== void 0 ? _a : {}),
                };
                return await this.get(path, { ..._options, method: 'POST' });
            };
        },
        get put() {
            return async (path, options) => {
                var _a;
                const _options = options !== null && options !== void 0 ? options : {};
                _options.headers = {
                    'Content-Type': 'application/json',
                    ...((_a = options === null || options === void 0 ? void 0 : options.headers) !== null && _a !== void 0 ? _a : {}),
                };
                return await this.get(path, { ..._options, method: 'PUT' });
            };
        },
        get delete() {
            return async (path, options = {}) => {
                return await this.get(path, { ...options, method: 'DELETE' });
            };
        },
    };
}
//# sourceMappingURL=createApiClient.js.map