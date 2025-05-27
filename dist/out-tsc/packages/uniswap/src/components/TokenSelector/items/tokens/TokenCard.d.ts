/// <reference types="react" />
import { OnSelectCurrency } from 'uniswap/src/components/TokenSelector/types';
import type { OnchainItemSection } from 'uniswap/src/components/lists/OnchainItemList/types';
import { TokenOption } from 'uniswap/src/components/lists/items/types';
declare function _TokenCard({ onSelectCurrency, token, index, section, }: {
    onSelectCurrency: OnSelectCurrency;
    token: TokenOption;
    index: number;
    section: OnchainItemSection<TokenOption[]>;
}): JSX.Element;
export declare const TokenCard: import("react").MemoExoticComponent<typeof _TokenCard>;
export {};
//# sourceMappingURL=TokenCard.d.ts.map