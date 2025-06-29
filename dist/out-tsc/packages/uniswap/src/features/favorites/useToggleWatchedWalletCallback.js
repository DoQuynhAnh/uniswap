import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useOnchainDisplayName } from 'uniswap/src/features/accounts/useOnchainDisplayName';
import { selectWatchedAddressSet } from 'uniswap/src/features/favorites/selectors';
import { addWatchedAddress, removeWatchedAddress } from 'uniswap/src/features/favorites/slice';
import { MobileEventName } from 'uniswap/src/features/telemetry/constants';
import { sendAnalyticsEvent } from 'uniswap/src/features/telemetry/send';
export function useToggleWatchedWalletCallback(address) {
    const dispatch = useDispatch();
    const isFavoriteWallet = useSelector(selectWatchedAddressSet).has(address);
    const displayName = useOnchainDisplayName(address);
    return useCallback(() => {
        if (isFavoriteWallet) {
            dispatch(removeWatchedAddress({ address }));
        }
        else {
            sendAnalyticsEvent(MobileEventName.FavoriteItem, {
                address,
                type: 'wallet',
                name: displayName === null || displayName === void 0 ? void 0 : displayName.name,
            });
            dispatch(addWatchedAddress({ address }));
        }
    }, [address, dispatch, displayName === null || displayName === void 0 ? void 0 : displayName.name, isFavoriteWallet]);
}
//# sourceMappingURL=useToggleWatchedWalletCallback.js.map