import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback } from 'react';
import { Flex, Input, Switch, Text } from 'ui/src';
import { LayerProperties } from 'uniswap/src/features/gating/experiments';
import { getOverrideAdapter, useExperiment, useLayer } from 'uniswap/src/features/gating/sdk/statsig';
export function LayerRow({ value: layerName, layerDefault = false, }) {
    const { get: getLayerValue } = useLayer(layerName);
    const value = Object.values(LayerProperties[layerName]).reduce((acc, key) => { var _a; return ({ ...acc, [key]: (_a = getLayerValue(key)) !== null && _a !== void 0 ? _a : layerDefault }); }, {});
    const overrideValue = useCallback((newPairs) => {
        getOverrideAdapter().overrideLayer(layerName, { ...value, ...newPairs });
    }, [layerName, value]);
    return _jsx(Row, { target: layerName, values: value, overrideValue: overrideValue });
}
export function ExperimentRow({ value: experimentName }) {
    const { value } = useExperiment(experimentName);
    const overrideValue = useCallback((newPairs) => {
        getOverrideAdapter().overrideExperiment(experimentName, newPairs);
    }, [experimentName]);
    return _jsx(Row, { target: experimentName, values: value, overrideValue: overrideValue });
}
function Row({ target, values, overrideValue, }) {
    const handleBooleanChange = useCallback((key) => (newValue) => {
        overrideValue({ [key]: newValue });
    }, [overrideValue]);
    const handleNumberChange = useCallback((key) => (newValue) => {
        overrideValue({ [key]: Number(newValue) });
    }, [overrideValue]);
    const handleStringChange = useCallback((key) => (newValue) => {
        overrideValue({ [key]: newValue });
    }, [overrideValue]);
    const paramRows = Object.entries(values).map(([key, val]) => {
        let valueElement;
        if (typeof val === 'boolean') {
            valueElement = _jsx(Switch, { checked: val, variant: "branded", onCheckedChange: handleBooleanChange(key) }, key);
        }
        else if (typeof val === 'number') {
            valueElement = _jsx(Input, { value: val.toString(), onChangeText: handleNumberChange(key) });
        }
        else if (typeof val === 'string') {
            valueElement = _jsx(Input, { value: val, onChangeText: handleStringChange(key) });
        }
        return (valueElement && (_jsxs(Flex, { row: true, alignItems: "center", gap: "$spacing16", justifyContent: "space-between", children: [_jsx(Text, { variant: "body1", children: key }), valueElement] }, key)));
    });
    return (_jsxs(Flex, { children: [_jsx(Text, { variant: "body1", children: target }), _jsx(Flex, { children: _jsx(Flex, { gap: "$spacing8", pl: "$spacing8", children: paramRows }) })] }));
}
//# sourceMappingURL=Rows.js.map