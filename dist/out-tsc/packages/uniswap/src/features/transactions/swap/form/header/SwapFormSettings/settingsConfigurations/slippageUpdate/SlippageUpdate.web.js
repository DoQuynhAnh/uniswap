import { jsx as _jsx } from "react/jsx-runtime";
import { Slippage } from 'uniswap/src/features/transactions/swap/form/header/SwapFormSettings/settingsConfigurations/slippage/Slippage/Slippage';
import { SlippageControl } from 'uniswap/src/features/transactions/swap/form/header/SwapFormSettings/settingsConfigurations/slippage/SlippageControl/SlippageControl';
export const SlippageUpdate = {
    ...Slippage,
    hideTitle: true,
    Control() {
        return _jsx(SlippageControl, { saveOnBlur: true });
    },
};
//# sourceMappingURL=SlippageUpdate.web.js.map