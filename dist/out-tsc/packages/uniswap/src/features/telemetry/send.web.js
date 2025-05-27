import { logger } from 'utilities/src/logger/logger';
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { analytics } from 'utilities/src/telemetry/analytics/analytics';
export function sendAnalyticsEvent(...args) {
    const [eventName, eventProperties] = args;
    analytics.sendEvent(eventName, eventProperties);
}
export async function sendAppsFlyerEvent(...args) {
    logger.warn('telemetry/index.web.ts', 'sendWalletAppsFlyerEvent', 'method not supported', args);
}
//# sourceMappingURL=send.web.js.map