import { calculateElapsedTimeWithPerformanceMarkMs } from 'utilities/src/telemetry/trace/utils/calculateElapsedTimeWithPerformanceMarkMs';
// These events should happen in this order.
export var SwapEventType;
(function (SwapEventType) {
    /**
     * Full list of actions that can trigger the FIRST_SWAP_ACTION moment:
     * - “max” clicked for an input amount
     * - token selected (input or output)
     * - token amount typed (input or output)
     * - reverse button clicked
     */
    SwapEventType["FirstSwapAction"] = "FIRST_SWAP_ACTION";
    SwapEventType["FirstQuoteFetchStarted"] = "FIRST_QUOTE_FETCH_STARTED";
    SwapEventType["FirstSwapSuccess"] = "FIRST_SWAP_SUCCESS";
})(SwapEventType || (SwapEventType = {}));
export class SwapEventTimestampTracker {
    constructor() {
        this.createdAt = Date.now();
        this.timestamps = new Map();
        // Private constructor to prevent direct construction calls with the `new` operator.
    }
    static getInstance() {
        if (!this._instance) {
            this._instance = new SwapEventTimestampTracker();
        }
        return this._instance;
    }
    hasTimestamp(eventType) {
        return this.timestamps.has(eventType);
    }
    setElapsedTime(eventType) {
        if (this.timestamps.has(eventType)) {
            return undefined;
        }
        const elapsedTime = calculateElapsedTimeWithPerformanceMarkMs(eventType, this.createdAt);
        if (elapsedTime) {
            this.timestamps.set(eventType, elapsedTime);
        }
        return this.timestamps.get(eventType);
    }
    /**
     * Returns the time elapsed between the given event and the start event,
     * or page load if the start event is not provided.
     */
    getElapsedTime(eventType, startEventType) {
        var _a;
        const endTime = this.timestamps.get(eventType);
        if (!endTime) {
            return undefined;
        }
        let startTime = 0;
        if (startEventType) {
            startTime = (_a = this.timestamps.get(startEventType)) !== null && _a !== void 0 ? _a : 0;
        }
        return endTime - startTime;
    }
}
export const timestampTracker = SwapEventTimestampTracker.getInstance();
//# sourceMappingURL=SwapEventTimestampTracker.js.map