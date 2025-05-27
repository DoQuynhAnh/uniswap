import { TransactionRequest, TransactionResponse } from '@ethersproject/providers';
import { providers } from 'ethers/lib/ethers';
import { finalizeTransaction } from 'uniswap/src/features/transactions/slice';
import { ClassicTransactionDetails, TransactionReceipt } from 'uniswap/src/features/transactions/types/transactionDetails';
type TxFixtures<T extends ClassicTransactionDetails> = {
    txDetailsPending: T;
    txDetailsSuccess: T;
    txDetailsFailed: T;
    txRequest: TransactionRequest;
    txResponse: TransactionResponse;
    txTypeInfo: T['typeInfo'];
    txReceipt: TransactionReceipt;
    ethersTxReceipt: providers.TransactionReceipt;
    finalizedTxAction: ReturnType<typeof finalizeTransaction>;
};
export declare const getTxFixtures: <T extends ClassicTransactionDetails>(transaction?: T | undefined) => TxFixtures<T>;
export {};
//# sourceMappingURL=helpers.d.ts.map