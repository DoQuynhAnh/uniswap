/// <reference types="react" />
import { FormattedUniswapXGasFeeInfo } from 'uniswap/src/features/gas/types';
import { FeeOnTransferFeeGroupProps } from 'uniswap/src/features/transactions/TransactionDetails/types';
export declare function YouReceiveDetailsTooltip({ receivedAmount, feeOnTransferProps, }: {
    receivedAmount: string;
    feeOnTransferProps?: FeeOnTransferFeeGroupProps;
}): JSX.Element;
export declare function AutoSlippageBadge(): JSX.Element;
export declare function MaxSlippageTooltip({ receivedAmount, minimumAmount, autoSlippageEnabled, currentSlippageTolerance, }: {
    receivedAmount: string;
    minimumAmount: string;
    autoSlippageEnabled?: boolean;
    currentSlippageTolerance: string;
}): JSX.Element | null;
export declare function BestRouteTooltip(): JSX.Element | null;
export declare function BestRouteUniswapXTooltip(): JSX.Element;
export declare function NetworkCostTooltipClassic(): JSX.Element;
export declare function NetworkCostTooltipUniswapX({ uniswapXGasFeeInfo, }: {
    uniswapXGasFeeInfo: FormattedUniswapXGasFeeInfo;
}): JSX.Element;
export declare function LargePriceDifferenceTooltip(): JSX.Element;
export declare function SwapFeeOnTransferTooltip(props: FeeOnTransferFeeGroupProps): JSX.Element;
export declare function AcrossRoutingInfoTooltip(): JSX.Element;
//# sourceMappingURL=SwapFormTooltips.d.ts.map