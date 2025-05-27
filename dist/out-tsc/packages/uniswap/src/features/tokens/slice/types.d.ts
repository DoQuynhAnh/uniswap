import { UniverseChainId } from 'uniswap/src/features/chains/types';
export type SerializedTokenMap = {
    [chainId: number]: {
        [address: string]: BasicTokenInfo | SerializedToken;
    };
};
export interface BasicTokenInfo {
    chainId: UniverseChainId;
    address: string;
}
export declare function isBasicTokenInfo(x: unknown): x is BasicTokenInfo;
export interface SerializedToken extends BasicTokenInfo {
    decimals: number;
    symbol?: string;
    name?: string;
}
export declare function isSerializedToken(t: BasicTokenInfo | SerializedToken): t is SerializedToken;
//# sourceMappingURL=types.d.ts.map