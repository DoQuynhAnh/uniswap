import { useFragment } from '@apollo/client';
import { TokenBasicInfoPartsFragmentDoc, TokenBasicProjectPartsFragmentDoc, TokenMarketPartsFragmentDoc, TokenPartsFragmentDoc, TokenProjectMarketsPartsFragmentDoc, TokenProjectUrlsPartsFragmentDoc, } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
import { toGraphQLChain } from 'uniswap/src/features/chains/utils';
import { currencyIdToChain, currencyIdToGraphQLAddress } from 'uniswap/src/utils/currencyId';
function currencyIdToGraphQLTokenVariables(currencyId) {
    const chainId = currencyIdToChain(currencyId);
    const address = currencyIdToGraphQLAddress(currencyId);
    if (!chainId) {
        throw new Error(`Unable to find chainId for currencyId: ${currencyId}`);
    }
    return {
        address,
        chain: toGraphQLChain(chainId),
    };
}
export function useTokenPartsFragment({ currencyId }) {
    return useFragment({
        fragment: TokenPartsFragmentDoc,
        fragmentName: 'TokenParts',
        from: {
            __typename: 'Token',
            ...currencyIdToGraphQLTokenVariables(currencyId),
        },
    });
}
export function useTokenBasicInfoPartsFragment({ currencyId, }) {
    return useFragment({
        fragment: TokenBasicInfoPartsFragmentDoc,
        fragmentName: 'TokenBasicInfoParts',
        from: {
            __typename: 'Token',
            ...currencyIdToGraphQLTokenVariables(currencyId),
        },
    });
}
export function useTokenMarketPartsFragment({ currencyId, }) {
    return useFragment({
        fragment: TokenMarketPartsFragmentDoc,
        fragmentName: 'TokenMarketParts',
        from: {
            __typename: 'Token',
            ...currencyIdToGraphQLTokenVariables(currencyId),
        },
    });
}
export function useTokenBasicProjectPartsFragment({ currencyId, }) {
    return useFragment({
        fragment: TokenBasicProjectPartsFragmentDoc,
        fragmentName: 'TokenBasicProjectParts',
        from: {
            __typename: 'Token',
            ...currencyIdToGraphQLTokenVariables(currencyId),
        },
    });
}
export function useTokenProjectUrlsPartsFragment({ currencyId, }) {
    return useFragment({
        fragment: TokenProjectUrlsPartsFragmentDoc,
        fragmentName: 'TokenProjectUrlsParts',
        from: {
            __typename: 'Token',
            ...currencyIdToGraphQLTokenVariables(currencyId),
        },
    });
}
export function useTokenProjectMarketsPartsFragment({ currencyId, }) {
    return useFragment({
        fragment: TokenProjectMarketsPartsFragmentDoc,
        fragmentName: 'TokenProjectMarketsParts',
        from: {
            __typename: 'Token',
            ...currencyIdToGraphQLTokenVariables(currencyId),
        },
    });
}
//# sourceMappingURL=fragments.js.map