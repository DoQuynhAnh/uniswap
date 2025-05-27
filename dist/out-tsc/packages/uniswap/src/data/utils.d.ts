import { AuthData } from 'uniswap/src/data/types';
export declare const objectToQueryString: (obj: Record<string, string | number | boolean>) => string;
export type SignMessageFunc = (message: string) => Promise<string>;
export type SignedRequestParams<T> = {
    data: T;
    address: string;
    signMessage: SignMessageFunc;
};
export declare function createSignedRequestBody<T>({ data, address, signMessage, }: SignedRequestParams<T>): Promise<{
    requestBody: T & AuthData;
    signature: string;
}>;
export declare function createSignedRequestParams<T>({ data, address, signMessage, }: SignedRequestParams<T>): Promise<{
    requestParams: T & AuthData;
    signature: string;
}>;
//# sourceMappingURL=utils.d.ts.map