import { useRef } from 'react';
export function useValueAsRef(value) {
    const ref = useRef(value);
    ref.current = value;
    return ref;
}
//# sourceMappingURL=useValueAsRef.js.map