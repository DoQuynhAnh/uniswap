import { CurrencyInfo } from 'uniswap/src/features/dataApi/types';
export declare function getExactOutputWillFail({ currencies, }: {
    currencies: {
        input: Maybe<CurrencyInfo>;
        output: Maybe<CurrencyInfo>;
    };
}): {
    outputTokenHasBuyTax: boolean;
    exactOutputWillFail: boolean;
    exactOutputWouldFailIfCurrenciesSwitched: boolean;
};
//# sourceMappingURL=getExactOutputWillFail.d.ts.map