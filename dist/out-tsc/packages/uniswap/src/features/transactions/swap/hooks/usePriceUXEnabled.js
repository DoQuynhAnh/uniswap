import { Layers, PriceUxUpdateProperties } from 'uniswap/src/features/gating/experiments';
import { useExperimentValueFromLayer } from 'uniswap/src/features/gating/hooks';
export function usePriceUXEnabled() {
    const expValueFromLayer = useExperimentValueFromLayer(Layers.SwapPage, PriceUxUpdateProperties.UpdatedPriceUX, false);
    return expValueFromLayer;
}
//# sourceMappingURL=usePriceUXEnabled.js.map