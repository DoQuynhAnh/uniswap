import { BaseTransport } from '@amplitude/analytics-core';
import { Payload, Response, Transport } from '@amplitude/analytics-types';
interface TransportConfig {
    serverUrl: string;
    appOrigin: string;
    originOverride?: string;
    appBuild?: string;
    reportOriginCountry?: (country: string) => void;
}
/**
 * Custom Application Transport used to pass in custom `origin` header,
 * and override `serverUrl` (such as in case of using reverse proxy).
 *
 * Borrowed and modified from: https://github.com/Uniswap/analytics/blob/main/src/analytics/ApplicationTransport.ts
 */
export declare class ApplicationTransport extends BaseTransport implements Transport {
    private serverUrl;
    private appOrigin;
    private originOverride?;
    private appBuild?;
    private reportOriginCountry?;
    private shouldReportOriginCountry;
    constructor(config: TransportConfig);
    send(_serverUrl: string, payload: Payload): Promise<Response | null>;
}
export {};
//# sourceMappingURL=ApplicationTransport.d.ts.map