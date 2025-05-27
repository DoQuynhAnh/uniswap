/**
 * Experiment parameter names
 *
 * These must match parameter names on Statsig within an experiment
 */
export var Experiments;
(function (Experiments) {
    Experiments["SwapPresets"] = "swap_presets";
    Experiments["PriceUxUpdate"] = "price_ux_update";
    Experiments["PrivateRpc"] = "private_rpc";
    Experiments["NativeTokenPercentageBuffer"] = "lp_native_buffer";
})(Experiments || (Experiments = {}));
export var Layers;
(function (Layers) {
    Layers["SwapPage"] = "swap-page";
})(Layers || (Layers = {}));
// experiment groups
export var NativeTokenPercentageBufferExperimentGroup;
(function (NativeTokenPercentageBufferExperimentGroup) {
    NativeTokenPercentageBufferExperimentGroup["Control"] = "Control";
    NativeTokenPercentageBufferExperimentGroup["Buffer1"] = "Buffer1";
})(NativeTokenPercentageBufferExperimentGroup || (NativeTokenPercentageBufferExperimentGroup = {}));
// experiment properties
export var ArbitrumXV2SamplingProperties;
(function (ArbitrumXV2SamplingProperties) {
    ArbitrumXV2SamplingProperties["RoutingType"] = "routingType";
})(ArbitrumXV2SamplingProperties || (ArbitrumXV2SamplingProperties = {}));
export var SwapPresetsProperties;
(function (SwapPresetsProperties) {
    SwapPresetsProperties["InputEnabled"] = "inputEnabled";
    SwapPresetsProperties["OutputEnabled"] = "outputEnabled";
})(SwapPresetsProperties || (SwapPresetsProperties = {}));
export var PriceUxUpdateProperties;
(function (PriceUxUpdateProperties) {
    PriceUxUpdateProperties["UpdatedPriceUX"] = "updatedPriceUX";
})(PriceUxUpdateProperties || (PriceUxUpdateProperties = {}));
export var PrivateRpcProperties;
(function (PrivateRpcProperties) {
    PrivateRpcProperties["FlashbotsEnabled"] = "flashbots_enabled";
    PrivateRpcProperties["RefundPercent"] = "refund_percent";
})(PrivateRpcProperties || (PrivateRpcProperties = {}));
export var NativeTokenPercentageBufferProperties;
(function (NativeTokenPercentageBufferProperties) {
    NativeTokenPercentageBufferProperties["BufferSize"] = "bufferSize";
})(NativeTokenPercentageBufferProperties || (NativeTokenPercentageBufferProperties = {}));
// will be a spread of all experiment properties in that layer
export const LayerProperties = {
    [Layers.SwapPage]: Object.values({ ...SwapPresetsProperties, ...PriceUxUpdateProperties }),
};
//# sourceMappingURL=experiments.js.map