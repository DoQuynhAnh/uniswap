import { useCallback, useState } from 'react';
export function useBooleanState(initialValue = false) {
    const [value, setValue] = useState(initialValue);
    const setTrue = useCallback(() => setValue(true), []);
    const setFalse = useCallback(() => setValue(false), []);
    const toggle = useCallback(() => setValue((prevValue) => !prevValue), []);
    return { value, setTrue, setFalse, toggle, setValue };
}
//# sourceMappingURL=useBooleanState.js.map