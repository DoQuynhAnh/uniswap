import { FeeType } from 'uniswap/src/data/tradingApi/types';
export const createGasFeeEstimates = () => {
    const legacyGasEstimate = {
        gasLimit: '21000',
        gasPrice: '20000000000',
        gasFee: '42000000000000',
        type: FeeType.LEGACY,
        strategy: {
            limitInflationFactor: 1,
            displayLimitInflationFactor: 1,
            priceInflationFactor: 1,
            percentileThresholdFor1559Fee: 1,
        },
    };
    const eip1559GasEstimate = {
        gasFee: '42000000000000',
        maxFeePerGas: '30000000000',
        maxPriorityFeePerGas: '1000000000',
        gasLimit: '1400',
        type: FeeType.EIP1559,
        strategy: {
            limitInflationFactor: 1,
            displayLimitInflationFactor: 1,
            priceInflationFactor: 1,
            percentileThresholdFor1559Fee: 1,
        },
    };
    return {
        activeEstimate: legacyGasEstimate,
        shadowEstimates: [legacyGasEstimate, eip1559GasEstimate],
    };
};
//# sourceMappingURL=tradingApi.js.map