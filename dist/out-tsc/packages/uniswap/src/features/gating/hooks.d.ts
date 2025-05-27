import { DynamicConfigKeys } from 'uniswap/src/features/gating/configs';
import { ExperimentProperties, Experiments } from 'uniswap/src/features/gating/experiments';
import { FeatureFlags } from 'uniswap/src/features/gating/flags';
import { TypedReturn } from 'uniswap/src/features/gating/sdk/statsig';
export declare function useFeatureFlag(flag: FeatureFlags): boolean;
export declare function useFeatureFlagWithLoading(flag: FeatureFlags): {
    value: boolean;
    isLoading: boolean;
};
export declare function getFeatureFlag(flag: FeatureFlags): boolean;
export declare function useFeatureFlagWithExposureLoggingDisabled(flag: FeatureFlags): boolean;
export declare function getFeatureFlagWithExposureLoggingDisabled(flag: FeatureFlags): boolean;
export declare function useExperimentGroupNameWithLoading(experiment: Experiments): {
    value: string | null;
    isLoading: boolean;
};
export declare function useExperimentGroupName(experiment: Experiments): string | null;
export declare function useExperimentValue<Exp extends keyof ExperimentProperties, Param extends ExperimentProperties[Exp], ValType>(experiment: Exp, param: Param, defaultValue: ValType, customTypeGuard?: (x: unknown) => x is ValType): ValType;
export declare function getExperimentValue<Exp extends keyof ExperimentProperties, Param extends ExperimentProperties[Exp], ValType>(experiment: Exp, param: Param, defaultValue: ValType, customTypeGuard?: (x: unknown) => x is ValType): ValType;
export declare function useExperimentValueWithExposureLoggingDisabled<Exp extends keyof ExperimentProperties, Param extends ExperimentProperties[Exp], ValType>(experiment: Exp, param: Param, defaultValue: ValType, customTypeGuard?: (x: unknown) => x is ValType): ValType;
export declare function useDynamicConfigValue<Conf extends keyof DynamicConfigKeys, Key extends DynamicConfigKeys[Conf], ValType>(config: Conf, key: Key, defaultValue: ValType, customTypeGuard?: (x: unknown) => x is ValType): ValType;
export declare function getDynamicConfigValue<Conf extends keyof DynamicConfigKeys, Key extends DynamicConfigKeys[Conf], ValType>(config: Conf, key: Key, defaultValue: ValType, customTypeGuard?: (x: unknown) => x is ValType): ValType;
export declare function getExperimentValueFromLayer<Layer extends string, Exp extends keyof ExperimentProperties, ValType>(layerName: Layer, param: ExperimentProperties[Exp], defaultValue: ValType, customTypeGuard?: (x: unknown) => x is ValType): ValType;
export declare function useExperimentValueFromLayer<Layer extends string, Exp extends keyof ExperimentProperties, ValType>(layerName: Layer, param: ExperimentProperties[Exp], defaultValue: ValType, customTypeGuard?: (x: unknown) => x is ValType): ValType;
export declare function checkTypeGuard<ValType>(value: TypedReturn<ValType>, defaultValue: ValType, customTypeGuard?: (x: unknown) => x is ValType): ValType;
export declare function useStatsigClientStatus(): {
    isStatsigLoading: boolean;
    isStatsigReady: boolean;
    isStatsigUninitialized: boolean;
};
//# sourceMappingURL=hooks.d.ts.map