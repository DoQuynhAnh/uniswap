import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Accordion, Flex } from 'ui/src';
import { ExpandableRows } from 'uniswap/src/features/transactions/swap/form/SwapFormScreen/ExpandableRows';
import { SwapFormScreenFooter } from 'uniswap/src/features/transactions/swap/form/SwapFormScreen/SwapFormScreenFooter';
import { SwapFormWarningModals } from 'uniswap/src/features/transactions/swap/form/SwapFormScreen/SwapFormWarningModals/SwapFormWarningModals';
import { SwapFormButton } from 'uniswap/src/features/transactions/swap/form/body/SwapFormButton/SwapFormButton';
import { useSwapFormScreenState } from 'uniswap/src/features/transactions/swap/form/context/SwapFormScreenContext';
import { SwapFormWarningStateProvider } from 'uniswap/src/features/transactions/swap/form/context/SwapFormWarningStateContextProvider';
import { usePriceUXEnabled } from 'uniswap/src/features/transactions/swap/hooks/usePriceUXEnabled';
export function SwapFormScreenDetails() {
    const isPriceUXEnabled = usePriceUXEnabled();
    const { tokenColor, isBridge, showFooter } = useSwapFormScreenState();
    return (_jsx(Accordion, { collapsible: true, type: "single", overflow: "hidden", children: _jsxs(Accordion.Item, { value: "a1", className: "gas-container", children: [_jsx("style", { children: `
              .gas-container > div > div {
                width: 100%;
              }
            ` }), _jsxs(Flex, { children: [_jsx(Flex, { children: _jsxs(SwapFormWarningStateProvider, { children: [_jsx(SwapFormButton, { tokenColor: tokenColor }), _jsx(SwapFormWarningModals, {})] }) }), _jsx(SwapFormScreenFooter, {})] }), showFooter && !isPriceUXEnabled ? _jsx(ExpandableRows, { isBridge: isBridge }) : null] }) }));
}
//# sourceMappingURL=SwapFormScreenDetails.web.js.map