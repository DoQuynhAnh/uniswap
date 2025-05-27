import { Routing, CreateSwapRequest } from "uniswap/src/data/tradingApi/__generated__/index";
import { GasFeeResult, ValidatedGasFeeResult } from "uniswap/src/features/gas/types";
import { BridgeTrade, ClassicTrade, UniswapXTrade } from "uniswap/src/features/transactions/swap/types/trade";
import { ValidatedPermit, ValidatedTransactionRequest } from "uniswap/src/features/transactions/swap/utils/trade";
import { GasFeeEstimates } from "uniswap/src/features/transactions/types/transactionDetails";
export type SwapTxAndGasInfo = ClassicSwapTxAndGasInfo | UniswapXSwapTxAndGasInfo | BridgeSwapTxAndGasInfo;
export type ValidatedSwapTxContext = ValidatedClassicSwapTxAndGasInfo | ValidatedUniswapXSwapTxAndGasInfo | ValidatedBridgeSwapTxAndGasInfo;
export declare function isValidSwapTxContext(swapTxContext: SwapTxAndGasInfo | unknown): swapTxContext is ValidatedSwapTxContext;
export type SwapGasFeeEstimation = {
    swapEstimates?: GasFeeEstimates;
    approvalEstimates?: GasFeeEstimates;
    wrapEstimates?: GasFeeEstimates;
};
export type UniswapXGasBreakdown = {
    classicGasUseEstimateUSD?: string;
    approvalCost?: string;
    wrapCost?: string;
    inputTokenSymbol?: string;
};
export interface BaseSwapTxAndGasInfo {
    routing: Routing;
    trade?: ClassicTrade | UniswapXTrade | BridgeTrade;
    approveTxRequest: ValidatedTransactionRequest | undefined;
    revocationTxRequest: ValidatedTransactionRequest | undefined;
    gasFee: GasFeeResult;
    gasFeeEstimation: SwapGasFeeEstimation;
}
export declare enum PermitMethod {
    Transaction = "Transaction",
    TypedData = "TypedData"
}
export type PermitTransaction = {
    method: PermitMethod.Transaction;
    txRequest: ValidatedTransactionRequest;
};
export type PermitTypedData = {
    method: PermitMethod.TypedData;
    typedData: ValidatedPermit;
};
export type PopulatedTransactionRequestArray = [ValidatedTransactionRequest, ...ValidatedTransactionRequest[]];
export interface ClassicSwapTxAndGasInfo extends BaseSwapTxAndGasInfo {
    routing: Routing.CLASSIC;
    trade?: ClassicTrade;
    permit: PermitTransaction | PermitTypedData | undefined;
    swapRequestArgs: CreateSwapRequest | undefined;
    /**
     * `unsigned` is true if `txRequest` is undefined due to a permit signature needing to be signed first.
     * This occurs on interface where the user must be prompted to sign a permit before txRequest can be fetched.
    */
    unsigned: boolean;
    txRequests: PopulatedTransactionRequestArray | undefined;
}
export interface UniswapXSwapTxAndGasInfo extends BaseSwapTxAndGasInfo {
    routing: Routing.DUTCH_V2 | Routing.DUTCH_V3 | Routing.PRIORITY;
    trade: UniswapXTrade;
    permit: PermitTypedData | undefined;
    wrapTxRequest: ValidatedTransactionRequest | undefined;
    gasFeeBreakdown: UniswapXGasBreakdown;
}
export interface BridgeSwapTxAndGasInfo extends BaseSwapTxAndGasInfo {
    routing: Routing.BRIDGE;
    trade: BridgeTrade;
    txRequests: PopulatedTransactionRequestArray | undefined;
}
interface BaseRequiredSwapTxContextFields {
    gasFee: ValidatedGasFeeResult;
}
export type ValidatedClassicSwapTxAndGasInfo = Required<ClassicSwapTxAndGasInfo> & BaseRequiredSwapTxContextFields & ({
    unsigned: true;
    permit: PermitTypedData;
    txRequests: undefined;
} | {
    unsigned: false;
    permit: PermitTransaction | undefined;
    txRequests: PopulatedTransactionRequestArray;
});
export type ValidatedBridgeSwapTxAndGasInfo = Required<BridgeSwapTxAndGasInfo> & BaseRequiredSwapTxContextFields & ({
    txRequests: PopulatedTransactionRequestArray;
});
export type ValidatedUniswapXSwapTxAndGasInfo = Required<UniswapXSwapTxAndGasInfo> & BaseRequiredSwapTxContextFields & {
    permit: PermitTypedData;
};
export {};
//# sourceMappingURL=swapTxAndGasInfo.d.ts.map