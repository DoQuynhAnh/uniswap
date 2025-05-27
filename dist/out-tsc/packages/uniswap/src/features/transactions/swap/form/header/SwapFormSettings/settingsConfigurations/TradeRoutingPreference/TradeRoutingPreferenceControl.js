import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'ui/src';
import { FeatureFlags } from 'uniswap/src/features/gating/flags';
import { useFeatureFlag } from 'uniswap/src/features/gating/hooks';
import { useTransactionSettingsContext } from 'uniswap/src/features/transactions/components/settings/contexts/TransactionSettingsContext';
import { isDefaultTradeRouteOptions } from 'uniswap/src/features/transactions/swap/form/header/SwapFormSettings/settingsConfigurations/TradeRoutingPreference/isDefaultTradeRouteOptions';
export function TradeRoutingPreferenceControl() {
    const { t } = useTranslation();
    const { selectedProtocols, isV4HookPoolsEnabled } = useTransactionSettingsContext();
    const isV4HooksToggleFFEnabled = useFeatureFlag(FeatureFlags.SwapSettingsV4HooksToggle);
    const getTradeRouteOptionTitle = useMemo(() => {
        if (isDefaultTradeRouteOptions(selectedProtocols, isV4HookPoolsEnabled, isV4HooksToggleFFEnabled)) {
            return t('common.default');
        }
        return t('common.custom');
    }, [selectedProtocols, isV4HookPoolsEnabled, isV4HooksToggleFFEnabled, t]);
    return (_jsx(Text, { color: "$neutral2", flexWrap: "wrap", variant: "subheading2", "$group-hover": {
            color: '$neutral2Hovered',
        }, children: getTradeRouteOptionTitle }));
}
//# sourceMappingURL=TradeRoutingPreferenceControl.js.map