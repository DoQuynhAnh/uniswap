import { QueryResult } from '@apollo/client';
import { ApolloError } from '@apollo/client/errors';
export type GqlResult<T> = Pick<QueryResult<T>, 'data' | 'loading'> & Partial<Pick<QueryResult<T>, 'networkStatus'>> & {
    refetch?: () => void;
    error?: ApolloError | Error;
};
export declare enum SpamCode {
    LOW = 0,// same as isSpam = false on TokenProject
    MEDIUM = 1,// same as isSpam = true on TokenProject
    HIGH = 2
}
/**
 * These Ranking Types are not currently included in the protbufs generated types. For now will specify here
 * and remove when added to protobuf.
 * https://github.com/Uniswap/backend/blob/397033c6c63703f2dddfd5ae4bb95c54ecd0c23b/packages/services/explore/src/model/types.ts#L19-L30
 */
export declare enum RankingType {
    TotalValueLocked = "TOTAL_VALUE_LOCKED",
    MarketCap = "MARKET_CAP",
    Volume = "VOLUME",
    Popularity = "POPULARITY"
}
export declare enum CustomRankingType {
    PricePercentChange1DayAsc = "PRICE_PERCENT_CHANGE_1_DAY_ASC",
    PricePercentChange1DayDesc = "PRICE_PERCENT_CHANGE_1_DAY_DESC",
    Trending = "TRENDING"
}
export type AuthData = {
    'x-uni-address': Address;
    'x-uni-timestamp': number;
};
//# sourceMappingURL=types.d.ts.map