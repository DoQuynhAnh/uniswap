import { Currency, HistoryDuration, PriceSource, ProtectionResult, SafetyLevel, TokenStandard, } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
import { toGraphQLChain } from 'uniswap/src/features/chains/utils';
import { amounts } from 'uniswap/src/test/fixtures/gql/amounts';
import { get24hPriceChange, getLatestPrice, priceHistory } from 'uniswap/src/test/fixtures/gql/history';
import { GQL_CHAINS, image } from 'uniswap/src/test/fixtures/gql/misc';
import { DAI, ETH, USDBC_BASE, USDC, USDC_ARBITRUM, USDC_OPTIMISM, USDC_POLYGON, WETH, } from 'uniswap/src/test/fixtures/lib';
import { MAX_FIXTURE_TIMESTAMP, faker } from 'uniswap/src/test/shared';
import { createFixture, randomChoice, randomEnumValue } from 'uniswap/src/test/utils';
const benignProtectionInfo = {
    result: ProtectionResult.Benign,
    attackTypes: [],
    blockaidFees: {
        buy: 0,
        sell: 0,
        transfer: 0,
    },
};
export const token = createFixture({
    sdkToken: null,
    market: undefined,
    protectionInfo: benignProtectionInfo,
})(({ sdkToken, market, protectionInfo }) => {
    var _a, _b, _c, _d, _e;
    return ({
        __typename: 'Token',
        id: faker.datatype.uuid(),
        name: (_a = sdkToken === null || sdkToken === void 0 ? void 0 : sdkToken.name) !== null && _a !== void 0 ? _a : faker.lorem.word(),
        symbol: (_b = sdkToken === null || sdkToken === void 0 ? void 0 : sdkToken.symbol) !== null && _b !== void 0 ? _b : faker.lorem.word(),
        decimals: (_c = sdkToken === null || sdkToken === void 0 ? void 0 : sdkToken.decimals) !== null && _c !== void 0 ? _c : faker.datatype.number({ min: 1, max: 18 }),
        chain: (_d = (sdkToken ? toGraphQLChain(sdkToken.chainId) : null)) !== null && _d !== void 0 ? _d : randomChoice(GQL_CHAINS),
        address: (_e = sdkToken === null || sdkToken === void 0 ? void 0 : sdkToken.address.toLocaleLowerCase()) !== null && _e !== void 0 ? _e : faker.finance.ethereumAddress(),
        standard: (sdkToken === null || sdkToken === void 0 ? void 0 : sdkToken.address) ? TokenStandard.Erc20 : TokenStandard.Native,
        market,
        project: tokenProjectBase(),
        feeData: {
            buyFeeBps: '',
            sellFeeBps: '',
        },
        protectionInfo,
    });
});
export const tokenBalance = createFixture()(() => ({
    __typename: 'TokenBalance',
    id: faker.datatype.uuid(),
    blockNumber: faker.datatype.number({ max: 1000000 }),
    blockTimestamp: faker.datatype.number({ max: MAX_FIXTURE_TIMESTAMP }),
    denominatedValue: amounts.md(),
    isHidden: faker.datatype.boolean(),
    ownerAddress: faker.finance.ethereumAddress(),
    quantity: faker.datatype.number({ min: 1, max: 1000 }),
    token: token(),
    tokenProjectMarket: tokenProjectMarket(),
}));
export const tokenMarket = createFixture(() => ({
    priceHistory: priceHistory({ duration: HistoryDuration.Week, size: 7 }),
}))(({ priceHistory: history }) => ({
    __typename: 'TokenMarket',
    id: faker.datatype.uuid(),
    token: ethToken(),
    priceSource: randomEnumValue(PriceSource),
    priceHistory: history,
    price: history ? getLatestPrice(history) : undefined,
    pricePercentChange: history ? get24hPriceChange(history) : undefined,
}));
export const tokenProjectMarket = createFixture(() => ({
    priceHistory: priceHistory({ duration: HistoryDuration.Week, size: 7 }),
}))(({ priceHistory: history }) => ({
    __typename: 'TokenProjectMarket',
    id: faker.datatype.uuid(),
    priceHistory: history,
    price: getLatestPrice(history),
    pricePercentChange24h: get24hPriceChange(history),
    relativeChange24: get24hPriceChange(history),
    currency: randomEnumValue(Currency),
    tokenProject: tokenProjectBase(),
}));
const tokenProjectBase = createFixture()(() => {
    const logoUrl = faker.image.imageUrl();
    return {
        __typename: 'TokenProject',
        id: faker.datatype.uuid(),
        name: faker.lorem.word(),
        tokens: [],
        safetyLevel: SafetyLevel.Verified,
        // @deprecated
        logoUrl,
        isSpam: faker.datatype.boolean(),
        logo: image({ url: logoUrl }),
        spamCode: faker.datatype.number(),
    };
});
export const tokenProject = createFixture(() => ({
    priceHistory: priceHistory({ duration: HistoryDuration.Week, size: 7 }),
    safetyLevel: SafetyLevel.Verified,
}))(({ priceHistory: history, safetyLevel }) => ({
    ...tokenProjectBase({
        markets: [tokenProjectMarket({ priceHistory: history })],
        safetyLevel,
    }),
}));
export const usdcTokenProject = createFixture(() => ({
    priceHistory: priceHistory({ duration: HistoryDuration.Week, size: 7 }),
    safetyLevel: SafetyLevel.Verified,
}))(({ priceHistory: history, safetyLevel }) => tokenProject({
    priceHistory: history,
    tokens: [
        token({ sdkToken: USDC, market: tokenMarket() }),
        token({ sdkToken: USDC_POLYGON }),
        token({ sdkToken: USDC_ARBITRUM }),
        token({ sdkToken: USDBC_BASE, market: tokenMarket() }),
        token({ sdkToken: USDC_OPTIMISM }),
    ],
    safetyLevel,
}));
/**
 * Derived fixtures
 */
const ethProject = tokenProject({
    name: 'Ethereum',
    safetyLevel: SafetyLevel.Verified,
    isSpam: false,
});
export const ethToken = createFixture()(() => token({ sdkToken: ETH, project: ethProject }));
export const wethToken = createFixture()(() => token({ sdkToken: WETH, project: ethProject }));
const daiProject = tokenProject({
    name: 'Dai Stablecoin',
    safetyLevel: SafetyLevel.Verified,
    isSpam: false,
});
export const daiToken = createFixture()(() => token({ sdkToken: DAI, project: daiProject }));
const usdcProject = tokenProject({
    name: 'USD Coin',
    safetyLevel: SafetyLevel.Verified,
    isSpam: false,
});
export const usdcToken = createFixture()(() => token({ sdkToken: USDC, project: usdcProject }));
export const usdcBaseToken = createFixture()(() => token({ sdkToken: USDBC_BASE, project: usdcProject }));
export const usdcArbitrumToken = createFixture()(() => token({ sdkToken: USDC_ARBITRUM, project: usdcProject }));
//# sourceMappingURL=tokens.js.map