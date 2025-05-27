import { Currency } from '@uniswap/sdk-core';
type USDTokenUpdaterProps = {
    isFiatInput: boolean;
    exactAmountToken: string;
    exactAmountFiat: string;
    currency?: Currency;
    onFiatAmountUpdated: (amount: string) => void;
    onTokenAmountUpdated: (amount: string) => void;
};
export declare function useUSDTokenUpdater({ isFiatInput, exactAmountToken, exactAmountFiat, currency, onFiatAmountUpdated, onTokenAmountUpdated, }: USDTokenUpdaterProps): void;
export {};
//# sourceMappingURL=useUSDTokenUpdater.d.ts.map