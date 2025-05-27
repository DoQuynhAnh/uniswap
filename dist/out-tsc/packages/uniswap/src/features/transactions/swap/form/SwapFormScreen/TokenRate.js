import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { Text, TouchableArea } from 'ui/src';
import { useLocalizationContext } from 'uniswap/src/features/language/LocalizationContext';
import { useSwapFormContext } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
import { getRateToDisplay } from 'uniswap/src/features/transactions/swap/utils/trade';
import { isHoverable } from 'utilities/src/platform';
export function TokenRate({ initialInverse = false }) {
    const [showInverseRate, setShowInverseRate] = useState(initialInverse);
    const formatter = useLocalizationContext();
    const { derivedSwapInfo: { trade: { trade }, }, } = useSwapFormContext();
    if (!trade) {
        return null;
    }
    return (_jsx(TouchableArea, { ...(isHoverable && {
            '$group-hover': {
                opacity: 1,
            },
            opacity: 0,
            animation: 'simple',
        }), style: {
            // prevents highlight on double click (useless since the text changes on click anyways)
            userSelect: 'none',
        }, onPress: () => setShowInverseRate(!showInverseRate), children: _jsx(Text, { adjustsFontSizeToFit: true, ...(isHoverable && {
                hoverStyle: {
                    color: '$neutral1',
                },
                animation: 'simple',
            }), color: "$neutral2", numberOfLines: 1, variant: "body3", children: getRateToDisplay(formatter, trade, showInverseRate) }) }));
}
//# sourceMappingURL=TokenRate.js.map