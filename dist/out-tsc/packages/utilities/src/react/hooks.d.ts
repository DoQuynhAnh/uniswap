import { RefObject } from 'react';
export declare function usePrevious<T>(value: T): T | undefined;
export declare function useAsyncData<T>(asyncCallback: () => Promise<T> | undefined, onCancel?: () => void): {
    isLoading: boolean;
    data: T | undefined;
    error?: Error;
};
export declare function useMemoCompare<T>(next: () => T, compare: (a: T | undefined, b: T) => boolean): T;
export declare function useOnClickOutside<T extends HTMLElement>(node: RefObject<T | undefined>, handler: undefined | (() => void), ignoredNodes?: Array<RefObject<T | undefined>>): void;
/**
 * Hook that returns a stable callback function which always invokes the latest version of the provided callback.
 * This eliminates the need for a dependency array and helps prevent memory leaks caused by stale closures.
 *
 * @typeParam T - A tuple representing the argument types of the callback function.
 * @typeParam U - The return type of the callback function.
 * @param {(...args: T) => U} callback - The callback function to be stabilized.
 * @returns {(...args: T) => U} A stable callback function that always calls the latest version of the provided callback.
 *
 * @see {@link https://www.schiener.io/2024-03-03/react-closures}
 * @see {@link https://github.com/facebook/react/issues/14099}
 * @see {@link https://github.com/stutrek/use-callback-stable}
 */
export declare function useEvent<T extends unknown[], U>(callback: (...args: T) => U): (...args: T) => U;
//# sourceMappingURL=hooks.d.ts.map