import { Signer } from '@ethersproject/abstract-signer';
import { BlockTag, JsonRpcProvider } from '@ethersproject/providers';
import { z } from 'zod';
/**
 * A provider that uses a signer to authenticate requests.
 */
declare class AuthenticatedJsonRpcProvider extends JsonRpcProvider {
    protected readonly signer?: Signer;
    constructor(url: string, signer?: Signer);
}
/**
 * Interface representing the structure of the response from Flashbots API.
 * @see {@link https://protect.flashbots.net/tx/docs}
 */
declare const FlashbotsReceiptSchema: z.ZodObject<{
    status: z.ZodEnum<["UNKNOWN", "PENDING", "INCLUDED", "FAILED", "CANCELLED"]>;
    hash: z.ZodString;
    maxBlockNumber: z.ZodNumber;
    transaction: z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
        gasLimit: z.ZodString;
        maxFeePerGas: z.ZodString;
        maxPriorityFeePerGas: z.ZodString;
        nonce: z.ZodString;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        nonce: string;
        to: string;
        value: string;
        from: string;
        gasLimit: string;
        maxFeePerGas: string;
        maxPriorityFeePerGas: string;
    }, {
        nonce: string;
        to: string;
        value: string;
        from: string;
        gasLimit: string;
        maxFeePerGas: string;
        maxPriorityFeePerGas: string;
    }>;
    fastMode: z.ZodBoolean;
    seenInMempool: z.ZodBoolean;
    simError: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    hash: string;
    status: "UNKNOWN" | "CANCELLED" | "FAILED" | "PENDING" | "INCLUDED";
    transaction: {
        nonce: string;
        to: string;
        value: string;
        from: string;
        gasLimit: string;
        maxFeePerGas: string;
        maxPriorityFeePerGas: string;
    };
    maxBlockNumber: number;
    fastMode: boolean;
    seenInMempool: boolean;
    simError?: string | undefined;
}, {
    hash: string;
    status: "UNKNOWN" | "CANCELLED" | "FAILED" | "PENDING" | "INCLUDED";
    transaction: {
        nonce: string;
        to: string;
        value: string;
        from: string;
        gasLimit: string;
        maxFeePerGas: string;
        maxPriorityFeePerGas: string;
    };
    maxBlockNumber: number;
    fastMode: boolean;
    seenInMempool: boolean;
    simError?: string | undefined;
}>;
type FlashbotsReceipt = z.infer<typeof FlashbotsReceiptSchema>;
export type SignerInfo = {
    signer: Signer;
    address: Address;
};
export declare const FLASHBOTS_RPC_URL = "https://rpc.flashbots.net/fast?originId=uniswapwallet";
export declare const FLASHBOTS_DEFAULT_REFUND_PERCENT = 50;
/**
 * A provider to Flashbots RPC that uses a signer to authenticate requests.
 */
export declare class FlashbotsRpcProvider extends AuthenticatedJsonRpcProvider {
    private signatureHeaderName;
    /**
     * Create a Flashbots RPC provider.
     * @param signer - The signer to use for authenticated requests.
     * @param refundPercent - The percentage of the transaction fee to refund to the user. 0 <= refundPercent <= 100
     *    @default 50
     *    @see {@link https://docs.flashbots.net/flashbots-protect/settings-guide#refunds}
     */
    constructor(signerInfo?: SignerInfo, refundPercent?: number);
    /**
     * Get the transaction count for an address.
     *
     * When requests are made for the pending block, the provider will include an authentication header,
     * so that the Flashbots RPC includes the private pending transactions for the address.
     *
     * Implemented based off [BaseProvider.getTransactionCount](https://github.com/ethers-io/ethers.js/blob/ea2d2453a535a319ad55e7ca739ab1bcdb1432b7/packages/providers/src.ts/base-provider.ts#L1460)
     * and [JsonRpcProvider.send](https://github.com/ethers-io/ethers.js/blob/9f990c57f0486728902d4b8e049536f2bb3487ee/packages/providers/src.ts/json-rpc-provider.ts#L502).
     *
     * @param address - The address to get the transaction count for.
     * @param blockTag - The block tag to get the transaction count for.
     * @returns The transaction count for the address.
     */
    getTransactionCount(addressOrName: string | Promise<string>, blockTag?: BlockTag | Promise<BlockTag>): Promise<number>;
}
/**
 * Waits for a Flashbots Protect transaction receipt by polling the Flashbots Protect API until a final status is reached or we reach the max attempts.
 * @param hash - The transaction hash to wait for.
 * @returns A promise that resolves to the final status of the transaction.
 * @throws Will throw an error if the polling exceeds the max attempts or if there is an issue fetching the transaction status.
 */
export declare function waitForFlashbotsProtectReceipt(hash: string): Promise<FlashbotsReceipt>;
export {};
//# sourceMappingURL=FlashbotsRpcProvider.d.ts.map