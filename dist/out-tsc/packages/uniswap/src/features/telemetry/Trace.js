import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { Trace as UntypedTrace } from 'utilities/src/telemetry/trace/Trace';
function _Trace({ children, eventOnTrigger, properties, logImpression, logPress, logFocus, logKeyPress, ...rest }) {
    const typedProps = properties
        ? properties
        : undefined;
    return (_jsx(UntypedTrace, { eventOnTrigger: eventOnTrigger, logFocus: logFocus, logImpression: logImpression, logKeyPress: logKeyPress, logPress: logPress, properties: typedProps, ...rest, children: children }));
}
const typedMemo = memo;
const Trace = typedMemo(_Trace);
export { Trace };
export default Trace;
//# sourceMappingURL=Trace.js.map