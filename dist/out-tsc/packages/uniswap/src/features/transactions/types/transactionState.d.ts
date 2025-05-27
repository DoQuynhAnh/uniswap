import { TradeableAsset } from 'uniswap/src/entities/assets';
import { FrontendSupportedProtocol } from 'uniswap/src/features/transactions/swap/utils/protocols';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { CurrencyField, CurrencyId } from 'uniswap/src/types/currency';
import { FiatOffRampMetaData } from 'uniswap/src/features/fiatOnRamp/types';
export interface TransactionState {
    txId?: string;
    [CurrencyField.INPUT]: TradeableAsset | null;
    [CurrencyField.OUTPUT]: TradeableAsset | null;
    exactCurrencyField: CurrencyField;
    exactAmountToken: string;
    isMax?: boolean;
    exactAmountFiat?: string;
    focusOnCurrencyField?: CurrencyField | null;
    skipFocusOnCurrencyField?: boolean;
    recipient?: string;
    isFiatInput?: boolean;
    selectingCurrencyField?: CurrencyField;
    selectingCurrencyChainId?: UniverseChainId;
    showRecipientSelector?: boolean;
    customSlippageTolerance?: number;
    customDeadline?: number;
    selectedProtocols?: FrontendSupportedProtocol[];
    fiatOffRampMetaData?: FiatOffRampMetaData;
    filteredChainIdsOverride?: {
        [CurrencyField.INPUT]?: UniverseChainId;
        [CurrencyField.OUTPUT]?: UniverseChainId;
    };
}
export declare const prepareSwapFormState: ({ inputCurrencyId, outputCurrencyId, defaultChainId, filteredChainIdsOverride, }: {
    inputCurrencyId?: string | undefined;
    outputCurrencyId?: string | undefined;
    defaultChainId: UniverseChainId;
    filteredChainIdsOverride?: {
        input?: UniverseChainId | undefined;
        output?: UniverseChainId | undefined;
    } | undefined;
}) => TransactionState;
//# sourceMappingURL=transactionState.d.ts.map