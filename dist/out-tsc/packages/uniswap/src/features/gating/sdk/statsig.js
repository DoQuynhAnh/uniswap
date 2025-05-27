var _a;
import { StatsigClient } from '@statsig/react-bindings';
import { LocalOverrideAdapterWrapper } from 'uniswap/src/features/gating/LocalOverrideAdapterWrapper';
export { StatsigClient } from '@statsig/react-bindings';
export { StatsigContext, StatsigProvider, Storage, useClientAsyncInit, useDynamicConfig, useExperiment, useFeatureGate, useGateValue, useLayer, useStatsigClient, useStatsigUser, } from '@statsig/react-bindings';
// Use statsigApiKey from environment variables directly to avoid node dependency errors in cloudflare deploys
// Which happens when importing uniswap/src/config in this file
// A dummy key is used in test env b/c the wallet/mobile tests use this file instead of the statsig.native file
const statsigApiKey = process.env.NODE_ENV === 'test'
    ? 'dummy-test-key'
    : (_a = process.env.REACT_APP_STATSIG_API_KEY) !== null && _a !== void 0 ? _a : process.env.STATSIG_API_KEY;
if (!statsigApiKey) {
    throw new Error('STATSIG_API_KEY is not set');
}
let localOverrideAdapter;
export const getOverrideAdapter = () => {
    if (!localOverrideAdapter) {
        localOverrideAdapter = new LocalOverrideAdapterWrapper(statsigApiKey);
    }
    return localOverrideAdapter;
};
export const getStatsigClient = () => StatsigClient.instance(statsigApiKey);
//# sourceMappingURL=statsig.js.map