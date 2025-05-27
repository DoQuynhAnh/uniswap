import { SwapEventName } from '@uniswap/analytics-events';
import { sendAnalyticsEvent } from 'uniswap/src/features/telemetry/send';
import { SwapEventType, timestampTracker } from 'uniswap/src/features/transactions/swap/utils/SwapEventTimestampTracker';
// We only log the time-to-first-swap-input metric for the first swap input of a session.
export function maybeLogFirstSwapAction(analyticsContext) {
    if (timestampTracker.hasTimestamp(SwapEventType.FirstSwapAction)) {
        return;
    }
    const elapsedTime = timestampTracker.setElapsedTime(SwapEventType.FirstSwapAction);
    sendAnalyticsEvent(SwapEventName.SWAP_FIRST_ACTION, {
        time_to_first_swap_action: elapsedTime,
        ...analyticsContext,
    });
}
//# sourceMappingURL=maybeLogFirstSwapAction.js.map