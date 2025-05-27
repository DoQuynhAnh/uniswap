import { BigNumber } from 'ethers/lib/ethers';
import { faker } from 'uniswap/src/test/shared';
import { createFixture } from 'uniswap/src/test/utils';
export const ethersTransaction = createFixture()(() => ({
    chainId: faker.datatype.number(),
    data: faker.datatype.uuid(),
    nonce: faker.datatype.number(),
    gasLimit: BigNumber.from(faker.datatype.number()),
    value: BigNumber.from(faker.datatype.number()),
}));
export const ethersTransactionReceipt = createFixture()(() => ({
    to: faker.finance.ethereumAddress(),
    from: faker.finance.ethereumAddress(),
    contractAddress: faker.finance.ethereumAddress(),
    transactionIndex: faker.datatype.number(),
    gasUsed: BigNumber.from(faker.datatype.number()),
    logsBloom: faker.datatype.uuid(),
    blockHash: faker.datatype.uuid(),
    transactionHash: faker.datatype.uuid(),
    logs: [],
    blockNumber: faker.datatype.number(),
    confirmations: faker.datatype.number(),
    cumulativeGasUsed: BigNumber.from(faker.datatype.number()),
    effectiveGasPrice: BigNumber.from(faker.datatype.number()),
    byzantium: faker.datatype.boolean(),
    type: faker.datatype.number(),
}));
export const ethersTransactionRequest = createFixture()(() => ({
    from: faker.finance.ethereumAddress(),
    to: faker.finance.ethereumAddress(),
    value: faker.datatype.number().toString(),
    data: faker.datatype.uuid(),
    nonce: BigNumber.from(faker.datatype.number()),
    gasPrice: faker.datatype.number().toString(),
}));
export const ethersTransactionResponse = createFixture()(() => ({
    ...ethersTransaction(),
    hash: faker.datatype.uuid(),
    confirmations: faker.datatype.number(),
    from: faker.finance.ethereumAddress(),
    wait: () => Promise.resolve(ethersTransactionReceipt()),
}));
//# sourceMappingURL=ethers.js.map