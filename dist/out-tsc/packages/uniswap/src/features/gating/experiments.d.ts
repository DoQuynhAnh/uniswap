/**
 * Experiment parameter names
 *
 * These must match parameter names on Statsig within an experiment
 */
export declare enum Experiments {
    SwapPresets = "swap_presets",
    PriceUxUpdate = "price_ux_update",
    PrivateRpc = "private_rpc",
    NativeTokenPercentageBuffer = "lp_native_buffer"
}
export declare enum Layers {
    SwapPage = "swap-page"
}
export declare enum NativeTokenPercentageBufferExperimentGroup {
    Control = "Control",
    Buffer1 = "Buffer1"
}
export declare enum ArbitrumXV2SamplingProperties {
    RoutingType = "routingType"
}
export declare enum SwapPresetsProperties {
    InputEnabled = "inputEnabled",
    OutputEnabled = "outputEnabled"
}
export declare enum PriceUxUpdateProperties {
    UpdatedPriceUX = "updatedPriceUX"
}
export declare enum PrivateRpcProperties {
    FlashbotsEnabled = "flashbots_enabled",
    RefundPercent = "refund_percent"
}
export declare enum NativeTokenPercentageBufferProperties {
    BufferSize = "bufferSize"
}
export type ExperimentProperties = {
    [Experiments.SwapPresets]: SwapPresetsProperties;
    [Experiments.PriceUxUpdate]: PriceUxUpdateProperties;
    [Experiments.PrivateRpc]: PrivateRpcProperties;
    [Experiments.NativeTokenPercentageBuffer]: NativeTokenPercentageBufferProperties;
};
export declare const LayerProperties: Record<Layers, string[]>;
//# sourceMappingURL=experiments.d.ts.map