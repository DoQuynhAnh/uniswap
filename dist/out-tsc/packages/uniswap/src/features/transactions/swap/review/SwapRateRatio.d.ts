/// <reference types="react" />
import { IndicativeTrade, Trade } from 'uniswap/src/features/transactions/swap/types/trade';
type SwapRateRatioProps = {
    trade: Trade | IndicativeTrade | undefined | null;
    styling?: 'primary' | 'secondary';
    initialInverse?: boolean;
    justifyContent?: 'flex-end' | 'flex-start';
};
export declare function SwapRateRatio({ trade, styling, initialInverse, justifyContent, }: SwapRateRatioProps): JSX.Element | null;
export {};
//# sourceMappingURL=SwapRateRatio.d.ts.map