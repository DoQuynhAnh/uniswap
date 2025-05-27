import appsFlyer from 'react-native-appsflyer';
import { isBetaEnv, isDevEnv } from 'utilities/src/environment/env';
import { logger } from 'utilities/src/logger/logger';
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { analytics } from 'utilities/src/telemetry/analytics/analytics';
export function sendAnalyticsEvent(...args) {
    const [eventName, eventProperties] = args;
    analytics.sendEvent(eventName, eventProperties);
}
export async function sendAppsFlyerEvent(...args) {
    const [eventName, eventProperties] = args;
    if (__DEV__ || isDevEnv() || isBetaEnv()) {
        logger.debug('telemetry/send.native.ts', 'sendWalletAppsFlyerEvent', JSON.stringify({ eventName, eventProperties }));
    }
    else {
        await appsFlyer.logEvent(eventName, eventProperties !== null && eventProperties !== void 0 ? eventProperties : {});
    }
}
//# sourceMappingURL=send.native.js.map