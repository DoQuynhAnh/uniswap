import { useLayoutEffect, useRef } from 'react';
export function usePreviousWithLayoutEffect(value) {
    const ref = useRef(value);
    useLayoutEffect(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
}
//# sourceMappingURL=usePreviousWithLayoutEffect.js.map