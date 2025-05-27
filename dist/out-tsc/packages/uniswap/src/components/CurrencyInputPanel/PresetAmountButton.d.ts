/// <reference types="react" />
import { Currency, CurrencyAmount } from '@uniswap/sdk-core';
import { ButtonProps } from 'ui/src/components/buttons/Button/types';
import { ElementNameType } from 'uniswap/src/features/telemetry/constants';
import { TransactionType } from 'uniswap/src/features/transactions/types/transactionDetails';
import { CurrencyField } from 'uniswap/src/types/currency';
export declare const PRESET_MAX = 100;
export type PresetPercentage = 25 | 50 | 75 | 100;
interface PresetAmountButtonProps {
    currencyAmount: CurrencyAmount<Currency> | null | undefined;
    currencyBalance: CurrencyAmount<Currency> | null | undefined;
    onSetPresetValue: (amount: string, percentage: PresetPercentage) => void;
    currencyField: CurrencyField;
    elementName?: ElementNameType;
    percentage?: PresetPercentage;
    transactionType?: TransactionType;
    buttonProps?: ButtonProps;
}
export declare function PresetAmountButton({ currencyAmount, currencyBalance, percentage, elementName, onSetPresetValue, currencyField, transactionType, buttonProps, }: PresetAmountButtonProps): JSX.Element;
export {};
//# sourceMappingURL=PresetAmountButton.d.ts.map