import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useCallback, useState } from 'react';
import { Flex, Text, TouchableArea } from 'ui/src';
import { Check } from 'ui/src/components/icons/Check';
import { TokenLogo } from 'uniswap/src/components/CurrencyLogo/TokenLogo';
import { OptionItem } from 'uniswap/src/components/lists/items/OptionItem';
import { TokenContextMenuAction, TokenOptionItemContextMenu, } from 'uniswap/src/components/lists/items/tokens/TokenOptionItemContextMenu';
import { WarningSeverity } from 'uniswap/src/components/modals/WarningModal/types';
import WarningIcon from 'uniswap/src/components/warnings/WarningIcon';
import { getWarningIconColors } from 'uniswap/src/components/warnings/utils';
import TokenWarningModal from 'uniswap/src/features/tokens/TokenWarningModal';
import { getTokenWarningSeverity } from 'uniswap/src/features/tokens/safetyUtils';
import { getSymbolDisplayText } from 'uniswap/src/utils/currency';
import { shortenAddress } from 'utilities/src/addresses';
import { dismissNativeKeyboard } from 'utilities/src/device/keyboard/dismissNativeKeyboard';
import { isInterface, isWeb } from 'utilities/src/platform';
import { useBooleanState } from 'utilities/src/react/useBooleanState';
export var TokenContextMenuVariant;
(function (TokenContextMenuVariant) {
    TokenContextMenuVariant["Search"] = "search";
    TokenContextMenuVariant["TokenSelector"] = "tokenSelector";
})(TokenContextMenuVariant || (TokenContextMenuVariant = {}));
const CONTEXT_MENU_ACTIONS = {
    [TokenContextMenuVariant.Search]: [
        TokenContextMenuAction.CopyAddress,
        ...(isWeb ? [] : [TokenContextMenuAction.Favorite]),
        TokenContextMenuAction.Swap,
        TokenContextMenuAction.Send,
        TokenContextMenuAction.Receive,
        TokenContextMenuAction.Share,
    ],
    [TokenContextMenuVariant.TokenSelector]: [
        TokenContextMenuAction.CopyAddress,
        ...(isWeb ? [] : [TokenContextMenuAction.Favorite]),
        TokenContextMenuAction.ViewDetails,
    ],
};
const LegacyBaseTokenOptionItem = memo(function LegacyBaseTokenOptionItem({ option, showTokenAddress, balance, quantity, quantityFormatted, isSelected, }) {
    var _a;
    const { currencyInfo } = option;
    const { currency } = currencyInfo;
    const severity = getTokenWarningSeverity(currencyInfo);
    // in token selector, we only show the warning icon if token is >=Medium severity
    const { colorSecondary: warningIconColor } = getWarningIconColors(severity);
    return (_jsxs(Flex, { row: true, alignItems: "center", gap: "$spacing8", justifyContent: "space-between", px: "$spacing16", py: "$spacing12", style: {
            pointerEvents: 'auto',
        }, testID: `token-option-${currency.chainId}-${currency.symbol}`, children: [_jsxs(Flex, { row: true, shrink: true, alignItems: "center", gap: "$spacing12", children: [_jsx(TokenLogo, { chainId: currency.chainId, name: currency.name, symbol: currency.symbol, url: (_a = currencyInfo.logoUrl) !== null && _a !== void 0 ? _a : undefined }), _jsxs(Flex, { shrink: true, children: [_jsxs(Flex, { row: true, alignItems: "center", gap: "$spacing8", children: [_jsx(Text, { color: "$neutral1", numberOfLines: 1, variant: "body1", children: currency.name }), warningIconColor && (_jsx(Flex, { children: _jsx(WarningIcon, { severity: severity, size: "$icon.16", strokeColorOverride: warningIconColor }) }))] }), _jsxs(Flex, { row: true, alignItems: "center", gap: "$spacing8", children: [_jsx(Text, { color: "$neutral2", numberOfLines: 1, variant: "body3", children: getSymbolDisplayText(currency.symbol) }), !currency.isNative && showTokenAddress && (_jsx(Flex, { shrink: true, children: _jsx(Text, { color: "$neutral3", numberOfLines: 1, variant: "body3", children: shortenAddress(currency.address) }) }))] })] })] }), isSelected && (_jsx(Flex, { grow: true, alignItems: "flex-end", justifyContent: "center", children: _jsx(Check, { color: "$accent1", size: "$icon.20" }) })), !isSelected && quantity && quantity !== 0 ? (_jsxs(Flex, { alignItems: "flex-end", children: [_jsx(Text, { variant: "body1", children: balance }), quantityFormatted && (_jsx(Text, { color: "$neutral2", variant: "body3", children: quantityFormatted }))] })) : null] }));
});
function _LegacyTokenOptionItem(props) {
    const { option, showWarnings, onPress, tokenWarningDismissed, isKeyboardOpen } = props;
    const { currencyInfo, isUnsupported } = option;
    const { currency } = currencyInfo;
    const [showWarningModal, setShowWarningModal] = useState(false);
    const severity = getTokenWarningSeverity(currencyInfo);
    const isBlocked = severity === WarningSeverity.Blocked;
    const shouldShowWarningModalOnPress = isBlocked || (severity !== WarningSeverity.None && !tokenWarningDismissed);
    const handleShowWarningModal = useCallback(() => {
        dismissNativeKeyboard();
        setShowWarningModal(true);
    }, [setShowWarningModal]);
    const { value: isContextMenuOpen, setFalse: closeContextMenu, setTrue: openContextMenu } = useBooleanState(false);
    const onPressTokenOption = useCallback(() => {
        if (showWarnings && shouldShowWarningModalOnPress) {
            // On mobile web we need to wait for the keyboard to hide
            // before showing the modal to avoid height issues
            if (isKeyboardOpen && isInterface) {
                const activeElement = document.activeElement;
                activeElement === null || activeElement === void 0 ? void 0 : activeElement.blur();
                setTimeout(handleShowWarningModal, 700);
            }
            else {
                handleShowWarningModal();
            }
            return;
        }
        onPress();
    }, [showWarnings, shouldShowWarningModalOnPress, onPress, isKeyboardOpen, handleShowWarningModal]);
    const onAcceptTokenWarning = useCallback(() => {
        setShowWarningModal(false);
        onPress();
    }, [onPress]);
    return (_jsxs(TokenOptionItemContextMenu, { actions: CONTEXT_MENU_ACTIONS[TokenContextMenuVariant.TokenSelector], currency: currency, isOpen: isContextMenuOpen, closeMenu: closeContextMenu, children: [_jsx(TouchableArea, { animation: "300ms", width: "100%", opacity: (showWarnings && severity === WarningSeverity.Blocked) || isUnsupported ? 0.5 : 1, hoverStyle: { backgroundColor: '$surface1Hovered' }, onPress: onPressTokenOption, onLongPress: openContextMenu, children: isWeb ? (
                // eslint-disable-next-line react/forbid-elements
                _jsx("div", { onContextMenu: openContextMenu, children: _jsx(LegacyBaseTokenOptionItem, { ...props }) })) : (_jsx(LegacyBaseTokenOptionItem, { ...props })) }), _jsx(TokenWarningModal, { currencyInfo0: currencyInfo, isVisible: showWarningModal, closeModalOnly: () => setShowWarningModal(false), onAcknowledge: onAcceptTokenWarning })] }));
}
function isLegacyTokenOptionItemProps(props) {
    return 'balance' in props;
}
const BaseTokenOptionItem = memo(function _BaseTokenOptionItem(props) {
    var _a, _b, _c;
    const { option, onPress, showTokenAddress, rightElement, showDisabled, modalInfo, focusedRowControl, openContextMenu, } = props;
    const { currencyInfo } = option;
    const { currency } = currencyInfo;
    // in lists like token selector & search, we only show the warning icon if token is >=Medium severity
    const severity = getTokenWarningSeverity(currencyInfo);
    const { colorSecondary: warningIconColor } = getWarningIconColors(severity);
    return (_jsx(OptionItem, { image: _jsx(TokenLogo, { chainId: currency.chainId, name: currency.name, symbol: currency.symbol, url: (_a = currencyInfo.logoUrl) !== null && _a !== void 0 ? _a : undefined }), title: (_c = (_b = currency.name) !== null && _b !== void 0 ? _b : currency.symbol) !== null && _c !== void 0 ? _c : '', subtitle: _jsxs(Flex, { row: true, alignItems: "center", gap: "$spacing8", children: [_jsx(Text, { color: "$neutral2", numberOfLines: 1, variant: "body3", children: getSymbolDisplayText(currency.symbol) }), !currency.isNative && showTokenAddress && (_jsx(Flex, { shrink: true, children: _jsx(Text, { color: "$neutral3", numberOfLines: 1, variant: "body3", children: shortenAddress(currency.address) }) }))] }), badge: warningIconColor ? (_jsx(Flex, { children: _jsx(WarningIcon, { severity: severity, size: "$icon.16", strokeColorOverride: warningIconColor }) })) : undefined, rightElement: rightElement, disabled: showDisabled, testID: `token-option-${currency.chainId}-${currency.symbol}`, modalInfo: modalInfo, focusedRowControl: focusedRowControl, onPress: onPress, onLongPress: openContextMenu }));
});
export const TokenOptionItem = memo(function _TokenOptionItem(props) {
    const { value: isContextMenuOpen, setFalse: closeContextMenu, setTrue: openContextMenu } = useBooleanState(false);
    if (!isLegacyTokenOptionItemProps(props)) {
        return (_jsx(TokenOptionItemContextMenu, { actions: CONTEXT_MENU_ACTIONS[props.contextMenuVariant], currency: props.option.currencyInfo.currency, isOpen: isContextMenuOpen, closeMenu: closeContextMenu, children: isWeb ? (
            // eslint-disable-next-line react/forbid-elements
            _jsx("div", { onContextMenu: openContextMenu, children: _jsx(BaseTokenOptionItem, { ...props }) })) : (_jsx(BaseTokenOptionItem, { ...props, openContextMenu: openContextMenu })) }));
    }
    return _jsx(_LegacyTokenOptionItem, { ...props });
});
//# sourceMappingURL=TokenOptionItem.js.map