import { createSlice } from '@reduxjs/toolkit';
export const initialNotificationsState = {
    notificationQueue: [],
    notificationStatus: {},
    lastTxNotificationUpdate: {},
};
const slice = createSlice({
    name: 'notifications',
    initialState: initialNotificationsState,
    reducers: {
        pushNotification: (state, action) => {
            state.notificationQueue.push(action.payload);
        },
        popNotification: (state, action) => {
            const { address } = action.payload;
            if (!address) {
                state.notificationQueue.shift();
            }
            else {
                const indexToRemove = state.notificationQueue.findIndex((notif) => notif.address === address);
                if (indexToRemove !== -1) {
                    state.notificationQueue.splice(indexToRemove, 1);
                }
            }
        },
        setNotificationViewed: (state, action) => {
            const { address } = action.payload;
            if (!address) {
                if (state.notificationQueue[0]) {
                    state.notificationQueue[0].shown = true;
                }
            }
            else {
                const indexToChange = state.notificationQueue.findIndex((notif) => notif.address === address);
                if (indexToChange !== -1) {
                    const itemToChange = state.notificationQueue[indexToChange];
                    if (itemToChange) {
                        itemToChange.shown = true;
                    }
                }
            }
        },
        clearNotificationQueue: (state) => {
            state.notificationQueue = [];
        },
        resetNotifications: () => initialNotificationsState,
        setNotificationStatus: (state, action) => {
            const { address, hasNotifications } = action.payload;
            state.notificationStatus = { ...state.notificationStatus, [address]: hasNotifications };
        },
        setLastTxNotificationUpdate: (state, { payload }) => {
            const { address, timestamp } = payload;
            state.lastTxNotificationUpdate[address] = timestamp;
        },
    },
});
export const { pushNotification, popNotification, setNotificationViewed, clearNotificationQueue, resetNotifications, setNotificationStatus, setLastTxNotificationUpdate, } = slice.actions;
export const notificationReducer = slice.reducer;
//# sourceMappingURL=slice.js.map