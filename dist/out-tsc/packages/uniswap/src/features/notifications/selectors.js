import { createSelector } from '@reduxjs/toolkit';
const selectNotificationQueue = (state) => state.notifications.notificationQueue;
export const makeSelectAddressNotifications = () => createSelector(selectNotificationQueue, (_, address) => address, (notificationQueue, address) => {
    if (!address) {
        return undefined;
    }
    // If a notification doesn't have an address param assume it belongs to the active account
    return notificationQueue.filter((notif) => !notif.address || notif.address === address);
});
const selectNotificationStatus = (state) => state.notifications.notificationStatus;
export const makeSelectHasNotifications = () => createSelector(selectNotificationStatus, (_, address) => address, (notificationStatuses, address) => {
    if (!address) {
        return undefined;
    }
    return notificationStatuses === null || notificationStatuses === void 0 ? void 0 : notificationStatuses[address];
});
export const selectLastTxNotificationUpdate = (state) => state.notifications.lastTxNotificationUpdate;
//# sourceMappingURL=selectors.js.map