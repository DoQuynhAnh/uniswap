import type { IndicativeQuoteRequest } from '../models/IndicativeQuoteRequest';
import type { IndicativeQuoteResponse } from '../models/IndicativeQuoteResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class IndicativeQuoteService {
    /**
     * @deprecated
     * Get an indicative quote
     * Deprecated. Instead, use the /quote endpoint and specify the `routingPreference` parameter.  with value of `FASTEST`. See the Token Trading Workflow page for more details.
     *
     * This endpoint receives a fast indicative quote according to the provided details. The quote will not include any gas or fee information.
     * @returns IndicativeQuoteResponse Indicative quote request successful.
     * @throws ApiError
     */
    static indicativeQuote({ requestBody, }: {
        requestBody?: IndicativeQuoteRequest;
    }): CancelablePromise<IndicativeQuoteResponse>;
}
//# sourceMappingURL=IndicativeQuoteService.d.ts.map