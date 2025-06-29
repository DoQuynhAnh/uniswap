import { NetInfoStateType } from '@react-native-community/netinfo';
import { isOffline } from 'utilities/src/connection/useIsOffline.native';
const networkUnknown = {
    isConnected: null,
    type: NetInfoStateType.unknown,
    isInternetReachable: null,
    details: null,
};
const networkDown = {
    isConnected: false,
    type: NetInfoStateType.none,
    isInternetReachable: false,
    details: null,
};
const networkUp = {
    isConnected: true,
    type: NetInfoStateType.other,
    isInternetReachable: true,
    details: { isConnectionExpensive: false },
};
describe(isOffline, () => {
    it('returns false when network is connected and internet is reachable', () => {
        expect(isOffline(networkUp)).toBeFalsy();
    });
    it('returns true when there is no connection', () => {
        expect(isOffline(networkDown)).toBeTruthy();
    });
    it('returns false when network state is unknown', () => {
        expect(isOffline(networkUnknown)).toBeFalsy();
    });
});
//# sourceMappingURL=useIsOffline.native.test.js.map