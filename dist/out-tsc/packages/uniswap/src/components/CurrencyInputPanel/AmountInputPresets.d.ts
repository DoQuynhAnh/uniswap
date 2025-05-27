/// <reference types="react" />
import { Currency, CurrencyAmount } from '@uniswap/sdk-core';
import { FlexProps } from 'ui/src';
import { ButtonProps } from 'ui/src/components/buttons/Button/types';
import { PresetPercentage } from 'uniswap/src/components/CurrencyInputPanel/PresetAmountButton';
import { TransactionType } from 'uniswap/src/features/transactions/types/transactionDetails';
interface AmountInputPresetsProps {
    hoverLtr?: boolean;
    currencyAmount: CurrencyAmount<Currency> | null | undefined;
    currencyBalance: CurrencyAmount<Currency>;
    transactionType?: TransactionType;
    buttonProps?: ButtonProps;
    onSetPresetValue: (amount: string, percentage: PresetPercentage) => void;
}
export declare function AmountInputPresets({ hoverLtr, currencyAmount, currencyBalance, transactionType, buttonProps, onSetPresetValue, ...rest }: AmountInputPresetsProps & FlexProps): JSX.Element;
export {};
//# sourceMappingURL=AmountInputPresets.d.ts.map