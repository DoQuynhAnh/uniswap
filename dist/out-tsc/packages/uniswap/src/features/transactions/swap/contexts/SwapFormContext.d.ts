import { ReactNode } from 'react';
import { PresetPercentage } from 'uniswap/src/components/CurrencyInputPanel/PresetAmountButton';
import { TradeableAsset } from 'uniswap/src/entities/assets';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { useDerivedSwapInfo } from 'uniswap/src/features/transactions/swap/contexts/hooks/useDerivedSwapInfo';
import { CurrencyField } from 'uniswap/src/types/currency';
export type SwapFormState = {
    exactAmountFiat?: string;
    exactAmountToken?: string;
    exactCurrencyField: CurrencyField;
    focusOnCurrencyField?: CurrencyField;
    filteredChainIds: {
        [key in CurrencyField]?: UniverseChainId;
    };
    input?: TradeableAsset;
    output?: TradeableAsset;
    selectingCurrencyField?: CurrencyField;
    isSelectingCurrencyFieldPrefilled?: boolean;
    txId?: string;
    isFiatMode: boolean;
    isMax: boolean;
    presetPercentage?: PresetPercentage;
    preselectAsset?: boolean;
    isSubmitting: boolean;
    showPendingUI: boolean;
    hideFooter?: boolean;
    hideSettings?: boolean;
    prefilledCurrencies?: TradeableAsset[];
    isPrefilled?: boolean;
};
type DerivedSwapFormState = {
    derivedSwapInfo: ReturnType<typeof useDerivedSwapInfo>;
};
type SwapFormContextState = {
    amountUpdatedTimeRef: React.MutableRefObject<number>;
    exactAmountFiatRef: React.MutableRefObject<string>;
    exactAmountTokenRef: React.MutableRefObject<string>;
    updateSwapForm: (newState: Partial<SwapFormState>) => void;
} & SwapFormState & DerivedSwapFormState;
export declare const getDefaultState: (defaultChainId: UniverseChainId) => Readonly<Omit<SwapFormState, 'account'>>;
export declare const SwapFormContext: import("react").Context<SwapFormContextState | undefined>;
export declare function SwapFormContextProvider({ children, hideFooter, hideSettings, prefilledState, }: {
    children: ReactNode;
    hideFooter?: boolean;
    hideSettings?: boolean;
    prefilledState?: SwapFormState;
}): JSX.Element;
export declare const useOptionalSwapFormContext: () => SwapFormContextState | undefined;
export declare const useSwapFormContext: () => SwapFormContextState;
export {};
//# sourceMappingURL=SwapFormContext.d.ts.map