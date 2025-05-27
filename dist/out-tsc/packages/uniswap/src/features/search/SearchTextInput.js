import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, Flex, Input, Text, TouchableArea, useComposedRefs } from 'ui/src';
import { RotatableChevron } from 'ui/src/components/icons/RotatableChevron';
import { Search } from 'ui/src/components/icons/Search';
import { useDeviceDimensions } from 'ui/src/hooks/useDeviceDimensions';
import { fonts, iconSizes, spacing } from 'ui/src/theme';
import { SHADOW_OFFSET_SMALL } from 'uniswap/src/components/BaseCard/BaseCard';
import { ViewGestureHandler } from 'uniswap/src/components/ViewGestureHandler/ViewGestureHandler';
import { WalletEventName } from 'uniswap/src/features/telemetry/constants';
import { sendAnalyticsEvent } from 'uniswap/src/features/telemetry/send';
import { TestID } from 'uniswap/src/test/fixtures/testIDs';
import { dismissNativeKeyboard } from 'utilities/src/device/keyboard/dismissNativeKeyboard';
import { isAndroid, isIOS } from 'utilities/src/platform';
const DEFAULT_MIN_HEIGHT = 48;
const CANCEL_CHEVRON_X_OFFSET = -6;
export const springConfig = {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
};
export var CancelBehaviorType;
(function (CancelBehaviorType) {
    CancelBehaviorType["CancelButton"] = "CancelButton";
    CancelBehaviorType["BackChevron"] = "BackChevron";
})(CancelBehaviorType || (CancelBehaviorType = {}));
export const SearchTextInput = forwardRef(
// eslint-disable-next-line complexity
function _SearchTextInput(props, ref) {
    const dimensions = useDeviceDimensions();
    const { t } = useTranslation();
    const { autoFocus, backgroundColor = '$surface2', endAdornment, onCancel, onClose, onChangeText, onFocus, onKeyPress, placeholder, py = '$spacing12', px = '$spacing16', mx, my, showShadow, value, hideIcon, minHeight = DEFAULT_MIN_HEIGHT, cancelBehaviorType = CancelBehaviorType.CancelButton, } = props;
    const inputRef = useRef(null);
    const combinedRef = useComposedRefs(inputRef, ref);
    const showCloseButton = !!onClose;
    const [isFocus, setIsFocus] = useState(false);
    const showCancelButton = !!onCancel && cancelBehaviorType === CancelBehaviorType.CancelButton;
    const [cancelButtonWidth, setCancelButtonWidth] = useState(showCancelButton ? 40 : 0);
    const showBackChevron = !!onCancel && cancelBehaviorType === CancelBehaviorType.BackChevron;
    const cancelChevronWidth = showBackChevron ? iconSizes.icon20 + CANCEL_CHEVRON_X_OFFSET : 0;
    const onCancelButtonLayout = useCallback((event) => {
        setCancelButtonWidth(event.nativeEvent.layout.width);
    }, []);
    const onPressCancel = () => {
        var _a;
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.clear();
        setIsFocus(false);
        dismissNativeKeyboard();
        sendAnalyticsEvent(WalletEventName.ExploreSearchCancel, { query: value || '' });
        onChangeText === null || onChangeText === void 0 ? void 0 : onChangeText('');
        onCancel === null || onCancel === void 0 ? void 0 : onCancel();
    };
    const onTextInputFocus = (e) => {
        onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
        setIsFocus(true);
    };
    const onChangeTextInput = useCallback((text) => {
        onChangeText === null || onChangeText === void 0 ? void 0 : onChangeText(text);
    }, [onChangeText]);
    const animationDirection = cancelBehaviorType === CancelBehaviorType.BackChevron ? 'marginLeft' : 'marginRight';
    return (_jsxs(Flex, { row: true, shrink: true, alignItems: "center", mx: mx, children: [showBackChevron && (_jsx(Flex, { animation: "200ms", left: 0, opacity: isFocus ? 1 : 0, pointerEvents: isFocus ? 'auto' : 'none', position: "absolute", scale: isFocus ? 1 : 0, x: CANCEL_CHEVRON_X_OFFSET, children: _jsx(TouchableArea, { hitSlop: 16, onPress: onPressCancel, children: _jsx(RotatableChevron, { color: "$neutral1", direction: "left", height: iconSizes.icon20, width: iconSizes.icon20 }) }) })), _jsxs(Flex, { fill: true, grow: true, row: true, alignItems: "center", animateOnly: [animationDirection], animation: "quick", backgroundColor: backgroundColor, borderRadius: "$roundedFull", gap: "$spacing8", minHeight: minHeight, ml: showBackChevron && isFocus ? cancelChevronWidth + spacing.spacing8 + spacing.spacing2 : 0, mr: showCancelButton && isFocus ? cancelButtonWidth + spacing.spacing12 : 0, my: my, px: px, py: py, ...(showShadow && {
                    shadowColor: '$shadowColor',
                    shadowOffset: SHADOW_OFFSET_SMALL,
                    shadowOpacity: 0.25,
                    shadowRadius: 6,
                    elevation: 6,
                    '$theme-dark': {
                        shadowColor: '$black',
                    },
                }), children: [!hideIcon && (_jsx(Flex, { py: "$spacing4", children: _jsx(Search, { color: "$neutral2", size: "$icon.20" }) })), _jsx(Flex, { grow: true, alignSelf: "stretch", mr: "$spacing8", overflow: "hidden", children: _jsx(ViewGestureHandler, { children: _jsx(Input, { ref: combinedRef, autoCapitalize: "none", autoCorrect: false, autoFocus: autoFocus, backgroundColor: "$transparent", borderWidth: "$none", fontFamily: "$body", fontWeight: "$book", height: "100%", maxFontSizeMultiplier: fonts.body1.maxFontSizeMultiplier, outlineColor: "transparent", outlineWidth: 0, p: "$none", placeholder: placeholder, placeholderTextColor: "$neutral2", position: "absolute", returnKeyType: "done", testID: TestID.ExploreSearchInput, textContentType: "none", top: 0, ...(isIOS && {
                                    width: '100%',
                                }), ...(typeof value !== 'undefined' && {
                                    value,
                                }), ...(isAndroid && {
                                    width: value ? undefined : 9999,
                                }), onChangeText: onChangeTextInput, onFocus: onTextInputFocus, onSubmitEditing: dismissNativeKeyboard, onKeyPress: onKeyPress }) }) }), _jsx(AnimatePresence, { children: endAdornment ? _jsx(Flex, { animation: "quick", children: endAdornment }) : null }), _jsx(AnimatePresence, { children: showCloseButton && (_jsx(TouchableArea, { animation: "quick", backgroundColor: backgroundColor, enterStyle: { opacity: 0, scale: 0 }, exitStyle: { opacity: 0, scale: 0 }, onPress: onClose, children: _jsx(RotatableChevron, { color: "$neutral3", direction: "up", height: iconSizes.icon20, width: iconSizes.icon20 }) })) })] }), showCancelButton && (_jsx(Flex, { animation: "200ms", opacity: isFocus ? 1 : 0, pointerEvents: isFocus ? 'auto' : 'none', position: "absolute", right: 0, scale: isFocus ? 1 : 0, x: isFocus ? 0 : dimensions.fullWidth, onLayout: onCancelButtonLayout, children: _jsx(TouchableArea, { hitSlop: 16, onPress: onPressCancel, children: _jsx(Text, { variant: "buttonLabel2", children: t('common.button.cancel') }) }) }))] }));
});
//# sourceMappingURL=SearchTextInput.js.map