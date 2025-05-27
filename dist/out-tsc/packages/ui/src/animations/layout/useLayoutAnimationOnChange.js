import { easeInEaseOutLayoutAnimation } from 'ui/src/animations/layout/layoutAnimation';
import { useHasValueChanged } from 'utilities/src/react/useHasValueChanged';
export function useLayoutAnimationOnChange(value, options) {
    const hasValueChanged = useHasValueChanged(value);
    if (hasValueChanged) {
        easeInEaseOutLayoutAnimation(options);
    }
}
//# sourceMappingURL=useLayoutAnimationOnChange.js.map