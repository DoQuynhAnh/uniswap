import { AppNotification } from 'uniswap/src/features/notifications/types';
export interface NotificationState {
    notificationQueue: AppNotification[];
    notificationStatus: {
        [userAddress: Address]: boolean | undefined;
    };
    lastTxNotificationUpdate: {
        [address: Address]: number | undefined;
    };
}
export declare const initialNotificationsState: NotificationState;
export declare const pushNotification: import("@reduxjs/toolkit").ActionCreatorWithPayload<AppNotification, "notifications/pushNotification">, popNotification: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    address: Maybe<Address>;
}, "notifications/popNotification">, setNotificationViewed: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    address: Maybe<Address>;
}, "notifications/setNotificationViewed">, clearNotificationQueue: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"notifications/clearNotificationQueue">, resetNotifications: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"notifications/resetNotifications">, setNotificationStatus: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    address: Address;
    hasNotifications: boolean;
}, "notifications/setNotificationStatus">, setLastTxNotificationUpdate: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    address: Address;
    timestamp: number;
}, "notifications/setLastTxNotificationUpdate">;
export declare const notificationReducer: import("redux").Reducer<NotificationState>;
//# sourceMappingURL=slice.d.ts.map