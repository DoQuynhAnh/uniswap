/// <reference types="react" />
import { OnSelectCurrency } from 'uniswap/src/components/TokenSelector/types';
import type { OnchainItemSection } from 'uniswap/src/components/lists/OnchainItemList/types';
import { TokenOption } from 'uniswap/src/components/lists/items/types';
export type HorizontalTokenListProps = {
    tokens: TokenOption[];
    onSelectCurrency: OnSelectCurrency;
    index: number;
    section: OnchainItemSection<TokenOption[]>;
    expanded?: boolean;
    onExpand?: () => void;
};
export declare const HorizontalTokenList: import("react").NamedExoticComponent<HorizontalTokenListProps>;
//# sourceMappingURL=HorizontalTokenList.d.ts.map