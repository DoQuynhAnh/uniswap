import { Currency, CurrencyAmount } from '@uniswap/sdk-core';
import { RefObject } from 'react';
import type { TextInput, TextInputProps } from 'react-native';
import { FlexProps } from 'ui/src';
import { PresetPercentage } from 'uniswap/src/components/CurrencyInputPanel/PresetAmountButton';
import { CurrencyInfo } from 'uniswap/src/features/dataApi/types';
import { TransactionType } from 'uniswap/src/features/transactions/types/transactionDetails';
import { CurrencyField } from 'uniswap/src/types/currency';
type CurrencyInputPanelProps = {
    autoFocus?: boolean;
    currencyAmount: Maybe<CurrencyAmount<Currency>>;
    currencyBalance: Maybe<CurrencyAmount<Currency>>;
    currencyField: CurrencyField;
    currencyInfo: Maybe<CurrencyInfo>;
    isLoading?: boolean;
    isIndicativeLoading?: boolean;
    focus?: boolean;
    isFiatMode?: boolean;
    /** Only show a single max button rather than all percentage preset options. */
    showMaxButtonOnly?: boolean;
    onPressIn?: () => void;
    onSelectionChange?: (start: number, end: number) => void;
    onSetExactAmount: (amount: string) => void;
    onSetPresetValue?: (amount: string, percentage: PresetPercentage) => void;
    onShowTokenSelector?: () => void;
    onToggleIsFiatMode: (currencyField: CurrencyField) => void;
    selection?: TextInputProps['selection'];
    showSoftInputOnFocus?: boolean;
    transactionType?: TransactionType;
    usdValue: Maybe<CurrencyAmount<Currency>>;
    value?: string;
    valueIsIndicative?: boolean;
    headerLabel?: string;
    disabled?: boolean;
    onPressDisabled?: () => void;
    resetSelection?: (args: {
        start: number;
        end?: number;
        currencyField?: CurrencyField;
    }) => void;
    tokenColor?: string;
    priceDifferencePercentage?: number;
} & FlexProps;
export type CurrencyInputPanelRef = {
    textInputRef: RefObject<TextInput>;
    triggerShakeAnimation: () => void;
};
export declare const CurrencyInputPanel: import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<{
    autoFocus?: boolean | undefined;
    currencyAmount: Maybe<CurrencyAmount<Currency>>;
    currencyBalance: Maybe<CurrencyAmount<Currency>>;
    currencyField: CurrencyField;
    currencyInfo: Maybe<CurrencyInfo>;
    isLoading?: boolean | undefined;
    isIndicativeLoading?: boolean | undefined;
    focus?: boolean | undefined;
    isFiatMode?: boolean | undefined;
    /** Only show a single max button rather than all percentage preset options. */
    showMaxButtonOnly?: boolean | undefined;
    onPressIn?: (() => void) | undefined;
    onSelectionChange?: ((start: number, end: number) => void) | undefined;
    onSetExactAmount: (amount: string) => void;
    onSetPresetValue?: ((amount: string, percentage: PresetPercentage) => void) | undefined;
    onShowTokenSelector?: (() => void) | undefined;
    onToggleIsFiatMode: (currencyField: CurrencyField) => void;
    selection?: TextInputProps['selection'];
    showSoftInputOnFocus?: boolean | undefined;
    transactionType?: TransactionType | undefined;
    usdValue: Maybe<CurrencyAmount<Currency>>;
    value?: string | undefined;
    valueIsIndicative?: boolean | undefined;
    headerLabel?: string | undefined;
    disabled?: boolean | undefined;
    onPressDisabled?: (() => void) | undefined;
    resetSelection?: ((args: {
        start: number;
        end?: number;
        currencyField?: CurrencyField;
    }) => void) | undefined;
    tokenColor?: string | undefined;
    priceDifferencePercentage?: number | undefined;
} & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "fill" | "row" | keyof import("@tamagui/web").StackStyleBase | "animateEnter" | "animateExit" | "animateEnterExit" | "shrink" | "grow" | "centered"> & import("@tamagui/web").WithThemeValues<Omit<import("@tamagui/web").StackStyleBase, import("tamagui").Longhands>> & {
    inset?: import("react-native").Insets | (number | import("tamagui").SizeTokens) | undefined;
    animateEnter?: "fadeIn" | "fadeInDown" | undefined;
    animateExit?: "fadeOut" | "fadeOutUp" | "fadeOutDown" | undefined;
    animateEnterExit?: "fadeInDownOutDown" | "fadeInDownOutUp" | "fadeInOut" | undefined;
    row?: boolean | undefined;
    shrink?: boolean | undefined;
    grow?: boolean | undefined;
    fill?: boolean | undefined;
    centered?: boolean | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<Omit<import("@tamagui/web").StackStyleBase, import("tamagui").Longhands>> & {
    inset?: import("react-native").Insets | (number | import("tamagui").SizeTokens) | undefined;
    animateEnter?: "fadeIn" | "fadeInDown" | undefined;
    animateExit?: "fadeOut" | "fadeOutUp" | "fadeOutDown" | undefined;
    animateEnterExit?: "fadeInDownOutDown" | "fadeInDownOutUp" | "fadeInOut" | undefined;
    row?: boolean | undefined;
    shrink?: boolean | undefined;
    grow?: boolean | undefined;
    fill?: boolean | undefined;
    centered?: boolean | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {
    inset?: import("react-native").Insets | (number | import("tamagui").SizeTokens) | undefined;
    animateEnter?: "fadeIn" | "fadeInDown" | undefined;
    animateExit?: "fadeOut" | "fadeOutUp" | "fadeOutDown" | undefined;
    animateEnterExit?: "fadeInDownOutDown" | "fadeInDownOutUp" | "fadeInOut" | undefined;
    row?: boolean | undefined;
    shrink?: boolean | undefined;
    grow?: boolean | undefined;
    fill?: boolean | undefined;
    centered?: boolean | undefined;
}>> & import("react").RefAttributes<CurrencyInputPanelRef>>>;
/** Returns an animated opacity based on current indicative and full quote state  */
export declare function useRefetchAnimationStyle({ currencyAmount, isLoading, isIndicativeLoading, valueIsIndicative, }: Pick<CurrencyInputPanelProps, 'currencyAmount' | 'isLoading' | 'isIndicativeLoading' | 'valueIsIndicative'>): {
    opacity: number;
};
export {};
//# sourceMappingURL=CurrencyInputPanel.d.ts.map