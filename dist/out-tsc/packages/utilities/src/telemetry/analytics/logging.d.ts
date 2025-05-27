import { UserPropertyValue } from 'utilities/src/telemetry/analytics/analytics';
interface ErrorLoggers {
    init(err: unknown): void;
    setAllowAnalytics(allow: boolean): void;
    sendEvent(eventName: string, eventProperties?: Record<string, unknown>): void;
    flushEvents(): void;
    setUserProperty(property: string, value: UserPropertyValue): void;
}
export declare function generateAnalyticsLoggers(fileName: string): ErrorLoggers;
export {};
//# sourceMappingURL=logging.d.ts.map