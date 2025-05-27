import { logger } from 'utilities/src/logger/logger';
import { isInterface } from 'utilities/src/platform';
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { analytics } from 'utilities/src/telemetry/analytics/analytics';
/**
 * Given a set of child element and action props, returns a spreadable
 * object of the event handlers augmented with telemetry logging.
 */
export function getEventHandlers(child, consumedProps, triggers, eventName, element, properties) {
    const eventHandlers = {};
    for (const event of triggers) {
        eventHandlers[event] = (eventHandlerArgs) => {
            var _a;
            // Some interface elements don't have handlers defined.
            // TODO(WEB-4252): Potentially can remove isInterface check once web is fully converted to tamagui
            if (!child.props[event] && !isInterface) {
                logger.info('trace/utils.ts', 'getEventHandlers', 'Found a null handler while logging an event', {
                    eventName,
                    ...consumedProps,
                    ...properties,
                });
            }
            // call child event handler with original arguments
            (_a = child.props[event]) === null || _a === void 0 ? void 0 : _a.apply(child, [eventHandlerArgs]);
            // augment handler with analytics logging
            analytics.sendEvent(eventName, {
                element,
                ...consumedProps,
                ...properties,
            });
        };
    }
    // return a spreadable event handler object
    return eventHandlers;
}
//# sourceMappingURL=utils.js.map