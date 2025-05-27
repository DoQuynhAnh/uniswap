/**
 * Hook to debounce button clicks and prevent multiple submissions
 *
 * @param callback The function to execute when button is clicked
 * @param debounceTimeMs Time in milliseconds to wait before allowing another click
 *
 * @returns [debouncedCallback, isDebouncing] - The debounced callback and a boolean indicating if debouncing is active
 */
export declare function useDebouncedCallback<T extends (...args: unknown[]) => unknown>(callback: T, debounceTimeMs?: number): [(...args: Parameters<T>) => Promise<void>, boolean];
//# sourceMappingURL=useDebouncedCallback.d.ts.map