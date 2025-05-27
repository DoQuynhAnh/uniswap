import { portfolioBalances } from 'uniswap/src/test/fixtures';
export function portfolioBalancesById(inputBalances) {
    const balances = inputBalances !== null && inputBalances !== void 0 ? inputBalances : portfolioBalances();
    return balances.reduce((acc, balance) => {
        acc[balance.currencyInfo.currencyId] = balance;
        return acc;
    }, {});
}
//# sourceMappingURL=balances.js.map