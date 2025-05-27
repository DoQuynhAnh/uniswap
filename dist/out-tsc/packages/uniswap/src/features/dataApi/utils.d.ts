import { ApolloError } from '@apollo/client';
import { Token } from '@uniswap/sdk-core';
import { ContractInput, SafetyLevel, TokenProjectsQuery, TokenQuery } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { CurrencyInfo, PortfolioBalance, SafetyInfo } from 'uniswap/src/features/dataApi/types';
import { NativeCurrency } from 'uniswap/src/features/tokens/NativeCurrency';
import { CurrencyId } from 'uniswap/src/types/currency';
type BuildCurrencyParams = {
    chainId?: Nullable<UniverseChainId>;
    address?: Nullable<string>;
    decimals?: Nullable<number>;
    symbol?: Nullable<string>;
    name?: Nullable<string>;
    bypassChecksum?: boolean;
    buyFeeBps?: string;
    sellFeeBps?: string;
};
export declare function currencyIdToContractInput(id: CurrencyId): ContractInput;
export declare function tokenProjectToCurrencyInfos(tokenProjects: TokenProjectsQuery['tokenProjects'], chainFilter?: UniverseChainId | null): CurrencyInfo[];
/**
 * Creates a new instance of Token or NativeCurrency, or returns an existing copy if one was already created.
 *
 * @param params The parameters for building the currency.
 * @param params.chainId The ID of the chain where the token resides. If not provided, the function will return undefined.
 * @param params.address The token's address. If not provided, an instance of NativeCurrency is returned.
 * @param params.decimals The decimal count used by the token. If not provided, the function will return undefined.
 * @param params.symbol The token's symbol. This parameter is optional.
 * @param params.name The token's name. This parameter is optional.
 * @param params.bypassChecksum If true, bypasses the EIP-55 checksum on the token address. This parameter is optional and defaults to true.
 * @returns A new instance of Token or NativeCurrency if the parameters are valid, otherwise returns undefined.
 */
export declare function buildCurrency(args: BuildCurrencyParams): Token | NativeCurrency | undefined;
export declare function buildCurrencyInfo(args: CurrencyInfo): CurrencyInfo;
export declare function getCurrencySafetyInfo(safetyLevel?: SafetyLevel, protectionInfo?: NonNullable<TokenQuery['token']>['protectionInfo']): SafetyInfo;
export declare function gqlTokenToCurrencyInfo(token: Omit<NonNullable<NonNullable<TokenQuery['token']>>, 'project'> & {
    project?: Omit<NonNullable<NonNullable<TokenQuery['token']>['project']>, 'tokens'>;
}): CurrencyInfo | null;
export declare function usePersistedError(loading: boolean, error?: ApolloError): ApolloError | undefined;
export declare function sortByName(unsortedBalances?: PortfolioBalance[]): PortfolioBalance[];
export {};
//# sourceMappingURL=utils.d.ts.map