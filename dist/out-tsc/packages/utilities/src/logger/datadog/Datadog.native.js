/* eslint-disable @typescript-eslint/no-explicit-any */
import { DdLogs, DdRum, DdSdkReactNative, ErrorSource, RumActionType } from '@datadog/mobile-react-native';
import dayjs from 'dayjs';
import { handleReduxAction } from 'utilities/src/logger/datadog/reduxUtils';
import { addErrorExtras } from 'utilities/src/logger/logger';
let reduxState;
// Inspired by Sentry createReduxEnhancer
// https://github.com/getsentry/sentry-javascript/blob/master/packages/react/src/redux.ts
export function createDatadogReduxEnhancer({ shouldLogReduxState, }) {
    return (next) => (reducer, initialState) => {
        const enhancedReducer = (state, action) => {
            const newState = reducer(state, action);
            const { isAction, reduxStateToLog } = handleReduxAction({
                action,
                newState,
                shouldLogState: shouldLogReduxState(newState),
            });
            if (reduxStateToLog) {
                reduxState = reduxStateToLog;
            }
            /* Log action to Datadog */
            if (isAction) {
                DdRum.addAction(RumActionType.CUSTOM, `Redux Action: ${action.type}`, action, dayjs().valueOf()).catch(() => undefined);
            }
            return newState;
        };
        return next(enhancedReducer, initialState);
    };
}
export function logErrorToDatadog(error, context) {
    var _a;
    DdRum.addError(error.message, ErrorSource.SOURCE, (_a = error.stack) !== null && _a !== void 0 ? _a : '', { ...context, reduxState }, Date.now()).catch(() => { });
}
export function logWarningToDatadog(message, { level: _level, ...options }) {
    DdLogs.warn(message, options).catch(() => { });
}
export function logToDatadog(message, { level: _level, ...options }) {
    DdLogs.info(message, options).catch(() => { });
}
/*
 * This is heavily influenced by the sentry implementation of this functionality
 * https://github.com/getsentry/sentry-react-native/blob/0abe24e037e7272178f36ffc7a5c6e295e039650/src/js/integrations/reactnativeerrorhandlersutils.ts
 *
 * This function is used to attach a handler to the global promise rejection event
 * and log the error to the logger, which will send it to datadog
 */
export function attachUnhandledRejectionHandler() {
    // This section sets up Promise polyfills and rejection tracking
    // to enable proper handling of unhandled rejections
    const { polyfillGlobal } = require('react-native/Libraries/Utilities/PolyfillFunctions');
    polyfillGlobal('Promise', () => require('promise/setimmediate/es6-extensions'));
    require('promise/setimmediate/done');
    require('promise/setimmediate/finally');
    const tracking = require('promise/setimmediate/rejection-tracking');
    tracking.enable({
        allRejections: true,
        onUnhandled: (id, rejection) => {
            if (__DEV__) {
                // eslint-disable-next-line no-console
                console.warn(`Possible Unhandled Promise Rejection (id: ${id}):\n${rejection}`);
            }
            else {
                const error = rejection instanceof Error ? rejection : new Error(`${rejection}`);
                const context = addErrorExtras(error, {
                    tags: { file: 'Datadog.native.ts', function: 'attachUnhandledRejectionHandler' },
                });
                logErrorToDatadog(error, context);
            }
        },
        onHandled: (id) => {
            if (__DEV__) {
                // eslint-disable-next-line no-console
                console.warn(`Promise Rejection Handled (id: ${id})\n` +
                    'This means you can ignore any previous messages of the form ' +
                    `"Possible Unhandled Promise Rejection (id: ${id}):"`);
            }
        },
    });
}
export async function setAttributesToDatadog(attributes) {
    await DdSdkReactNative.setAttributes(attributes);
}
//# sourceMappingURL=Datadog.native.js.map