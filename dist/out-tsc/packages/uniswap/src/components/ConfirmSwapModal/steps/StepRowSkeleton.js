import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from 'react';
import { Anchor, Flex, SpinningLoader, Text, useExtractedTokenColor, useSporeColors } from 'ui/src';
import { Check } from 'ui/src/components/icons/Check';
import { PulseRipple } from 'ui/src/loading/PulseRipple';
import { fonts, iconSizes, spacing } from 'ui/src/theme';
import { StepStatus } from 'uniswap/src/components/ConfirmSwapModal/types';
import { CurrencyLogo } from 'uniswap/src/components/CurrencyLogo/CurrencyLogo';
import { SplitLogo } from 'uniswap/src/components/CurrencyLogo/SplitLogo';
import { useCurrencyInfo } from 'uniswap/src/features/tokens/useCurrencyInfo';
import { currencyId } from 'uniswap/src/utils/currencyId';
export function StepRowSkeleton(props) {
    var _a;
    const { currency, icon, secondsRemaining, title, learnMore, status, rippleColor, pair } = props;
    const colors = useSporeColors();
    const currencyInfo = useCurrencyInfo(currency ? currencyId(currency) : undefined);
    // For V2 liquidity positions the user is generated a unique token which is
    // the actual token they are approving, but since this token doesn't have
    // a logo we use the SplitLogo component to display the pair logos instead.
    const currency0Id = (pair === null || pair === void 0 ? void 0 : pair[0]) ? currencyId(pair[0]) : undefined;
    const currency1Id = (pair === null || pair === void 0 ? void 0 : pair[1]) ? currencyId(pair[1]) : undefined;
    const currency0Info = useCurrencyInfo(currency0Id);
    const currency1Info = useCurrencyInfo(currency1Id);
    const { tokenColor } = useExtractedTokenColor(currency0Info ? currency0Info.logoUrl : currencyInfo === null || currencyInfo === void 0 ? void 0 : currencyInfo.logoUrl, currency0Info ? currency0Info.currency.symbol : currency === null || currency === void 0 ? void 0 : currency.symbol, 
    /*background=*/ colors.surface1.val, 
    /*default=*/ colors.neutral3.val);
    const titleColor = status === StepStatus.Active || status === StepStatus.InProgress ? '$neutral1' : '$neutral2';
    return (_jsxs(Flex, { row: true, alignItems: "center", justifyContent: "space-between", children: [_jsxs(Flex, { row: true, alignItems: "center", gap: "$gap12", height: "$spacing40", justifyContent: "space-between", py: 8, children: [_jsx(StepIconWrapper, { rippleColor: (_a = rippleColor !== null && rippleColor !== void 0 ? rippleColor : tokenColor) !== null && _a !== void 0 ? _a : undefined, stepStatus: status, children: currency0Info && currency1Info ? (_jsx(SplitLogo, { size: iconSizes.icon24, chainId: currency0Info.currency.chainId, inputCurrencyInfo: currency0Info, outputCurrencyInfo: currency1Info })) : (icon !== null && icon !== void 0 ? icon : _jsx(CurrencyLogo, { currencyInfo: currencyInfo, size: iconSizes.icon24 })) }), _jsxs(Flex, { children: [_jsx(Text, { color: titleColor, variant: "body3", children: title }), status === StepStatus.Active && learnMore && (_jsx(Anchor, { color: "$accent1", fontSize: fonts.body4.fontSize, href: learnMore.url, lineHeight: spacing.spacing16, target: "_blank", textDecorationLine: "none", children: learnMore.text }))] })] }), !!secondsRemaining && _jsx(Timer, { secondsRemaining: secondsRemaining }), status === StepStatus.Complete && _jsx(Check, { color: "$statusSuccess", size: "$icon.16" })] }));
}
function StepIconWrapper({ children, rippleColor, stepStatus, }) {
    if (stepStatus === StepStatus.InProgress) {
        return (_jsx(Flex, { mr: 3, children: _jsx(SpinningLoader, { color: rippleColor, size: 21 }) }));
    }
    return (_jsxs(Flex, { children: [stepStatus === StepStatus.Active && _jsx(PulseRipple, { rippleColor: rippleColor }), _jsx(Flex, { "data-testid": "step-icon", filter: stepStatus === StepStatus.Active ? 'grayscale(0)' : 'grayscale(1)', height: "$spacing24", opacity: stepStatus === StepStatus.Active ? 1 : 0.5, width: "$spacing24", children: children })] }));
}
function Timer({ secondsRemaining }) {
    const timerText = useMemo(() => {
        const minutes = Math.floor(secondsRemaining / 60);
        const seconds = secondsRemaining % 60;
        const minutesText = minutes < 10 ? `0${minutes}` : minutes;
        const secondsText = seconds < 10 ? `0${seconds}` : seconds;
        return `${minutesText}:${secondsText}`;
    }, [secondsRemaining]);
    return (_jsx(Text, { "data-testid": "step-timer", fontSize: 14, fontWeight: "500", pr: 8, children: timerText }));
}
//# sourceMappingURL=StepRowSkeleton.js.map