import { formatEther } from '@ethersproject/units';
import { BigNumber } from 'ethers/lib/ethers';
import merge from 'lodash/merge';
import { NativeCurrency } from 'uniswap/src/features/tokens/NativeCurrency';
import { TransactionStatus, } from 'uniswap/src/features/transactions/types/transactionDetails';
import { ethersTransactionReceipt, ethersTransactionRequest, ethersTransactionResponse, } from 'uniswap/src/test/fixtures/lib/ethers';
import { finalizedTransactionAction, finalizedTransactionDetails, transactionDetails, transactionReceipt, } from 'uniswap/src/test/fixtures/wallet/transactions/fixtures';
import { faker } from 'uniswap/src/test/shared';
export const getTxFixtures = (transaction) => {
    const txBase = merge({}, transactionDetails({
        hash: faker.datatype.uuid(),
        options: {
            request: ethersTransactionRequest(),
            userSubmissionTimestampMs: Date.now(),
            rpcSubmissionTimestampMs: Date.now(),
        },
    }), transaction);
    // Transaction flow
    // 1. Generate the pending version of the transaction
    const txDetailsPending = transactionDetails({ ...txBase, status: TransactionStatus.Pending });
    // 2. Generate the transaction receipt and response
    const txReceipt = transactionReceipt();
    const ethersTxReceipt = ethersTransactionReceipt({
        from: txDetailsPending.from,
        to: txDetailsPending.options.request.to,
        transactionHash: txDetailsPending.hash,
        blockNumber: txReceipt.blockNumber,
        confirmations: txReceipt.confirmations,
        transactionIndex: txReceipt.transactionIndex,
        gasUsed: BigNumber.from(txReceipt.gasUsed),
        blockHash: txReceipt.blockHash,
        cumulativeGasUsed: BigNumber.from(txReceipt.gasUsed),
        effectiveGasPrice: BigNumber.from(txReceipt.effectiveGasPrice),
        status: 1, // Must be non-zero for successful finalized transaction status
    });
    const txResponse = ethersTransactionResponse({
        hash: txDetailsPending.hash,
        confirmations: txReceipt.confirmations,
        from: txDetailsPending.from,
        wait: () => Promise.resolve(ethersTxReceipt),
    });
    // 3. Create successful/failed transaction
    const txDetailsSuccess = finalizedTransactionDetails({
        ...txDetailsPending,
        status: TransactionStatus.Success,
        receipt: txReceipt,
        networkFee: {
            quantity: formatEther(ethersTxReceipt.effectiveGasPrice.mul(ethersTxReceipt.gasUsed)),
            tokenSymbol: NativeCurrency.onChain(txDetailsPending.chainId).symbol,
            tokenAddress: NativeCurrency.onChain(txDetailsPending.chainId).address,
            chainId: txDetailsPending.chainId,
        },
    });
    const txDetailsFailed = finalizedTransactionDetails({
        ...txDetailsPending,
        status: TransactionStatus.Failed,
    });
    // 4. Generate finalized transaction action
    const finalizedTxAction = finalizedTransactionAction({
        payload: txDetailsSuccess,
    });
    return {
        txDetailsPending,
        txDetailsSuccess,
        ethersTxReceipt,
        txDetailsFailed,
        finalizedTxAction,
        txReceipt,
        txRequest: txBase.options.request,
        txResponse,
        txTypeInfo: txBase.typeInfo,
    };
};
//# sourceMappingURL=helpers.js.map