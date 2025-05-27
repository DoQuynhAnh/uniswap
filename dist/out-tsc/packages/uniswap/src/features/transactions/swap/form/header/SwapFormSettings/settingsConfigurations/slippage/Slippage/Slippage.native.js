import { jsx as _jsx } from "react/jsx-runtime";
import { SlippageControl } from 'uniswap/src/features/transactions/swap/form/header/SwapFormSettings/settingsConfigurations/slippage/SlippageControl/SlippageControl';
import { SlippageScreenNative } from 'uniswap/src/features/transactions/swap/form/header/SwapFormSettings/settingsConfigurations/slippage/SlippageScreenNative';
export const Slippage = {
    renderTitle: (t) => t('swap.slippage.settings.title'),
    Control() {
        return _jsx(SlippageControl, { saveOnBlur: false });
    },
    Screen() {
        return _jsx(SlippageScreenNative, {});
    },
};
//# sourceMappingURL=Slippage.native.js.map