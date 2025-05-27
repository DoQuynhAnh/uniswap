import { TradeType } from '@uniswap/sdk-core';
import { useMemo } from 'react';
import { useAccountMeta, useUniswapContextSelector } from 'uniswap/src/contexts/UniswapContext';
import { useEnabledChains } from 'uniswap/src/features/chains/hooks/useEnabledChains';
import { FeatureFlags } from 'uniswap/src/features/gating/flags';
import { useFeatureFlag } from 'uniswap/src/features/gating/hooks';
import { useOnChainCurrencyBalance } from 'uniswap/src/features/portfolio/api';
import { ValueType, getCurrencyAmount } from 'uniswap/src/features/tokens/getCurrencyAmount';
import { useCurrencyInfo } from 'uniswap/src/features/tokens/useCurrencyInfo';
import { useTransactionSettingsContext } from 'uniswap/src/features/transactions/components/settings/contexts/TransactionSettingsContext';
import { useUSDCValue } from 'uniswap/src/features/transactions/hooks/useUSDCPrice';
import { usePriceUXEnabled } from 'uniswap/src/features/transactions/swap/hooks/usePriceUXEnabled';
import { useTrade } from 'uniswap/src/features/transactions/swap/hooks/useTrade';
import { getWrapType, isWrapAction } from 'uniswap/src/features/transactions/swap/utils/wrap';
import { CurrencyField } from 'uniswap/src/types/currency';
import { buildCurrencyId } from 'uniswap/src/utils/currencyId';
/** Returns information derived from the current swap state */
export function useDerivedSwapInfo({ isDebouncing, ...state }) {
    var _a, _b, _c;
    const { [CurrencyField.INPUT]: currencyAssetIn, [CurrencyField.OUTPUT]: currencyAssetOut, exactAmountFiat, exactAmountToken, exactCurrencyField, focusOnCurrencyField = CurrencyField.INPUT, selectingCurrencyField, txId, } = state;
    const { customSlippageTolerance, customDeadline, selectedProtocols, isV4HookPoolsEnabled } = useTransactionSettingsContext();
    const account = useAccountMeta();
    const { defaultChainId } = useEnabledChains();
    const currencyInInfo = useCurrencyInfo(currencyAssetIn ? buildCurrencyId(currencyAssetIn.chainId, currencyAssetIn.address) : undefined, { refetch: true });
    const currencyOutInfo = useCurrencyInfo(currencyAssetOut ? buildCurrencyId(currencyAssetOut.chainId, currencyAssetOut.address) : undefined, { refetch: true });
    const currencies = useMemo(() => {
        return {
            [CurrencyField.INPUT]: currencyInInfo,
            [CurrencyField.OUTPUT]: currencyOutInfo,
        };
    }, [currencyInInfo, currencyOutInfo]);
    const currencyIn = currencyInInfo === null || currencyInInfo === void 0 ? void 0 : currencyInInfo.currency;
    const currencyOut = currencyOutInfo === null || currencyOutInfo === void 0 ? void 0 : currencyOutInfo.currency;
    const chainId = (_b = (_a = currencyIn === null || currencyIn === void 0 ? void 0 : currencyIn.chainId) !== null && _a !== void 0 ? _a : currencyOut === null || currencyOut === void 0 ? void 0 : currencyOut.chainId) !== null && _b !== void 0 ? _b : defaultChainId;
    const { balance: tokenInBalance } = useOnChainCurrencyBalance(currencyIn, account === null || account === void 0 ? void 0 : account.address);
    const { balance: tokenOutBalance } = useOnChainCurrencyBalance(currencyOut, account === null || account === void 0 ? void 0 : account.address);
    const isExactIn = exactCurrencyField === CurrencyField.INPUT;
    const wrapType = getWrapType(currencyIn, currencyOut);
    const otherCurrency = isExactIn ? currencyOut : currencyIn;
    const exactCurrency = isExactIn ? currencyIn : currencyOut;
    const isWrap = isWrapAction(wrapType);
    // amountSpecified, otherCurrency, tradeType fully defines a trade
    const amountSpecified = useMemo(() => {
        return getCurrencyAmount({
            value: exactAmountToken,
            valueType: ValueType.Exact,
            currency: exactCurrency,
        });
    }, [exactAmountToken, exactCurrency]);
    const otherAmountForWrap = useMemo(() => {
        //  we only use otherAmountForWrap when it's a wrap action,
        //  otherwise parsing exactAmountToken using otherCurrency can lead to errors,
        //  e.g. otherCurrency.decimals !== exactCurrency.decimals
        if (isWrap) {
            return getCurrencyAmount({
                value: exactAmountToken,
                valueType: ValueType.Exact,
                currency: otherCurrency,
            });
        }
        return undefined;
    }, [exactAmountToken, isWrap, otherCurrency]);
    const sendPortionEnabled = useFeatureFlag(FeatureFlags.PortionFields);
    const generatePermitAsTransaction = useUniswapContextSelector((ctx) => {
        var _a, _b;
        // If the account cannot sign typedData, permits should be completed as a transaction step,
        // unless the swap is going through the 7702 smart wallet flow, in which case the
        // swap_7702 endpoint consumes typedData in the process encoding the swap.
        return ((_a = ctx.getCanSignPermits) === null || _a === void 0 ? void 0 : _a.call(ctx, chainId)) && !((_b = ctx.getSwapDelegationAddress) === null || _b === void 0 ? void 0 : _b.call(ctx, chainId));
    });
    const tradeParams = {
        account,
        amountSpecified: isWrap ? null : amountSpecified,
        otherCurrency,
        tradeType: isExactIn ? TradeType.EXACT_INPUT : TradeType.EXACT_OUTPUT,
        customSlippageTolerance,
        customDeadline,
        selectedProtocols,
        sendPortionEnabled,
        isDebouncing,
        generatePermitAsTransaction,
        isV4HookPoolsEnabled,
    };
    const trade = useTrade(tradeParams);
    const displayableTrade = (_c = trade.trade) !== null && _c !== void 0 ? _c : trade.indicativeTrade;
    const priceUXEnabled = usePriceUXEnabled();
    const displayableTradeOutputAmount = priceUXEnabled
        ? displayableTrade === null || displayableTrade === void 0 ? void 0 : displayableTrade.quoteOutputAmount
        : displayableTrade === null || displayableTrade === void 0 ? void 0 : displayableTrade.outputAmount;
    const currencyAmounts = useMemo(() => isWrap
        ? {
            [CurrencyField.INPUT]: amountSpecified,
            [CurrencyField.OUTPUT]: otherAmountForWrap,
        }
        : {
            [CurrencyField.INPUT]: exactCurrencyField === CurrencyField.INPUT ? amountSpecified : displayableTrade === null || displayableTrade === void 0 ? void 0 : displayableTrade.inputAmount,
            [CurrencyField.OUTPUT]: exactCurrencyField === CurrencyField.OUTPUT ? amountSpecified : displayableTradeOutputAmount,
        }, [
        isWrap,
        exactCurrencyField,
        amountSpecified,
        otherAmountForWrap,
        displayableTrade === null || displayableTrade === void 0 ? void 0 : displayableTrade.inputAmount,
        displayableTradeOutputAmount,
    ]);
    const inputCurrencyUSDValue = useUSDCValue(currencyAmounts[CurrencyField.INPUT]);
    const outputCurrencyUSDValue = useUSDCValue(currencyAmounts[CurrencyField.OUTPUT]);
    const currencyAmountsUSDValue = useMemo(() => {
        return {
            [CurrencyField.INPUT]: inputCurrencyUSDValue,
            [CurrencyField.OUTPUT]: outputCurrencyUSDValue,
        };
    }, [inputCurrencyUSDValue, outputCurrencyUSDValue]);
    const currencyBalances = useMemo(() => {
        return {
            [CurrencyField.INPUT]: tokenInBalance,
            [CurrencyField.OUTPUT]: tokenOutBalance,
        };
    }, [tokenInBalance, tokenOutBalance]);
    return useMemo(() => {
        return {
            chainId,
            currencies,
            currencyAmounts,
            currencyAmountsUSDValue,
            currencyBalances,
            trade,
            exactAmountToken,
            exactAmountFiat,
            exactCurrencyField,
            focusOnCurrencyField,
            wrapType,
            selectingCurrencyField,
            txId,
            outputAmountUserWillReceive: displayableTrade === null || displayableTrade === void 0 ? void 0 : displayableTrade.quoteOutputAmountUserWillReceive,
        };
    }, [
        chainId,
        currencies,
        currencyAmounts,
        currencyAmountsUSDValue,
        currencyBalances,
        exactAmountFiat,
        exactAmountToken,
        exactCurrencyField,
        focusOnCurrencyField,
        selectingCurrencyField,
        trade,
        txId,
        wrapType,
        displayableTrade,
    ]);
}
//# sourceMappingURL=useDerivedSwapInfo.js.map