import React from 'react';
import { ITraceContext } from 'utilities/src/telemetry/trace/TraceContext';
/**
 * Given a set of child element and action props, returns a spreadable
 * object of the event handlers augmented with telemetry logging.
 */
export declare function getEventHandlers(child: React.ReactElement, consumedProps: ITraceContext, triggers: string[], eventName: string, element?: string, properties?: Record<string, unknown>): Partial<Record<string, (e: Event) => void>>;
//# sourceMappingURL=utils.d.ts.map