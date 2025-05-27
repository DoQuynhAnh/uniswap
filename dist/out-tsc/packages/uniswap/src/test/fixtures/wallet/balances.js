import { fromGraphQLChain } from 'uniswap/src/features/chains/utils';
import { buildCurrency, getCurrencySafetyInfo } from 'uniswap/src/features/dataApi/utils';
import { currencyInfo, portfolio, tokenBalance } from 'uniswap/src/test/fixtures';
import { faker } from 'uniswap/src/test/shared';
import { createFixture } from 'uniswap/src/test/utils';
import { currencyId } from 'uniswap/src/utils/currencyId';
const portfolioBalanceBase = createFixture()(() => ({
    id: faker.datatype.uuid(),
    cacheId: faker.datatype.uuid(),
    quantity: faker.datatype.float({ min: 0, max: 1000, precision: 0.01 }),
    balanceUSD: faker.datatype.float({ min: 0, max: 1000, precision: 0.01 }),
    currencyInfo: currencyInfo(),
    relativeChange24: faker.datatype.float({ min: 0, max: 1000, precision: 0.01 }),
    isHidden: faker.datatype.boolean(),
}));
export const portfolioBalance = createFixture({
    fromBalance: null,
    fromToken: null,
})(({ fromBalance, fromToken }) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const balance = fromBalance !== null && fromBalance !== void 0 ? fromBalance : (fromToken && tokenBalance({ token: fromToken }));
    if (!balance) {
        return portfolioBalanceBase();
    }
    const currency = buildCurrency({
        chainId: fromGraphQLChain(balance.token.chain),
        address: balance.token.address,
        decimals: balance.token.decimals,
        symbol: balance.token.symbol,
        name: balance.token.name,
        buyFeeBps: (_a = balance.token.feeData) === null || _a === void 0 ? void 0 : _a.buyFeeBps,
        sellFeeBps: (_b = balance.token.feeData) === null || _b === void 0 ? void 0 : _b.sellFeeBps,
    });
    if (!currency) {
        return portfolioBalanceBase();
    }
    return {
        id: balance.id,
        cacheId: `${balance.__typename}:${balance.id}`,
        quantity: balance.quantity,
        balanceUSD: (_c = balance.denominatedValue) === null || _c === void 0 ? void 0 : _c.value,
        isHidden: balance.isHidden,
        // This field is normally calculated dynamically. We cannot mock it in the
        // fixture returned by the mocked resolver as it is ignored and replaced
        // by randomly generated Amount mock. As a result, we expect any number here.
        relativeChange24: expect.any(Number),
        currencyInfo: {
            currency,
            currencyId: currencyId(currency),
            logoUrl: (_d = balance.token.project) === null || _d === void 0 ? void 0 : _d.logoUrl,
            isSpam: (_e = balance.token.project) === null || _e === void 0 ? void 0 : _e.isSpam,
            spamCode: (_f = balance.token.project) === null || _f === void 0 ? void 0 : _f.spamCode,
            safetyInfo: getCurrencySafetyInfo((_g = balance.token.project) === null || _g === void 0 ? void 0 : _g.safetyLevel, balance.token.protectionInfo),
        },
    };
});
export const portfolioBalances = createFixture(() => ({
    portfolio: portfolio(),
}))(({ portfolio: { tokenBalances } }) => {
    var _a;
    return (_a = tokenBalances === null || tokenBalances === void 0 ? void 0 : tokenBalances.map((balance) => {
        if ((balance === null || balance === void 0 ? void 0 : balance.quantity) && (balance === null || balance === void 0 ? void 0 : balance.token)) {
            return portfolioBalance({
                fromBalance: balance,
            });
        }
        return undefined;
    }).filter(Boolean)) !== null && _a !== void 0 ? _a : [];
});
//# sourceMappingURL=balances.js.map