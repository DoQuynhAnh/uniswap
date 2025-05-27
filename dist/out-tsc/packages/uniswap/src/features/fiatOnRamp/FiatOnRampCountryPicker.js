import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, TouchableArea, UniversalImage } from 'ui/src';
import { RotatableChevron } from 'ui/src/components/icons/RotatableChevron';
import { iconSizes } from 'ui/src/theme';
import { getCountryFlagSvgUrl } from 'uniswap/src/features/fiatOnRamp/utils';
import Trace from 'uniswap/src/features/telemetry/Trace';
import { ElementName } from 'uniswap/src/features/telemetry/constants';
import { TestID } from 'uniswap/src/test/fixtures/testIDs';
import { isWeb } from 'utilities/src/platform';
const ICON_SIZE = iconSizes.icon16;
export function FiatOnRampCountryPicker({ onPress, countryCode = 'US', }) {
    if (!countryCode) {
        return null;
    }
    const countryFlagUrl = getCountryFlagSvgUrl(countryCode);
    return (_jsx(Trace, { logPress: true, element: ElementName.FiatOnRampCountryPicker, children: _jsx(TouchableArea, { backgroundColor: "$surface3", borderRadius: "$roundedFull", hoverStyle: {
                opacity: 0.5,
            }, overflow: "hidden", pl: "$spacing8", pr: "$spacing4", py: "$spacing2", onPress: onPress, children: _jsxs(Flex, { row: true, shrink: true, alignItems: "center", "data-testid": TestID.FiatOnRampCountryPicker, flex: 0, gap: "$spacing2", children: [_jsx(Flex, { borderRadius: "$roundedFull", overflow: "hidden", children: isWeb ? (_jsx("img", { alt: countryCode, height: ICON_SIZE, src: countryFlagUrl, width: ICON_SIZE })) : (_jsx(UniversalImage, { size: {
                                height: ICON_SIZE,
                                width: ICON_SIZE,
                            }, uri: countryFlagUrl })) }), _jsx(RotatableChevron, { color: "$neutral2", direction: "down", width: iconSizes.icon20 })] }) }) }));
}
//# sourceMappingURL=FiatOnRampCountryPicker.js.map