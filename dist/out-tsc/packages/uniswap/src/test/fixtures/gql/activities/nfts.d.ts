import { NftApproval, NftApproveForAll, NftStandard, NftTransfer, TransactionDirection } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
export declare const nftApproval: {
    <O extends Partial<NftApproval>>(overrides: O): Omit<{
        __typename: "NftApproval";
        id: string;
        approvedAddress: string;
        nftStandard: NftStandard;
        asset: {
            __typename: "NftAsset";
            id: string;
            tokenId: string;
        };
    }, keyof O> & O;
    (): {
        __typename: "NftApproval";
        id: string;
        approvedAddress: string;
        nftStandard: NftStandard;
        asset: {
            __typename: "NftAsset";
            id: string;
            tokenId: string;
        };
    };
};
export declare const nftApproveForAll: {
    <O extends Partial<NftApproveForAll>>(overrides: O): Omit<{
        __typename: "NftApproveForAll";
        id: string;
        approved: boolean;
        nftStandard: NftStandard;
        operatorAddress: string;
        asset: {
            __typename: "NftAsset";
            id: string;
            tokenId: string;
        };
    }, keyof O> & O;
    (): {
        __typename: "NftApproveForAll";
        id: string;
        approved: boolean;
        nftStandard: NftStandard;
        operatorAddress: string;
        asset: {
            __typename: "NftAsset";
            id: string;
            tokenId: string;
        };
    };
};
export declare const nftTransfer: {
    <O extends Partial<NftTransfer>>(overrides: O): Omit<{
        __typename: "NftTransfer";
        id: string;
        sender: string;
        recipient: string;
        direction: TransactionDirection;
        nftStandard: NftStandard;
        asset: {
            __typename: "NftAsset";
            id: string;
            tokenId: string;
        };
    }, keyof O> & O;
    (): {
        __typename: "NftTransfer";
        id: string;
        sender: string;
        recipient: string;
        direction: TransactionDirection;
        nftStandard: NftStandard;
        asset: {
            __typename: "NftAsset";
            id: string;
            tokenId: string;
        };
    };
};
//# sourceMappingURL=nfts.d.ts.map