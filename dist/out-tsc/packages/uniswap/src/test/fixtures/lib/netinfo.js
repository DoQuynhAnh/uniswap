// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { NetInfoStateType, } from '@react-native-community/netinfo';
import { createFixture } from 'uniswap/src/test/utils';
export const networkUnknown = createFixture()(() => ({
    isConnected: null,
    type: NetInfoStateType.unknown,
    isInternetReachable: null,
    details: null,
}));
export const networkDown = createFixture()(() => ({
    isConnected: false,
    type: NetInfoStateType.none,
    isInternetReachable: false,
    details: null,
}));
export const networkUp = createFixture()(() => ({
    isConnected: true,
    type: NetInfoStateType.other,
    isInternetReachable: true,
    details: { isConnectionExpensive: false },
}));
//# sourceMappingURL=netinfo.js.map