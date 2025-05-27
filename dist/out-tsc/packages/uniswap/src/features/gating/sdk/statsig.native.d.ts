import { StatsigClient } from '@statsig/react-bindings';
import { LocalOverrideAdapterWrapper } from 'uniswap/src/features/gating/LocalOverrideAdapterWrapper';
export { StatsigClient, StatsigOptions, StatsigUser, StorageProvider, TypedReturn, } from '@statsig/react-native-bindings';
export { StatsigContext, StatsigProviderRN as StatsigProvider, Storage, useClientAsyncInitRN as useClientAsyncInit, useDynamicConfig, useExperiment, useFeatureGate, useGateValue, useLayer, useStatsigClient, useStatsigUser, } from '@statsig/react-native-bindings';
export declare const getOverrideAdapter: () => LocalOverrideAdapterWrapper;
export declare const getStatsigClient: () => StatsigClient;
//# sourceMappingURL=statsig.native.d.ts.map