import type { Encode7702ResponseBody } from '../models/Encode7702ResponseBody';
import type { WalletEncode7702RequestBody } from '../models/WalletEncode7702RequestBody';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class WalletEncode7702Service {
    /**
     * Encode wallet transactions
     * Encodes a list of transactions into a single transaction for smart contract wallet execution. All transactions must have the same chainId.
     * @returns Encode7702ResponseBody Encode 7702 wallet transactions successful.
     * @throws ApiError
     */
    static walletEncode7702({ requestBody, }: {
        requestBody?: WalletEncode7702RequestBody;
    }): CancelablePromise<Encode7702ResponseBody>;
}
//# sourceMappingURL=WalletEncode7702Service.d.ts.map