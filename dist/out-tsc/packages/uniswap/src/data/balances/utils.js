import { useEffect, useState } from 'react';
import { useEnabledChains } from 'uniswap/src/features/chains/hooks/useEnabledChains';
import { logger } from 'utilities/src/logger/logger';
/**
 * Computes the total balances in USD per chain asynchronously to avoid blocking the main thread.
 */
export function useTotalBalancesUsdPerChain(portfolioBalances) {
    var _a;
    const [totalBalancesUsdPerChain, setTotalBalancesUsdPerChain] = useState(undefined);
    const { gqlChains } = useEnabledChains();
    useEffect(() => {
        const calculateBalancesPerChain = async () => {
            var _a, _b, _c;
            if (!((_c = (_b = (_a = portfolioBalances.data) === null || _a === void 0 ? void 0 : _a.portfolios) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.tokenBalances)) {
                return;
            }
            const totalBalances = gqlChains.reduce((chainAcc, chain) => {
                var _a, _b, _c, _d;
                chainAcc[chain] =
                    ((_d = (_c = (_b = (_a = portfolioBalances.data) === null || _a === void 0 ? void 0 : _a.portfolios) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.tokenBalances) === null || _d === void 0 ? void 0 : _d.reduce((balanceAcc, tokenBalance) => {
                        var _a, _b;
                        if (((_a = tokenBalance === null || tokenBalance === void 0 ? void 0 : tokenBalance.token) === null || _a === void 0 ? void 0 : _a.chain) === chain && !tokenBalance.isHidden) {
                            return balanceAcc + (((_b = tokenBalance.denominatedValue) === null || _b === void 0 ? void 0 : _b.value) || 0);
                        }
                        return balanceAcc;
                    }, 0)) || 0;
                return chainAcc;
            }, {});
            setTotalBalancesUsdPerChain(totalBalances);
        };
        calculateBalancesPerChain().catch((error) => logger.error('useTotalBalancesUsdPerChain', error));
    }, [(_a = portfolioBalances.data) === null || _a === void 0 ? void 0 : _a.portfolios, gqlChains]);
    return totalBalancesUsdPerChain;
}
//# sourceMappingURL=utils.js.map