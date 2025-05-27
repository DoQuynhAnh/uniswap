import { TransactionRequest } from '@ethersproject/providers';
import { TradeType } from '@uniswap/sdk-core';
import { Routing } from 'uniswap/src/data/tradingApi/__generated__/index';
import { AssetType } from 'uniswap/src/entities/assets';
import { ApproveTransactionInfo, BaseSwapTransactionInfo, ClassicTransactionDetails, ConfirmedSwapTransactionInfo, ExactInputSwapTransactionInfo, ExactOutputSwapTransactionInfo, FinalizedTransactionDetails, LocalOnRampTransactionInfo, NFTApproveTransactionInfo, NFTMintTransactionInfo, NFTSummaryInfo, NFTTradeTransactionInfo, NFTTradeType, ReceiveTokenTransactionInfo, SendTokenTransactionInfo, TransactionId, TransactionOptions, TransactionOriginType, TransactionReceipt, TransactionStatus, TransactionType, UnknownTransactionInfo, WCConfirmInfo, WrapTransactionInfo } from 'uniswap/src/features/transactions/types/transactionDetails';
export declare const transactionId: {
    <O extends Partial<TransactionId>>(overrides: O): Omit<{
        id: string;
        chainId: import("uniswap/src/features/chains/types").UniverseChainId;
    }, keyof O> & O;
    (): {
        id: string;
        chainId: import("uniswap/src/features/chains/types").UniverseChainId;
    };
};
export declare const nftSummaryInfo: {
    <O extends Partial<NFTSummaryInfo>>(overrides: O): Omit<{
        tokenId: string;
        name: string;
        collectionName: string;
        imageURL: string;
        address: string;
    }, keyof O> & O;
    (): {
        tokenId: string;
        name: string;
        collectionName: string;
        imageURL: string;
        address: string;
    };
};
export declare const approveTransactionInfo: {
    <O extends Partial<ApproveTransactionInfo>>(overrides: O): Omit<{
        type: TransactionType.Approve;
        tokenAddress: string;
        spender: string;
    }, keyof O> & O;
    (): {
        type: TransactionType.Approve;
        tokenAddress: string;
        spender: string;
    };
};
export declare const baseSwapTransactionInfo: {
    <O extends Partial<BaseSwapTransactionInfo>>(overrides: O): Omit<{
        type: TransactionType.Swap;
        inputCurrencyId: string;
        outputCurrencyId: string;
    }, keyof O> & O;
    (): {
        type: TransactionType.Swap;
        inputCurrencyId: string;
        outputCurrencyId: string;
    };
};
export declare const extractInputSwapTransactionInfo: {
    <O extends Partial<ExactInputSwapTransactionInfo>>(overrides: O): Omit<{
        tradeType: TradeType.EXACT_INPUT;
        inputCurrencyAmountRaw: string;
        expectedOutputCurrencyAmountRaw: string;
        minimumOutputCurrencyAmountRaw: string;
        type: TransactionType.Swap;
        inputCurrencyId: string;
        outputCurrencyId: string;
    }, keyof O> & O;
    (): {
        tradeType: TradeType.EXACT_INPUT;
        inputCurrencyAmountRaw: string;
        expectedOutputCurrencyAmountRaw: string;
        minimumOutputCurrencyAmountRaw: string;
        type: TransactionType.Swap;
        inputCurrencyId: string;
        outputCurrencyId: string;
    };
};
export declare const extractOutputSwapTransactionInfo: {
    <O extends Partial<ExactOutputSwapTransactionInfo>>(overrides: O): Omit<{
        tradeType: TradeType.EXACT_OUTPUT;
        outputCurrencyAmountRaw: string;
        expectedInputCurrencyAmountRaw: string;
        maximumInputCurrencyAmountRaw: string;
        type: TransactionType.Swap;
        inputCurrencyId: string;
        outputCurrencyId: string;
    }, keyof O> & O;
    (): {
        tradeType: TradeType.EXACT_OUTPUT;
        outputCurrencyAmountRaw: string;
        expectedInputCurrencyAmountRaw: string;
        maximumInputCurrencyAmountRaw: string;
        type: TransactionType.Swap;
        inputCurrencyId: string;
        outputCurrencyId: string;
    };
};
export declare const confirmedSwapTransactionInfo: {
    <O extends Partial<ConfirmedSwapTransactionInfo>>(overrides: O): Omit<{
        inputCurrencyAmountRaw: string;
        outputCurrencyAmountRaw: string;
        type: TransactionType.Swap;
        inputCurrencyId: string;
        outputCurrencyId: string;
    }, keyof O> & O;
    (): {
        inputCurrencyAmountRaw: string;
        outputCurrencyAmountRaw: string;
        type: TransactionType.Swap;
        inputCurrencyId: string;
        outputCurrencyId: string;
    };
};
export declare const wrapTransactionInfo: {
    <O extends Partial<WrapTransactionInfo>>(overrides: O): Omit<{
        type: TransactionType.Wrap;
        unwrapped: boolean;
        currencyAmountRaw: string;
    }, keyof O> & O;
    (): {
        type: TransactionType.Wrap;
        unwrapped: boolean;
        currencyAmountRaw: string;
    };
};
export declare const sendTokenTransactionInfo: {
    <O extends Partial<SendTokenTransactionInfo>>(overrides: O): Omit<{
        type: TransactionType.Send;
        assetType: AssetType;
        recipient: string;
        tokenAddress: string;
    }, keyof O> & O;
    (): {
        type: TransactionType.Send;
        assetType: AssetType;
        recipient: string;
        tokenAddress: string;
    };
};
export declare const receiveTokenTransactionInfo: {
    <O extends Partial<ReceiveTokenTransactionInfo>>(overrides: O): Omit<{
        type: TransactionType.Receive;
        assetType: AssetType;
        sender: string;
        tokenAddress: string;
        currencyAmountRaw: string;
    }, keyof O> & O;
    (): {
        type: TransactionType.Receive;
        assetType: AssetType;
        sender: string;
        tokenAddress: string;
        currencyAmountRaw: string;
    };
};
export declare const fiatPurchaseTransactionInfo: {
    <O extends Partial<LocalOnRampTransactionInfo>>(overrides: O): Omit<{
        type: TransactionType.LocalOnRamp;
    }, keyof O> & O;
    (): {
        type: TransactionType.LocalOnRamp;
    };
};
export declare const nftMintTransactionInfo: {
    <O extends Partial<NFTMintTransactionInfo>>(overrides: O): Omit<{
        type: TransactionType.NFTMint;
        nftSummaryInfo: {
            tokenId: string;
            name: string;
            collectionName: string;
            imageURL: string;
            address: string;
        };
    }, keyof O> & O;
    (): {
        type: TransactionType.NFTMint;
        nftSummaryInfo: {
            tokenId: string;
            name: string;
            collectionName: string;
            imageURL: string;
            address: string;
        };
    };
};
export declare const nftTradeTransactionInfo: {
    <O extends Partial<NFTTradeTransactionInfo>>(overrides: O): Omit<{
        type: TransactionType.NFTTrade;
        nftSummaryInfo: {
            tokenId: string;
            name: string;
            collectionName: string;
            imageURL: string;
            address: string;
        };
        purchaseCurrencyId: string;
        purchaseCurrencyAmountRaw: string;
        tradeType: NFTTradeType;
    }, keyof O> & O;
    (): {
        type: TransactionType.NFTTrade;
        nftSummaryInfo: {
            tokenId: string;
            name: string;
            collectionName: string;
            imageURL: string;
            address: string;
        };
        purchaseCurrencyId: string;
        purchaseCurrencyAmountRaw: string;
        tradeType: NFTTradeType;
    };
};
export declare const nftApproveTransactionInfo: {
    <O extends Partial<NFTApproveTransactionInfo>>(overrides: O): Omit<{
        type: TransactionType.NFTApprove;
        nftSummaryInfo: {
            tokenId: string;
            name: string;
            collectionName: string;
            imageURL: string;
            address: string;
        };
        spender: string;
    }, keyof O> & O;
    (): {
        type: TransactionType.NFTApprove;
        nftSummaryInfo: {
            tokenId: string;
            name: string;
            collectionName: string;
            imageURL: string;
            address: string;
        };
        spender: string;
    };
};
export declare const wcConfirmInfo: {
    <O extends Partial<WCConfirmInfo>>(overrides: O): Omit<{
        type: TransactionType.WCConfirm;
        dappRequestInfo: {
            requestType: import("../../../../types/walletConnect").DappRequestType.WalletConnectSessionRequest;
            name: string;
            url: string;
            icon: string;
        };
    }, keyof O> & O;
    (): {
        type: TransactionType.WCConfirm;
        dappRequestInfo: {
            requestType: import("../../../../types/walletConnect").DappRequestType.WalletConnectSessionRequest;
            name: string;
            url: string;
            icon: string;
        };
    };
};
export declare const unknownTransactionInfo: {
    <O extends Partial<UnknownTransactionInfo>>(overrides: O): Omit<{
        type: TransactionType.Unknown;
    }, keyof O> & O;
    (): {
        type: TransactionType.Unknown;
    };
};
export declare const transactionOptions: {
    <O extends Partial<TransactionOptions>>(overrides: O): Omit<{
        request: TransactionRequest;
    }, keyof O> & O;
    (): {
        request: TransactionRequest;
    };
};
export declare const transactionDetails: {
    <O extends Partial<ClassicTransactionDetails>>(overrides: O): Omit<{
        routing: Routing.CLASSIC;
        from: string;
        typeInfo: {
            type: TransactionType.Approve;
            tokenAddress: string;
            spender: string;
        };
        status: TransactionStatus;
        addedTime: number;
        options: {
            request: TransactionRequest;
        };
        transactionOriginType: TransactionOriginType.Internal;
        id: string;
        chainId: import("uniswap/src/features/chains/types").UniverseChainId;
    }, keyof O> & O;
    (): {
        routing: Routing.CLASSIC;
        from: string;
        typeInfo: {
            type: TransactionType.Approve;
            tokenAddress: string;
            spender: string;
        };
        status: TransactionStatus;
        addedTime: number;
        options: {
            request: TransactionRequest;
        };
        transactionOriginType: TransactionOriginType.Internal;
        id: string;
        chainId: import("uniswap/src/features/chains/types").UniverseChainId;
    };
};
export declare const finalizedTransactionDetails: {
    <O extends Partial<FinalizedTransactionDetails>>(overrides: O): Omit<{
        hash: string;
        status: TransactionStatus.Success;
        receipt: {
            transactionIndex: number;
            blockNumber: number;
            blockHash: string;
            confirmedTime: number;
            confirmations: number;
            gasUsed: number;
            effectiveGasPrice: number;
        };
        routing: Routing.CLASSIC;
        from: string;
        typeInfo: {
            type: TransactionType.Approve;
            tokenAddress: string;
            spender: string;
        };
        addedTime: number;
        options: {
            request: TransactionRequest;
        };
        transactionOriginType: TransactionOriginType.Internal;
        id: string;
        chainId: import("uniswap/src/features/chains/types").UniverseChainId;
    }, keyof O> & O;
    (): {
        hash: string;
        status: TransactionStatus.Success;
        receipt: {
            transactionIndex: number;
            blockNumber: number;
            blockHash: string;
            confirmedTime: number;
            confirmations: number;
            gasUsed: number;
            effectiveGasPrice: number;
        };
        routing: Routing.CLASSIC;
        from: string;
        typeInfo: {
            type: TransactionType.Approve;
            tokenAddress: string;
            spender: string;
        };
        addedTime: number;
        options: {
            request: TransactionRequest;
        };
        transactionOriginType: TransactionOriginType.Internal;
        id: string;
        chainId: import("uniswap/src/features/chains/types").UniverseChainId;
    };
};
export declare const transactionReceipt: {
    <O extends Partial<TransactionReceipt>>(overrides: O): Omit<{
        transactionIndex: number;
        blockNumber: number;
        blockHash: string;
        confirmedTime: number;
        confirmations: number;
        gasUsed: number;
        effectiveGasPrice: number;
    }, keyof O> & O;
    (): {
        transactionIndex: number;
        blockNumber: number;
        blockHash: string;
        confirmedTime: number;
        confirmations: number;
        gasUsed: number;
        effectiveGasPrice: number;
    };
};
export declare const finalizedTransactionAction: {
    <O extends Partial<{
        payload: FinalizedTransactionDetails;
        type: "transactions/finalizeTransaction";
    }>>(overrides: O): Omit<{
        payload: {
            hash: string;
            status: TransactionStatus.Success;
            receipt: {
                transactionIndex: number;
                blockNumber: number;
                blockHash: string;
                confirmedTime: number;
                confirmations: number;
                gasUsed: number;
                effectiveGasPrice: number;
            };
            routing: Routing.CLASSIC;
            from: string;
            typeInfo: {
                type: TransactionType.Approve;
                tokenAddress: string;
                spender: string;
            };
            addedTime: number;
            options: {
                request: TransactionRequest;
            };
            transactionOriginType: TransactionOriginType.Internal;
            id: string;
            chainId: import("uniswap/src/features/chains/types").UniverseChainId;
        };
        type: "transactions/finalizeTransaction";
    }, keyof O> & O;
    (): {
        payload: {
            hash: string;
            status: TransactionStatus.Success;
            receipt: {
                transactionIndex: number;
                blockNumber: number;
                blockHash: string;
                confirmedTime: number;
                confirmations: number;
                gasUsed: number;
                effectiveGasPrice: number;
            };
            routing: Routing.CLASSIC;
            from: string;
            typeInfo: {
                type: TransactionType.Approve;
                tokenAddress: string;
                spender: string;
            };
            addedTime: number;
            options: {
                request: TransactionRequest;
            };
            transactionOriginType: TransactionOriginType.Internal;
            id: string;
            chainId: import("uniswap/src/features/chains/types").UniverseChainId;
        };
        type: "transactions/finalizeTransaction";
    };
};
//# sourceMappingURL=fixtures.d.ts.map