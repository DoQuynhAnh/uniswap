import { jsx as _jsx } from "react/jsx-runtime";
import { TradeRoutingPreferenceControl } from 'uniswap/src/features/transactions/swap/form/header/SwapFormSettings/settingsConfigurations/TradeRoutingPreference/TradeRoutingPreferenceControl';
import { TradeRoutingPreferenceScreen } from 'uniswap/src/features/transactions/swap/form/header/SwapFormSettings/settingsConfigurations/TradeRoutingPreference/TradeRoutingPreferenceScreen';
export const TradeRoutingPreference = {
    renderTitle: (t) => t('swap.settings.routingPreference.title'),
    Control() {
        return _jsx(TradeRoutingPreferenceControl, {});
    },
    Screen() {
        return _jsx(TradeRoutingPreferenceScreen, {});
    },
};
//# sourceMappingURL=TradeRoutingPreference.js.map