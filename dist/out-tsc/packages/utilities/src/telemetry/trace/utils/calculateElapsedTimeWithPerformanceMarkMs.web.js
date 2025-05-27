/**
 * Returns the time elapsed between page load and now in milliseconds.
 * @param markName the identifier for the performance mark to be created and measured.
 */
export function calculateElapsedTimeWithPerformanceMarkMs(markName, fallbackStartTime) {
    const elapsedTime = performance.mark(markName);
    if (elapsedTime) {
        return elapsedTime.startTime;
    }
    if (fallbackStartTime) {
        // On some browsers like iOS WebViews, performance.mark is not supported.
        return Date.now() - fallbackStartTime;
    }
    return undefined;
}
//# sourceMappingURL=calculateElapsedTimeWithPerformanceMarkMs.web.js.map