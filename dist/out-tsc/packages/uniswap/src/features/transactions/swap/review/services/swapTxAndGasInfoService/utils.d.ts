import { providers } from 'ethers/lib/ethers';
import { BridgeQuoteResponse, ClassicQuoteResponse, DiscriminatedQuoteResponse, WithV4Flag } from 'uniswap/src/data/apiClients/tradingApi/TradingApiClient';
import { BridgeQuote, ClassicQuote, CreateSwapRequest, NullablePermit, QuoteResponse } from 'uniswap/src/data/tradingApi/__generated__/index';
import { GasStrategy } from 'uniswap/src/data/tradingApi/types';
import { GasFeeResult } from 'uniswap/src/features/gas/types';
import { TransactionSettingsContextState } from 'uniswap/src/features/transactions/components/settings/contexts/TransactionSettingsContext';
import { ApprovalTxInfo } from 'uniswap/src/features/transactions/swap/contexts/hooks/useTokenApprovalInfo';
import { SwapData } from 'uniswap/src/features/transactions/swap/review/services/swapTxAndGasInfoService/evm/evmSwapRepository';
import { DerivedSwapInfo } from 'uniswap/src/features/transactions/swap/types/derivedSwapInfo';
import { BaseSwapTxAndGasInfo, BridgeSwapTxAndGasInfo, ClassicSwapTxAndGasInfo, SwapGasFeeEstimation } from 'uniswap/src/features/transactions/swap/types/swapTxAndGasInfo';
import { BridgeTrade, ClassicTrade, TokenApprovalInfo } from 'uniswap/src/features/transactions/swap/types/trade';
import { ValidatedTransactionRequest } from 'uniswap/src/features/transactions/swap/utils/trade';
import { GasFeeEstimates } from 'uniswap/src/features/transactions/types/transactionDetails';
import { ITraceContext } from 'utilities/src/telemetry/trace/TraceContext';
export interface TransactionRequestInfo {
    txRequests: providers.TransactionRequest[] | undefined;
    permitData?: NullablePermit;
    gasFeeResult: GasFeeResult;
    gasEstimate: SwapGasFeeEstimation;
    swapRequestArgs: CreateSwapRequest | undefined;
}
export declare function processWrapResponse({ gasFeeResult, wrapTxRequest, fallbackGasParams, }: {
    gasFeeResult: GasFeeResult;
    wrapTxRequest: providers.TransactionRequest | undefined;
    fallbackGasParams?: providers.TransactionRequest;
}): TransactionRequestInfo;
export declare function createPrepareSwapRequestParams({ activeGasStrategy, shadowGasStrategies, v4SwapEnabled, }: {
    activeGasStrategy: GasStrategy;
    shadowGasStrategies: GasStrategy[];
    v4SwapEnabled: boolean;
}): ({ swapQuoteResponse, signature, transactionSettings, alreadyApproved, }: {
    swapQuoteResponse: ClassicQuoteResponse | BridgeQuoteResponse;
    signature: string | undefined;
    transactionSettings: TransactionSettingsContextState;
    alreadyApproved: boolean;
}) => WithV4Flag<CreateSwapRequest>;
export declare function getSwapInputExceedsBalance({ derivedSwapInfo }: {
    derivedSwapInfo: DerivedSwapInfo;
}): boolean;
export declare function getShouldSkipSwapRequest({ derivedSwapInfo, tokenApprovalInfo, signature, permitsDontNeedSignature, }: {
    derivedSwapInfo: DerivedSwapInfo;
    tokenApprovalInfo: TokenApprovalInfo | undefined;
    signature: string | undefined;
    permitsDontNeedSignature?: boolean;
}): boolean;
/** Returns an error if simulation fails on backend and we expect the swap transaction to fail */
export declare function getSimulationError({ swapQuote, isRevokeNeeded, }: {
    swapQuote: ClassicQuote | BridgeQuote | undefined;
    isRevokeNeeded: boolean;
}): Error | null;
export declare function createProcessSwapResponse({ activeGasStrategy }: {
    activeGasStrategy: GasStrategy;
}): ({ response, error, swapQuote, isSwapLoading, permitData, swapRequestParams, isRevokeNeeded, permitsDontNeedSignature, }: {
    response: SwapData | undefined;
    error: Error | null;
    swapQuote: ClassicQuote | BridgeQuote | undefined;
    isSwapLoading: boolean;
    permitData: NullablePermit | undefined;
    swapRequestParams: WithV4Flag<CreateSwapRequest> | undefined;
    isRevokeNeeded: boolean;
    permitsDontNeedSignature?: boolean | undefined;
}) => TransactionRequestInfo;
export declare function getIsWrapApplicable({ derivedSwapInfo }: {
    derivedSwapInfo: DerivedSwapInfo;
}): boolean;
/** Extracts classic or bridge quote from a quote response */
export declare function getBridgeOrClassicQuoteResponse({ quote, }: {
    quote: QuoteResponse | undefined;
}): BridgeQuoteResponse | ClassicQuoteResponse | undefined;
export declare function createLogSwapRequestErrors({ trace }: {
    trace: ITraceContext;
}): ({ txRequest, gasFeeResult, derivedSwapInfo, transactionSettings, previousRequestId, }: {
    txRequest: providers.TransactionRequest | undefined;
    gasFeeResult: GasFeeResult;
    derivedSwapInfo: DerivedSwapInfo;
    transactionSettings: TransactionSettingsContextState;
    previousRequestId: string | undefined;
}) => void;
export declare function createGasFields({ swapTxInfo, approvalTxInfo, permitTxInfo, }: {
    swapTxInfo: TransactionRequestInfo;
    approvalTxInfo: ApprovalTxInfo;
    permitTxInfo?: {
        gasFeeResult: GasFeeResult;
        gasEstimate?: SwapGasFeeEstimation;
    };
}): Pick<BaseSwapTxAndGasInfo, 'gasFee' | 'gasFeeEstimation'>;
export declare function createApprovalFields({ approvalTxInfo, }: {
    approvalTxInfo: ApprovalTxInfo;
}): Pick<BaseSwapTxAndGasInfo, 'approveTxRequest' | 'revocationTxRequest'>;
export declare function getClassicSwapTxAndGasInfo({ trade, swapTxInfo, approvalTxInfo, permitTxInfo, }: {
    trade: ClassicTrade;
    swapTxInfo: TransactionRequestInfo;
    approvalTxInfo: ApprovalTxInfo;
    permitTxInfo: PermitTxInfo;
}): ClassicSwapTxAndGasInfo;
type PermitTxInfo = {
    permitTxRequest: ValidatedTransactionRequest | undefined;
    gasFeeResult: GasFeeResult;
    gasEstimates?: GasFeeEstimates;
};
export declare function usePermitTxInfo({ quote }: {
    quote?: DiscriminatedQuoteResponse;
}): PermitTxInfo;
export declare function createGetPermitTxInfo({ activeGasStrategy }: {
    activeGasStrategy: GasStrategy;
}): ({ quote }: {
    quote: ClassicQuoteResponse;
}) => PermitTxInfo;
export declare function getBridgeSwapTxAndGasInfo({ trade, swapTxInfo, approvalTxInfo, }: {
    trade: BridgeTrade;
    swapTxInfo: TransactionRequestInfo;
    approvalTxInfo: ApprovalTxInfo;
}): BridgeSwapTxAndGasInfo;
export declare function getWrapTxAndGasInfo({ swapTxInfo }: {
    swapTxInfo: TransactionRequestInfo;
}): ClassicSwapTxAndGasInfo;
export declare function getFallbackSwapTxAndGasInfo({ swapTxInfo, approvalTxInfo, }: {
    swapTxInfo: TransactionRequestInfo;
    approvalTxInfo: ApprovalTxInfo;
}): ClassicSwapTxAndGasInfo;
export {};
//# sourceMappingURL=utils.d.ts.map