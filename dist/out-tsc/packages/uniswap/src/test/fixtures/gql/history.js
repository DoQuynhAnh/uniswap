import { HistoryDuration, } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
import { amount, timestampedAmount } from 'uniswap/src/test/fixtures/gql/amounts';
import { faker } from 'uniswap/src/test/shared';
import { createArray, createFixture, randomEnumValue } from 'uniswap/src/test/utils';
import { ONE_DAY_MS, ONE_HOUR_MS, ONE_MINUTE_MS } from 'utilities/src/time/time';
/**
 * Constants
 */
export const weekMs = 7 * ONE_DAY_MS;
export const monthMs = 30 * ONE_DAY_MS;
export const yearMs = 365 * ONE_DAY_MS;
export const historyDurationsMs = {
    [HistoryDuration.FiveMinute]: ONE_MINUTE_MS * 5,
    [HistoryDuration.Hour]: ONE_HOUR_MS,
    [HistoryDuration.Day]: ONE_DAY_MS,
    [HistoryDuration.Week]: weekMs,
    [HistoryDuration.Month]: monthMs,
    [HistoryDuration.Year]: yearMs,
    [HistoryDuration.Max]: 5 * yearMs,
};
export const priceHistory = createFixture(() => ({
    duration: randomEnumValue(HistoryDuration),
    size: faker.datatype.number({ min: 10, max: 20 }),
}))(({ size, duration }) => {
    const durationMs = historyDurationsMs[duration];
    const endDate = durationMs + faker.date.past().getMilliseconds();
    const startDate = endDate - durationMs;
    return createArray(size, (i) => timestampedAmount({
        // Timestamp in seconds
        timestamp: Math.floor((startDate + (endDate - startDate) * (i / size)) / 1000),
    })); // Simplify type
});
/**
 * Helper functions
 */
export const getLatestPrice = (history) => {
    var _a, _b;
    const filteredHistory = history.filter((item) => item !== null);
    return amount({ value: (_b = (_a = filteredHistory[filteredHistory.length - 1]) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : 0 });
};
export const get24hPriceChange = (history) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const price = (_b = (_a = history[history.length - 1]) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : 0;
    const prevPrice = (_d = (_c = history[history.length - 2]) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : 0;
    const priceTimestamp = (_f = (_e = history[history.length - 1]) === null || _e === void 0 ? void 0 : _e.timestamp) !== null && _f !== void 0 ? _f : 0;
    const prevPriceTimestamp = (_h = (_g = history[history.length - 2]) === null || _g === void 0 ? void 0 : _g.timestamp) !== null && _h !== void 0 ? _h : 0;
    const timeDiff = priceTimestamp - prevPriceTimestamp;
    const priceDiff = price - prevPrice;
    const dayPriceDiff = timeDiff > 0 ? priceDiff * (ONE_DAY_MS / timeDiff) * 100 : 0;
    return amount({ value: prevPrice > 0 ? dayPriceDiff / prevPrice : 0 });
};
//# sourceMappingURL=history.js.map