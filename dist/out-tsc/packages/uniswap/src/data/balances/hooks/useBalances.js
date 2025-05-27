import { useMemo } from 'react';
import { usePortfolioBalances } from 'uniswap/src/features/dataApi/balances';
export function useBalances({ address, currencies, fetchPolicy = 'cache-and-network', }) {
    const { data: balances } = usePortfolioBalances({
        address,
        fetchPolicy,
    });
    return useMemo(() => {
        if (!currencies || !currencies.length || !balances) {
            return null;
        }
        return currencies.map((id) => { var _a; return (_a = balances[id]) !== null && _a !== void 0 ? _a : null; }).filter((x) => Boolean(x));
    }, [balances, currencies]);
}
//# sourceMappingURL=useBalances.js.map