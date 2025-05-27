import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { makeSelectHasTokenFavorited } from 'uniswap/src/features/favorites/selectors';
export function useSelectHasTokenFavorited(currencyId) {
    const selectHasTokenFavorited = useMemo(makeSelectHasTokenFavorited, []);
    return useSelector((state) => selectHasTokenFavorited(state, currencyId.toLowerCase()));
}
//# sourceMappingURL=useSelectHasTokenFavorited.js.map