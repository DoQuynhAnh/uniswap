import React from 'react';
import { SpaceTokens } from 'tamagui';
import { FlexLoaderProps } from 'ui/src/loading/FlexLoader';
declare function Box(props: FlexLoaderProps): JSX.Element;
declare function Token({ repeat, contrast, withPrice, gap, }: {
    repeat?: number;
    contrast?: boolean;
    withPrice?: boolean;
    gap?: SpaceTokens;
}): JSX.Element;
declare function NFT({ repeat }: {
    repeat?: number;
}): JSX.Element;
declare function Image(): JSX.Element;
declare function Wallets({ repeat }: {
    repeat?: number;
}): JSX.Element;
export declare const Loader: {
    Box: typeof Box;
    NFT: typeof NFT;
    Image: typeof Image;
    SearchResult: React.NamedExoticComponent<{
        repeat?: number | undefined;
    }>;
    Token: typeof Token;
    TransferInstitution: React.NamedExoticComponent<{
        itemsCount: number;
        iconSize: number;
    }>;
    Transaction: React.NamedExoticComponent<{
        repeat?: number | undefined;
    }>;
    Wallets: typeof Wallets;
};
export {};
//# sourceMappingURL=Loader.d.ts.map