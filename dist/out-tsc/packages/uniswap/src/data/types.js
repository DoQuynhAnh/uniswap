export var SpamCode;
(function (SpamCode) {
    SpamCode[SpamCode["LOW"] = 0] = "LOW";
    SpamCode[SpamCode["MEDIUM"] = 1] = "MEDIUM";
    SpamCode[SpamCode["HIGH"] = 2] = "HIGH";
})(SpamCode || (SpamCode = {}));
/**
 * These Ranking Types are not currently included in the protbufs generated types. For now will specify here
 * and remove when added to protobuf.
 * https://github.com/Uniswap/backend/blob/397033c6c63703f2dddfd5ae4bb95c54ecd0c23b/packages/services/explore/src/model/types.ts#L19-L30
 */
export var RankingType;
(function (RankingType) {
    RankingType["TotalValueLocked"] = "TOTAL_VALUE_LOCKED";
    RankingType["MarketCap"] = "MARKET_CAP";
    RankingType["Volume"] = "VOLUME";
    RankingType["Popularity"] = "POPULARITY";
})(RankingType || (RankingType = {}));
export var CustomRankingType;
(function (CustomRankingType) {
    CustomRankingType["PricePercentChange1DayAsc"] = "PRICE_PERCENT_CHANGE_1_DAY_ASC";
    CustomRankingType["PricePercentChange1DayDesc"] = "PRICE_PERCENT_CHANGE_1_DAY_DESC";
    CustomRankingType["Trending"] = "TRENDING";
})(CustomRankingType || (CustomRankingType = {}));
//# sourceMappingURL=types.js.map