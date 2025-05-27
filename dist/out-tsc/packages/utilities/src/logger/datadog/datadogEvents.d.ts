/**
 * Datadog RUM Action events
 *
 * DdRum.addAction(DDRumAction.ApplicationStartJs)
 */
export declare const DDRumAction: {
    ApplicationStartJs: string;
    Context: (contextName: string) => string;
    ManualTiming: string;
};
/**
 * Datadog RUM Timing events
 *
 * DdRum.addTiming(DDRumTiming.ScreenInteractive)
 */
export declare const DDRumTiming: {
    ScreenInteractive: string;
};
/**
 * Datadog RUM manual timing events that we manually created.
 *
 * DdRum.addAction(DDRumAction.ManualTiming, CustomTiming.TokenSelectorListRender, {
 *   ...
 * })
 */
export declare const DDRumManualTiming: {
    TokenSelectorListRender: string;
    RenderExploreSections: string;
    RenderActivityTabList: string;
    RenderTokenBalanceList: string;
};
//# sourceMappingURL=datadogEvents.d.ts.map