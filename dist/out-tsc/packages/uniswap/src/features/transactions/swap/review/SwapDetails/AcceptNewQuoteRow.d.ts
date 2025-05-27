/// <reference types="react" />
import { CurrencyInfo } from 'uniswap/src/features/dataApi/types';
import { DerivedSwapInfo } from 'uniswap/src/features/transactions/swap/types/derivedSwapInfo';
export declare function AcceptNewQuoteRow({ acceptedDerivedSwapInfo, derivedSwapInfo, onAcceptTrade, }: {
    acceptedDerivedSwapInfo: DerivedSwapInfo<CurrencyInfo, CurrencyInfo>;
    derivedSwapInfo: DerivedSwapInfo<CurrencyInfo, CurrencyInfo>;
    onAcceptTrade: () => void;
}): JSX.Element;
//# sourceMappingURL=AcceptNewQuoteRow.d.ts.map