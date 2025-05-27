/// <reference types="react" />
import { OnSelectCurrency } from 'uniswap/src/components/TokenSelector/types';
import { TradeableAsset } from 'uniswap/src/entities/assets';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
declare function _TokenSelectorSearchResultsList({ onSelectCurrency: parentOnSelectCurrency, activeAccountAddress, chainFilter, parsedChainFilter, searchFilter, debouncedSearchFilter, debouncedParsedSearchFilter, isBalancesOnlySearch, isKeyboardOpen, input, }: {
    onSelectCurrency: OnSelectCurrency;
    activeAccountAddress?: string;
    chainFilter: UniverseChainId | null;
    parsedChainFilter: UniverseChainId | null;
    searchFilter: string;
    debouncedSearchFilter: string | null;
    debouncedParsedSearchFilter: string | null;
    isBalancesOnlySearch: boolean;
    isKeyboardOpen?: boolean;
    input: TradeableAsset | undefined;
}): JSX.Element;
export declare const TokenSelectorSearchResultsList: import("react").MemoExoticComponent<typeof _TokenSelectorSearchResultsList>;
export {};
//# sourceMappingURL=TokenSelectorSearchResultsList.d.ts.map