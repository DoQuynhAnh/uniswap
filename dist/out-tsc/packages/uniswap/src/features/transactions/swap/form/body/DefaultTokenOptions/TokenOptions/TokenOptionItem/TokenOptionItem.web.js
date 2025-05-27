import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Text, Tooltip } from 'ui/src';
import { TokenIcon } from 'uniswap/src/features/transactions/swap/form/body/DefaultTokenOptions/TokenIcon';
const delay = { close: 0, open: 0 };
export const TokenOptionItem = ({ currencyInfo, index, numOptions, currencyField, }) => {
    const { currency: { symbol }, } = currencyInfo;
    return (_jsxs(Tooltip, { delay: delay, restMs: 0, placement: "top", children: [_jsx(Tooltip.Trigger, { children: _jsx(TokenIcon, { currencyInfo: currencyInfo, index: index, numOptions: numOptions, currencyField: currencyField }, index) }), _jsxs(Tooltip.Content, { children: [_jsx(Text, { variant: "body4", children: symbol }), _jsx(Tooltip.Arrow, {})] })] }));
};
//# sourceMappingURL=TokenOptionItem.web.js.map