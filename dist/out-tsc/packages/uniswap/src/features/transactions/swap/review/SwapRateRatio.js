import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Flex, Text, TouchableArea } from 'ui/src';
import { useLocalizationContext } from 'uniswap/src/features/language/LocalizationContext';
import { useUSDCValue } from 'uniswap/src/features/transactions/hooks/useUSDCPrice';
import { useSwapFormContext } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
import { getTradeAmounts } from 'uniswap/src/features/transactions/swap/hooks/getTradeAmounts';
import { usePriceUXEnabled } from 'uniswap/src/features/transactions/swap/hooks/usePriceUXEnabled';
import { useAcceptedTrade } from 'uniswap/src/features/transactions/swap/review/hooks/useAcceptedTrade';
import { calculateRateLine, getRateToDisplay } from 'uniswap/src/features/transactions/swap/utils/trade';
import { isWrapAction } from 'uniswap/src/features/transactions/swap/utils/wrap';
export function SwapRateRatio({ trade, styling = 'primary', initialInverse = false, justifyContent = 'flex-start', }) {
    const priceUXEnabled = usePriceUXEnabled();
    const formatter = useLocalizationContext();
    const [showInverseRate, setShowInverseRate] = useState(initialInverse);
    const { derivedSwapInfo, isSubmitting } = useSwapFormContext();
    const { wrapType } = derivedSwapInfo;
    const { acceptedDerivedSwapInfo: swapAcceptedDerivedSwapInfo } = useAcceptedTrade({
        derivedSwapInfo,
        isSubmitting,
    });
    const acceptedDerivedSwapInfo = isWrapAction(wrapType) ? derivedSwapInfo : swapAcceptedDerivedSwapInfo;
    const { outputCurrencyAmount } = getTradeAmounts(acceptedDerivedSwapInfo, priceUXEnabled);
    const usdAmountOut = useUSDCValue(outputCurrencyAmount);
    const latestFiatPriceFormatted = calculateRateLine(usdAmountOut, outputCurrencyAmount, trade, showInverseRate, formatter);
    const latestRate = trade ? getRateToDisplay(formatter, trade, showInverseRate) : null;
    const rateAmountUSD = latestFiatPriceFormatted;
    const isPrimary = styling === 'primary';
    if (!trade) {
        return null;
    }
    return (_jsx(TouchableArea, { group: true, flexDirection: "row", justifyContent: justifyContent, flexGrow: 1, onPress: () => setShowInverseRate(!showInverseRate), children: _jsxs(Flex, { row: true, width: "max-content", children: [_jsx(Text, { adjustsFontSizeToFit: true, "$group-hover": { color: isPrimary ? '$neutral1Hovered' : '$neutral2Hovered' }, color: isPrimary ? '$neutral1' : '$neutral2', numberOfLines: 1, variant: "body3", children: latestRate }), _jsx(Text, { "$group-hover": { color: isPrimary ? '$neutral1Hovered' : '$neutral3Hovered' }, color: isPrimary ? '$neutral2' : '$neutral3', variant: "body3", children: rateAmountUSD && ` (${rateAmountUSD})` })] }) }));
}
//# sourceMappingURL=SwapRateRatio.js.map