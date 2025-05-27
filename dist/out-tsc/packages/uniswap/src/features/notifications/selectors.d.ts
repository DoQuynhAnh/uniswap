import { Selector } from '@reduxjs/toolkit';
import { AppNotification } from 'uniswap/src/features/notifications/types';
import { UniswapState } from 'uniswap/src/state/uniswapReducer';
export declare const makeSelectAddressNotifications: () => Selector<UniswapState, AppNotification[] | undefined, [
    Address | null
]>;
export declare const makeSelectHasNotifications: () => Selector<UniswapState, boolean | undefined, [Address | null]>;
export declare const selectLastTxNotificationUpdate: (state: UniswapState) => {
    [address: string]: number | undefined;
};
//# sourceMappingURL=selectors.d.ts.map