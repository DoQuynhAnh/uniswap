export interface ITraceContext {
    page?: string;
    screen?: string;
    section?: string;
    modal?: string;
    element?: string;
}
export declare const TraceContext: import("react").Context<ITraceContext>;
export declare function useTrace(trace?: ITraceContext): ITraceContext;
//# sourceMappingURL=TraceContext.d.ts.map