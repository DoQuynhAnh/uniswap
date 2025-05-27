export declare const BASE_UNISWAP_HEADERS: {
    Origin?: string | undefined;
    'x-request-source': string;
    'x-app-version': string;
};
type StandardFetchOptions = Parameters<typeof fetch>[1];
type CustomOptions = StandardFetchOptions & {
    params?: Record<string, string | number | boolean | undefined | null>;
    on404?: () => void;
};
export declare function createApiClient({ baseUrl, includeBaseUniswapHeaders, additionalHeaders, }: {
    baseUrl: string;
    includeBaseUniswapHeaders?: boolean;
    additionalHeaders?: HeadersInit & {
        'x-uniquote-enabled'?: string;
    };
}): {
    readonly fetch: (path: string, options: StandardFetchOptions) => Promise<Response>;
    readonly get: <T>(path: string, options?: CustomOptions) => Promise<T>;
    readonly post: <T>(path: string, options: CustomOptions) => Promise<T>;
    readonly put: <T>(path: string, options: CustomOptions) => Promise<T>;
    readonly delete: <T>(path: string, options: CustomOptions) => Promise<T>;
};
export {};
//# sourceMappingURL=createApiClient.d.ts.map