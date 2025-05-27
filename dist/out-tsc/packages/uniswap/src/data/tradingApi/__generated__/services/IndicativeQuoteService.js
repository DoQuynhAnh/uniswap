import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IndicativeQuoteService {
    /**
     * @deprecated
     * Get an indicative quote
     * Deprecated. Instead, use the /quote endpoint and specify the `routingPreference` parameter.  with value of `FASTEST`. See the Token Trading Workflow page for more details.
     *
     * This endpoint receives a fast indicative quote according to the provided details. The quote will not include any gas or fee information.
     * @returns IndicativeQuoteResponse Indicative quote request successful.
     * @throws ApiError
     */
    static indicativeQuote({ requestBody, }) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/indicative_quote',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `RequestValidationError, Bad Input`,
                404: `ResourceNotFound eg. No quotes available or Gas fee/price not available`,
                419: `Ratelimited`,
                500: `Unexpected error`,
                504: `Request duration limit reached.`,
            },
        });
    }
}
//# sourceMappingURL=IndicativeQuoteService.js.map