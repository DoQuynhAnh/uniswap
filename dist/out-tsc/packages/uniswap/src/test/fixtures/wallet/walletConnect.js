import { faker } from 'uniswap/src/test/shared';
import { createFixture } from 'uniswap/src/test/utils';
import { DappRequestType } from 'uniswap/src/types/walletConnect';
export const dappInfoWC = createFixture()(() => ({
    requestType: DappRequestType.WalletConnectSessionRequest,
    name: faker.lorem.words(),
    url: faker.internet.url(),
    icon: faker.image.imageUrl(),
}));
export const dappInfoUwULink = createFixture()(() => ({
    requestType: DappRequestType.UwULink,
    name: faker.lorem.words(),
    url: faker.internet.url(),
    icon: faker.image.imageUrl(),
    chain_id: faker.datatype.number(),
}));
//# sourceMappingURL=walletConnect.js.map