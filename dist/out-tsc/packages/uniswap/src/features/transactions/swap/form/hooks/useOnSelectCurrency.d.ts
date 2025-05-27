import { Currency } from '@uniswap/sdk-core';
import { CurrencyField } from 'uniswap/src/types/currency';
export declare function useOnSelectCurrency({ onSelect, }: {
    onSelect?: () => void;
}): ({ currency, field, forceIsBridgePair, isPreselectedAsset, }: {
    currency: Currency;
    field: CurrencyField;
    forceIsBridgePair: boolean;
    isPreselectedAsset: boolean;
}) => void;
//# sourceMappingURL=useOnSelectCurrency.d.ts.map