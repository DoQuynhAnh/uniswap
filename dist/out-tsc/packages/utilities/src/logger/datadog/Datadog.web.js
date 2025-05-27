/* eslint-disable @typescript-eslint/no-explicit-any */
import { datadogLogs } from '@datadog/browser-logs';
import { datadogRum } from '@datadog/browser-rum';
import { isTestEnv } from 'utilities/src/environment/env';
import { NotImplementedError } from 'utilities/src/errors';
import { handleReduxAction } from 'utilities/src/logger/datadog/reduxUtils';
import { isExtension, isInterface } from 'utilities/src/platform';
export function logToDatadog(message, { level, ...options }) {
    if (isTestEnv()) {
        return;
    }
    if (isExtension) {
        datadogLogs.logger[level](message, { ...options, reduxState });
    }
    else {
        datadogLogs.logger[level](message, options);
    }
}
export function logWarningToDatadog(message, options) {
    datadogLogs.logger.warn(message, { ...options, ...(isExtension ? { reduxState } : {}) });
}
export function logErrorToDatadog(error, context) {
    if (isTestEnv()) {
        return;
    }
    if (isExtension || isInterface) {
        datadogRum.addError(error, { ...context, reduxState });
        return;
    }
    if (error instanceof Error) {
        datadogLogs.logger.error(error.message, {
            error: {
                kind: error.name,
                stack: error.stack,
            },
            ...context,
        });
    }
    else {
        datadogLogs.logger.error(error, {
            error: {
                stack: new Error().stack,
            },
            ...context,
        });
    }
}
export function attachUnhandledRejectionHandler() {
    throw new NotImplementedError('attachUnhandledRejectionHandler');
}
export async function setAttributesToDatadog(_attributes) {
    throw new NotImplementedError('setAttributes');
}
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
                datadogRum.addAction(`Redux Action: ${action.type}`, action);
            }
            return newState;
        };
        return next(enhancedReducer, initialState);
    };
}
//# sourceMappingURL=Datadog.web.js.map