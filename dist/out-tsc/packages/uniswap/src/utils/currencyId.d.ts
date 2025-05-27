import { Currency } from '@uniswap/sdk-core';
import { TradeableAsset } from 'uniswap/src/entities/assets';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { CurrencyId } from 'uniswap/src/types/currency';
export declare function currencyId(tradeableAsset: TradeableAsset): CurrencyId;
export declare function currencyId(currency: Currency): CurrencyId;
export declare function currencyId(currency: Currency | undefined): CurrencyId | undefined;
export declare function buildCurrencyId(chainId: UniverseChainId, address: string): string;
/**
 * Checks if a currencyId is valid by checking the chainId and address.
 */
export declare function isCurrencyIdValid(_currencyId: CurrencyId): boolean;
export declare function buildNativeCurrencyId(chainId: UniverseChainId): string;
export declare function buildWrappedNativeCurrencyId(chainId: UniverseChainId): string;
export declare function areCurrencyIdsEqual(id1: CurrencyId, id2: CurrencyId): boolean;
export declare function areCurrenciesEqual(currency1?: Currency, currency2?: Currency): boolean;
export declare function currencyAddress(currency: Currency): string;
export declare const NATIVE_ANALYTICS_ADDRESS_VALUE = "NATIVE";
export declare function getCurrencyAddressForAnalytics(currency: Currency): string;
export declare const isNativeCurrencyAddress: (chainId: UniverseChainId, address: Maybe<Address>) => boolean;
export declare function currencyIdToAddress(_currencyId: string): Address;
export declare function currencyIdToGraphQLAddress(_currencyId?: string): Address | null;
export declare function currencyIdToChain(_currencyId: string): UniverseChainId | null;
export declare function isDefaultNativeAddress(address: string): boolean;
//# sourceMappingURL=currencyId.d.ts.map