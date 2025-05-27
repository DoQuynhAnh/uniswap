import { AccountMeta } from 'uniswap/src/features/accounts/types';
import { SwapRedirectFn, TransactionScreen } from 'uniswap/src/features/transactions/components/TransactionModal/TransactionModalContext';
import { SwapFormState } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
import { WarningService } from 'uniswap/src/features/transactions/swap/services/warningService';
import type { DerivedSwapInfo } from 'uniswap/src/features/transactions/swap/types/derivedSwapInfo';
import { CurrencyField } from 'uniswap/src/types/currency';
import { logger } from 'utilities/src/logger/logger';
export declare function createPrepareSwap(ctx: HandleEventActionContext & GetActionContext & {
    warningService: WarningService;
    logger?: typeof logger;
}): () => void;
interface GetActionContext {
    swapRedirectCallback?: SwapRedirectFn;
    activeAccount?: AccountMeta;
    onConnectWallet?: () => void;
    isViewOnlyWallet: boolean;
    isInterfaceWrap: boolean;
    currencies: DerivedSwapInfo['currencies'];
    exactAmountToken?: string;
    exactCurrencyField: CurrencyField;
    chainId: number;
    needsTokenProtectionWarning: boolean;
    needsBridgingWarning: boolean;
    needsLowNativeBalanceWarning: boolean;
}
interface HandleEventActionContext {
    handleShowViewOnlyModal: () => void;
    handleShowTokenWarningModal: () => void;
    handleShowBridgingWarningModal: () => void;
    handleShowMaxNativeTransferModal: () => void;
    swapRedirectCallback?: SwapRedirectFn;
    onConnectWallet?: () => void;
    onInterfaceWrap?: () => void;
    updateSwapForm: (newState: Partial<SwapFormState>) => void;
    setScreen: (screen: TransactionScreen) => void;
}
export {};
//# sourceMappingURL=prepareSwapService.d.ts.map