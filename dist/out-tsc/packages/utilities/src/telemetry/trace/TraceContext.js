import { createContext, useContext, useMemo } from 'react';
export const TraceContext = createContext({});
export function useTrace(trace) {
    const parentTrace = useContext(TraceContext);
    return useMemo(() => ({ ...parentTrace, ...trace }), [parentTrace, trace]);
}
//# sourceMappingURL=TraceContext.js.map