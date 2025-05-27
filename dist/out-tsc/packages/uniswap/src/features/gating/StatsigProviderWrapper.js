import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from 'react';
import { config } from 'uniswap/src/config';
import { StatsigProvider, useClientAsyncInit, } from 'uniswap/src/features/gating/sdk/statsig';
import { statsigBaseConfig } from 'uniswap/src/features/gating/statsigBaseConfig';
import { logger } from 'utilities/src/logger/logger';
export function StatsigProviderWrapper({ children, options, user, storageProvider, onInit, }) {
    if (!config.statsigApiKey) {
        throw new Error('statsigApiKey is not set');
    }
    const statsigOptions = {
        ...statsigBaseConfig,
        storageProvider,
        ...options,
    };
    const { client, isLoading: isStatsigLoading } = useClientAsyncInit(config.statsigApiKey, user, statsigOptions);
    useEffect(() => {
        if (isStatsigLoading) {
            return;
        }
        onInit === null || onInit === void 0 ? void 0 : onInit();
    }, [isStatsigLoading, onInit]);
    useEffect(() => {
        const errorHandler = (event) => {
            logger.error('StatsigProviderWrapper', {
                tags: { file: 'StatsigProviderWrapper', function: 'error' },
                extra: {
                    event,
                },
            });
        };
        client === null || client === void 0 ? void 0 : client.on('error', errorHandler);
        client === null || client === void 0 ? void 0 : client.on('initialization_failure', errorHandler);
        return () => {
            client === null || client === void 0 ? void 0 : client.off('error', errorHandler);
            client === null || client === void 0 ? void 0 : client.off('initialization_failure', errorHandler);
        };
    }, [client]);
    return _jsx(StatsigProvider, { client: client, children: children });
}
//# sourceMappingURL=StatsigProviderWrapper.js.map