/// <reference types="react" />
import { ColorTokens, FlexProps } from 'ui/src';
import { IconSizeTokens } from 'ui/src/theme';
import type { TransactionSettingConfig } from 'uniswap/src/features/transactions/components/settings/types';
export declare function SwapFormSettings(props: SwapFormSettingsProps): JSX.Element;
interface SwapFormSettingsProps {
    settings: TransactionSettingConfig[];
    adjustTopAlignment?: boolean;
    adjustRightAlignment?: boolean;
    position?: FlexProps['position'];
    iconColor?: ColorTokens;
    iconSize?: IconSizeTokens;
    defaultTitle?: string;
    isBridgeTrade?: boolean;
}
interface SwapFormSettingsContextType {
    isTransactionSettingsModalVisible: boolean;
    showViewOnlyModal: boolean;
    showSlippageWarningModal: boolean;
    handleShowTransactionSettingsModal: () => void;
    handleHideTransactionSettingsModal: () => void;
    handleShowViewOnlyModal: () => void;
    handleHideViewOnlyModal: () => void;
    handleShowSlippageWarningModal: () => void;
    handleHideSlippageWarningModal: () => void;
}
export declare const useSwapFormSettingsContext: () => SwapFormSettingsContextType;
export {};
//# sourceMappingURL=SwapFormSettings.d.ts.map