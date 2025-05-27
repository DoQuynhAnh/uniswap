import { FrontendSupportedProtocol } from 'uniswap/src/features/transactions/swap/utils/protocols';
export declare enum TransactionSettingKey {
    Swap = "swap",
    LP = "lp"
}
export interface TransactionSettingsState {
    autoSlippageTolerance?: number;
    customSlippageTolerance?: number;
    customDeadline?: number;
    selectedProtocols: FrontendSupportedProtocol[];
    slippageWarningModalSeen: boolean;
    isV4HookPoolsEnabled: boolean;
}
export declare const initialTransactionSettingsState: TransactionSettingsState;
export declare const setTransactionSettings: import("@reduxjs/toolkit").ActionCreatorWithPayload<Partial<TransactionSettingsState> & {
    settingKey: TransactionSettingKey;
}, "transactionSettings/setTransactionSettings">;
export declare const transactionSettingsReducer: import("redux").Reducer<{
    swap: TransactionSettingsState;
    lp: TransactionSettingsState;
}>;
//# sourceMappingURL=slice.d.ts.map