import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SharedEventName } from '@uniswap/analytics-events';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Flex, Text, TouchableArea } from 'ui/src';
import { CheckCircleFilled } from 'ui/src/components/icons/CheckCircleFilled';
import { CopyAlt } from 'ui/src/components/icons/CopyAlt';
import { MicroConfirmation } from 'uniswap/src/components/MicroConfirmation';
import { pushNotification } from 'uniswap/src/features/notifications/slice';
import { AppNotificationType, CopyNotificationType } from 'uniswap/src/features/notifications/types';
import { ElementName } from 'uniswap/src/features/telemetry/constants';
import { sendAnalyticsEvent } from 'uniswap/src/features/telemetry/send';
import { WarningModalInfoContainer } from 'uniswap/src/features/tokens/WarningInfoModalContainer';
import { setClipboard } from 'uniswap/src/utils/clipboard';
import { isInterface } from 'utilities/src/platform';
export function TokenAddressView({ currency, modalName, }) {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [showTooltip, setShowTooltip] = useState(false);
    if (!currency || !currency.isToken) {
        return null;
    }
    const onPressCopyAddress = async () => {
        await setClipboard(currency.address);
        if (isInterface) {
            setShowTooltip(true);
            setTimeout(() => {
                setShowTooltip(false);
            }, 1000);
        }
        else {
            dispatch(pushNotification({ type: AppNotificationType.Copied, copyType: CopyNotificationType.ContractAddress }));
        }
        sendAnalyticsEvent(SharedEventName.ELEMENT_CLICKED, {
            element: ElementName.Copy,
            modal: modalName,
        });
    };
    return (_jsx(WarningModalInfoContainer, { py: "$spacing12", px: "$spacing16", children: _jsxs(Flex, { row: true, centered: true, gap: "$spacing8", width: "100%", children: [_jsx(Flex, { shrink: true, grow: true, children: _jsx(Text, { variant: "body3", ellipsizeMode: "middle", numberOfLines: 1, children: currency.address }) }), _jsx(Flex, { shrink: true, children: _jsx(MicroConfirmation, { text: t('common.button.copied'), icon: _jsx(CheckCircleFilled, { color: "$statusSuccess", size: "$icon.20" }), showTooltip: showTooltip, trigger: _jsx(TouchableArea, { hoverable: true, onPress: onPressCopyAddress, children: _jsx(CopyAlt, { size: "$icon.16", color: "$neutral1" }) }) }) })] }) }));
}
//# sourceMappingURL=TokenAddressView.js.map