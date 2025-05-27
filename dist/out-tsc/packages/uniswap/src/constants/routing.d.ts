import { Currency } from '@uniswap/sdk-core';
import { CurrencyInfo } from 'uniswap/src/features/dataApi/types';
type ChainCurrencyList = {
    readonly [chainId: number]: CurrencyInfo[];
};
/**
 * @deprecated
 * Instead, see the list used in the token selector's quick-select common options section at useAllCommonBaseCurrencies.ts.
 * This list is currently used as fallback list when Token GQL query fails for above list + for hardcoded tokens on testnet chains.
 */
export declare const COMMON_BASES: ChainCurrencyList;
export declare function getCommonBase(chainId?: number, isNative?: boolean, address?: string): CurrencyInfo | undefined;
export declare function buildPartialCurrencyInfo(commonBase: Currency): CurrencyInfo;
export {};
//# sourceMappingURL=routing.d.ts.map