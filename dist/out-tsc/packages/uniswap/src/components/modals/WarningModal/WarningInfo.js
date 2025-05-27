import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useCallback, useRef, useState } from 'react';
import { Flex, TouchableArea, isWeb } from 'ui/src';
import { InfoCircle } from 'ui/src/components/icons/InfoCircle';
import { WarningModal } from 'uniswap/src/components/modals/WarningModal/WarningModal';
import { InfoTooltip } from 'uniswap/src/components/tooltip/InfoTooltip';
import { UniswapEventName } from 'uniswap/src/features/telemetry/constants';
import { sendAnalyticsEvent } from 'uniswap/src/features/telemetry/send';
import { usePriceUXEnabled } from 'uniswap/src/features/transactions/swap/hooks/usePriceUXEnabled';
import { useTrace } from 'utilities/src/telemetry/trace/TraceContext';
/**
 * Platform wrapper component used to display additional info either as a tooltip on web
 * or a modal on mobile
 */
export function WarningInfo({ tooltipProps, modalProps, infoButton, children, trigger = _jsx(InfoCircle, { color: "$neutral3", size: "$icon.12" }), triggerPlacement = 'end', analyticsTitle, }) {
    const trace = useTrace();
    const hasHoverBeenTracked = useRef(false);
    const isPriceUXEnabled = usePriceUXEnabled();
    const [showModal, setShowModal] = useState(false);
    const handleTooltipOpenChange = useCallback((isTooltipOpen = true) => {
        if (!analyticsTitle) {
            return;
        }
        if (hasHoverBeenTracked.current) {
            return;
        }
        if (!isTooltipOpen) {
            return;
        }
        hasHoverBeenTracked.current = true;
        sendAnalyticsEvent(UniswapEventName.TooltipOpened, {
            ...trace,
            tooltip_name: analyticsTitle,
            is_price_ux_enabled: isPriceUXEnabled,
        });
    }, [trace, analyticsTitle, isPriceUXEnabled]);
    if (isWeb) {
        return (_jsx(InfoTooltip, { ...tooltipProps, button: infoButton, trigger: trigger, triggerPlacement: triggerPlacement, onOpenChange: handleTooltipOpenChange, children: children }));
    }
    return (_jsxs(_Fragment, { children: [_jsx(TouchableArea, { flexShrink: 1, onPress: () => {
                    handleTooltipOpenChange();
                    setShowModal(true);
                }, children: _jsxs(Flex, { row: true, shrink: true, alignItems: "center", gap: "$spacing4", children: [triggerPlacement === 'start' && trigger, children, triggerPlacement === 'end' && trigger] }) }), _jsx(WarningModal, { isOpen: showModal, ...modalProps, onClose: () => setShowModal(false), children: infoButton })] }));
}
//# sourceMappingURL=WarningInfo.js.map