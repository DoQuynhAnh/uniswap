import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OrderService {
    /**
     * Create a gasless order
     * The order endpoint is used to submit a UniswapX intent. If the `routing` field in the response to a quote is any of `DUTCH_V2`, `DUTCH_V3`, or `PRIORITYQUOTE` this endpoint is used to submit your order to the UniswapX protocol to be filled by the filler network. These orders are gasless because the filler will pay the gas to complete the transaction.
     *
     * The order will be validated and, if valid, will be submitted to the filler network. The network will try to fill the order at the quoted `startAmount`. If the order is not filled at the `startAmount` by the `deadline`, the amount will start decaying until the `endAmount` is reached. The order will remain `open` until it is either filled, canceled, or has expired by remaining unfilled beyond the `decayEndTime`.
     *
     * For simplicity, the order request is identical to the quote response except for the addition of the signed permit.
     * @returns OrderResponse Encoded order submitted.
     * @throws ApiError
     */
    static postOrder({ requestBody, }) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/order',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `RequestValidationError, Bad Input`,
                401: `UnauthorizedError eg. Account is blocked.`,
                419: `Ratelimited`,
                500: `Unexpected error`,
                504: `Request duration limit reached.`,
            },
        });
    }
    /**
     * Get gasless orders
     * Retrieve one or more gasless orders filtered, optionally filered by query param(s). The request must at minimum include one of the following parameters: `orderId`, `orderIds`, `orderStatus`, `swapper`, or `filler`.
     * @returns GetOrdersResponse The request orders matching the query parameters.
     * @throws ApiError
     */
    static getOrder({ orderType, orderId, orderIds, limit, orderStatus, swapper, sortKey, sort, filler, cursor, }) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orders',
            query: {
                'orderType': orderType,
                'orderId': orderId,
                'orderIds': orderIds,
                'limit': limit,
                'orderStatus': orderStatus,
                'swapper': swapper,
                'sortKey': sortKey,
                'sort': sort,
                'filler': filler,
                'cursor': cursor,
            },
            errors: {
                400: `RequestValidationError eg. Token allowance not valid or Insufficient Funds.`,
                404: `Orders not found.`,
                419: `Ratelimited`,
                500: `Unexpected error`,
                504: `Request duration limit reached.`,
            },
        });
    }
}
//# sourceMappingURL=OrderService.js.map