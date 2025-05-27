import { LocalOverrideAdapter } from '@statsig/js-local-overrides';
export declare class LocalOverrideAdapterWrapper extends LocalOverrideAdapter {
    constructor(sdkKey: string);
    refreshStatsig(): void;
    overrideGate(name: string, value: boolean): void;
    overrideDynamicConfig(name: string, value: Record<string, unknown>): void;
    removeDynamicConfigOverride(name: string): void;
    removeAllOverrides(): void;
    removeExperimentOverride(name: string): void;
    overrideExperiment(name: string, value: Record<string, unknown>): void;
    overrideLayer(name: string, value: Record<string, unknown>): void;
    removeLayerOverride(name: string): void;
}
//# sourceMappingURL=LocalOverrideAdapterWrapper.d.ts.map