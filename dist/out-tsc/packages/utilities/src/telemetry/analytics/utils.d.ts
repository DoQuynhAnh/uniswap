import { type TestnetModeConfig } from 'utilities/src/telemetry/analytics/analytics';
export declare function getProcessedEvent({ eventName, eventProperties, testnetModeConfig, isTestnetMode, }: {
    eventName: string;
    eventProperties: Record<string, unknown>;
    testnetModeConfig: Maybe<TestnetModeConfig>;
    isTestnetMode: Maybe<boolean>;
}): {
    eventName: string;
    eventProperties: Record<string, unknown>;
} | undefined;
//# sourceMappingURL=utils.d.ts.map