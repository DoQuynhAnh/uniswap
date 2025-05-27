import { TokenSectionsHookProps } from 'uniswap/src/components/TokenSelector/types';
import { type OnchainItemSection } from 'uniswap/src/components/lists/OnchainItemList/types';
import { TokenOption } from 'uniswap/src/components/lists/items/types';
import { GqlResult } from 'uniswap/src/data/types';
export declare function useTokenSectionsForEmptySearch({ activeAccountAddress, chainFilter, }: Omit<TokenSectionsHookProps, 'input' | 'isKeyboardOpen'>): GqlResult<OnchainItemSection<TokenOption>[]>;
//# sourceMappingURL=useTokenSectionsForEmptySearch.d.ts.map