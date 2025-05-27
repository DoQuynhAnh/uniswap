import { UseFragmentResult } from '@apollo/client';
import { TokenBasicInfoPartsFragment, TokenBasicProjectPartsFragment, TokenMarketPartsFragment, TokenPartsFragment, TokenProjectMarketsPartsFragment, TokenProjectUrlsPartsFragment } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
export declare function useTokenPartsFragment({ currencyId }: {
    currencyId: string;
}): UseFragmentResult<TokenPartsFragment>;
export declare function useTokenBasicInfoPartsFragment({ currencyId, }: {
    currencyId: string;
}): UseFragmentResult<TokenBasicInfoPartsFragment>;
export declare function useTokenMarketPartsFragment({ currencyId, }: {
    currencyId: string;
}): UseFragmentResult<TokenMarketPartsFragment>;
export declare function useTokenBasicProjectPartsFragment({ currencyId, }: {
    currencyId: string;
}): UseFragmentResult<TokenBasicProjectPartsFragment>;
export declare function useTokenProjectUrlsPartsFragment({ currencyId, }: {
    currencyId: string;
}): UseFragmentResult<TokenProjectUrlsPartsFragment>;
export declare function useTokenProjectMarketsPartsFragment({ currencyId, }: {
    currencyId: string;
}): UseFragmentResult<TokenProjectMarketsPartsFragment>;
//# sourceMappingURL=fragments.d.ts.map