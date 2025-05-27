import { Currency, TokenStandard, TransactionDirection, } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
import { amount } from 'uniswap/src/test/fixtures/gql/amounts';
import { daiToken, ethToken } from 'uniswap/src/test/fixtures/gql/assets';
import { faker } from 'uniswap/src/test/shared';
import { createFixture, randomEnumValue } from 'uniswap/src/test/utils';
/**
 * Base fixtures
 */
export const tokenApproval = createFixture()(() => ({
    __typename: 'TokenApproval',
    id: faker.datatype.uuid(),
    approvedAddress: faker.finance.ethereumAddress(),
    quantity: faker.datatype.float({ min: 0, max: 1000, precision: 0.01 }).toString(),
    asset: ethToken(),
    tokenStandard: randomEnumValue(TokenStandard),
}));
export const tokenTransfer = createFixture()(() => ({
    __typename: 'TokenTransfer',
    id: faker.datatype.uuid(),
    asset: ethToken(),
    direction: randomEnumValue(TransactionDirection),
    quantity: faker.datatype.float({ min: 0, max: 1000, precision: 0.01 }).toString(),
    recipient: faker.finance.ethereumAddress(),
    sender: faker.finance.ethereumAddress(),
    tokenStandard: randomEnumValue(TokenStandard),
}));
/**
 * Derived fixtures
 */
export const erc20ApproveAssetChange = createFixture()(() => tokenApproval({ asset: daiToken(), tokenStandard: TokenStandard.Erc20 }));
export const erc20TokenTransferOut = createFixture()(() => tokenTransfer({
    asset: daiToken(),
    tokenStandard: TokenStandard.Erc20,
    direction: TransactionDirection.Out,
    transactedValue: amount({ value: 1, currency: Currency.Usd }),
}));
export const erc20TransferIn = createFixture()(() => erc20TokenTransferOut({ direction: TransactionDirection.In }));
//# sourceMappingURL=tokens.js.map