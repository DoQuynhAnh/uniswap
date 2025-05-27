import { useSwapFormContext } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
const getIsIndicative = (trade) => {
    return !trade.trade && Boolean(trade.indicativeTrade || trade.isIndicativeLoading);
};
export const useIsTradeIndicative = () => {
    const { derivedSwapInfo: { trade }, } = useSwapFormContext();
    return getIsIndicative(trade);
};
//# sourceMappingURL=useIsTradeIndicative.js.map