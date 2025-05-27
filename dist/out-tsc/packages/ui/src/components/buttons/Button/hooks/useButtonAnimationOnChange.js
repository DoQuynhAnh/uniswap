import { useLayoutAnimationOnChange } from 'ui/src/animations';
export const useButtonAnimationOnChange = ({ shouldAnimateBetweenLoadingStates, loading, }) => {
    useLayoutAnimationOnChange(shouldAnimateBetweenLoadingStates && loading);
};
//# sourceMappingURL=useButtonAnimationOnChange.js.map