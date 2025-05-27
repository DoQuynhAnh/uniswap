import { jsx as _jsx } from "react/jsx-runtime";
import { Accordion } from 'ui/src';
import { SwapFormScreenFooter } from 'uniswap/src/features/transactions/swap/form/SwapFormScreen/SwapFormScreenFooter';
export function SwapFormScreenDetails() {
    return (_jsx(Accordion, { collapsible: true, type: "single", overflow: "hidden", children: _jsx(Accordion.Item, { value: "a1", children: _jsx(SwapFormScreenFooter, {}) }) }));
}
//# sourceMappingURL=SwapFormScreenDetails.native.js.map