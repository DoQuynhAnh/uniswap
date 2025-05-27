import { ApolloLink } from '@apollo/client';
export declare const getRestLink: () => ApolloLink;
export interface CustomEndpoint {
    url: string;
    key: string;
}
export declare const getCustomGraphqlHttpLink: (endpoint: CustomEndpoint) => ApolloLink;
export declare const getGraphqlHttpLink: () => ApolloLink;
export declare function sample(cb: () => void, rate: number): void;
export declare function getErrorLink(graphqlErrorSamplingRate?: number, networkErrorSamplingRate?: number): ApolloLink;
export declare function getPerformanceLink(sendAnalyticsEvent: (args: Record<string, string>) => void, samplingRate?: number): ApolloLink;
//# sourceMappingURL=links.d.ts.map