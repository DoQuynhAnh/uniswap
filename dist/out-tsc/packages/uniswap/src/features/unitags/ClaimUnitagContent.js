import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ADDRESS_ZERO } from '@uniswap/v3-sdk';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated';
import { AnimatePresence, Button, Flex, Text, TouchableArea } from 'ui/src';
import { CheckmarkCircle } from 'ui/src/components/icons/CheckmarkCircle';
import { InfoCircleFilled } from 'ui/src/components/icons/InfoCircleFilled';
import { AnimatedFlex } from 'ui/src/components/layout/AnimatedFlex';
import { useDynamicFontSizing } from 'ui/src/hooks/useDynamicFontSizing';
import { fonts, imageSizes, spacing } from 'ui/src/theme';
import { TextInput } from 'uniswap/src/components/input/TextInput';
import { UnitagEventName } from 'uniswap/src/features/telemetry/constants';
import { sendAnalyticsEvent } from 'uniswap/src/features/telemetry/send';
import { UnitagInfoModal } from 'uniswap/src/features/unitags/UnitagInfoModal';
import { UnitagName } from 'uniswap/src/features/unitags/UnitagName';
import { UNITAG_SUFFIX } from 'uniswap/src/features/unitags/constants';
import { getUnitagFormatError, useCanClaimUnitagName } from 'uniswap/src/features/unitags/hooks/useCanClaimUnitagName';
import { getYourNameString } from 'uniswap/src/features/unitags/utils';
import { TestID } from 'uniswap/src/test/fixtures/testIDs';
import { OnboardingScreens, } from 'uniswap/src/types/screens/mobile';
import { shortenAddress } from 'utilities/src/addresses';
import { dismissNativeKeyboard } from 'utilities/src/device/keyboard/dismissNativeKeyboard';
import { logger } from 'utilities/src/logger/logger';
import { isMobileApp, isWeb } from 'utilities/src/platform';
import { useEvent } from 'utilities/src/react/hooks';
import { ONE_SECOND_MS } from 'utilities/src/time/time';
import { useDebounce } from 'utilities/src/time/timing';
const VERIFICATION_DEBOUNCE_MS = 700;
const MAX_UNITAG_CHAR_LENGTH = 20;
const MAX_INPUT_FONT_SIZE = 36;
const MIN_INPUT_FONT_SIZE = 22;
const MAX_CHAR_PIXEL_WIDTH = 20;
const SLIDE_IN_AMOUNT = isWeb ? 0 : 40;
// Used in dynamic font size width calculation to ignore `.` characters
const UNITAG_SUFFIX_CHARS_ONLY = UNITAG_SUFFIX.replaceAll('.', '');
// Accounts for height of image, gap between image and name, and spacing from top of titles
const UNITAG_NAME_ANIMATE_DISTANCE_Y = imageSizes.image100 + spacing.spacing48 + spacing.spacing24;
export function ClaimUnitagContent({ unitagAddress, entryPoint, animateY = true, navigationEventConsumer, onNavigateContinue, onComplete, }) {
    const { t } = useTranslation();
    const textInputRef = useRef(null);
    const inputPlaceholder = getYourNameString(t('unitags.claim.username.default'));
    const [showInfoModal, setShowInfoModal] = useState(false);
    const [showTextInputView, setShowTextInputView] = useState(true);
    const [unitagInputValue, setUnitagInputValue] = useState(undefined);
    const [isUnitagAvailable, setIsUnitagAvailable] = useState(false);
    const [unitagAvailableError, setUnitagAvailableError] = useState();
    const [showVerificationLoading, setShowVerificationLoading] = useState(false);
    const [unitagNameinputMinWidth, setUnitagNameInputMinWidth] = useState(undefined);
    const [addressError, setAddressError] = useState();
    const addressViewOpacity = useSharedValue(1);
    const unitagInputContainerTranslateY = useSharedValue(0);
    const addressViewAnimatedStyle = useAnimatedStyle(() => {
        return {
            opacity: addressViewOpacity.value,
        };
    }, [addressViewOpacity]);
    const debouncedInputValue = useDebounce(unitagInputValue, VERIFICATION_DEBOUNCE_MS);
    const { error: canClaimUnitagNameError, loading: isCheckingUnitag } = useCanClaimUnitagName(debouncedInputValue || undefined);
    const { onLayout, fontSize, onSetFontSize } = useDynamicFontSizing(MAX_CHAR_PIXEL_WIDTH, MAX_INPUT_FONT_SIZE, MIN_INPUT_FONT_SIZE);
    const focusUnitagTextInput = useCallback(() => {
        var _a;
        (_a = textInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [textInputRef]);
    const handleHideInfoModal = useCallback(() => {
        setShowInfoModal(false);
    }, []);
    useEffect(() => {
        return navigationEventConsumer === null || navigationEventConsumer === void 0 ? void 0 : navigationEventConsumer.addListener('transitionEnd', focusUnitagTextInput);
    }, [navigationEventConsumer, focusUnitagTextInput]);
    useEffect(() => {
        const unsubscribe = navigationEventConsumer === null || navigationEventConsumer === void 0 ? void 0 : navigationEventConsumer.addListener('focus', () => {
            // When returning back to this screen, handle animating the Unitag logo out and text input in
            if (showTextInputView) {
                return;
            }
            unitagInputContainerTranslateY.value = withTiming(unitagInputContainerTranslateY.value - UNITAG_NAME_ANIMATE_DISTANCE_Y, {
                duration: ONE_SECOND_MS / 2,
            });
            setTimeout(() => {
                setShowTextInputView(true);
                addressViewOpacity.value = withTiming(1, { duration: ONE_SECOND_MS / 2 });
                focusUnitagTextInput();
            }, ONE_SECOND_MS);
        });
        return unsubscribe;
    }, [
        navigationEventConsumer,
        showTextInputView,
        setShowTextInputView,
        addressViewOpacity,
        unitagInputContainerTranslateY,
        focusUnitagTextInput,
    ]);
    const onChangeTextInput = useCallback((text) => {
        setIsUnitagAvailable(false);
        setShowVerificationLoading(false);
        setUnitagAvailableError(undefined);
        if (text.length > MAX_UNITAG_CHAR_LENGTH) {
            setUnitagAvailableError(getUnitagFormatError(text, t));
            return;
        }
        if (text.length === 0) {
            onSetFontSize(inputPlaceholder + UNITAG_SUFFIX_CHARS_ONLY);
        }
        else {
            onSetFontSize(text + UNITAG_SUFFIX_CHARS_ONLY);
        }
        setUnitagInputValue(text === null || text === void 0 ? void 0 : text.trim());
    }, [inputPlaceholder, onSetFontSize, t]);
    const onPressAddressTooltip = useCallback(() => {
        dismissNativeKeyboard();
        setShowInfoModal(true);
    }, []);
    const navigateWithAnimation = useCallback((unitag) => {
        // Log claim display and action taken
        sendAnalyticsEvent(UnitagEventName.UnitagClaimAvailabilityDisplayed, {
            result: 'available',
        });
        sendAnalyticsEvent(UnitagEventName.UnitagOnboardingActionTaken, { action: 'select' });
        // Animate the Unitag logo in and text input out
        setShowTextInputView(false);
        const initialDelay = ONE_SECOND_MS;
        const translateYDuration = ONE_SECOND_MS / 2;
        addressViewOpacity.value = withTiming(0, { duration: ONE_SECOND_MS / 2 });
        // Intentionally delay 1s to allow enter/exit animations to finish
        unitagInputContainerTranslateY.value = withDelay(initialDelay, withTiming(unitagInputContainerTranslateY.value + UNITAG_NAME_ANIMATE_DISTANCE_Y, {
            duration: translateYDuration,
        }));
        // Navigate to ChooseProfilePicture screen after initial delay + translation to allow animations to finish
        setTimeout(() => {
            onComplete === null || onComplete === void 0 ? void 0 : onComplete(unitag);
            if (unitagAddress && onNavigateContinue) {
                onNavigateContinue({ unitag, entryPoint, address: unitagAddress, unitagFontSize: fontSize });
            }
        }, initialDelay + translateYDuration);
    }, [
        onComplete,
        onNavigateContinue,
        addressViewOpacity,
        entryPoint,
        unitagAddress,
        unitagInputContainerTranslateY,
        fontSize,
    ]);
    useEffect(() => {
        if (!!debouncedInputValue && !isCheckingUnitag) {
            // If unitagError or addressError is defined, it's rendered in UI
            if (entryPoint === OnboardingScreens.Landing && !unitagAddress) {
                const err = new Error('unitagAddress should always be defined');
                logger.error(err, {
                    tags: { file: 'ClaimUnitagScreen', function: 'navigateWithAnimation' },
                });
                setAddressError(t('unitags.claim.error.default'));
                setIsUnitagAvailable(false);
                return;
            }
            else if (!canClaimUnitagNameError) {
                setIsUnitagAvailable(true);
            }
            else {
                sendAnalyticsEvent(UnitagEventName.UnitagClaimAvailabilityDisplayed, {
                    result: 'unavailable',
                });
                setIsUnitagAvailable(false);
                setUnitagAvailableError(canClaimUnitagNameError);
            }
        }
    }, [canClaimUnitagNameError, debouncedInputValue, isCheckingUnitag, entryPoint, unitagAddress, t]);
    const shouldBlockContinue = (entryPoint === OnboardingScreens.Landing && !unitagAddress) || !unitagInputValue;
    const onPressContinue = useEvent(() => {
        if (isCheckingUnitag) {
            setShowVerificationLoading(true);
            return;
        }
        if (unitagInputValue && isUnitagAvailable) {
            navigateWithAnimation(unitagInputValue);
        }
    });
    const webStyling = isWeb
        ? {
            backgroundColor: '$surface1',
            borderRadius: '$rounded20',
            borderWidth: 1,
            borderColor: '$surface3',
            py: '$spacing12',
            px: '$spacing20',
            mb: '$spacing20',
            width: '100%',
            justifyContent: 'space-between',
        }
        : {};
    const getInitialUnitagNameInputWidth = (event) => {
        if (unitagNameinputMinWidth) {
            return;
        }
        // Fix from WALL-4822 for Android
        // Sets input minWidth to initial input width + 1 point. Initial width is not sufficient after clearing the input.
        setUnitagNameInputMinWidth(event.nativeEvent.layout.width + 1);
    };
    return (_jsxs(_Fragment, { children: [_jsxs(Flex, { centered: true, gap: "$spacing12", mt: "$spacing24", onLayout: (event) => {
                    onLayout(event);
                    onSetFontSize(inputPlaceholder + UNITAG_SUFFIX_CHARS_ONLY);
                }, children: [_jsxs(AnimatedFlex, { centered: true, width: "100%", height: fonts.heading2.lineHeight, style: { transform: [{ translateY: animateY ? unitagInputContainerTranslateY : 0 }] }, children: [!showTextInputView && (_jsx(Flex, { position: "absolute", children: _jsx(UnitagName, { animateText: true, animateIcon: true, textProps: { fontSize }, name: unitagInputValue, opacity: showTextInputView ? 0 : 1 }) })), _jsx(AnimatePresence, { children: showTextInputView && (_jsxs(Flex, { row: true, animation: "quick", enterStyle: { opacity: 0, x: SLIDE_IN_AMOUNT }, exitStyle: { opacity: 0, x: SLIDE_IN_AMOUNT }, gap: "$none", ...webStyling, children: [_jsx(TextInput, { ref: textInputRef, autoFocus: !isMobileApp, blurOnSubmit: !isWeb, autoCapitalize: "none", autoCorrect: false, borderWidth: "$none", borderRadius: isWeb ? 0 : undefined, fontFamily: "$heading", fontSize: isWeb ? fonts.subheading1.fontSize : fontSize, fontWeight: "$book", numberOfLines: 1, p: "$none", placeholder: inputPlaceholder, placeholderTextColor: "$neutral3", returnKeyType: "done", testID: TestID.WalletNameInput, textAlign: "left", value: unitagInputValue, width: isWeb ? '100%' : undefined, minWidth: unitagNameinputMinWidth, onChangeText: onChangeTextInput, onSubmitEditing: onPressContinue, onLayout: getInitialUnitagNameInputWidth }), _jsx(Text, { animation: "lazy", color: "$neutral1", enterStyle: { opacity: 0, x: SLIDE_IN_AMOUNT }, exitStyle: { opacity: 0, x: SLIDE_IN_AMOUNT }, fontFamily: "$heading", fontSize: isWeb ? fonts.subheading1.fontSize : fontSize, fontWeight: "$book", lineHeight: fonts.heading2.lineHeight, children: UNITAG_SUFFIX }, UNITAG_SUFFIX)] }, "input-container")) })] }), unitagAddress && (_jsxs(AnimatedFlex, { row: true, alignItems: "center", gap: "$spacing8", style: addressViewAnimatedStyle, onPress: onPressAddressTooltip, children: [_jsx(Text, { color: "$neutral2", variant: "subheading2", children: shortenAddress(unitagAddress !== null && unitagAddress !== void 0 ? unitagAddress : ADDRESS_ZERO) }), _jsx(TouchableArea, { onPress: onPressAddressTooltip, children: _jsx(InfoCircleFilled, { color: "$neutral3", size: "$icon.20" }) })] })), _jsx(AvailabilityStatus, { unitagAvailableError: unitagAvailableError, addressError: addressError, isUnitagAvailable: isUnitagAvailable, showTextInputView: showTextInputView, mt: "$spacing4", mb: unitagAddress ? undefined : '$spacing20' })] }), _jsx(TouchableArea, { disabledStyle: { cursor: 'default' }, disabled: shouldBlockContinue, onPress: onPressContinue, children: _jsx(Flex, { row: true, justifyContent: "flex-end", children: _jsx(Button, { size: "large", variant: "branded", isDisabled: shouldBlockContinue || !isUnitagAvailable, testID: TestID.Continue, loading: showVerificationLoading && isCheckingUnitag, onPress: onPressContinue, children: t('common.button.continue') }) }) }), _jsx(UnitagInfoModal, { isOpen: showInfoModal, unitagAddress: unitagAddress, onClose: handleHideInfoModal })] }));
}
const animationProps = {
    animation: 'quick',
    enterStyle: { opacity: 0, y: 10 },
};
function AvailabilityStatus({ unitagAvailableError, addressError, isUnitagAvailable, showTextInputView, ...rest }) {
    const { t } = useTranslation();
    return (_jsx(Flex, { row: true, gap: "$spacing8", minHeight: fonts.body2.lineHeight, ...rest, children: _jsx(AnimatePresence, { children: unitagAvailableError || addressError ? (_jsx(Flex, { ...animationProps, children: _jsx(Text, { color: "$statusCritical", textAlign: "center", variant: "body2", children: unitagAvailableError || addressError }, "error") }, "error")) : isUnitagAvailable && showTextInputView ? (_jsxs(Flex, { row: true, alignItems: "center", gap: "$spacing4", ...animationProps, children: [_jsx(CheckmarkCircle, { color: "$accent1", size: "$icon.16" }), _jsx(Text, { textAlign: "center", variant: "body2", children: t('unitags.claim.available') })] }, "available")) : null }) }));
}
//# sourceMappingURL=ClaimUnitagContent.js.map