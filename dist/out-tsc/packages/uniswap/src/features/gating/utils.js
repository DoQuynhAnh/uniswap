import { getOverrideAdapter } from 'uniswap/src/features/gating/sdk/statsig';
export function isStatsigReady(client) {
    return client.loadingStatus === 'Ready';
}
export function getOverrides(client) {
    const statsigOverrides = isStatsigReady(client)
        ? getOverrideAdapter().getAllOverrides()
        : { gate: {}, dynamicConfig: {}, layer: {} };
    const filterNumbers = (value) => isNaN(parseInt(value[0], 10));
    const gateOverrides = Object.entries(statsigOverrides.gate).filter(filterNumbers);
    const configOverrides = Object.entries(statsigOverrides.dynamicConfig).filter(filterNumbers);
    return { configOverrides, gateOverrides };
}
//# sourceMappingURL=utils.js.map