import { ONE_HOUR_MS, ONE_MINUTE_MS, ONE_SECOND_MS } from 'utilities/src/time/time';
export function getDurationRemainingString(expirationTime) {
    const timeLeft = expirationTime - Date.now();
    const s = ((timeLeft % ONE_MINUTE_MS) / ONE_SECOND_MS).toFixed(0);
    if (timeLeft <= ONE_MINUTE_MS) {
        return `${s}s`;
    }
    const m = Math.floor(timeLeft / ONE_MINUTE_MS);
    if (timeLeft <= ONE_HOUR_MS) {
        return `${m}m ${s}s`;
    }
    const h = Math.floor(timeLeft / ONE_HOUR_MS);
    return `${h}h ${m}m ${s}s`;
}
export function getDurationRemaining(expirationTime) {
    const timeLeft = expirationTime - Date.now();
    const seconds = Math.floor((timeLeft % ONE_MINUTE_MS) / ONE_SECOND_MS);
    if (timeLeft <= ONE_MINUTE_MS) {
        return { seconds };
    }
    const minutes = Math.floor(timeLeft / ONE_MINUTE_MS);
    if (timeLeft <= ONE_HOUR_MS) {
        return { seconds, minutes };
    }
    const hours = Math.floor(timeLeft / ONE_HOUR_MS);
    return { seconds, minutes, hours };
}
//# sourceMappingURL=duration.js.map