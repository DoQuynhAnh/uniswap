import { LoggerErrorContext } from 'utilities/src/logger/types';
declare global {
    const __DEV__: boolean;
}
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
export declare const logger: {
    debug: (fileName: string, functionName: string, message: string, ...args: unknown[]) => void;
    info: (fileName: string, functionName: string, message: string, ...args: unknown[]) => void;
    warn: (fileName: string, functionName: string, message: string, ...args: unknown[]) => void;
    error: (error: unknown, captureContext: LoggerErrorContext) => void;
    setDatadogEnabled: (enabled: boolean) => void;
};
export type Logger = typeof logger;
export declare function getLogger(): Logger;
export declare function getDevLogger(): Logger;
export declare function addErrorExtras(error: unknown, captureContext: LoggerErrorContext): LoggerErrorContext;
//# sourceMappingURL=logger.d.ts.map