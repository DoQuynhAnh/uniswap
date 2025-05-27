import { GraphQLJSON } from 'graphql-scalars';
import { HistoryDuration } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
import { priceHistory, tokenProject } from 'uniswap/src/test/fixtures';
export const defaultResolvers = {
    Query: {
        tokenProjects: (parent, args, context, info) => {
            var _a;
            return [
                tokenProject({
                    priceHistory: priceHistory({
                        duration: (_a = info.variableValues.duration) !== null && _a !== void 0 ? _a : HistoryDuration.Day,
                    }),
                }),
            ];
        },
    },
    AWSJSON: GraphQLJSON,
};
//# sourceMappingURL=resolvers.js.map