import React, { PropsWithChildren } from 'react';
import { ITraceContext } from 'utilities/src/telemetry/trace/TraceContext';
export declare function getEventsFromProps(logPress?: boolean, logFocus?: boolean, logKeyPress?: boolean): string[];
export type TraceProps = {
    logImpression?: boolean;
    logPress?: boolean;
    logFocus?: boolean;
    logKeyPress?: boolean;
    eventOnTrigger?: string;
    directFromPage?: boolean;
    properties?: Record<string, unknown>;
};
declare function _Trace({ children, logImpression, eventOnTrigger, logPress, logFocus, logKeyPress, directFromPage, screen, page, section, element, modal, properties, }: PropsWithChildren<TraceProps & ITraceContext>): JSX.Element;
export declare const Trace: React.MemoExoticComponent<typeof _Trace>;
export {};
//# sourceMappingURL=Trace.d.ts.map