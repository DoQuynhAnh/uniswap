import { ApolloCache, ApolloLink, NormalizedCacheObject } from '@apollo/client';
import { Reference } from '@apollo/client/utilities';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { CurrencyId } from 'uniswap/src/types/currency';
export declare function getInstantTokenBalanceUpdateApolloLink({ reduxStore }: {
    reduxStore: ToolkitStore;
}): ApolloLink;
export declare function createTokenBalanceRef({ apolloCache, ownerAddress, currencyId, onchainBalanceQuantity, denominatedValue, }: {
    apolloCache: ApolloCache<NormalizedCacheObject>;
    ownerAddress: Address;
    currencyId: CurrencyId;
    onchainBalanceQuantity: number;
    denominatedValue: {
        value: number;
        currency: string;
    } | null;
}): Reference | null;
//# sourceMappingURL=getInstantTokenBalanceUpdateApolloLink.d.ts.map