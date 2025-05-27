import { usePreviousWithLayoutEffect } from 'utilities/src/react/usePreviousWithLayoutEffect';
export function useHasValueChanged(value) {
    const prevValue = usePreviousWithLayoutEffect(value);
    return prevValue !== value;
}
//# sourceMappingURL=useHasValueChanged.js.map