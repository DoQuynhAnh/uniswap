import { datadogEnabledBuild, localDevDatadogEnabled } from 'utilities/src/environment/constants';
import { isDevEnv, isTestEnv } from 'utilities/src/environment/env';
import { logErrorToDatadog, logToDatadog, logWarningToDatadog } from 'utilities/src/logger/datadog/Datadog';
import { isInterface, isMobileApp, isWeb } from 'utilities/src/platform';
const MAX_CHAR_LIMIT = 8192;
let datadogEnabled = false;
/**
 * Logs a message to console. Additionally sends log to Datadog if using 'error', 'warn', or 'info'.
 * Use `logger.debug` for development only logs.
 *
 * ex. `logger.warn('myFile', 'myFunc', 'Some warning', myArray)`
 *
 * @param fileName Name of file where logging from
 * @param functionName Name of function where logging from
 * @param message Message to log
 * @param args Additional values to log
 */
export const logger = {
    debug: (fileName, functionName, message, ...args) => logMessage('debug', fileName, functionName, message, ...args),
    info: (fileName, functionName, message, ...args) => logMessage('info', fileName, functionName, message, ...args),
    warn: (fileName, functionName, message, ...args) => logMessage('warn', fileName, functionName, message, ...args),
    error: (error, captureContext) => logException(error, captureContext),
    setDatadogEnabled: (enabled) => {
        datadogEnabled = enabled || localDevDatadogEnabled;
    },
};
const noopLogger = {
    debug: () => { },
    info: () => { },
    warn: () => { },
    error: () => { },
    setDatadogEnabled: () => { },
};
export function getLogger() {
    if (isTestEnv()) {
        return noopLogger;
    }
    return logger;
}
export function getDevLogger() {
    if (isDevEnv()) {
        return logger;
    }
    return noopLogger;
}
function logMessage(level, fileName, functionName, message, ...args // arbitrary extra data - ideally formatted as key value pairs
) {
    // Log to console directly for dev builds or interface for debugging
    if (__DEV__ || isInterface) {
        if (isMobileApp && ['log', 'debug', 'warn'].includes(level)) {
            // `log`, `debug`, and `warn` are all logged with `console.log` on mobile
            // because `console.debug` and `console.warn` only support one single argument in Reactotron.
            // Alternatively, we could improve this in the future by removing the Reactotron log plugin and instead
            // manually call `Reactotron.display(...)` here with some custom formatting.
            // eslint-disable-next-line no-console
            console.log(...formatMessage(level, fileName, functionName, message), ...args);
        }
        else {
            // eslint-disable-next-line no-console
            console[level](...formatMessage(level, fileName, functionName, message), ...args);
        }
    }
    // don't log if datadog isn't enabled on the build or by the switch
    if (!datadogEnabledBuild || !datadogEnabled) {
        return;
    }
    if (level === 'warn') {
        logWarningToDatadog(message, {
            level,
            args,
            functionName,
            fileName,
        });
    }
    else if (level === 'info') {
        logToDatadog(message, {
            level,
            args,
            functionName,
            fileName,
        });
    }
}
function logException(error, captureContext) {
    const updatedContext = addErrorExtras(error, captureContext);
    // Log to console directly for dev builds or interface for debugging
    if (__DEV__ || isInterface) {
        // eslint-disable-next-line no-console
        console.error(error, captureContext);
    }
    // don't log if datadog isn't enabled on the build or by the switch
    if (!datadogEnabledBuild || !datadogEnabled) {
        return;
    }
    // Limit character length for string tags
    for (const contextProp of Object.keys(updatedContext.tags)) {
        const prop = contextProp;
        const contextValue = updatedContext.tags[prop];
        if (typeof contextValue === 'string') {
            updatedContext.tags[prop] = contextValue.slice(0, MAX_CHAR_LIMIT);
        }
    }
    logErrorToDatadog(error instanceof Error ? error : new Error(`${error}`), updatedContext);
}
// Adds extra fields from errors provided by React Native
export function addErrorExtras(error, captureContext) {
    if (error instanceof Error) {
        const updatedContext = { ...captureContext };
        const extras = {};
        const { nativeStackAndroid, userInfo } = error;
        if (Array.isArray(nativeStackAndroid) && nativeStackAndroid.length > 0) {
            extras.nativeStackAndroid = nativeStackAndroid;
        }
        if (userInfo) {
            extras.userInfo = userInfo;
        }
        updatedContext.extra = { ...updatedContext.extra, ...extras };
        return updatedContext;
    }
    return captureContext;
}
function pad(n, amount = 2) {
    return n.toString().padStart(amount, '0');
}
function formatMessage(level, fileName, functionName, message) {
    const t = new Date();
    const timeString = `${pad(t.getHours())}:${pad(t.getMinutes())}:${pad(t.getSeconds())}.${pad(t.getMilliseconds(), 3)}`;
    if (isWeb) {
        // Simpler printing for web logging
        return [
            level.toUpperCase(),
            {
                context: {
                    time: timeString,
                    fileName,
                    functionName,
                },
            },
            message,
        ];
    }
    else {
        // Specific printing style for mobile logging
        return [`${timeString}::${fileName}#${functionName}`, message];
    }
}
//# sourceMappingURL=logger.js.map