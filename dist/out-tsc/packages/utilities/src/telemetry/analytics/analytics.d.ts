import { ApplicationTransport } from 'utilities/src/telemetry/analytics/ApplicationTransport';
export type UserPropertyValue = number | string | boolean | Array<string | number>;
export interface TestnetModeConfig {
    aggregateEventName: string;
    passthroughAllowlistEvents: string[];
    allowlistEvents: string[];
}
export declare function getAnalyticsAtomDirect(_forceRead?: boolean): Promise<boolean>;
export interface Analytics {
    init(transportProvider: ApplicationTransport, allowed: boolean, initHash?: string, userIdGetter?: () => Promise<string>): Promise<void>;
    setAllowAnalytics(allowed: boolean): Promise<void>;
    setTestnetMode(enabled: boolean, _config: TestnetModeConfig): void;
    sendEvent(eventName: string, eventProperties: Record<string, unknown>): void;
    flushEvents(): void;
    setUserProperty(property: string, value: UserPropertyValue, insert?: boolean): void;
}
export declare const analytics: Analytics;
//# sourceMappingURL=analytics.d.ts.map