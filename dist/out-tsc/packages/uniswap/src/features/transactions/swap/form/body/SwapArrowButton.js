import { jsx as _jsx } from "react/jsx-runtime";
import { TouchableArea, useIsShortMobileDevice, useSporeColors } from 'ui/src';
import { Arrow } from 'ui/src/components/arrow/Arrow';
import { PRESS_SCALE } from 'ui/src/components/buttons/Button/components/CustomButtonFrame/constants';
import { iconSizes } from 'ui/src/theme';
const hoverStyle = { backgroundColor: '$surface2Hovered' };
export function SwapArrowButton({ backgroundColor = '$surface2', iconSize = iconSizes.icon24, disabled, onPress, testID, }) {
    const colors = useSporeColors();
    const isShortMobileDevice = useIsShortMobileDevice();
    return (_jsx(TouchableArea, { backgroundColor: backgroundColor, borderColor: "$surface1", borderRadius: isShortMobileDevice ? '$rounded12' : '$rounded16', borderWidth: isShortMobileDevice ? '$spacing2' : '$spacing4', p: isShortMobileDevice ? '$spacing6' : '$spacing8', scaleTo: PRESS_SCALE, hoverStyle: hoverStyle, disabled: disabled, testID: testID, onPress: onPress, children: _jsx(Arrow, { color: colors.neutral1.val, direction: "s", size: iconSize }) }));
}
//# sourceMappingURL=SwapArrowButton.js.map