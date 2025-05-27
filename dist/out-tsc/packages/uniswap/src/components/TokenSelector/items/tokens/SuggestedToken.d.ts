/// <reference types="react" />
import { OnSelectCurrency } from 'uniswap/src/components/TokenSelector/types';
import type { OnchainItemSection } from 'uniswap/src/components/lists/OnchainItemList/types';
import { TokenOption } from 'uniswap/src/components/lists/items/types';
declare function _TokenPill({ onSelectCurrency, token, index, section, }: {
    onSelectCurrency: OnSelectCurrency;
    token: TokenOption;
    index: number;
    section: OnchainItemSection<TokenOption[]>;
}): JSX.Element;
export declare const TokenPill: import("react").MemoExoticComponent<typeof _TokenPill>;
export {};
//# sourceMappingURL=SuggestedToken.d.ts.map