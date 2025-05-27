export declare const DEFAULT_DELAY = 200;
export declare function sleep(milliseconds: number): Promise<boolean>;
export declare function promiseTimeout<T>(promise: Promise<T>, milliseconds: number): Promise<T | null>;
/**
 * Create a promise that resolves after a minimum delay
 * @param promise to execute
 * @param milliseconds length of minimum delay time in ms
 */
export declare function promiseMinDelay(promise: Promise<unknown>, milliseconds: number): Promise<unknown>;
export declare function useInterval(callback: () => void, delay: number | null, immediateStart?: boolean): void;
export declare const useTimeout: (callback: () => void, delay?: number) => (() => void);
export declare function useDebounce<T>(value: T, delay?: number): T;
export declare function useDebounceWithStatus<T>({ value, delay, skipDebounce, }: {
    value: T;
    delay?: number;
    skipDebounce?: boolean;
}): [T, boolean];
export declare function debounceCallback<T extends (...args: void[]) => void>(func: T, wait: number): {
    triggerDebounce: () => void;
    cancelDebounce: () => void;
};
//# sourceMappingURL=timing.d.ts.map