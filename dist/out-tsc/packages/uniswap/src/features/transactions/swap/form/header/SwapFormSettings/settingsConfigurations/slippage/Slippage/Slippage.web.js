import { jsx as _jsx } from "react/jsx-runtime";
import { TransactionSettingId, } from 'uniswap/src/features/transactions/components/settings/types';
import { SlippageControl } from 'uniswap/src/features/transactions/swap/form/header/SwapFormSettings/settingsConfigurations/slippage/SlippageControl/SlippageControl';
export const Slippage = {
    renderTitle: (t) => t('swap.slippage.settings.title'),
    renderTooltip: (t) => t('swap.settings.slippage.description'),
    settingId: TransactionSettingId.SLIPPAGE,
    Control() {
        return _jsx(SlippageControl, { saveOnBlur: false });
    },
};
//# sourceMappingURL=Slippage.web.js.map