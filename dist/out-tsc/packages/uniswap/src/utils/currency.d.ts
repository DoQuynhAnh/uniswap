import { Currency, Token } from '@uniswap/sdk-core';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { LocalizationContextState } from 'uniswap/src/features/language/LocalizationContext';
import { ValueType } from 'uniswap/src/features/tokens/getCurrencyAmount';
import { SerializedToken } from 'uniswap/src/features/tokens/slice/types';
export declare function getSymbolDisplayText(symbol: Maybe<string>): Maybe<string>;
export declare function wrappedNativeCurrency(chainId: UniverseChainId): Token;
export declare function serializeToken(token: Token): SerializedToken;
export declare function deserializeToken(serializedToken: SerializedToken): Token;
export declare function getFormattedCurrencyAmount(currency: Maybe<Currency>, currencyAmountRaw: string, formatter: LocalizationContextState, isApproximateAmount?: boolean, valueType?: ValueType): string;
export declare function getCurrencyDisplayText(currency: Maybe<Currency>, tokenAddressString: Address | undefined): string | undefined;
//# sourceMappingURL=currency.d.ts.map