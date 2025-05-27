import { isInterface } from 'utilities/src/platform';
export function getProcessedEvent({ eventName, eventProperties, testnetModeConfig, isTestnetMode, }) {
    if (!isTestnetMode) {
        return { eventName, eventProperties };
    }
    // do not track testnet mode events in the interface
    if (isInterface) {
        return undefined;
    }
    if (testnetModeConfig === null || testnetModeConfig === void 0 ? void 0 : testnetModeConfig.passthroughAllowlistEvents.includes(eventName)) {
        return { eventName, eventProperties };
    }
    if (testnetModeConfig === null || testnetModeConfig === void 0 ? void 0 : testnetModeConfig.allowlistEvents.includes(eventName)) {
        return {
            eventName: testnetModeConfig.aggregateEventName,
            eventProperties: { ...eventProperties, eventName },
        };
    }
    return undefined;
}
//# sourceMappingURL=utils.js.map