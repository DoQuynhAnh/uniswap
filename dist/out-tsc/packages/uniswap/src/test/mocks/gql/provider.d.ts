import { ApolloClient, InMemoryCache } from '@apollo/client';
import { PropsWithChildren } from 'react';
import { Resolvers } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
type AutoMockedApolloProviderProps = PropsWithChildren<{
    cache?: InMemoryCache;
    resolvers?: Partial<Resolvers>;
}>;
export declare function AutoMockedApolloProvider({ children, cache, resolvers: customResolvers, }: AutoMockedApolloProviderProps): JSX.Element;
export declare const mockApolloClient: ApolloClient<import("@apollo/client").NormalizedCacheObject>;
export {};
//# sourceMappingURL=provider.d.ts.map