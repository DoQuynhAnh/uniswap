export declare enum FeeType {
    LEGACY = "legacy",
    EIP1559 = "eip1559"
}
export interface GasStrategy {
    limitInflationFactor: number;
    displayLimitInflationFactor: number;
    priceInflationFactor: number;
    percentileThresholdFor1559Fee: number;
    thresholdToInflateLastBlockBaseFee?: number | null;
    baseFeeMultiplier?: number | null;
    baseFeeHistoryWindow?: number | null;
    minPriorityFeeRatioOfBaseFee?: number | null;
    minPriorityFeeGwei?: number | null;
    maxPriorityFeeGwei?: number | null;
}
export interface GasEstimateLegacy {
    gasPrice: string;
    gasLimit: string;
    type: FeeType.LEGACY;
    strategy: GasStrategy;
    gasFee: string;
}
export interface GasEstimateEip1559 {
    maxFeePerGas: string;
    maxPriorityFeePerGas: string;
    gasLimit: string;
    type: FeeType.EIP1559;
    strategy: GasStrategy;
    gasFee: string;
}
export type GasEstimate = GasEstimateLegacy | GasEstimateEip1559;
//# sourceMappingURL=types.d.ts.map