import { UniverseChainId } from 'uniswap/src/features/chains/types';
export declare enum EnsLookupType {
    Name = "name",
    Address = "address",
    Avatar = "avatar",
    Description = "description",
    TwitterUsername = "com.twitter"
}
export type EnsLookupParams = {
    type: EnsLookupType;
    nameOrAddress: string;
    chainId: UniverseChainId;
};
export declare function useENSName(address?: Address): import("@tanstack/react-query/build/modern/types").UseQueryResult<string | null, Error>;
export declare function useAddressFromEns(maybeName: string | null): import("@tanstack/react-query/build/modern/types").UseQueryResult<string | null, Error>;
export declare function useENSAvatar(address?: string | null): import("@tanstack/react-query/build/modern/types").UseQueryResult<string | null, Error>;
export declare function useENSDescription(name?: string | null): import("@tanstack/react-query/build/modern/types").UseQueryResult<string | null, Error>;
export declare function useENSTwitterUsername(name?: string | null): import("@tanstack/react-query/build/modern/types").UseQueryResult<string | null, Error>;
//# sourceMappingURL=api.d.ts.map