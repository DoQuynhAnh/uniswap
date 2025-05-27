import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Flex } from 'ui/src';
import { AlertTriangleFilled } from 'ui/src/components/icons/AlertTriangleFilled';
import { WarningInfo } from 'uniswap/src/components/modals/WarningModal/WarningInfo';
import { ModalName } from 'uniswap/src/features/telemetry/constants';
export function TradeWarning({ children, warning }) {
    var _a;
    const { t } = useTranslation();
    const caption = warning.message;
    return (_jsx(Flex, { animation: "quick", enterStyle: { opacity: 0 }, children: _jsx(WarningInfo, { modalProps: {
                caption,
                rejectText: t('common.button.close'),
                modalName: ModalName.SwapWarning,
                severity: warning.severity,
                title: (_a = warning.title) !== null && _a !== void 0 ? _a : '',
                icon: _jsx(AlertTriangleFilled, { color: "$statusCritical", size: "$icon.16" }),
            }, tooltipProps: { text: caption !== null && caption !== void 0 ? caption : '', placement: 'bottom' }, trigger: children }) }));
}
//# sourceMappingURL=TradeWarning.js.map