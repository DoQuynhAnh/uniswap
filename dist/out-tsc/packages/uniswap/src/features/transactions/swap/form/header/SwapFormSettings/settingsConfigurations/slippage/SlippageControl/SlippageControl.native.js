import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Flex, Text } from 'ui/src';
import { useLocalizationContext } from 'uniswap/src/features/language/LocalizationContext';
import { useSwapFormContext } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
import { useSlippageSettings } from 'uniswap/src/features/transactions/swap/form/header/SwapFormSettings/settingsConfigurations/slippage/useSlippageSettings';
import { BridgeTrade } from 'uniswap/src/features/transactions/swap/types/trade';
export function SlippageControl(_props) {
    const { t } = useTranslation();
    const { formatPercent } = useLocalizationContext();
    const { derivedSwapInfo } = useSwapFormContext();
    const isBridgeTrade = derivedSwapInfo.trade.trade instanceof BridgeTrade;
    const { currentSlippageTolerance, autoSlippageEnabled } = useSlippageSettings({ isBridgeTrade });
    return (_jsxs(Flex, { row: true, gap: "$spacing8", children: [autoSlippageEnabled && !isBridgeTrade ? (_jsx(Flex, { centered: true, backgroundColor: "$accent2", borderRadius: "$roundedFull", px: "$spacing8", children: _jsx(Text, { color: "$accent1", variant: "buttonLabel3", children: t('swap.settings.slippage.control.auto') }) })) : null, _jsx(Text, { color: "$neutral2", variant: "subheading2", children: formatPercent(currentSlippageTolerance) })] }));
}
//# sourceMappingURL=SlippageControl.native.js.map