/// <reference types="react" />
import { Warning } from 'uniswap/src/components/modals/WarningModal/types';
import { TransactionFailureReason } from 'uniswap/src/data/tradingApi/__generated__';
import { CurrencyInfo } from 'uniswap/src/features/dataApi/types';
import { GasFeeResult } from 'uniswap/src/features/gas/types';
import { FeeOnTransferFeeGroupProps, TokenWarningProps } from 'uniswap/src/features/transactions/TransactionDetails/types';
import { DerivedSwapInfo } from 'uniswap/src/features/transactions/swap/types/derivedSwapInfo';
import { UniswapXGasBreakdown } from 'uniswap/src/features/transactions/swap/types/swapTxAndGasInfo';
interface SwapDetailsProps {
    acceptedDerivedSwapInfo: DerivedSwapInfo<CurrencyInfo, CurrencyInfo>;
    autoSlippageTolerance?: number;
    customSlippageTolerance?: number;
    derivedSwapInfo: DerivedSwapInfo<CurrencyInfo, CurrencyInfo>;
    feeOnTransferProps?: FeeOnTransferFeeGroupProps;
    tokenWarningProps: TokenWarningProps;
    tokenWarningChecked?: boolean;
    gasFallbackUsed?: boolean;
    gasFee: GasFeeResult;
    uniswapXGasBreakdown?: UniswapXGasBreakdown;
    newTradeRequiresAcceptance: boolean;
    warning?: Warning;
    onAcceptTrade: () => void;
    onShowWarning?: () => void;
    setTokenWarningChecked?: (checked: boolean) => void;
    txSimulationErrors?: TransactionFailureReason[];
}
export declare function SwapDetails({ acceptedDerivedSwapInfo, autoSlippageTolerance, customSlippageTolerance, derivedSwapInfo, feeOnTransferProps, tokenWarningProps, tokenWarningChecked, gasFee, uniswapXGasBreakdown, newTradeRequiresAcceptance, warning, onAcceptTrade, onShowWarning, setTokenWarningChecked, txSimulationErrors, }: SwapDetailsProps): JSX.Element;
export {};
//# sourceMappingURL=SwapDetails.d.ts.map