import { useEffect, useState } from 'react';
import { useSwapFormContext } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
// TODO: WALLL-6294
export function useDebouncedTrade() {
    const { derivedSwapInfo: { trade }, } = useSwapFormContext();
    const [debouncedTrade, setDebouncedTrade] = useState();
    useEffect(() => {
        if (trade.trade) {
            setDebouncedTrade(trade.trade);
        }
        else if (trade.indicativeTrade) {
            setDebouncedTrade(trade.indicativeTrade);
        }
        else if (!trade.isLoading) {
            setDebouncedTrade(undefined);
        }
    }, [trade.indicativeTrade, trade.isLoading, trade.trade]);
    return debouncedTrade;
}
//# sourceMappingURL=useDebouncedTrade.js.map