import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { memo, useCallback, useState } from 'react';
import { FadeIn, FadeOut } from 'react-native-reanimated';
import { Flex, Text, TouchableArea, useIsShortMobileDevice, useMedia } from 'ui/src';
import { AnimatedFlex } from 'ui/src/components/layout/AnimatedFlex';
import { iconSizes } from 'ui/src/theme';
import { useAccountMeta } from 'uniswap/src/contexts/UniswapContext';
import { InsufficientNativeTokenWarning } from 'uniswap/src/features/transactions/components/InsufficientNativeTokenWarning/InsufficientNativeTokenWarning';
import { useInsufficientNativeTokenWarning } from 'uniswap/src/features/transactions/components/InsufficientNativeTokenWarning/useInsufficientNativeTokenWarning';
import { BlockedAddressWarning } from 'uniswap/src/features/transactions/modals/BlockedAddressWarning';
import { SwapWarningModal } from 'uniswap/src/features/transactions/swap/form/footer/GasAndWarningRows/SwapWarningModal';
import { useDebouncedGasInfo } from 'uniswap/src/features/transactions/swap/form/footer/hooks/useDebouncedGasInfo';
import { TradeInfoRow } from 'uniswap/src/features/transactions/swap/form/footer/tradeInfo/TradeInfoRow';
import { useParsedSwapWarnings } from 'uniswap/src/features/transactions/swap/hooks/useSwapWarnings';
import { useIsBlocked } from 'uniswap/src/features/trm/hooks';
import { dismissNativeKeyboard } from 'utilities/src/device/keyboard/dismissNativeKeyboard';
export function GasAndWarningRows() {
    const isShort = useMedia().short;
    const isShortMobileDevice = useIsShortMobileDevice();
    const account = useAccountMeta();
    const [showWarningModal, setShowWarningModal] = useState(false);
    const { isBlocked } = useIsBlocked(account === null || account === void 0 ? void 0 : account.address);
    const { formScreenWarning, insufficientGasFundsWarning, warnings } = useParsedSwapWarnings();
    const showFormWarning = formScreenWarning && formScreenWarning.displayedInline && !isBlocked;
    const debouncedGasInfo = useDebouncedGasInfo();
    const insufficientNativeTokenWarning = useInsufficientNativeTokenWarning({
        warnings,
        flow: 'swap',
        gasFee: debouncedGasInfo.gasFee,
    });
    const onSwapWarningClick = useCallback(() => {
        if (!(formScreenWarning === null || formScreenWarning === void 0 ? void 0 : formScreenWarning.warning.message)) {
            // Do not show the modal if the warning doesn't have a message.
            return;
        }
        dismissNativeKeyboard();
        setShowWarningModal(true);
    }, [formScreenWarning === null || formScreenWarning === void 0 ? void 0 : formScreenWarning.warning.message]);
    return (_jsxs(_Fragment, { children: [formScreenWarning && (_jsx(SwapWarningModal, { isOpen: showWarningModal, parsedWarning: formScreenWarning, onClose: () => setShowWarningModal(false) })), _jsxs(Flex, { gap: isShortMobileDevice ? '$spacing2' : isShort ? '$spacing8' : '$spacing16', children: [isBlocked && (
                    // TODO: review design of this warning.
                    _jsx(BlockedAddressWarning, { row: true, alignItems: "center", alignSelf: "stretch", backgroundColor: "$surface2", borderBottomLeftRadius: "$rounded16", borderBottomRightRadius: "$rounded16", flexGrow: 1, px: "$spacing16", py: "$spacing12" })), _jsx(TradeInfoRow, { gasInfo: debouncedGasInfo }), showFormWarning && (_jsx(FormWarning, { Icon: formScreenWarning === null || formScreenWarning === void 0 ? void 0 : formScreenWarning.Icon, textColor: formScreenWarning.color.text, warningTitle: formScreenWarning === null || formScreenWarning === void 0 ? void 0 : formScreenWarning.warning.title, onSwapWarningClick: onSwapWarningClick })), _jsx(InsufficientNativeTokenWarning, { flow: "swap", gasFee: debouncedGasInfo.gasFee, warnings: warnings }), !debouncedGasInfo.fiatPriceFormatted ? _jsx(EmptyRow, {}) : undefined, !(showFormWarning || insufficientGasFundsWarning || insufficientNativeTokenWarning) && _jsx(EmptyRow, {})] })] }));
}
// We want to optimize the swap flow as much as possible, so we split this up into its own component in order to memoize it.
// If you modify this component, make sure you don't pass complex objects as props that would change on every render.
const FormWarning = memo(function FormWarning({ Icon, textColor, warningTitle, onSwapWarningClick, }) {
    return (_jsx(TouchableArea, { onPress: onSwapWarningClick, children: _jsxs(AnimatedFlex, { centered: true, row: true, entering: FadeIn, exiting: FadeOut, gap: "$spacing8", px: "$spacing24", children: [Icon && _jsx(Icon, { color: textColor, size: "$icon.16", strokeWidth: 1.5 }), _jsx(Flex, { row: true, children: _jsx(Text, { color: textColor, textAlign: "center", variant: "body3", children: warningTitle }) })] }) }));
});
function EmptyRow() {
    return (_jsx(Flex, { row: true, centered: true, p: "$spacing2", children: _jsx(Flex, { row: true, minHeight: iconSizes.icon16, children: _jsx(Text, { variant: "body3", children: " " }) }) }));
}
//# sourceMappingURL=GasAndWarningRows.native.js.map