import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useMemo } from 'react';
import { useCommonTokensOptionsWithFallback } from 'uniswap/src/components/TokenSelector/hooks/useCommonTokensOptionsWithFallback';
import { useAccountMeta } from 'uniswap/src/contexts/UniswapContext';
import { useSwapFormContext } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
import { TokenOptionItem } from 'uniswap/src/features/transactions/swap/form/body/DefaultTokenOptions/TokenOptions/TokenOptionItem/TokenOptionItem';
import { MAX_NUMBER_OF_TOKENS } from 'uniswap/src/features/transactions/swap/form/body/DefaultTokenOptions/constants';
const createKey = (currency) => currency.isNative ? `${currency.chainId}-native` : `${currency.chainId}-${currency.address}`;
const useCommonTokensOptionsInfo = () => {
    var _a;
    const account = useAccountMeta();
    const { derivedSwapInfo: { chainId }, } = useSwapFormContext();
    const { data: commonTokenOptions } = useCommonTokensOptionsWithFallback(account === null || account === void 0 ? void 0 : account.address, chainId);
    const numberOfCommonTokenOptions = (_a = commonTokenOptions === null || commonTokenOptions === void 0 ? void 0 : commonTokenOptions.length) !== null && _a !== void 0 ? _a : 0;
    const allCurrencyInfos = useMemo(() => {
        var _a;
        return (_a = commonTokenOptions === null || commonTokenOptions === void 0 ? void 0 : commonTokenOptions.slice(0, MAX_NUMBER_OF_TOKENS).map(({ currencyInfo }) => currencyInfo)) !== null && _a !== void 0 ? _a : [];
    }, [commonTokenOptions]);
    return {
        allCurrencyInfos,
        numberOfCommonTokenOptions,
    };
};
export const TokenOptions = ({ currencyField }) => {
    const { allCurrencyInfos, numberOfCommonTokenOptions } = useCommonTokensOptionsInfo();
    return (_jsx(_Fragment, { children: allCurrencyInfos.map((currencyInfo, index) => {
            const { currency } = currencyInfo;
            const key = createKey(currency);
            return (_jsx(TokenOptionItem, { currencyField: currencyField, currencyInfo: currencyInfo, index: index, numOptions: numberOfCommonTokenOptions }, key));
        }) }));
};
//# sourceMappingURL=TokenOptions.js.map