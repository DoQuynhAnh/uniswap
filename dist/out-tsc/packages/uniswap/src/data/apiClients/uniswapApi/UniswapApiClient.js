import { config } from 'uniswap/src/config';
import { uniswapUrls } from 'uniswap/src/constants/urls';
import { createApiClient } from 'uniswap/src/data/apiClients/createApiClient';
import { convertGasFeeToDisplayValue } from 'uniswap/src/features/gas/hooks';
import { areEqualGasStrategies, } from 'uniswap/src/features/gas/types';
import { createEthersProvider } from 'uniswap/src/features/providers/createEthersProvider';
import { isInterface } from 'utilities/src/platform';
const UniswapApiClient = createApiClient({
    baseUrl: uniswapUrls.apiBaseUrl,
    additionalHeaders: {
        'x-api-key': config.uniswapApiKey,
    },
    includeBaseUniswapHeaders: !isInterface,
});
export function createFetchGasFee({ activeGasStrategy, shadowGasStrategies, }) {
    const injectGasStrategies = (tx) => {
        return { ...tx, gasStrategies: [activeGasStrategy, ...shadowGasStrategies] };
    };
    const processGasFeeResponse = (gasFeeResponse) => {
        var _a, _b;
        const activeEstimate = (_a = gasFeeResponse.gasEstimates) === null || _a === void 0 ? void 0 : _a.find((e) => areEqualGasStrategies(e.strategy, activeGasStrategy));
        if (!activeEstimate) {
            throw new Error('Could not get gas estimate');
        }
        return {
            value: activeEstimate.gasFee,
            displayValue: convertGasFeeToDisplayValue(activeEstimate.gasFee, activeGasStrategy),
            params: extractGasFeeParams(activeEstimate),
            gasEstimates: {
                activeEstimate,
                shadowEstimates: (_b = gasFeeResponse.gasEstimates) === null || _b === void 0 ? void 0 : _b.filter((e) => e !== activeEstimate),
            },
        };
    };
    const tryClientSideFallback = async ({ tx, fallbackGasLimit }) => {
        try {
            if (!tx.chainId) {
                throw new Error('No chainId for clientside gas estimation');
            }
            const provider = createEthersProvider(tx.chainId);
            if (!provider) {
                throw new Error('No provider for clientside gas estimation');
            }
            const gasUseEstimate = (await provider.estimateGas(tx)).toNumber() * 10e9;
            return {
                value: gasUseEstimate.toString(),
                displayValue: gasUseEstimate.toString(),
            };
        }
        catch (e) {
            // provider.estimateGas will error if the account doesn't have sufficient ETH balance, but we should show an estimated cost anyway
            return {
                value: fallbackGasLimit === null || fallbackGasLimit === void 0 ? void 0 : fallbackGasLimit.toString(),
                // These estimates don't inflate the gas limit, so we can use the same value for display
                displayValue: fallbackGasLimit === null || fallbackGasLimit === void 0 ? void 0 : fallbackGasLimit.toString(),
            };
        }
    };
    const fetchGasFee = async ({ tx, fallbackGasLimit }) => {
        const body = JSON.stringify(injectGasStrategies(tx));
        try {
            const gasFeeResponse = await UniswapApiClient.post(uniswapUrls.gasServicePath, { body });
            return processGasFeeResponse(gasFeeResponse);
        }
        catch (error) {
            if (isInterface) {
                // Gas Fee API currently errors on gas estimations on disconnected state & insufficient funds
                // Fallback to clientside estimate using provider.estimateGas
                return tryClientSideFallback({ tx, fallbackGasLimit });
            }
            throw error;
        }
    };
    return fetchGasFee;
}
function extractGasFeeParams(estimate) {
    if ('maxFeePerGas' in estimate) {
        return {
            maxFeePerGas: estimate.maxFeePerGas,
            maxPriorityFeePerGas: estimate.maxPriorityFeePerGas,
            gasLimit: estimate.gasLimit,
        };
    }
    else {
        return {
            gasPrice: estimate.gasPrice,
            gasLimit: estimate.gasLimit,
        };
    }
}
export async function fetchTrmScreen(params) {
    return await UniswapApiClient.post(uniswapUrls.trmPath, {
        body: JSON.stringify(params),
    });
}
//# sourceMappingURL=UniswapApiClient.js.map