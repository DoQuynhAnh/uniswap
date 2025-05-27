import type { LimitOrderQuoteRequest } from '../models/LimitOrderQuoteRequest';
import type { LimitOrderQuoteResponse } from '../models/LimitOrderQuoteResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class LimitOrderQuoteService {
    /**
     * Get a limit order quote
     * Get a quote for a limit order according to the provided configuration.
     * @returns LimitOrderQuoteResponse Limit Order Quote request successful.
     * @throws ApiError
     */
    static getLimitOrderQuote({ requestBody, }: {
        requestBody?: LimitOrderQuoteRequest;
    }): CancelablePromise<LimitOrderQuoteResponse>;
}
//# sourceMappingURL=LimitOrderQuoteService.d.ts.map