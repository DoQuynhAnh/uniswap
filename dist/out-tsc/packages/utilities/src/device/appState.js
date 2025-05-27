import { PlatformSplitStubError } from 'utilities/src/errors';
/** This hook will only ever be triggered in the mobile app, invoking `callback` when state becomes `expectedState`. This hook will no-op on web. */
export function useOnMobileAppState(_expectedState, _callback) {
    throw new PlatformSplitStubError('useMobileAppStateTrigger');
}
//# sourceMappingURL=appState.js.map