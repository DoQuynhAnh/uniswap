import { TransactionRequest } from '@ethersproject/providers';
import { GasStrategy } from 'uniswap/src/data/tradingApi/types';
import { GasFeeResult } from 'uniswap/src/features/gas/types';
type FetchGasFn = ({ tx, fallbackGasLimit, }: {
    tx: TransactionRequest;
    fallbackGasLimit?: number;
}) => Promise<GasFeeResultWithoutState>;
export type GasFeeResultWithoutState = Omit<GasFeeResult, 'isLoading' | 'error'>;
export declare function createFetchGasFee({ activeGasStrategy, shadowGasStrategies, }: {
    activeGasStrategy: GasStrategy;
    shadowGasStrategies: GasStrategy[];
}): FetchGasFn;
export type ScreenResponse = {
    block: boolean;
};
export type ScreenRequest = {
    address: string;
};
export declare function fetchTrmScreen(params: ScreenRequest): Promise<ScreenResponse>;
export {};
//# sourceMappingURL=UniswapApiClient.d.ts.map