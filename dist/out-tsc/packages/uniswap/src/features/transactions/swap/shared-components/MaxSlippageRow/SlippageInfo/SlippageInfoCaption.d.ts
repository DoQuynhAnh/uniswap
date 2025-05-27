/// <reference types="react" />
import { SlippageInfoProps } from 'uniswap/src/features/transactions/swap/shared-components/MaxSlippageRow/SlippageInfo/types';
import { TradeWithSlippage } from 'uniswap/src/features/transactions/swap/types/trade';
export declare function SlippageInfoCaption({ trade, isCustomSlippage, autoSlippageTolerance, }: Omit<SlippageInfoProps, 'children' | 'trade'> & {
    trade: TradeWithSlippage;
}): JSX.Element;
//# sourceMappingURL=SlippageInfoCaption.d.ts.map