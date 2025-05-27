import DeviceInfo from 'react-native-device-info';
export const BUNDLE_ID = DeviceInfo.getBundleId();
export function isPlaywrightEnv() {
    return false;
}
export function isTestEnv() {
    return !!process.env.JEST_WORKER_ID || process.env.NODE_ENV === 'test';
}
export function isDevEnv() {
    return BUNDLE_ID.endsWith('.dev');
}
export function isBetaEnv() {
    return BUNDLE_ID.endsWith('.beta');
}
export function isProdEnv() {
    return BUNDLE_ID === 'com.uniswap.mobile';
}
export function isRNDev() {
    return __DEV__;
}
//# sourceMappingURL=env.native.js.map