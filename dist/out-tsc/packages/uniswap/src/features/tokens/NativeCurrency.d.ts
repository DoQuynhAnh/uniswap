import { Currency, NativeCurrency as NativeCurrencyClass, Token } from '@uniswap/sdk-core';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
export declare class NativeCurrency implements NativeCurrencyClass {
    constructor(chainId: number);
    chainId: UniverseChainId;
    decimals: number;
    name: string;
    symbol: string;
    isNative: true;
    isToken: false;
    address: string;
    equals(currency: Currency): boolean;
    get wrapped(): Token;
    private static _cachedNativeCurrency;
    static onChain(chainId: number): NativeCurrency;
}
//# sourceMappingURL=NativeCurrency.d.ts.map