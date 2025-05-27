import { useCallback, useEffect, useRef, useState } from 'react';
export const DEFAULT_DELAY = 200;
export function sleep(milliseconds) {
    return new Promise((resolve) => setTimeout(() => resolve(true), milliseconds));
}
export async function promiseTimeout(promise, milliseconds) {
    // Create a promise that rejects in <ms> milliseconds
    const timeout = new Promise((resolve) => {
        const id = setTimeout(() => {
            clearTimeout(id);
            resolve(null);
        }, milliseconds);
    });
    // Awaits the race, which will throw on timeout
    const result = await Promise.race([promise, timeout]);
    return result;
}
/**
 * Create a promise that resolves after a minimum delay
 * @param promise to execute
 * @param milliseconds length of minimum delay time in ms
 */
export async function promiseMinDelay(promise, milliseconds) {
    const minDelay = new Promise((resolve) => {
        const id = setTimeout(() => {
            clearTimeout(id);
            resolve(null);
        }, milliseconds);
    });
    // Awaits until either the promise rejects or both the promise and minimum delay have resolved
    const [result] = await Promise.all([promise, minDelay]);
    return result;
}
// https://usehooks-typescript.com/react-hook/use-interval
export function useInterval(callback, delay, immediateStart) {
    const savedCallback = useRef();
    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);
    // Set up the interval.
    useEffect(() => {
        const tick = () => {
            if (typeof (savedCallback === null || savedCallback === void 0 ? void 0 : savedCallback.current) !== 'undefined') {
                savedCallback === null || savedCallback === void 0 ? void 0 : savedCallback.current();
            }
        };
        if (delay !== null) {
            if (immediateStart) {
                tick();
            }
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
        return undefined;
    }, [delay, immediateStart]);
}
// https://medium.com/javascript-in-plain-english/usetimeout-react-hook-3cc58b94af1f
export const useTimeout = (callback, delay = 0) => {
    const timeoutIdRef = useRef();
    const cancel = useCallback(() => {
        const timeoutId = timeoutIdRef.current;
        if (timeoutId) {
            timeoutIdRef.current = undefined;
            clearTimeout(timeoutId);
        }
    }, [timeoutIdRef]);
    useEffect(() => {
        if (delay >= 0) {
            timeoutIdRef.current = setTimeout(callback, delay);
        }
        return cancel;
    }, [callback, delay, cancel]);
    return cancel;
};
// Copied from https://github.com/Uniswap/interface/blob/main/src/hooks/useDebounce.ts
// Which is modified from https://usehooks.com/useDebounce/
export function useDebounce(value, delay = DEFAULT_DELAY) {
    const [debouncedValue] = useDebounceWithStatus({ value, delay });
    return debouncedValue;
}
export function useDebounceWithStatus({ value, delay = DEFAULT_DELAY, skipDebounce = false, }) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    const [isDebouncing, setIsDebouncing] = useState(false);
    useEffect(() => {
        if (skipDebounce) {
            setDebouncedValue(value);
            return;
        }
        // Update debounced value after delay
        const handler = setTimeout(() => {
            setDebouncedValue(value);
            setIsDebouncing(false);
        }, delay);
        setIsDebouncing(true);
        // Cancel the timeout if value changes (also on delay change or unmount)
        // This is how we prevent debounced value from updating if value is changed ...
        // .. within the delay period. Timeout gets cleared and restarted.
        // eslint-disable-next-line consistent-return
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay, skipDebounce]);
    if (skipDebounce) {
        return [value, false];
    }
    return [debouncedValue, isDebouncing];
}
export function debounceCallback(func, wait) {
    let timeout;
    const cancelDebounce = () => {
        clearTimeout(timeout);
    };
    return {
        triggerDebounce: () => {
            clearTimeout(timeout);
            timeout = setTimeout(func, wait);
        },
        cancelDebounce,
    };
}
//# sourceMappingURL=timing.js.map