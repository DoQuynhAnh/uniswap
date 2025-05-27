import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, Text } from 'ui/src';
import { ActionSheetDropdown } from 'uniswap/src/components/dropdowns/ActionSheetDropdown';
import { getOverrideAdapter } from 'uniswap/src/features/gating/sdk/statsig';
export function DynamicConfigDropdown({ config, configKey, label, options, selected, }) {
    var _a, _b;
    const selectedOption = options.find((option) => {
        if ('value' in option) {
            return option.value === selected;
        }
        return JSON.stringify(option.jsonValue) === selected;
    });
    return (_jsxs(Flex, { row: true, fill: true, alignItems: "center", gap: "$spacing16", children: [_jsx(Flex, { fill: true, children: _jsx(Text, { variant: "body2", children: label }) }), _jsx(Flex, { row: true, centered: true, backgroundColor: "$surface3", borderRadius: "$rounded20", gap: "$spacing4", pl: "$spacing16", pr: "$spacing12", py: "$spacing2", children: _jsx(ActionSheetDropdown, { options: options.map((option) => {
                        var _a;
                        return ({
                            key: (_a = option.label) !== null && _a !== void 0 ? _a : ('value' in option ? option.value : JSON.stringify(option.jsonValue)),
                            onPress: () => {
                                getOverrideAdapter().overrideDynamicConfig(config, {
                                    ...getOverrideAdapter().getAllOverrides().dynamicConfig[config],
                                    [configKey]: 'value' in option ? option.value : option.jsonValue,
                                });
                            },
                            render: () => {
                                var _a;
                                return (_jsx(Flex, { p: "$padding6", hoverStyle: { backgroundColor: '$surface3Hovered' }, borderRadius: "$rounded4", children: _jsx(Text, { variant: "body3", children: (_a = option.label) !== null && _a !== void 0 ? _a : ('value' in option ? option.value : JSON.stringify(option.jsonValue)) }) }));
                            },
                        });
                    }), showArrow: true, styles: { alignment: 'right' }, children: _jsx(Text, { ellipse: true, color: "$neutral2", flexShrink: 1, numberOfLines: 1, variant: "buttonLabel3", children: (_b = (_a = selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.label) !== null && _a !== void 0 ? _a : (selectedOption && 'value' in selectedOption
                            ? selectedOption.value
                            : JSON.stringify(selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.jsonValue))) !== null && _b !== void 0 ? _b : selected }) }) })] }));
}
//# sourceMappingURL=DynamicConfigDropdown.js.map