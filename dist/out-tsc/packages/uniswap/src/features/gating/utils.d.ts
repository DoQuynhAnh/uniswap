import { PrecomputedEvaluationsInterface } from '@statsig/js-client';
export declare function isStatsigReady(client: PrecomputedEvaluationsInterface): boolean;
type GateOverride = [string, boolean];
type ConfigOverride = [string, Record<string, unknown>];
export declare function getOverrides(client: PrecomputedEvaluationsInterface): {
    configOverrides: ConfigOverride[];
    gateOverrides: GateOverride[];
};
export {};
//# sourceMappingURL=utils.d.ts.map