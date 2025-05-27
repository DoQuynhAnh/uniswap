import { FiatCurrency } from 'uniswap/src/features/fiatCurrency/constants';
import { Language } from 'uniswap/src/features/language/constants';
export interface UserSettingsState {
    currentLanguage: Language;
    currentCurrency: FiatCurrency;
    hideSmallBalances: boolean;
    hideSpamTokens: boolean;
    isTestnetModeEnabled?: boolean;
}
export declare const initialUserSettingsState: UserSettingsState;
export declare const setHideSmallBalances: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "userSettings/setHideSmallBalances">, setHideSpamTokens: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "userSettings/setHideSpamTokens">, setCurrentLanguage: import("@reduxjs/toolkit").ActionCreatorWithPayload<Language, "userSettings/setCurrentLanguage">, setCurrentFiatCurrency: import("@reduxjs/toolkit").ActionCreatorWithPayload<FiatCurrency, "userSettings/setCurrentFiatCurrency">, setIsTestnetModeEnabled: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "userSettings/setIsTestnetModeEnabled">;
export declare const userSettingsReducer: import("redux").Reducer<UserSettingsState>;
//# sourceMappingURL=slice.d.ts.map