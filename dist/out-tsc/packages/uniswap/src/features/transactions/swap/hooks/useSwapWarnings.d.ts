import { TFunction } from 'i18next';
import { ParsedWarnings, Warning } from 'uniswap/src/components/modals/WarningModal/types';
import { TradeableAsset } from 'uniswap/src/entities/assets';
import { CurrencyInfo } from 'uniswap/src/features/dataApi/types';
import { LocalizationContextState } from 'uniswap/src/features/language/LocalizationContext';
import { DerivedSwapInfo } from 'uniswap/src/features/transactions/swap/types/derivedSwapInfo';
export declare function getSwapWarnings(t: TFunction, formatPercent: LocalizationContextState['formatPercent'], derivedSwapInfo: DerivedSwapInfo, offline: boolean): Warning[];
export declare function useNeedsBridgingWarning(derivedSwapInfo: DerivedSwapInfo): boolean;
export declare function useNeedsLowNativeBalanceWarning({ derivedSwapInfo, isMax, }: {
    derivedSwapInfo: DerivedSwapInfo;
    isMax: boolean;
}): boolean;
export declare function usePrefilledNeedsTokenProtectionWarning(derivedSwapInfo: DerivedSwapInfo, prefilledCurrencies?: TradeableAsset[]): {
    needsTokenProtectionWarning: boolean;
    currenciesWithProtectionWarnings: CurrencyInfo[];
};
export declare function useParsedSwapWarnings(): ParsedWarnings;
//# sourceMappingURL=useSwapWarnings.d.ts.map