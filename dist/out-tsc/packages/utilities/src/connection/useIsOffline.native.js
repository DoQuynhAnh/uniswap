import { useNetInfo } from '@react-native-community/netinfo';
export function isOffline(networkStatus) {
    return (networkStatus.type !== 'unknown' &&
        typeof networkStatus.isInternetReachable === 'boolean' &&
        networkStatus.isConnected === false);
}
export function useIsOffline() {
    // First `useNetInfo` call always results with unknown state,
    // which we want to ignore here until state is determined,
    // otherwise it leads to immediate re-renders of views dependent on useTransferWarnings.
    //
    // See for more here: https://github.com/react-native-netinfo/react-native-netinfo/pull/444
    return isOffline(useNetInfo());
}
//# sourceMappingURL=useIsOffline.native.js.map