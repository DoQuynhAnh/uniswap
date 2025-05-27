export class FetchError extends Error {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor({ response, data, cause }) {
        super(`Response status: ${response.status}`);
        this.name = 'FetchError';
        this.response = response;
        this.data = data;
        this.cause = cause;
    }
}
export function isRateLimitFetchError(error) {
    var _a;
    return (error instanceof FetchError &&
        !!((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) &&
        // This checks for our backend non-standard rate limit error codes.
        error.response.status >= 412 &&
        error.response.status <= 429);
}
export function is404Error(error) {
    var _a;
    return error instanceof FetchError && !!((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) && error.response.status === 404;
}
//# sourceMappingURL=FetchError.js.map