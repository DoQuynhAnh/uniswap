import { TransactionReceipt, TransactionRequest, TransactionResponse } from '@ethersproject/providers';
import { BigNumber, Transaction } from 'ethers/lib/ethers';
export declare const ethersTransaction: {
    <O extends Partial<Transaction>>(overrides: O): Omit<{
        chainId: number;
        data: string;
        nonce: number;
        gasLimit: BigNumber;
        value: BigNumber;
    }, keyof O> & O;
    (): {
        chainId: number;
        data: string;
        nonce: number;
        gasLimit: BigNumber;
        value: BigNumber;
    };
};
export declare const ethersTransactionReceipt: {
    <O extends Partial<TransactionReceipt>>(overrides: O): Omit<{
        to: string;
        from: string;
        contractAddress: string;
        transactionIndex: number;
        gasUsed: BigNumber;
        logsBloom: string;
        blockHash: string;
        transactionHash: string;
        logs: never[];
        blockNumber: number;
        confirmations: number;
        cumulativeGasUsed: BigNumber;
        effectiveGasPrice: BigNumber;
        byzantium: boolean;
        type: number;
    }, keyof O> & O;
    (): {
        to: string;
        from: string;
        contractAddress: string;
        transactionIndex: number;
        gasUsed: BigNumber;
        logsBloom: string;
        blockHash: string;
        transactionHash: string;
        logs: never[];
        blockNumber: number;
        confirmations: number;
        cumulativeGasUsed: BigNumber;
        effectiveGasPrice: BigNumber;
        byzantium: boolean;
        type: number;
    };
};
export declare const ethersTransactionRequest: {
    <O extends Partial<TransactionRequest>>(overrides: O): Omit<{
        from: string;
        to: string;
        value: string;
        data: string;
        nonce: BigNumber;
        gasPrice: string;
    }, keyof O> & O;
    (): {
        from: string;
        to: string;
        value: string;
        data: string;
        nonce: BigNumber;
        gasPrice: string;
    };
};
export declare const ethersTransactionResponse: {
    <O extends Partial<TransactionResponse>>(overrides: O): Omit<{
        hash: string;
        confirmations: number;
        from: string;
        wait: () => Promise<TransactionReceipt>;
        chainId: number;
        data: string;
        nonce: number;
        gasLimit: BigNumber;
        value: BigNumber;
    }, keyof O> & O;
    (): {
        hash: string;
        confirmations: number;
        from: string;
        wait: () => Promise<TransactionReceipt>;
        chainId: number;
        data: string;
        nonce: number;
        gasLimit: BigNumber;
        value: BigNumber;
    };
};
//# sourceMappingURL=ethers.d.ts.map