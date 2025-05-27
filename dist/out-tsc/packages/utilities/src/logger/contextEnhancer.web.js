import { datadogRum } from '@datadog/browser-rum';
export function logContextUpdate(contextName, newState, _isDatadogEnabled) {
    if (__DEV__) {
        return;
    }
    datadogRum.addAction(contextName, {
        data: {
            newState,
        },
    });
}
//# sourceMappingURL=contextEnhancer.web.js.map