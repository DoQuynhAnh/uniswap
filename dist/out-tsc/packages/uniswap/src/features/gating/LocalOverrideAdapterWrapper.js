import { LocalOverrideAdapter } from '@statsig/js-local-overrides';
import { getStatsigClient } from 'uniswap/src/features/gating/sdk/statsig';
// Workaround for @statsig 3.x.x refreshing client after applying overrides to get the result without reloading
// Should be removed after statsig add real time override apply functionality
// Adds refresh only to used LocalOverrideAdapter methods. Other methods need to be added if refresh is required.
export class LocalOverrideAdapterWrapper extends LocalOverrideAdapter {
    constructor(sdkKey) {
        super(sdkKey);
    }
    refreshStatsig() {
        const statsigClient = getStatsigClient();
        const statsigUser = statsigClient.getContext().user;
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        statsigClient.updateUserAsync(statsigUser);
    }
    overrideGate(name, value) {
        super.overrideGate(name, value);
        this.refreshStatsig();
    }
    overrideDynamicConfig(name, value) {
        super.overrideDynamicConfig(name, value);
        this.refreshStatsig();
    }
    removeDynamicConfigOverride(name) {
        super.removeDynamicConfigOverride(name);
        this.refreshStatsig();
    }
    removeAllOverrides() {
        super.removeAllOverrides();
        this.refreshStatsig();
    }
    removeExperimentOverride(name) {
        super.removeExperimentOverride(name);
        this.refreshStatsig();
    }
    overrideExperiment(name, value) {
        super.overrideExperiment(name, value);
        this.refreshStatsig();
    }
    overrideLayer(name, value) {
        super.overrideLayer(name, value);
        this.refreshStatsig();
    }
    removeLayerOverride(name) {
        super.removeLayerOverride(name);
        this.refreshStatsig();
    }
}
//# sourceMappingURL=LocalOverrideAdapterWrapper.js.map