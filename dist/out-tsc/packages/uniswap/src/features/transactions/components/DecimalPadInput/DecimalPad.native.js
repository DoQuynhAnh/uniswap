import { createElement as _createElement } from "react";
import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { I18nManager } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { useAnimatedStyle, useSharedValue, withSequence, withTiming } from 'react-native-reanimated';
import { Flex, Text } from 'ui/src';
import { LeftArrow, RightArrow } from 'ui/src/components/icons';
import { AnimatedFlex } from 'ui/src/components/layout/AnimatedFlex';
import { fonts, iconSizes, spacing } from 'ui/src/theme';
import { useAppFiatCurrencyInfo } from 'uniswap/src/features/fiatCurrency/hooks';
import { KeyAction, } from 'uniswap/src/features/transactions/components/DecimalPadInput/types';
import { TestID } from 'uniswap/src/test/fixtures/testIDs';
const KEY_PRESS_ANIMATION_DURATION_MS = 150;
export const DecimalPad = memo(function DecimalPad({ disabled = false, hideDecimal = false, disabledKeys = {}, maxHeight, onKeyPress, onKeyLongPressStart, onKeyLongPressEnd, onReady, onTriggerInputShakeAnimation, }) {
    const currentHeightRef = useRef(null);
    const maxHeightRef = useRef(maxHeight);
    const [currentHeight, setCurrentHeight] = useState(null);
    const [sizeMultiplier, setSizeMultiplier] = useState({
        fontSize: 1,
        icon: 1,
        lineHeight: 1,
        padding: 1,
    });
    const keys = useMemo(() => {
        return [
            [
                {
                    label: '1',
                    action: KeyAction.Insert,
                    testID: TestID.DecimalPadNumber1,
                },
                {
                    label: '2',
                    action: KeyAction.Insert,
                    testID: TestID.DecimalPadNumber2,
                },
                {
                    label: '3',
                    action: KeyAction.Insert,
                    testID: TestID.DecimalPadNumber3,
                },
            ],
            [
                {
                    label: '4',
                    action: KeyAction.Insert,
                    testID: TestID.DecimalPadNumber4,
                },
                {
                    label: '5',
                    action: KeyAction.Insert,
                    testID: TestID.DecimalPadNumber5,
                },
                {
                    label: '6',
                    action: KeyAction.Insert,
                    testID: TestID.DecimalPadNumber6,
                },
            ],
            [
                {
                    label: '7',
                    action: KeyAction.Insert,
                    testID: TestID.DecimalPadNumber7,
                },
                {
                    label: '8',
                    action: KeyAction.Insert,
                    testID: TestID.DecimalPadNumber8,
                },
                {
                    label: '9',
                    action: KeyAction.Insert,
                    testID: TestID.DecimalPadNumber9,
                },
            ],
            [
                {
                    label: '.',
                    action: KeyAction.Insert,
                    hidden: hideDecimal,
                    testID: TestID.DecimalPadDecimal,
                },
                {
                    label: '0',
                    action: KeyAction.Insert,
                    testID: TestID.DecimalPadNumber0,
                    align: 'center',
                },
                {
                    label: 'backspace',
                    action: KeyAction.Delete,
                    testID: TestID.DecimalPadBackspace,
                },
            ],
        ];
    }, [hideDecimal]);
    const onLayout = useCallback((event) => {
        setCurrentHeight(event.nativeEvent.layout.height);
    }, []);
    useEffect(() => {
        currentHeightRef.current = currentHeight;
        maxHeightRef.current = maxHeight;
        if (currentHeight === null || maxHeight === null) {
            return;
        }
        if (currentHeight < maxHeight) {
            // We call `onReady` on the next tick in case the layout is still changing and `maxHeight` is now different.
            setTimeout(() => {
                if (currentHeightRef.current !== null &&
                    maxHeightRef.current !== null &&
                    currentHeightRef.current < maxHeightRef.current) {
                    onReady();
                }
            }, 0);
            return;
        }
        setSizeMultiplier({
            fontSize: sizeMultiplier.fontSize * 0.95,
            icon: sizeMultiplier.icon * 0.97,
            lineHeight: sizeMultiplier.lineHeight * 0.95,
            padding: sizeMultiplier.padding * 0.8,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentHeight, maxHeight]);
    if (maxHeight === null) {
        return _jsx(_Fragment, {});
    }
    return (_jsx(Flex, { onLayout: onLayout, children: keys.map((row, rowIndex) => (_jsx(Flex, { row: true, alignItems: "center", children: row.map((key, keyIndex) => {
                const isNumberKey = key.label.charCodeAt(0) >= '0'.charCodeAt(0) && key.label.charCodeAt(0) <= '9'.charCodeAt(0);
                const isKeyDisabled = disabled || disabledKeys[key.label];
                const shouldTriggerShake = isKeyDisabled && isNumberKey;
                return key.hidden ? (_jsx(Flex, { alignItems: "center", width: "50%" }, keyIndex)) : (_createElement(KeyButton, { ...key, key: keyIndex, 
                    // Unless the entire `DecimalPad` is disabled, we only truly disable and gray out the decimal separator and backspace keys.
                    // We never gray out the number keys. Instead we trigger a shake animation if the user presses them when they're "disabled".
                    // Because of this, we don't set the `disabled` prop on the number keys so we can trigger the `onPress` event.
                    disabled: disabled || (isKeyDisabled && !shouldTriggerShake), sizeMultiplier: sizeMultiplier, onLongPressStart: shouldTriggerShake ? onTriggerInputShakeAnimation : onKeyLongPressStart, onLongPressEnd: shouldTriggerShake ? undefined : onKeyLongPressEnd, onPress: shouldTriggerShake ? onTriggerInputShakeAnimation : onKeyPress }));
            }) }, rowIndex))) }));
});
const animationOptions = { duration: KEY_PRESS_ANIMATION_DURATION_MS };
const KeyButton = memo(function KeyButton({ action, disabled, label, sizeMultiplier, onPress, onLongPressStart, onLongPressEnd, testID, }) {
    const { decimalSeparator } = useAppFiatCurrencyInfo();
    const scale = useSharedValue(1);
    const opacity = useSharedValue(1);
    const handlePress = useCallback(async () => {
        onPress === null || onPress === void 0 ? void 0 : onPress(label, action);
        scale.value = withSequence(withTiming(1.3, animationOptions), withTiming(1, animationOptions));
        opacity.value = withSequence(withTiming(0.75, animationOptions), withTiming(1, animationOptions));
    }, [action, label, onPress, opacity, scale]);
    const handleLongPressStart = useCallback(() => {
        onLongPressStart === null || onLongPressStart === void 0 ? void 0 : onLongPressStart(label, action);
    }, [action, label, onLongPressStart]);
    const handleLongPressEnd = useCallback(() => {
        onLongPressEnd === null || onLongPressEnd === void 0 ? void 0 : onLongPressEnd(label, action);
    }, [action, label, onLongPressEnd]);
    // We use `onBegin` because we want to react as soon as the user touches the key, not when they release it.
    const tap = Gesture.Tap().runOnJS(true).onBegin(handlePress).enabled(!disabled);
    // We use `onStart` because we want to start reacting to this event when the long press is actually detected.
    const longPress = Gesture.LongPress()
        .runOnJS(true)
        .onStart(handleLongPressStart)
        .onEnd(handleLongPressEnd)
        .enabled(!disabled);
    const composedGesture = Gesture.Simultaneous(tap, longPress);
    const color = disabled ? '$neutral3' : '$neutral1';
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
        opacity: opacity.value,
    }));
    return (
    // We use `GestureDetector` instead of `TouchableArea` because `TouchableArea` is not able to detect 2 fingers at the same time (only one of the events will trigger).
    // For a custom keyboard, we want to be able to detect each finger as a separate tap even when they are pressed at the same (or almost the same) time.
    _jsx(GestureDetector, { gesture: composedGesture, children: _jsx(Flex, { row: true, "$short": { py: spacing.spacing16 * sizeMultiplier.padding }, alignItems: "center", flex: 1, height: "100%", px: spacing.spacing16 * sizeMultiplier.padding, py: spacing.spacing12 * sizeMultiplier.padding, testID: testID || label, children: _jsx(AnimatedFlex, { grow: true, alignItems: "center", style: animatedStyle, children: label === 'backspace' ? (I18nManager.isRTL ? (_jsx(RightArrow, { color: color, size: iconSizes.icon24 * sizeMultiplier.icon })) : (_jsx(LeftArrow, { color: color, size: iconSizes.icon24 * sizeMultiplier.icon }))) : (_jsx(Text, { color: color, style: {
                        lineHeight: fonts.heading2.lineHeight * sizeMultiplier.lineHeight,
                        fontSize: fonts.heading2.fontSize * sizeMultiplier.fontSize,
                    }, textAlign: "center", children: label === '.' ? decimalSeparator : label })) }) }) }));
});
//# sourceMappingURL=DecimalPad.native.js.map