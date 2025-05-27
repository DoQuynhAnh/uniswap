import { useDispatch } from 'react-redux';
import { setActiveChainId } from 'uniswap/src/features/smartWallet/delegation/slice';
import { useEvent } from 'utilities/src/react/hooks';
export function useSetActiveChainId() {
    const dispatch = useDispatch();
    return useEvent((chainId) => {
        dispatch(setActiveChainId({ chainId }));
    });
}
//# sourceMappingURL=useSetActiveChainId.js.map