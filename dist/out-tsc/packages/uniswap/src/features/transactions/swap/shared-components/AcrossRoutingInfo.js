import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flex, Text } from 'ui/src';
import AcrossLogoFull from 'ui/src/assets/logos/svg/across-logo-full.svg';
import { OrderRouting } from 'ui/src/components/icons/OrderRouting';
import { AcrossLogo } from 'ui/src/components/logos/AcrossLogo';
import { zIndexes } from 'ui/src/theme';
import { WarningInfo } from 'uniswap/src/components/modals/WarningModal/WarningInfo';
import { WarningSeverity } from 'uniswap/src/components/modals/WarningModal/types';
import { LearnMoreLink } from 'uniswap/src/components/text/LearnMoreLink';
import { uniswapUrls } from 'uniswap/src/constants/urls';
import { ModalName } from 'uniswap/src/features/telemetry/constants';
import { isMobileApp } from 'utilities/src/platform';
export function AcrossRoutingInfo() {
    const { t } = useTranslation();
    const commonModalProps = useMemo(() => ({
        caption: t('swap.details.orderRoutingInfo'),
        rejectText: t('common.button.close'),
        modalName: ModalName.AcrossRoutingInfo,
        severity: WarningSeverity.None,
        title: t('swap.details.orderRouting'),
        icon: _jsx(OrderRouting, { color: "$neutral2", size: "$icon.24" }),
        zIndex: zIndexes.popover,
    }), [t]);
    const commonTooltipProps = useMemo(() => ({
        text: (_jsx(Text, { variant: "body4", color: "$neutral2", children: t('swap.details.orderRoutingInfo') })),
        placement: 'top',
    }), [t]);
    const commonInfoButton = useMemo(() => isMobileApp ? (_jsxs(Flex, { centered: true, gap: "$spacing16", children: [_jsx(LearnMoreLink, { textVariant: "buttonLabel3", url: uniswapUrls.helpArticleUrls.acrossRoutingInfo }), _jsxs(Flex, { row: true, alignItems: "center", gap: "$spacing6", justifyContent: "center", children: [_jsx(Text, { color: "$neutral3", variant: "buttonLabel4", children: t('swap.details.poweredBy') }), _jsx(Flex, { children: _jsx(AcrossLogoFull, { color: "$neutral3" }) })] })] })) : undefined, [t]);
    return (_jsxs(Flex, { row: true, alignItems: "center", justifyContent: "space-between", width: "100%", children: [_jsx(WarningInfo, { infoButton: commonInfoButton, modalProps: commonModalProps, tooltipProps: commonTooltipProps, triggerPlacement: "end", analyticsTitle: "Across order routing", children: _jsx(Text, { color: "$neutral2", variant: "body3", children: t('swap.details.orderRouting') }) }), _jsx(WarningInfo, { infoButton: commonInfoButton, modalProps: commonModalProps, tooltipProps: commonTooltipProps, trigger: _jsxs(Flex, { row: true, shrink: true, justifyContent: "flex-end", gap: "$spacing6", alignItems: "center", children: [_jsx(AcrossLogo, { size: "$icon.16" }), _jsx(Text, { color: "$neutral1", variant: "body3", children: "Across API" })] }), analyticsTitle: "Across order routing (API)" })] }));
}
//# sourceMappingURL=AcrossRoutingInfo.js.map