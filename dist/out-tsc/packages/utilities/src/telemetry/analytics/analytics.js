import { PlatformSplitStubError } from 'utilities/src/errors';
export async function getAnalyticsAtomDirect(_forceRead) {
    throw new PlatformSplitStubError('getAnalyticsAtomDirect');
}
export const analytics = {
    init(_transportProvider, _allowed, _initHash, _userIdGetter) {
        throw new PlatformSplitStubError('initAnalytics');
    },
    setAllowAnalytics(_allowed) {
        throw new PlatformSplitStubError('flushAnalyticsEvents');
    },
    setTestnetMode(_enabled, _config) {
        throw new PlatformSplitStubError('setTestnetMode');
    },
    sendEvent(_eventName, ..._eventProperties) {
        throw new PlatformSplitStubError('sendAnalyticsEvent');
    },
    flushEvents() {
        throw new PlatformSplitStubError('flushAnalyticsEvents');
    },
    setUserProperty(_property, _value) {
        throw new PlatformSplitStubError('setUserProperty');
    },
};
//# sourceMappingURL=analytics.js.map