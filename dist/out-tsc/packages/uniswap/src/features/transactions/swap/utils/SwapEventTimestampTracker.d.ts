export declare enum SwapEventType {
    /**
     * Full list of actions that can trigger the FIRST_SWAP_ACTION moment:
     * - “max” clicked for an input amount
     * - token selected (input or output)
     * - token amount typed (input or output)
     * - reverse button clicked
     */
    FirstSwapAction = "FIRST_SWAP_ACTION",
    FirstQuoteFetchStarted = "FIRST_QUOTE_FETCH_STARTED",
    FirstSwapSuccess = "FIRST_SWAP_SUCCESS"
}
export declare class SwapEventTimestampTracker {
    private static _instance;
    private createdAt;
    private constructor();
    static getInstance(): SwapEventTimestampTracker;
    private timestamps;
    hasTimestamp(eventType: SwapEventType): boolean;
    setElapsedTime(eventType: SwapEventType): number | undefined;
    /**
     * Returns the time elapsed between the given event and the start event,
     * or page load if the start event is not provided.
     */
    getElapsedTime(eventType: SwapEventType, startEventType?: SwapEventType): number | undefined;
}
export declare const timestampTracker: SwapEventTimestampTracker;
//# sourceMappingURL=SwapEventTimestampTracker.d.ts.map