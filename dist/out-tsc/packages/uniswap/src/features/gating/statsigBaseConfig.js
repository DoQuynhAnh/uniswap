import { uniswapUrls } from 'uniswap/src/constants/urls';
import { getStatsigEnvName } from 'uniswap/src/features/gating/getStatsigEnvName';
import { getOverrideAdapter } from 'uniswap/src/features/gating/sdk/statsig';
export const statsigBaseConfig = {
    networkConfig: { api: uniswapUrls.statsigProxyUrl },
    environment: {
        tier: getStatsigEnvName(),
    },
    overrideAdapter: getOverrideAdapter(),
};
//# sourceMappingURL=statsigBaseConfig.js.map