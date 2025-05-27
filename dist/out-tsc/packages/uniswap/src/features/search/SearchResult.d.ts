import { FeeData, ProtocolVersion } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { SafetyInfo } from 'uniswap/src/features/dataApi/types';
import { CurrencyId } from 'uniswap/src/types/currency';
export type SearchResult = TokenSearchResult | WalletSearchResult | EtherscanSearchResult | NFTCollectionSearchResult | PoolSearchResult;
export type InterfaceSearchResult = TokenSearchResult | PoolSearchResult;
export declare enum SearchResultType {
    ENSAddress = 0,
    Token = 1,
    Etherscan = 2,
    NFTCollection = 3,
    Unitag = 4,
    WalletByAddress = 5,
    Pool = 6
}
export interface SearchResultBase {
    type: SearchResultType;
    searchId?: string;
}
export interface TokenSearchResult extends SearchResultBase {
    type: SearchResultType.Token;
    chainId: UniverseChainId;
    symbol: string;
    address: Address | null;
    name: string | null;
    logoUrl: string | null;
    safetyInfo?: SafetyInfo | null;
    feeData?: FeeData | null;
}
export declare function isTokenSearchResult(x: SearchResult): x is TokenSearchResult;
export interface PoolSearchResult extends SearchResultBase {
    type: SearchResultType.Pool;
    chainId: UniverseChainId;
    poolId: string;
    protocolVersion: ProtocolVersion;
    hookAddress?: Address;
    feeTier: number;
    token0CurrencyId: CurrencyId;
    token1CurrencyId: CurrencyId;
}
export declare function isPoolSearchResult(x: SearchResult): x is PoolSearchResult;
export interface NFTCollectionSearchResult extends SearchResultBase {
    type: SearchResultType.NFTCollection;
    chainId: UniverseChainId;
    address: Address;
    name: string;
    imageUrl: string | null;
    isVerified: boolean;
}
export declare function isNFTCollectionSearchResult(x: SearchResult): x is NFTCollectionSearchResult;
export interface EtherscanSearchResult extends SearchResultBase {
    type: SearchResultType.Etherscan;
    address: Address;
}
export declare function isEtherscanSearchResult(x: SearchResult): x is EtherscanSearchResult;
export type WalletSearchResult = ENSAddressSearchResult | UnitagSearchResult | WalletByAddressSearchResult;
export declare function isWalletSearchResult(x: SearchResult): x is WalletSearchResult;
export interface WalletByAddressSearchResult extends SearchResultBase {
    type: SearchResultType.WalletByAddress;
    address: Address;
}
export interface ENSAddressSearchResult extends SearchResultBase {
    type: SearchResultType.ENSAddress;
    address: Address;
    isRawName?: boolean;
    ensName: string;
    primaryENSName?: string;
}
export interface UnitagSearchResult extends SearchResultBase {
    type: SearchResultType.Unitag;
    address: Address;
    unitag: string;
}
export declare function extractDomain(walletName: string, type: SearchResultType.Unitag | SearchResultType.ENSAddress): string;
//# sourceMappingURL=SearchResult.d.ts.map