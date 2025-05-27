/// <reference types="react" />
import { Currency, CurrencyAmount } from '@uniswap/sdk-core';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { GasFeeResult } from 'uniswap/src/features/gas/types';
import { UniswapXGasBreakdown } from 'uniswap/src/features/transactions/swap/types/swapTxAndGasInfo';
export declare function NetworkFee({ chainId, gasFee, uniswapXGasBreakdown, transactionUSDValue, indicative, }: {
    chainId: UniverseChainId;
    gasFee: GasFeeResult;
    uniswapXGasBreakdown?: UniswapXGasBreakdown;
    transactionUSDValue?: Maybe<CurrencyAmount<Currency>>;
    indicative?: boolean;
}): JSX.Element;
type UniswapXFeeProps = {
    gasFee: string;
    preSavingsGasFee?: string;
    smaller?: boolean;
    loading?: boolean;
};
export declare function UniswapXFee({ gasFee, preSavingsGasFee, smaller, loading, }: UniswapXFeeProps): JSX.Element;
export {};
//# sourceMappingURL=NetworkFee.d.ts.map