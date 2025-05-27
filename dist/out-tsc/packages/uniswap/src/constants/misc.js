import { ONE_MINUTE_MS, ONE_SECOND_MS } from 'utilities/src/time/time';
// Polling interval (in milliseconds) for data fetching
export var PollingInterval;
(function (PollingInterval) {
    PollingInterval[PollingInterval["Slow"] = 5 * ONE_MINUTE_MS] = "Slow";
    PollingInterval[PollingInterval["Normal"] = ONE_MINUTE_MS] = "Normal";
    PollingInterval[PollingInterval["KindaFast"] = 30000] = "KindaFast";
    PollingInterval[PollingInterval["Fast"] = 15000] = "Fast";
    PollingInterval[PollingInterval["LightningMcQueen"] = 6000] = "LightningMcQueen";
})(PollingInterval || (PollingInterval = {}));
export const BIPS_BASE = 10000;
//# sourceMappingURL=misc.js.map