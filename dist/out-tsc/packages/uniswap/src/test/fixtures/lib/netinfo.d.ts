import { NetInfoConnectedStates, NetInfoNoConnectionState, NetInfoStateType, NetInfoUnknownState } from '@react-native-community/netinfo';
export declare const networkUnknown: {
    <O extends Partial<NetInfoUnknownState>>(overrides: O): Omit<{
        isConnected: null;
        type: NetInfoStateType.unknown;
        isInternetReachable: null;
        details: null;
    }, keyof O> & O;
    (): {
        isConnected: null;
        type: NetInfoStateType.unknown;
        isInternetReachable: null;
        details: null;
    };
};
export declare const networkDown: {
    <O extends Partial<NetInfoNoConnectionState>>(overrides: O): Omit<{
        isConnected: false;
        type: NetInfoStateType.none;
        isInternetReachable: false;
        details: null;
    }, keyof O> & O;
    (): {
        isConnected: false;
        type: NetInfoStateType.none;
        isInternetReachable: false;
        details: null;
    };
};
export declare const networkUp: {
    <O extends Partial<NetInfoConnectedStates>>(overrides: O): Omit<{
        isConnected: true;
        type: NetInfoStateType.other;
        isInternetReachable: true;
        details: {
            isConnectionExpensive: false;
        };
    }, keyof O> & O;
    (): {
        isConnected: true;
        type: NetInfoStateType.other;
        isInternetReachable: true;
        details: {
            isConnectionExpensive: false;
        };
    };
};
//# sourceMappingURL=netinfo.d.ts.map