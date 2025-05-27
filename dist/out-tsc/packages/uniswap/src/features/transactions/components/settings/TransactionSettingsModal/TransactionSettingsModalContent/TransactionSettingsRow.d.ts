/// <reference types="react" />
import type { TransactionSettingConfig } from 'uniswap/src/features/transactions/components/settings/types';
interface TransactionSettingRowProps {
    setting: TransactionSettingConfig;
    setSelectedSetting: (setting: TransactionSettingConfig) => void;
    warning?: JSX.Element | undefined;
}
export declare function TransactionSettingRow({ setting, setSelectedSetting, warning, }: TransactionSettingRowProps): JSX.Element | null;
export {};
//# sourceMappingURL=TransactionSettingsRow.d.ts.map