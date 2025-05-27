import { NftAsset, NftAssetTrait, NftCollection, NftContract } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
/**
 * Base fixtures
 */
export declare const nftAsset: {
    <O extends Partial<NftAsset>>(overrides: O): Omit<{
        __typename: "NftAsset";
        id: string;
        tokenId: string;
    }, keyof O> & O;
    (): {
        __typename: "NftAsset";
        id: string;
        tokenId: string;
    };
};
export declare const nftAssetTrait: {
    <O extends Partial<NftAssetTrait>>(overrides: O): Omit<{
        __typename: "NftAssetTrait";
        id: string;
        name: string;
        value: string;
    }, keyof O> & O;
    (): {
        __typename: "NftAssetTrait";
        id: string;
        name: string;
        value: string;
    };
};
export declare const nftContract: {
    <O extends Partial<NftContract>>(overrides: O): Omit<{
        __typename: "NftContract";
        id: string;
        chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
        address: string;
    }, keyof O> & O;
    (): {
        __typename: "NftContract";
        id: string;
        chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
        address: string;
    };
};
type NftCollectionOptions = {
    contractsCount: number;
};
export declare const nftCollection: {
    <O extends Partial<NftCollection & NftCollectionOptions>>(overrides: O): Omit<{
        __typename: "NftCollection";
        id: string;
        name: string;
        collectionId: string;
        isVerified: boolean;
        nftContracts: {
            __typename: "NftContract";
            id: string;
            chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
            address: string;
        }[];
        image: {
            __typename: "Image";
            id: string;
            url: string;
        };
    }, Exclude<keyof O, keyof NftCollection>> & Omit<O, "contractsCount">;
    (): {
        __typename: "NftCollection";
        id: string;
        name: string;
        collectionId: string;
        isVerified: boolean;
        nftContracts: {
            __typename: "NftContract";
            id: string;
            chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
            address: string;
        }[];
        image: {
            __typename: "Image";
            id: string;
            url: string;
        };
    };
};
/**
 * Static fixtures
 */
export declare const NFT_ASSET_TRAIT: Omit<{
    __typename: "NftAssetTrait";
    id: string;
    name: string;
    value: string;
}, "value" | "name"> & {
    name: string;
    value: string;
};
export declare const NFT_COLLECTION: Omit<{
    __typename: "NftCollection";
    id: string;
    name: string;
    collectionId: string;
    isVerified: boolean;
    nftContracts: {
        __typename: "NftContract";
        id: string;
        chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
        address: string;
    }[];
    image: {
        __typename: "Image";
        id: string;
        url: string;
    };
}, never> & Omit<{
    nftContracts: {
        __typename: "NftContract";
        id: string;
        chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
        address: string;
    }[];
    name: string;
    image: Omit<{
        __typename: "Image";
        id: string;
        url: string;
    }, "url"> & {
        url: string;
    };
    isVerified: true;
}, "contractsCount">;
export {};
//# sourceMappingURL=nfts.d.ts.map