import { config } from 'uniswap/src/config';
import { uniswapUrls } from 'uniswap/src/constants/urls';
import { createApiClient } from 'uniswap/src/data/apiClients/createApiClient';
import { UniversalRouterVersion, } from 'uniswap/src/data/tradingApi/__generated__';
import { FeatureFlags } from 'uniswap/src/features/gating/flags';
import { getFeatureFlag } from 'uniswap/src/features/gating/hooks';
import { logger } from 'utilities/src/logger/logger';
const TradingApiClient = createApiClient({
    baseUrl: uniswapUrls.tradingApiUrl,
    additionalHeaders: {
        'x-api-key': config.tradingApiKey,
    },
});
function getV4SwapHeaders(v4Enabled) {
    return {
        'x-universal-router-version': v4Enabled ? UniversalRouterVersion._2_0 : UniversalRouterVersion._1_2,
    };
}
export const getFeatureFlaggedHeaders = () => {
    const uniquoteEnabled = getFeatureFlag(FeatureFlags.UniquoteEnabled);
    const viemProviderEnabled = getFeatureFlag(FeatureFlags.ViemProviderEnabled);
    return {
        'x-uniquote-enabled': uniquoteEnabled ? 'true' : 'false',
        'x-viem-provider-enabled': viemProviderEnabled ? 'true' : 'false',
    };
};
export async function fetchQuote({ v4Enabled, ...params }) {
    return await TradingApiClient.post(uniswapUrls.tradingApiPaths.quote, {
        body: JSON.stringify(params),
        headers: {
            ...getV4SwapHeaders(v4Enabled),
            ...getFeatureFlaggedHeaders(),
        },
        on404: () => {
            logger.warn('TradingApiClient', 'fetchQuote', 'Quote 404', {
                chainIdIn: params.tokenInChainId,
                chainIdOut: params.tokenOutChainId,
                tradeType: params.type,
                isBridging: params.tokenInChainId !== params.tokenOutChainId,
            });
        },
    });
}
export async function fetchIndicativeQuote(params) {
    return await TradingApiClient.post(uniswapUrls.tradingApiPaths.indicativeQuote, {
        body: JSON.stringify(params),
        headers: {
            ...getFeatureFlaggedHeaders(),
        },
    });
}
export async function fetchSwap({ v4Enabled, ...params }) {
    return await TradingApiClient.post(uniswapUrls.tradingApiPaths.swap, {
        body: JSON.stringify(params),
        headers: {
            ...getV4SwapHeaders(v4Enabled),
            ...getFeatureFlaggedHeaders(),
        },
    });
}
export async function fetchSwap5792({ v4Enabled, ...params }) {
    return await TradingApiClient.post(uniswapUrls.tradingApiPaths.swap5792, {
        body: JSON.stringify(params),
        headers: {
            ...getV4SwapHeaders(v4Enabled),
            ...getFeatureFlaggedHeaders(),
        },
    });
}
export async function fetchSwap7702({ v4Enabled, ...params }) {
    return await TradingApiClient.post(uniswapUrls.tradingApiPaths.swap7702, {
        body: JSON.stringify(params),
        headers: {
            ...getV4SwapHeaders(v4Enabled),
            ...getFeatureFlaggedHeaders(),
        },
    });
}
export async function fetchCheckApproval(params) {
    return await TradingApiClient.post(uniswapUrls.tradingApiPaths.approval, {
        body: JSON.stringify(params),
        headers: {
            ...getFeatureFlaggedHeaders(),
        },
    });
}
export async function submitOrder(params) {
    return await TradingApiClient.post(uniswapUrls.tradingApiPaths.order, {
        body: JSON.stringify(params),
        headers: {
            ...getFeatureFlaggedHeaders(),
        },
    });
}
export async function fetchOrders({ orderIds }) {
    return await TradingApiClient.get(uniswapUrls.tradingApiPaths.orders, {
        params: {
            orderIds: orderIds.join(','),
        },
        headers: {
            ...getFeatureFlaggedHeaders(),
        },
    });
}
export async function fetchSwappableTokens(params) {
    return await TradingApiClient.get(uniswapUrls.tradingApiPaths.swappableTokens, {
        params: {
            tokenIn: params.tokenIn,
            tokenInChainId: params.tokenInChainId,
        },
        headers: {
            ...getFeatureFlaggedHeaders(),
        },
    });
}
export async function createLpPosition(params) {
    return await TradingApiClient.post(uniswapUrls.tradingApiPaths.createLp, {
        body: JSON.stringify({
            ...params,
        }),
        headers: {
            ...getFeatureFlaggedHeaders(),
        },
    });
}
export async function decreaseLpPosition(params) {
    return await TradingApiClient.post(uniswapUrls.tradingApiPaths.decreaseLp, {
        body: JSON.stringify({
            ...params,
        }),
        headers: {
            ...getFeatureFlaggedHeaders(),
        },
    });
}
export async function increaseLpPosition(params) {
    return await TradingApiClient.post(uniswapUrls.tradingApiPaths.increaseLp, {
        body: JSON.stringify({
            ...params,
        }),
        headers: {
            ...getFeatureFlaggedHeaders(),
        },
    });
}
export async function checkLpApproval(params, headers) {
    return await TradingApiClient.post(uniswapUrls.tradingApiPaths.lpApproval, {
        body: JSON.stringify({
            ...params,
        }),
        headers: {
            ...getFeatureFlaggedHeaders(),
            ...headers,
        },
    });
}
export async function claimLpFees(params) {
    return await TradingApiClient.post(uniswapUrls.tradingApiPaths.claimLpFees, {
        body: JSON.stringify({
            ...params,
        }),
        headers: {
            ...getFeatureFlaggedHeaders(),
        },
    });
}
export async function fetchSwaps(params) {
    return await TradingApiClient.get(uniswapUrls.tradingApiPaths.swaps, {
        params: {
            txHashes: params.txHashes.join(','),
            chainId: params.chainId,
        },
        headers: {
            ...getFeatureFlaggedHeaders(),
        },
    });
}
export async function migrateLpPosition(params) {
    return await TradingApiClient.post(uniswapUrls.tradingApiPaths.migrate, {
        body: JSON.stringify({
            ...params,
        }),
        headers: {
            ...getFeatureFlaggedHeaders(),
        },
    });
}
export async function fetchClaimLpIncentiveRewards(params) {
    return await TradingApiClient.post(uniswapUrls.tradingApiPaths.claimRewards, {
        body: JSON.stringify({
            ...params,
        }),
        headers: {
            ...getFeatureFlaggedHeaders(),
        },
    });
}
export async function fetchWalletEncoding7702(params) {
    return await TradingApiClient.post(uniswapUrls.tradingApiPaths.wallet.encode7702, {
        body: JSON.stringify({
            ...params,
        }),
        headers: {
            ...getFeatureFlaggedHeaders(),
        },
    });
}
export async function checkWalletDelegation(params) {
    return await TradingApiClient.post(uniswapUrls.tradingApiPaths.wallet.checkDelegation, {
        body: JSON.stringify({
            ...params,
        }),
        headers: {
            ...getFeatureFlaggedHeaders(),
        },
    });
}
//# sourceMappingURL=TradingApiClient.js.map