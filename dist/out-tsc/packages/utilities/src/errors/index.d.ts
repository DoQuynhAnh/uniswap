export declare class PlatformSplitStubError extends Error {
    constructor(functionName: string);
}
export declare class NotImplementedError extends Error {
    constructor(functionName: string);
}
export declare function assert<T>(predicate: T | null | undefined, errorMessage: string): asserts predicate is T;
export declare function errorToString(error: unknown, maxLength?: number): string;
type TryCatchResult<T> = {
    data: T;
    error: null;
} | {
    data: null;
    error: Error;
};
/**
 * Executes a function or awaits a promise, returning a tuple containing either the result or an error.
 *
 * @param valueFnOrPromise - Function to execute or promise to await that may throw an error
 * @returns A tuple where the first element is the function result (or undefined if error occurred)
 *          and the second element is the error (or null if successful)
 * @example
 * const [value, error] = tryCatch(() => JSON.parse(jsonString));
 * if (error) {
 *   console.error('Failed to parse JSON:', error);
 * }
 */
export declare function tryCatch<T>(valueFnOrPromise: Promise<T>): Promise<TryCatchResult<T>>;
export declare function tryCatch<T>(valueFnOrPromise: () => T): TryCatchResult<T>;
export {};
//# sourceMappingURL=index.d.ts.map