import { ReactNode } from 'react';
import { TransactionSettingKey, TransactionSettingsState } from 'uniswap/src/features/transactions/components/settings/slice';
export type TransactionSettingsContextState = {
    updateTransactionSettings: (newState: Partial<TransactionSettingsState>) => void;
} & TransactionSettingsState;
export declare const TransactionSettingsContext: import("react").Context<TransactionSettingsContextState | undefined>;
export declare function TransactionSettingsContextProvider({ settingKey, children, autoSlippageTolerance, }: {
    children: ReactNode;
    settingKey: TransactionSettingKey;
    autoSlippageTolerance?: TransactionSettingsState['autoSlippageTolerance'];
}): JSX.Element;
export declare const useTransactionSettingsContext: () => TransactionSettingsContextState;
//# sourceMappingURL=TransactionSettingsContext.d.ts.map