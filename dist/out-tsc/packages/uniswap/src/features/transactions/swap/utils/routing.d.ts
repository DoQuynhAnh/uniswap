import { Routing } from 'uniswap/src/data/tradingApi/__generated__/index';
export declare function isUniswapX<T extends {
    routing: Routing;
}>(obj: T): obj is T & {
    routing: Routing.DUTCH_V2 | Routing.DUTCH_V3 | Routing.DUTCH_LIMIT | Routing.PRIORITY;
};
export declare function isClassic<T extends {
    routing: Routing;
}>(obj: T): obj is T & {
    routing: Routing.CLASSIC;
};
export declare function isBridge<T extends {
    routing: Routing;
}>(obj: T): obj is T & {
    routing: Routing.BRIDGE;
};
export declare const ACROSS_DAPP_INFO: {
    name: string;
    address: string;
    icon: string;
};
//# sourceMappingURL=routing.d.ts.map