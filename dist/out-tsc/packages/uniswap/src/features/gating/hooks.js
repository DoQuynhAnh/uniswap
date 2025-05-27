import { useEffect, useMemo, useState } from 'react';
import { getFeatureFlagName } from 'uniswap/src/features/gating/flags';
import { getStatsigClient, useDynamicConfig, useExperiment, useFeatureGate, useGateValue, useLayer, useStatsigClient, } from 'uniswap/src/features/gating/sdk/statsig';
import { logger } from 'utilities/src/logger/logger';
export function useFeatureFlag(flag) {
    const name = getFeatureFlagName(flag);
    const value = useGateValue(name);
    return value;
}
export function useFeatureFlagWithLoading(flag) {
    const { isStatsigLoading } = useStatsigClientStatus();
    const name = getFeatureFlagName(flag);
    const { value } = useFeatureGate(name);
    return { value, isLoading: isStatsigLoading };
}
export function getFeatureFlag(flag) {
    try {
        const name = getFeatureFlagName(flag);
        return getStatsigClient().checkGate(name);
    }
    catch (e) {
        logger.debug('gating/hooks.ts', 'getFeatureFlag', JSON.stringify({ e }));
        return false;
    }
}
export function useFeatureFlagWithExposureLoggingDisabled(flag) {
    const name = getFeatureFlagName(flag);
    const value = useGateValue(name, { disableExposureLog: true });
    return value;
}
export function getFeatureFlagWithExposureLoggingDisabled(flag) {
    const name = getFeatureFlagName(flag);
    return getStatsigClient().checkGate(name, { disableExposureLog: true });
}
export function useExperimentGroupNameWithLoading(experiment) {
    const { isStatsigLoading } = useStatsigClientStatus();
    const statsigExperiment = useExperiment(experiment);
    return { value: statsigExperiment.groupName, isLoading: isStatsigLoading };
}
export function useExperimentGroupName(experiment) {
    const { groupName } = useExperiment(experiment);
    return groupName;
}
export function useExperimentValue(experiment, param, defaultValue, customTypeGuard) {
    const statsigExperiment = useExperiment(experiment);
    const value = statsigExperiment.get(param, defaultValue);
    return checkTypeGuard(value, defaultValue, customTypeGuard);
}
export function getExperimentValue(experiment, param, defaultValue, customTypeGuard) {
    const statsigExperiment = getStatsigClient().getExperiment(experiment);
    const value = statsigExperiment.get(param, defaultValue);
    return checkTypeGuard(value, defaultValue, customTypeGuard);
}
export function useExperimentValueWithExposureLoggingDisabled(experiment, param, defaultValue, customTypeGuard) {
    const statsigExperiment = useExperiment(experiment, { disableExposureLog: true });
    const value = statsigExperiment.get(param, defaultValue);
    return checkTypeGuard(value, defaultValue, customTypeGuard);
}
export function useDynamicConfigValue(config, key, defaultValue, customTypeGuard) {
    const dynamicConfig = useDynamicConfig(config);
    const value = dynamicConfig.get(key, defaultValue);
    return checkTypeGuard(value, defaultValue, customTypeGuard);
}
export function getDynamicConfigValue(config, key, defaultValue, customTypeGuard) {
    const dynamicConfig = getStatsigClient().getDynamicConfig(config);
    const value = dynamicConfig.get(key, defaultValue);
    return checkTypeGuard(value, defaultValue, customTypeGuard);
}
export function getExperimentValueFromLayer(layerName, param, defaultValue, customTypeGuard) {
    const layer = getStatsigClient().getLayer(layerName);
    const value = layer.get(param, defaultValue);
    // we directly get param from layer; these are spread from experiments
    return checkTypeGuard(value, defaultValue, customTypeGuard);
}
export function useExperimentValueFromLayer(layerName, param, defaultValue, customTypeGuard) {
    const layer = useLayer(layerName);
    const value = layer.get(param, defaultValue);
    // we directly get param from layer; these are spread from experiments
    return checkTypeGuard(value, defaultValue, customTypeGuard);
}
export function checkTypeGuard(value, defaultValue, customTypeGuard) {
    const isOfDefaultValueType = (val) => typeof val === typeof defaultValue;
    if ((customTypeGuard === null || customTypeGuard === void 0 ? void 0 : customTypeGuard(value)) || isOfDefaultValueType(value)) {
        return value;
    }
    else {
        return defaultValue;
    }
}
export function useStatsigClientStatus() {
    const { client } = useStatsigClient();
    const [statsigStatus, setStatsigStatus] = useState(client.loadingStatus);
    useEffect(() => {
        const handler = (event) => {
            setStatsigStatus(event.status);
        };
        client.on('values_updated', handler);
        return () => {
            client.off('values_updated', handler);
        };
    }, [client]);
    return useMemo(() => ({
        isStatsigLoading: statsigStatus === 'Loading',
        isStatsigReady: statsigStatus === 'Ready',
        isStatsigUninitialized: statsigStatus === 'Uninitialized',
    }), [statsigStatus]);
}
//# sourceMappingURL=hooks.js.map