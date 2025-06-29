/// <reference types="react" />
import { AppTFunction } from 'ui/src/i18n/types';
import { FeatureFlags } from 'uniswap/src/features/gating/flags';
export declare enum TransactionSettingId {
    SLIPPAGE = "slippage",
    DEADLINE = "deadline"
}
export type TransactionSettingConfig = {
    renderTitle: (t: AppTFunction) => string;
    hideTitle?: boolean;
    Description?: React.FunctionComponent;
    /** The UI that is displayed on the right side of a settings row, e.g. a Switch. If `Screen` is also defined, pressing `Control` will navigate to the screen. */
    Control: React.FunctionComponent;
    /** The UI that will render if `Control` is pressed. */
    Screen?: React.FunctionComponent;
    /** If defined, an info icon will appear next to `Title`, that will open `InfoModal` on press. */
    InfoModal?: React.FunctionComponent<{
        isOpen: boolean;
        onClose: () => void;
    }>;
    /** If defined and the `featureFlag` is disabled, this setting will not be displayed. */
    featureFlag?: FeatureFlags;
    settingId?: TransactionSettingId;
    renderTooltip?: (t: AppTFunction) => string;
};
//# sourceMappingURL=types.d.ts.map