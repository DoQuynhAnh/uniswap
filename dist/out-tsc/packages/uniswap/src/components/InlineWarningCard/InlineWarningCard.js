import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SharedEventName } from '@uniswap/analytics-events';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Flex, InlineCard, LabeledCheckbox, Text, TouchableArea } from 'ui/src';
import { InfoCircleFilled } from 'ui/src/components/icons/InfoCircleFilled';
import { WarningSeverity } from 'uniswap/src/components/modals/WarningModal/types';
import { getWarningIcon, getWarningIconColors } from 'uniswap/src/components/warnings/utils';
import { ElementName } from 'uniswap/src/features/telemetry/constants/trace';
import { sendAnalyticsEvent } from 'uniswap/src/features/telemetry/send';
import { openUri } from 'uniswap/src/utils/linking';
import { useTrace } from 'utilities/src/telemetry/trace/TraceContext';
export function InlineWarningCard({ severity, heading, description, learnMoreUrl, checkboxLabel, heroIcon, onPressCtaButton, checked, setChecked, hideCtaIcon, headingTestId, descriptionTestId, analyticsProperties, Icon, }) {
    const { t } = useTranslation();
    const [checkedFallback, setCheckedFallback] = useState(false);
    const { color, textColor, backgroundColor } = getWarningIconColors(severity);
    const WarningIcon = getWarningIcon(severity);
    const shouldShowCtaIcon = !hideCtaIcon && severity !== WarningSeverity.Low && severity !== WarningSeverity.None;
    const trace = useTrace();
    const onCheckPressed = (isChecked) => {
        if (setChecked) {
            setChecked(!isChecked);
        }
        else {
            setCheckedFallback(!isChecked);
        }
        sendAnalyticsEvent(SharedEventName.ELEMENT_CLICKED, {
            ...trace,
            ...analyticsProperties,
            checked: !isChecked,
            element: ElementName.InlineWarningCardCheckbox,
        });
    };
    if (severity === WarningSeverity.None || !WarningIcon) {
        // !WarningIcon for typecheck; should only be null if WarningSeverity == None
        return null;
    }
    const checkboxElement = checkboxLabel ? (_jsx(LabeledCheckbox, { checked: checked !== null && checked !== void 0 ? checked : checkedFallback, gap: "$spacing8", px: "$none", size: "$icon.16", text: _jsx(Text, { color: "$neutral2", variant: "buttonLabel3", children: checkboxLabel }), onCheckPressed: onCheckPressed })) : null;
    const descriptionElement = (_jsxs(Flex, { gap: "$spacing2", children: [description && (_jsx(Text, { color: "$neutral2", variant: "body3", testID: descriptionTestId, children: description })), learnMoreUrl && (_jsx(TouchableArea, { onPress: async (e) => {
                    e.stopPropagation();
                    await openUri(learnMoreUrl);
                }, children: _jsx(Text, { color: "$neutral1", variant: "body3", children: t('common.button.learn') }) }))] }));
    return (_jsx(InlineCard, { CtaButtonIcon: shouldShowCtaIcon ? InfoCircleFilled : undefined, Icon: Icon !== null && Icon !== void 0 ? Icon : WarningIcon, color: textColor, description: _jsxs(Flex, { gap: "$spacing8", children: [descriptionElement, checkboxElement] }), heading: heading && (_jsx(Text, { color: textColor, variant: "body3", testID: headingTestId, children: heading })), iconBackgroundColor: heroIcon ? backgroundColor : undefined, iconColor: color, onPressCtaButton: onPressCtaButton }));
}
//# sourceMappingURL=InlineWarningCard.js.map