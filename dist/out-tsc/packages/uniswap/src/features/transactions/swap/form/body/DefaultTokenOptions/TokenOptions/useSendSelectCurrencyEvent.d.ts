import { type CurrencyInfo } from 'uniswap/src/features/dataApi/types';
import { type CurrencyField } from 'uniswap/src/types/currency';
type SelectCurrencyEventProperties = {
    position: number;
    suggestion_count: number;
    currencyInfo: CurrencyInfo;
};
export declare function useSendSelectCurrencyEvent({ currencyField, }: {
    currencyField: CurrencyField;
}): (_: SelectCurrencyEventProperties) => void;
export {};
//# sourceMappingURL=useSendSelectCurrencyEvent.d.ts.map