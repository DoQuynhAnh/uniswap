import { jsx as _jsx } from "react/jsx-runtime";
// TODO: Move this to `packages/uniswap/src/components/CurrencyInputPanel/CurrencyInputPanel.tsx`
import { memo } from 'react';
import { Flex, ScrollView } from 'ui/src';
import { extraMarginForHoverAnimation } from 'uniswap/src/features/transactions/swap/form/body/DefaultTokenOptions/constants';
import { TokenOptions } from 'uniswap/src/features/transactions/swap/form/body/DefaultTokenOptions/TokenOptions/TokenOptions';
import { isHoverable, isInterfaceDesktop } from 'utilities/src/platform';
function _DefaultTokenOptions({ currencyField }) {
    return (_jsx(ScrollView, { horizontal: true, showsVerticalScrollIndicator: false, children: _jsx(Flex, { row: true, m: extraMarginForHoverAnimation, gap: isInterfaceDesktop ? '$gap4' : '$gap8', flex: 1, ...(isHoverable
                ? {
                    opacity: 0,
                    transform: [{ translateY: -4 }],
                    '$group-hover': { opacity: 1, transform: [{ translateY: 0 }] },
                }
                : {}), animation: "100ms", children: _jsx(TokenOptions, { currencyField: currencyField }) }) }));
}
export const DefaultTokenOptions = memo(_DefaultTokenOptions);
//# sourceMappingURL=DefaultTokenOptions.js.map