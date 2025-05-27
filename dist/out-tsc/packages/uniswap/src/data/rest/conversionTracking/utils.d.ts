import { PlatformIdType } from 'uniswap/src/data/rest/conversionTracking/types';
export declare const addJitter: (date: Date) => Date;
export declare const hashAddress: (address: Address) => string;
export declare const getExternalConversionLeadsCookie: () => {
    key: PlatformIdType;
    value: string;
} | void;
export declare const getConversionProxyApiBaseUrl: () => string;
//# sourceMappingURL=utils.d.ts.map