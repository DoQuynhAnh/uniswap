/// <reference types="react" />
import { OnSelectCurrency, TokenSectionsHookProps } from 'uniswap/src/components/TokenSelector/types';
declare function _TokenSelectorSendList({ activeAccountAddress, chainFilter, isKeyboardOpen, onSelectCurrency, onEmptyActionPress, }: TokenSectionsHookProps & {
    onSelectCurrency: OnSelectCurrency;
    onEmptyActionPress: () => void;
}): JSX.Element;
export declare const TokenSelectorSendList: import("react").MemoExoticComponent<typeof _TokenSelectorSendList>;
export {};
//# sourceMappingURL=TokenSelectorSendList.d.ts.map