import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addFavoriteToken, removeFavoriteToken } from 'uniswap/src/features/favorites/slice';
import { MobileEventName } from 'uniswap/src/features/telemetry/constants';
import { sendAnalyticsEvent } from 'uniswap/src/features/telemetry/send';
import { useCurrencyInfo } from 'uniswap/src/features/tokens/useCurrencyInfo';
import { currencyIdToAddress, currencyIdToChain } from 'uniswap/src/utils/currencyId';
export function useToggleFavoriteCallback(id, isFavoriteToken) {
    const dispatch = useDispatch();
    const token = useCurrencyInfo(id);
    return useCallback(() => {
        if (isFavoriteToken) {
            dispatch(removeFavoriteToken({ currencyId: id.toLowerCase() }));
        }
        else {
            sendAnalyticsEvent(MobileEventName.FavoriteItem, {
                address: currencyIdToAddress(id.toLowerCase()),
                chain: currencyIdToChain(id),
                type: 'token',
                name: token === null || token === void 0 ? void 0 : token.currency.name,
            });
            dispatch(addFavoriteToken({ currencyId: id.toLowerCase() }));
        }
    }, [dispatch, id, isFavoriteToken, token]);
}
//# sourceMappingURL=useToggleFavoriteCallback.js.map