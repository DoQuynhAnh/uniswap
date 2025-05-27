/// <reference types="react" />
import { OnSelectCurrency, TokenSectionsHookProps } from 'uniswap/src/components/TokenSelector/types';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
declare function _TokenSelectorSwapOutputList({ onSelectCurrency, activeAccountAddress, chainFilter, isKeyboardOpen, oppositeSelectedToken: input, }: TokenSectionsHookProps & {
    onSelectCurrency: OnSelectCurrency;
    chainFilter: UniverseChainId | null;
}): JSX.Element;
export declare const TokenSelectorSwapOutputList: import("react").MemoExoticComponent<typeof _TokenSelectorSwapOutputList>;
export {};
//# sourceMappingURL=TokenSelectorSwapOutputList.d.ts.map