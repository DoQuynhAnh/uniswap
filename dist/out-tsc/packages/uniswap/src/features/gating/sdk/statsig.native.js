import { StatsigClientRN } from '@statsig/react-native-bindings';
import { config } from 'uniswap/src/config';
import { LocalOverrideAdapterWrapper } from 'uniswap/src/features/gating/LocalOverrideAdapterWrapper';
export { StatsigClient, } from '@statsig/react-native-bindings';
export { StatsigContext, StatsigProviderRN as StatsigProvider, Storage, useClientAsyncInitRN as useClientAsyncInit, useDynamicConfig, useExperiment, useFeatureGate, useGateValue, useLayer, useStatsigClient, useStatsigUser, } from '@statsig/react-native-bindings';
let localOverrideAdapter;
export const getOverrideAdapter = () => {
    if (!localOverrideAdapter) {
        localOverrideAdapter = new LocalOverrideAdapterWrapper(config.statsigApiKey);
    }
    return localOverrideAdapter;
};
export const getStatsigClient = () => StatsigClientRN.instance(config.statsigApiKey);
//# sourceMappingURL=statsig.native.js.map