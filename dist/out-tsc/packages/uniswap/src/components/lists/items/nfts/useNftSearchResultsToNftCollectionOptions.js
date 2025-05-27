import { useMemo } from 'react';
import { OnchainItemListOptionType } from 'uniswap/src/components/lists/items/types';
import { Chain, } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
import { fromGraphQLChain } from 'uniswap/src/features/chains/utils';
function gqlNFTToNFTCollectionOption(node) {
    var _a, _b, _c, _d;
    const contract = (_a = node === null || node === void 0 ? void 0 : node.nftContracts) === null || _a === void 0 ? void 0 : _a[0];
    // Only show NFT results that have fully populated results
    const chainId = fromGraphQLChain((_b = contract === null || contract === void 0 ? void 0 : contract.chain) !== null && _b !== void 0 ? _b : Chain.Ethereum);
    if (node.name && (contract === null || contract === void 0 ? void 0 : contract.address) && chainId) {
        return {
            type: OnchainItemListOptionType.NFTCollection,
            chainId,
            address: contract.address,
            name: node.name,
            imageUrl: (_d = (_c = node === null || node === void 0 ? void 0 : node.image) === null || _c === void 0 ? void 0 : _c.url) !== null && _d !== void 0 ? _d : null,
            isVerified: Boolean(node.isVerified),
        };
    }
    return null;
}
export function useNftSearchResultsToNftCollectionOptions(nftSearchResultsData, chainFilter) {
    return useMemo(() => {
        const collections = nftSearchResultsData
            ? 'nftCollections' in nftSearchResultsData
                ? nftSearchResultsData.nftCollections
                : nftSearchResultsData === null || nftSearchResultsData === void 0 ? void 0 : nftSearchResultsData.topCollections
            : undefined;
        if (!collections) {
            return [];
        }
        return collections.edges.reduce((acc, { node }) => {
            const option = gqlNFTToNFTCollectionOption(node);
            if (option && (chainFilter === null || option.chainId === chainFilter)) {
                acc.push(option);
            }
            return acc;
        }, []);
    }, [nftSearchResultsData, chainFilter]);
}
//# sourceMappingURL=useNftSearchResultsToNftCollectionOptions.js.map