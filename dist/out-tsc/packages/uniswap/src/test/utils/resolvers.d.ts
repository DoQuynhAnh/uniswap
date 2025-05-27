import { QueryResolvers } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
type ResolverReturnType<T> = T extends (...args: any[]) => infer TResult ? TResult : T extends {
    resolve: (...args: any[]) => infer TResult;
} ? TResult : never;
type ResolverResponses<T extends QueryResolvers> = {
    [K in keyof T]: Promise<ResolverReturnType<T[K]>>;
};
export declare function queryResolvers<T extends QueryResolvers>(resolvers: T): {
    resolved: ResolverResponses<T>;
    resolvers: {
        Query: T;
    };
};
export {};
//# sourceMappingURL=resolvers.d.ts.map