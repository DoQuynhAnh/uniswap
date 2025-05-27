import type { CreateSendRequest } from '../models/CreateSendRequest';
import type { CreateSendResponse } from '../models/CreateSendResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class SendService {
    /**
     * Create send calldata
     * This endpoint will generate a calldata for a send transaction based on the inputs. The calldata may be signed by the `sender` to cause the specified `amount` of the `token` to be transfered from the `sender` to the `recipient`. The successful response always includes estimated gas for the transaction.
     * @returns CreateSendResponse Create send successful.
     * @throws ApiError
     */
    static createSend({ requestBody, }: {
        requestBody?: CreateSendRequest;
    }): CancelablePromise<CreateSendResponse>;
}
//# sourceMappingURL=SendService.d.ts.map