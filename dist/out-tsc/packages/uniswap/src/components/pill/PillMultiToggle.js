import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { AnimatePresence, Flex, Tabs, Text } from 'ui/src';
// Based on this example: https://tamagui.dev/ui/tabs?subpath=tabs#animations
// TODO: WALL-4572 add tests for this component
export function PillMultiToggle({ options, defaultOption, onSelectOption, activePillColor = '$surface3', activeTextColor = '$neutral1', }) {
    const [tabState, setTabState] = useState({
        activeAt: null,
        currentTab: defaultOption,
        intentAt: null,
    });
    const setCurrentTab = (currentTab) => {
        setTabState({ ...tabState, currentTab });
        onSelectOption === null || onSelectOption === void 0 ? void 0 : onSelectOption(currentTab);
    };
    const setIntentIndicator = (intentAt) => setTabState({ ...tabState, intentAt });
    const setActiveIndicator = (activeAt) => setTabState({ ...tabState, activeAt });
    const { activeAt, currentTab } = tabState;
    function isActiveTab(tab) {
        return currentTab === tab;
    }
    const handleOnInteraction = (type, layout) => {
        if (type === 'select') {
            setActiveIndicator(layout);
        }
        else {
            setIntentIndicator(layout);
        }
    };
    return (_jsx(Tabs, { activationMode: "manual", backgroundColor: "$background", borderColor: "$surface3", borderRadius: "$roundedFull", borderWidth: "$spacing1", flexDirection: "column", orientation: "horizontal", p: "$spacing4", position: "relative", value: currentTab, onValueChange: setCurrentTab, children: _jsxs(Flex, { children: [_jsx(AnimatePresence, { children: activeAt && (_jsx(Flex, { animation: "fast", backgroundColor: activePillColor, borderRadius: "$roundedFull", enterStyle: {
                            opacity: 0,
                        }, exitStyle: {
                            opacity: 0,
                        }, height: activeAt.height, opacity: 1, position: "absolute", width: activeAt.width, x: activeAt.x, y: activeAt.y, zIndex: "$mask" })) }), _jsx(Tabs.List, { disablePassBorderRadius: true, backgroundColor: "transparent", gap: "$spacing12", loop: false, children: options.map((tab) => {
                        const { value, display } = tab;
                        return (_jsx(Tabs.Tab, { unstyled: true, borderRadius: "$rounded12", px: "$spacing12", py: "$spacing6", value: value, onInteraction: handleOnInteraction, children: _jsx(Text, { color: isActiveTab(value) ? activeTextColor : '$neutral2', variant: "buttonLabel3", children: display || value }) }, value));
                    }) })] }) }));
}
//# sourceMappingURL=PillMultiToggle.js.map