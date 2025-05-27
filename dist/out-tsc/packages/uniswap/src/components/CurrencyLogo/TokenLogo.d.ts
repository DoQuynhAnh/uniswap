/// <reference types="react" />
import { UniverseChainId } from 'uniswap/src/features/chains/types';
interface TokenLogoProps {
    url?: string | null;
    symbol?: string;
    name?: string | null;
    chainId?: UniverseChainId | null;
    size?: number;
    hideNetworkLogo?: boolean;
    networkLogoBorderWidth?: number;
    loading?: boolean;
}
export declare const TokenLogo: import("react").NamedExoticComponent<TokenLogoProps>;
export {};
//# sourceMappingURL=TokenLogo.d.ts.map