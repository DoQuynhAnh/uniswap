import { jsx as _jsx } from "react/jsx-runtime";
import { TransactionSettingId, } from 'uniswap/src/features/transactions/components/settings/types';
import { DeadlineControl } from 'uniswap/src/features/transactions/swap/form/header/SwapFormSettings/settingsConfigurations/deadline/DeadlineControl';
/**
 * Note: This setting has its title overridden in the Web Swap flow
 * See {@link file:apps/web/src/pages/Swap/settings/DeadlineOverride.tsx}
 * If further overrides are needed, consider moving to a factory function
 */
export const Deadline = {
    settingId: TransactionSettingId.DEADLINE,
    renderTitle: (t) => t('swap.deadline.settings.title.short'),
    renderTooltip: (t) => t('swap.settings.deadline.tooltip'),
    Control() {
        return _jsx(DeadlineControl, {});
    },
};
//# sourceMappingURL=Deadline.web.js.map