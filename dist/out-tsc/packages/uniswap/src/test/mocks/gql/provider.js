import { jsx as _jsx } from "react/jsx-runtime";
import { ApolloClient, ApolloLink, ApolloProvider } from '@apollo/client';
import { SchemaLink } from '@apollo/client/link/schema';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchemaSync } from '@graphql-tools/load';
import { mergeResolvers } from '@graphql-tools/merge';
import { addMocksToSchema } from '@graphql-tools/mock';
import path from 'path';
import { setupSharedApolloCache } from 'uniswap/src/data/cache';
import { getErrorLink, getRestLink } from 'uniswap/src/data/links';
import { mocks as defaultMocks } from 'uniswap/src/test/mocks/gql/mocks';
import { defaultResolvers } from 'uniswap/src/test/mocks/gql/resolvers';
const GQL_SCHEMA_PATH = path.join(__dirname, '../../../data/graphql/uniswap-data-api/schema.graphql');
const baseSchema = loadSchemaSync(GQL_SCHEMA_PATH, { loaders: [new GraphQLFileLoader()] });
export function AutoMockedApolloProvider({ children, cache, resolvers: customResolvers, }) {
    const resolvers = mergeResolvers([defaultResolvers, customResolvers]);
    const schema = addMocksToSchema({ schema: baseSchema, mocks: defaultMocks, resolvers });
    const client = new ApolloClient({
        link: ApolloLink.from([getErrorLink(1, 1), getRestLink(), new SchemaLink({ schema })]),
        cache: cache !== null && cache !== void 0 ? cache : setupSharedApolloCache(),
    });
    return _jsx(ApolloProvider, { client: client, children: children });
}
const schema = addMocksToSchema({
    schema: baseSchema,
    mocks: defaultMocks,
    resolvers: mergeResolvers([defaultResolvers]),
});
export const mockApolloClient = new ApolloClient({
    link: ApolloLink.from([getErrorLink(1, 1), getRestLink(), new SchemaLink({ schema })]),
    cache: setupSharedApolloCache(),
});
//# sourceMappingURL=provider.js.map