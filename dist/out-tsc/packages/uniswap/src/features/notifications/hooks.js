import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { makeSelectAddressNotifications, makeSelectHasNotifications, } from 'uniswap/src/features/notifications/selectors';
export function useSelectAddressHasNotifications(address) {
    const selectHasNotifications = useMemo(makeSelectHasNotifications, []);
    return useSelector((state) => selectHasNotifications(state, address));
}
export function useSelectAddressNotifications(address) {
    const selectAddressNotifications = useMemo(makeSelectAddressNotifications, []);
    return useSelector((state) => selectAddressNotifications(state, address));
}
//# sourceMappingURL=hooks.js.map