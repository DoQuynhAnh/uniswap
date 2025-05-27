/// <reference types="react" />
import { CurrencyInfo } from 'uniswap/src/features/dataApi/types';
interface CurrencyLogoProps {
    currencyInfo: Maybe<CurrencyInfo>;
    size?: number;
    hideNetworkLogo?: boolean;
    networkLogoBorderWidth?: number;
}
export declare const STATUS_RATIO = 0.4;
export declare function CurrencyLogo({ currencyInfo, size, hideNetworkLogo, networkLogoBorderWidth, }: CurrencyLogoProps): JSX.Element | null;
export {};
//# sourceMappingURL=CurrencyLogo.d.ts.map