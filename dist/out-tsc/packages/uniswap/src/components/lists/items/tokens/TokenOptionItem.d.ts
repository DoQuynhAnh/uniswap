/// <reference types="react" />
import { FocusedRowControl, OptionItemProps } from 'uniswap/src/components/lists/items/OptionItem';
import { TokenOption } from 'uniswap/src/components/lists/items/types';
export declare enum TokenContextMenuVariant {
    Search = "search",
    TokenSelector = "tokenSelector"
}
interface LegacyTokenOptionItemProps {
    option: TokenOption;
    showWarnings: boolean;
    onPress: () => void;
    showTokenAddress?: boolean;
    tokenWarningDismissed: boolean;
    quantity: number | null;
    isKeyboardOpen?: boolean;
    balance: string;
    quantityFormatted?: string;
    isSelected?: boolean;
}
export interface TokenOptionItemProps {
    option: TokenOption;
    onPress: () => void;
    showTokenAddress?: boolean;
    rightElement?: JSX.Element;
    showDisabled?: boolean;
    modalInfo?: OptionItemProps['modalInfo'];
    focusedRowControl?: FocusedRowControl;
    contextMenuVariant: TokenContextMenuVariant;
}
export declare const TokenOptionItem: import("react").NamedExoticComponent<LegacyTokenOptionItemProps | TokenOptionItemProps>;
export {};
//# sourceMappingURL=TokenOptionItem.d.ts.map