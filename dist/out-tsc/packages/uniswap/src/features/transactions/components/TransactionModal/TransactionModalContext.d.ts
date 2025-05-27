import { Currency } from '@uniswap/sdk-core';
import { PropsWithChildren } from 'react';
import type { StyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';
import type { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import { AuthTrigger } from 'uniswap/src/features/auth/types';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { CurrencyField } from 'uniswap/src/types/currency';
export declare enum TransactionScreen {
    Form = "Form",
    Review = "Review"
}
export type SwapRedirectFn = ({ inputCurrency, outputCurrency, typedValue, independentField, chainId, }: {
    inputCurrency?: Currency;
    outputCurrency?: Currency;
    typedValue?: string;
    independentField?: CurrencyField;
    chainId: UniverseChainId;
}) => void;
export type BiometricsIconProps = {
    color?: string;
};
export type TransactionModalContextState = {
    bottomSheetViewStyles: StyleProp<ViewStyle>;
    openWalletRestoreModal?: () => void;
    walletNeedsRestore?: boolean;
    onClose: () => void;
    onCurrencyChange?: (selected: {
        inputCurrency?: Currency;
        outputCurrency?: Currency;
    }, isBridgePair?: boolean) => void;
    renderBiometricsIcon?: (({ color }: BiometricsIconProps) => JSX.Element) | null;
    authTrigger?: AuthTrigger;
    screen: TransactionScreen;
    setScreen: (newScreen: TransactionScreen) => void;
    swapRedirectCallback?: SwapRedirectFn;
};
export declare const TransactionModalContext: import("react").Context<TransactionModalContextState | undefined>;
export declare function TransactionModalContextProvider({ children, renderBiometricsIcon, authTrigger, bottomSheetViewStyles, onClose, onCurrencyChange, openWalletRestoreModal, walletNeedsRestore, screen, setScreen, swapRedirectCallback, }: PropsWithChildren<TransactionModalContextState>): JSX.Element;
export declare const useTransactionModalContext: () => TransactionModalContextState;
//# sourceMappingURL=TransactionModalContext.d.ts.map