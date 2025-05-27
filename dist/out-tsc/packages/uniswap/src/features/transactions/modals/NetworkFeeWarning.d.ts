import { PropsWithChildren } from 'react';
import { InfoTooltipProps } from 'uniswap/src/components/tooltip/InfoTooltipProps';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { FormattedUniswapXGasFeeInfo } from 'uniswap/src/features/gas/types';
export declare function NetworkFeeWarning({ gasFeeHighRelativeToValue, children, tooltipTrigger, placement, uniswapXGasFeeInfo, chainId, }: PropsWithChildren<{
    gasFeeHighRelativeToValue?: boolean;
    tooltipTrigger?: InfoTooltipProps['trigger'];
    placement?: InfoTooltipProps['placement'];
    uniswapXGasFeeInfo?: FormattedUniswapXGasFeeInfo;
    chainId: UniverseChainId;
}>): JSX.Element;
//# sourceMappingURL=NetworkFeeWarning.d.ts.map