import { useDispatch } from 'react-redux';
import { updateDelegatedState } from 'uniswap/src/features/smartWallet/delegation/slice';
import { useEvent } from 'utilities/src/react/hooks';
export function useUpdateDelegatedState() {
    const dispatch = useDispatch();
    return useEvent((input) => {
        dispatch(updateDelegatedState(input));
    });
}
//# sourceMappingURL=useUpdateDelegateState.js.map