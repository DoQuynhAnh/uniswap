import { Chain, Image } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
export declare const GQL_CHAINS: Chain[];
export declare const image: {
    <O extends Partial<Image>>(overrides: O): Omit<{
        __typename: "Image";
        id: string;
        url: string;
    }, keyof O> & O;
    (): {
        __typename: "Image";
        id: string;
        url: string;
    };
};
//# sourceMappingURL=misc.d.ts.map