import { TradeType } from '@uniswap/sdk-core';
import { Routing } from 'uniswap/src/data/tradingApi/__generated__/index';
import { AssetType } from 'uniswap/src/entities/assets';
import { SUPPORTED_CHAIN_IDS } from 'uniswap/src/features/chains/types';
import { NFTTradeType, TransactionOriginType, TransactionStatus, TransactionType, } from 'uniswap/src/features/transactions/types/transactionDetails';
import { dappInfoWC } from 'uniswap/src/test/fixtures/wallet/walletConnect';
import { faker } from 'uniswap/src/test/shared';
import { createFixture, randomChoice, randomEnumValue } from 'uniswap/src/test/utils';
export const transactionId = createFixture()(() => ({
    id: faker.datatype.uuid(),
    chainId: randomChoice(SUPPORTED_CHAIN_IDS),
}));
export const nftSummaryInfo = createFixture()(() => ({
    tokenId: faker.datatype.uuid(),
    name: faker.lorem.words(),
    collectionName: faker.lorem.words(),
    imageURL: faker.image.imageUrl(),
    address: faker.finance.ethereumAddress(),
}));
export const approveTransactionInfo = createFixture()(() => ({
    type: TransactionType.Approve,
    tokenAddress: faker.finance.ethereumAddress(),
    spender: faker.finance.ethereumAddress(),
}));
export const baseSwapTransactionInfo = createFixture()(() => ({
    type: TransactionType.Swap,
    inputCurrencyId: faker.datatype.uuid(),
    outputCurrencyId: faker.datatype.uuid(),
}));
export const extractInputSwapTransactionInfo = createFixture()(() => ({
    ...baseSwapTransactionInfo(),
    tradeType: TradeType.EXACT_INPUT,
    inputCurrencyAmountRaw: faker.datatype.number().toString(),
    expectedOutputCurrencyAmountRaw: faker.datatype.number().toString(),
    minimumOutputCurrencyAmountRaw: faker.datatype.number().toString(),
}));
export const extractOutputSwapTransactionInfo = createFixture()(() => ({
    ...baseSwapTransactionInfo(),
    tradeType: TradeType.EXACT_OUTPUT,
    outputCurrencyAmountRaw: faker.datatype.number().toString(),
    expectedInputCurrencyAmountRaw: faker.datatype.number().toString(),
    maximumInputCurrencyAmountRaw: faker.datatype.number().toString(),
}));
export const confirmedSwapTransactionInfo = createFixture()(() => ({
    ...baseSwapTransactionInfo(),
    inputCurrencyAmountRaw: faker.datatype.number().toString(),
    outputCurrencyAmountRaw: faker.datatype.number().toString(),
}));
export const wrapTransactionInfo = createFixture()(() => ({
    type: TransactionType.Wrap,
    unwrapped: faker.datatype.boolean(),
    currencyAmountRaw: faker.datatype.number().toString(),
}));
export const sendTokenTransactionInfo = createFixture()(() => ({
    type: TransactionType.Send,
    assetType: randomEnumValue(AssetType),
    recipient: faker.finance.ethereumAddress(),
    tokenAddress: faker.finance.ethereumAddress(),
}));
export const receiveTokenTransactionInfo = createFixture()(() => ({
    type: TransactionType.Receive,
    assetType: randomEnumValue(AssetType),
    sender: faker.finance.ethereumAddress(),
    tokenAddress: faker.finance.ethereumAddress(),
    currencyAmountRaw: faker.datatype.number().toString(),
}));
export const fiatPurchaseTransactionInfo = createFixture()(() => ({
    type: TransactionType.LocalOnRamp,
}));
export const nftMintTransactionInfo = createFixture()(() => ({
    type: TransactionType.NFTMint,
    nftSummaryInfo: nftSummaryInfo(),
}));
export const nftTradeTransactionInfo = createFixture()(() => ({
    type: TransactionType.NFTTrade,
    nftSummaryInfo: nftSummaryInfo(),
    purchaseCurrencyId: faker.datatype.uuid(),
    purchaseCurrencyAmountRaw: faker.datatype.number().toString(),
    tradeType: randomEnumValue(NFTTradeType),
}));
export const nftApproveTransactionInfo = createFixture()(() => ({
    type: TransactionType.NFTApprove,
    nftSummaryInfo: nftSummaryInfo(),
    spender: faker.finance.ethereumAddress(),
}));
export const wcConfirmInfo = createFixture()(() => ({
    type: TransactionType.WCConfirm,
    dappRequestInfo: dappInfoWC(),
}));
export const unknownTransactionInfo = createFixture()(() => ({
    type: TransactionType.Unknown,
}));
export const transactionOptions = createFixture()(() => ({
    request: {},
}));
export const transactionDetails = createFixture()(() => ({
    ...transactionId(),
    routing: Routing.CLASSIC,
    from: faker.finance.ethereumAddress(),
    typeInfo: approveTransactionInfo(),
    status: randomEnumValue(TransactionStatus),
    addedTime: faker.date.recent().getTime(),
    options: transactionOptions(),
    transactionOriginType: TransactionOriginType.Internal,
}));
export const finalizedTransactionDetails = createFixture()(() => ({
    ...transactionDetails(),
    hash: faker.datatype.uuid(),
    // Successful by default
    status: TransactionStatus.Success,
    receipt: transactionReceipt(),
}));
export const transactionReceipt = createFixture()(() => ({
    transactionIndex: faker.datatype.number(),
    blockNumber: faker.datatype.number(),
    blockHash: faker.datatype.uuid(),
    confirmedTime: faker.date.recent().getTime(),
    confirmations: faker.datatype.number(),
    gasUsed: faker.datatype.number(),
    effectiveGasPrice: faker.datatype.number(),
}));
export const finalizedTransactionAction = createFixture()(() => ({
    payload: finalizedTransactionDetails(),
    type: 'transactions/finalizeTransaction',
}));
//# sourceMappingURL=fixtures.js.map