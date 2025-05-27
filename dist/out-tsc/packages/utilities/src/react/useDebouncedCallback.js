import { useEffect, useRef, useState } from 'react';
import { logger } from 'utilities/src/logger/logger';
import { useEvent } from 'utilities/src/react/hooks';
import { ONE_SECOND_MS } from 'utilities/src/time/time';
/**
 * Hook to debounce button clicks and prevent multiple submissions
 *
 * @param callback The function to execute when button is clicked
 * @param debounceTimeMs Time in milliseconds to wait before allowing another click
 *
 * @returns [debouncedCallback, isDebouncing] - The debounced callback and a boolean indicating if debouncing is active
 */
export function useDebouncedCallback(callback, debounceTimeMs = ONE_SECOND_MS) {
    const isDebouncingRef = useRef(false);
    const [isDebouncing, setIsDebouncing] = useState(false);
    const timeoutRef = useRef();
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);
    const debouncedCallback = useEvent(async (...args) => {
        if (isDebouncingRef.current) {
            return;
        }
        isDebouncingRef.current = true;
        setIsDebouncing(true);
        try {
            await callback(...args);
        }
        catch (e) {
            logger.error(e, { tags: { file: 'useButtonDebounce', function: 'debouncedCallback' } });
        }
        finally {
            timeoutRef.current = setTimeout(() => {
                isDebouncingRef.current = false;
                setIsDebouncing(false);
            }, debounceTimeMs);
        }
    });
    return [debouncedCallback, isDebouncing];
}
//# sourceMappingURL=useDebouncedCallback.js.map