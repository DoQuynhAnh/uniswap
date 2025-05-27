import { isNonJestDev } from 'utilities/src/environment/constants';
import { logger } from 'utilities/src/logger/logger';
export function generateAnalyticsLoggers(fileName) {
    return {
        init(error) {
            logger.error(error, { tags: { file: fileName, function: 'init' } });
        },
        sendEvent(eventName, eventProperties) {
            if (isNonJestDev) {
                logger.info('analytics', 'sendEvent', `[Event: ${eventName}]`, eventProperties !== null && eventProperties !== void 0 ? eventProperties : {});
            }
        },
        setAllowAnalytics(allow) {
            if (isNonJestDev) {
                logger.info('analytics', 'setAnonymous', `user allows analytics: ${allow}`);
            }
        },
        flushEvents() {
            if (isNonJestDev) {
                logger.info('analytics', 'flushEvents', 'flushing analytics events');
            }
        },
        setUserProperty(property, value) {
            if (isNonJestDev) {
                logger.info('analytics', 'setUserProperty', `[Property: ${property}]: ${value}`);
            }
        },
    };
}
//# sourceMappingURL=logging.js.map