import { BaseTransport } from '@amplitude/analytics-core';
/**
 * Custom Application Transport used to pass in custom `origin` header,
 * and override `serverUrl` (such as in case of using reverse proxy).
 *
 * Borrowed and modified from: https://github.com/Uniswap/analytics/blob/main/src/analytics/ApplicationTransport.ts
 */
export class ApplicationTransport extends BaseTransport {
    constructor(config) {
        super();
        this.shouldReportOriginCountry = true;
        this.serverUrl = config.serverUrl;
        this.appOrigin = config.appOrigin;
        this.originOverride = config.originOverride;
        this.appBuild = config.appBuild;
        this.reportOriginCountry = config.reportOriginCountry;
        /* istanbul ignore if */
        if (typeof fetch === 'undefined') {
            throw new Error('FetchTransport is not supported');
        }
    }
    async send(_serverUrl, payload) {
        var _a;
        const headers = {
            'x-origin-application': this.appOrigin,
            'Content-Type': 'application/json',
            Accept: '*/*',
        };
        if (this.originOverride) {
            headers.Origin = this.originOverride;
        }
        if (this.appBuild) {
            headers['x-application-build'] = this.appBuild;
        }
        const request = {
            headers,
            keepalive: true, // allow the request to outlive the page
            body: JSON.stringify(payload),
            method: 'POST',
        };
        const response = await fetch(this.serverUrl, request);
        const responseJSON = await response.json();
        // Report origin country back
        if (response.headers.has('Origin-Country') && this.shouldReportOriginCountry) {
            (_a = this.reportOriginCountry) === null || _a === void 0 ? void 0 : _a.call(this, response.headers.get('Origin-Country'));
            this.shouldReportOriginCountry = false;
        }
        return this.buildResponse(responseJSON);
    }
}
//# sourceMappingURL=ApplicationTransport.js.map