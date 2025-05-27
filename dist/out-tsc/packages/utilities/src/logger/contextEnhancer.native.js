import { DdRum, RumActionType } from '@datadog/mobile-react-native';
import { DDRumAction } from 'utilities/src/logger/datadog/datadogEvents';
export function logContextUpdate(contextName, newState, _isDatadogEnabled) {
    if (__DEV__) {
        return;
    }
    DdRum.addAction(RumActionType.CUSTOM, DDRumAction.Context(contextName), {
        newState,
    }).catch(() => undefined);
}
//# sourceMappingURL=contextEnhancer.native.js.map