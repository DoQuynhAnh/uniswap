import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { AnimatePresence, Flex, Portal, TouchableArea, isWeb, styled, useIsDarkMode } from 'ui/src';
import { RotatableChevron } from 'ui/src/components/icons/RotatableChevron';
import { useDeviceDimensions } from 'ui/src/hooks/useDeviceDimensions';
import { iconSizes, spacing, zIndexes } from 'ui/src/theme';
import { BaseCard } from 'uniswap/src/components/BaseCard/BaseCard';
import { Scrollbar } from 'uniswap/src/components/misc/Scrollbar';
import { useAppInsets } from 'uniswap/src/hooks/useAppInsets';
import { isAndroid, isInterface, isTouchable } from 'utilities/src/platform';
import { executeWithFrameDelay } from 'utilities/src/react/delayUtils';
import { useTimeout } from 'utilities/src/time/timing';
const DEFAULT_MIN_WIDTH = 225;
const MIN_HEIGHT = 250;
export function ActionSheetDropdown({ children, styles, testID, showArrow, closeOnSelect = true, onPress, ...contentProps }) {
    const insets = useAppInsets();
    const containerRef = useRef(null);
    const [isOpen, setOpen] = useState(false);
    const [toggleMeasurements, setToggleMeasurements] = useState(null);
    const openDropdown = (event) => {
        onPress === null || onPress === void 0 ? void 0 : onPress(event);
        const containerNode = containerRef === null || containerRef === void 0 ? void 0 : containerRef.current;
        if (containerNode) {
            containerNode.measureInWindow((x, y, width, height) => {
                setToggleMeasurements({
                    x,
                    y: y + (isAndroid ? insets.top : 0),
                    width,
                    height,
                    sticky: styles === null || styles === void 0 ? void 0 : styles.sticky,
                });
                setOpen(true);
            });
        }
    };
    useEffect(() => {
        if (!isWeb) {
            return undefined;
        }
        function resizeListener() {
            var _a;
            (_a = containerRef === null || containerRef === void 0 ? void 0 : containerRef.current) === null || _a === void 0 ? void 0 : _a.measureInWindow((x, y, width, height) => {
                setToggleMeasurements((prev) => ({
                    ...prev,
                    x,
                    y,
                    width,
                    height,
                }));
            });
        }
        window.addEventListener('resize', resizeListener);
        return () => {
            window.removeEventListener('resize', resizeListener);
        };
    }, [toggleMeasurements === null || toggleMeasurements === void 0 ? void 0 : toggleMeasurements.sticky, insets.top]);
    const closeDropdown = useCallback((event) => {
        setOpen(false);
        setToggleMeasurements(null);
        event.preventDefault();
        event.stopPropagation();
    }, [setOpen, setToggleMeasurements]);
    return (_jsxs(_Fragment, { children: [_jsx(TouchableArea, { width: styles === null || styles === void 0 ? void 0 : styles.width, onPress: openDropdown, children: _jsxs(Flex, { ref: containerRef, centered: true, row: true, collapsable: false, gap: "$spacing8", px: styles === null || styles === void 0 ? void 0 : styles.buttonPaddingX, py: (styles === null || styles === void 0 ? void 0 : styles.buttonPaddingY) || '$spacing8', testID: testID || 'dropdown-toggle', children: [children, showArrow && (_jsx(RotatableChevron, { animation: "100ms", color: "$neutral2", direction: isOpen ? 'up' : 'down', height: iconSizes.icon20, width: iconSizes.icon20 }))] }) }), _jsx(ActionSheetBackdropWithContent, { closeDropdown: closeDropdown, styles: styles, isOpen: isOpen, toggleMeasurements: toggleMeasurements, contentProps: contentProps, closeOnSelect: closeOnSelect })] }));
}
const ActionSheetBackdropWithContent = memo(function ActionSheetBackdropWithContent({ closeDropdown, styles, isOpen, toggleMeasurements, contentProps, closeOnSelect, }) {
    /*
      There is a race condition when we switch from a view with one Portal to another view with a Portal.
      It seems that if we mount a second Portal while the first is still mounted, the second would not work properly.
      setTimeout with 0ms is a workaround to avoid this issue for now
      Remove when https://linear.app/uniswap/issue/WALL-4817 is resolved
    */
    const [shouldRender, setShouldRender] = useState(false);
    useTimeout(() => setShouldRender(true), 0);
    if (!shouldRender) {
        return null;
    }
    return (_jsx(Portal, { zIndex: (styles === null || styles === void 0 ? void 0 : styles.dropdownZIndex) || zIndexes.popover, children: _jsx(AnimatePresence, { custom: { isOpen }, children: isOpen && toggleMeasurements && (_jsxs(_Fragment, { children: [_jsx(Backdrop, { handleClose: closeDropdown, opacity: !isInterface || isTouchable ? styles === null || styles === void 0 ? void 0 : styles.backdropOpacity : 0 }), _jsx(DropdownContent, { ...contentProps, alignment: styles === null || styles === void 0 ? void 0 : styles.alignment, dropdownMaxHeight: styles === null || styles === void 0 ? void 0 : styles.dropdownMaxHeight, dropdownMinWidth: styles === null || styles === void 0 ? void 0 : styles.dropdownMinWidth, dropdownGap: styles === null || styles === void 0 ? void 0 : styles.dropdownGap, handleClose: closeDropdown, toggleMeasurements: toggleMeasurements, closeOnSelect: closeOnSelect })] })) }) }));
});
/**
 * AnimatePresence `custom` prop will update variants *as* the exit animation runs,
 * which otherwise is impossible. We want to make sure people can touch behind the dropdown
 * as its animating closed. With slow animations it can be especially annoying.
 */
const TouchableWhenOpen = styled(Flex, {
    variants: {
        isOpen: {
            true: {
                pointerEvents: 'auto',
            },
            false: {
                pointerEvents: 'none',
            },
        },
    },
});
function DropdownContent({ options, alignment = 'left', dropdownMaxHeight, dropdownMinWidth, dropdownGap, toggleMeasurements, handleClose, closeOnSelect, ...rest }) {
    const insets = useAppInsets();
    const { fullWidth, fullHeight } = useDeviceDimensions();
    const scrollOffset = useSharedValue(0);
    const [contentHeight, setContentHeight] = useState(0);
    const scrollHandler = useAnimatedScrollHandler((event) => (scrollOffset.value = event.contentOffset.y), 
    // There seems to be a bug in `reanimated` that's causing the dependency array to not be automatically injected by the babel plugin,
    // but it causes a crash when manually added on web. This is a workaround until the bug is fixed.
    // The performance impact of not having the array is minimal on web, so this should be fine for now.
    isWeb ? undefined : [scrollOffset]);
    const containerProps = useMemo(() => {
        if (alignment === 'left') {
            return {
                left: toggleMeasurements.x,
                right: 'unset',
                maxWidth: fullWidth - toggleMeasurements.x - spacing.spacing12,
            };
        }
        return {
            left: 'unset',
            right: fullWidth - (toggleMeasurements.x + toggleMeasurements.width),
            maxWidth: toggleMeasurements.x + toggleMeasurements.width - spacing.spacing12,
        };
    }, [alignment, fullWidth, toggleMeasurements]);
    const bottomOffset = insets.bottom + spacing.spacing12;
    const maxHeight = (isInterface && dropdownMaxHeight) ||
        Math.max(fullHeight - toggleMeasurements.y - toggleMeasurements.height - bottomOffset, MIN_HEIGHT);
    const overflowsContainer = contentHeight > maxHeight;
    const initialScrollY = useMemo(() => window.scrollY, []);
    const [windowScrollY, setWindowScrollY] = useState(0);
    useEffect(() => {
        if (!isWeb) {
            return undefined;
        }
        function scrollListener() {
            if (!(toggleMeasurements === null || toggleMeasurements === void 0 ? void 0 : toggleMeasurements.sticky) && window.scrollY >= 0) {
                setWindowScrollY(window.scrollY - initialScrollY);
            }
        }
        window.addEventListener('scroll', scrollListener);
        return () => {
            window.removeEventListener('scroll', scrollListener);
        };
    }, [initialScrollY, toggleMeasurements === null || toggleMeasurements === void 0 ? void 0 : toggleMeasurements.sticky]);
    useEffect(() => {
        if (toggleMeasurements) {
            setWindowScrollY(0);
        }
    }, [toggleMeasurements]);
    const position = useMemo(() => {
        // top is used to position the dropdown when it is opened below the toggle
        const top = toggleMeasurements.y + toggleMeasurements.height - windowScrollY + spacing.spacing8;
        // bottom is used to position the dropdown when it is opened above the toggle
        const bottom = fullHeight - toggleMeasurements.y + spacing.spacing8;
        const isEnoughSpaceUnder = fullHeight - top > MIN_HEIGHT;
        const isEnoughSpaceOver = fullHeight - bottom > MIN_HEIGHT;
        if (!isEnoughSpaceUnder && isEnoughSpaceOver) {
            return { bottom };
        }
        return { top };
    }, [toggleMeasurements.y, windowScrollY, fullHeight, toggleMeasurements.height]);
    return (_jsx(TouchableWhenOpen, { animation: "fast", maxHeight: maxHeight, minWidth: dropdownMinWidth !== null && dropdownMinWidth !== void 0 ? dropdownMinWidth : DEFAULT_MIN_WIDTH, position: "absolute", testID: "dropdown-content", ...position, ...containerProps, enterStyle: { y: -20, opacity: 0 }, exitStyle: { y: -10, opacity: 0 }, children: _jsx(BaseCard.Shadow, { backgroundColor: "$surface1", borderColor: "$surface3", borderWidth: "$spacing1", overflow: "hidden", p: "$none", ...rest, children: _jsxs(Flex, { row: true, maxHeight: maxHeight, children: [_jsx(Animated.ScrollView, { contentContainerStyle: {
                            padding: spacing.spacing8,
                        }, scrollEnabled: overflowsContainer, scrollEventThrottle: 16, showsVerticalScrollIndicator: isWeb, onScroll: scrollHandler, children: _jsx(Flex, { gap: dropdownGap, onLayout: ({ nativeEvent: { layout: { height }, }, }) => {
                                setContentHeight(height);
                            }, children: options.map(({ key, onPress, render }) => (_jsx(TouchableArea, { hoverable: true, borderRadius: "$rounded8", onPress: (event) => {
                                    executeWithFrameDelay(() => {
                                        if (closeOnSelect) {
                                            handleClose === null || handleClose === void 0 ? void 0 : handleClose(event);
                                        }
                                    }, onPress);
                                }, children: _jsx(Flex, { testID: key, children: render() }) }, key))) }) }), overflowsContainer && !isWeb && (_jsx(Scrollbar, { contentHeight: contentHeight, mr: "$spacing4", py: "$spacing12", scrollOffset: scrollOffset, visibleHeight: maxHeight }))] }) }) }));
}
function Backdrop({ handleClose, opacity: opacityProp }) {
    const isDarkMode = useIsDarkMode();
    const opacity = opacityProp !== null && opacityProp !== void 0 ? opacityProp : (isDarkMode ? 0.4 : 0.2);
    return (_jsx(TouchableWhenOpen, { animation: "100ms", backgroundColor: "$black", enterStyle: {
            opacity: 0,
        }, exitStyle: {
            opacity: 0,
        }, flex: 1, inset: 0, opacity: opacity, position: "absolute", testID: "dropdown-backdrop", onPress: handleClose }));
}
//# sourceMappingURL=ActionSheetDropdown.js.map