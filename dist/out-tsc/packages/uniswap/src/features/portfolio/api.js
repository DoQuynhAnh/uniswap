import { skipToken, useQuery } from '@tanstack/react-query';
import { Contract } from 'ethers/lib/ethers';
import { useMemo } from 'react';
import ERC20_ABI from 'uniswap/src/abis/erc20.json';
import { getPollingIntervalByBlocktime } from 'uniswap/src/features/chains/utils';
import { createEthersProvider } from 'uniswap/src/features/providers/createEthersProvider';
import { NativeCurrency } from 'uniswap/src/features/tokens/NativeCurrency';
import { ValueType, getCurrencyAmount } from 'uniswap/src/features/tokens/getCurrencyAmount';
import { currencyAddress as getCurrencyAddress } from 'uniswap/src/utils/currencyId';
import { ReactQueryCacheKey } from 'utilities/src/reactQuery/cache';
/** Custom fetcher that uses an ethers provider to fetch. */
export async function getOnChainBalancesFetch(params) {
    var _a, _b;
    const { currencyAddress, chainId, currencyIsNative, accountAddress } = params;
    if (!currencyAddress || !chainId || !accountAddress) {
        throw new Error(`currencyAddress, chainId, or accountAddress is not defined`);
    }
    const provider = createEthersProvider(chainId);
    if (!provider) {
        return { balance: undefined };
    }
    // native amount lookup
    if (currencyIsNative) {
        const nativeBalance = await provider.getBalance(accountAddress);
        return { balance: nativeBalance === null || nativeBalance === void 0 ? void 0 : nativeBalance.toString() };
    }
    // erc20 lookup
    const erc20Contract = new Contract(currencyAddress, ERC20_ABI, provider);
    const balance = await ((_b = (_a = erc20Contract.callStatic).balanceOf) === null || _b === void 0 ? void 0 : _b.call(_a, accountAddress));
    return { balance: balance.toString() };
}
export function useOnChainCurrencyBalance(currency, accountAddress) {
    const refetchInterval = getPollingIntervalByBlocktime(currency === null || currency === void 0 ? void 0 : currency.chainId);
    const { data, error } = useQuery({
        queryKey: [ReactQueryCacheKey.OnchainBalances, accountAddress, currency],
        queryFn: currency && accountAddress
            ? async () => await getOnChainBalancesFetch({
                currencyAddress: getCurrencyAddress(currency),
                chainId: currency.chainId,
                currencyIsNative: currency.isNative,
                accountAddress,
            })
            : skipToken,
        staleTime: refetchInterval,
        refetchInterval,
        gcTime: refetchInterval * 2,
    });
    return useMemo(() => {
        var _a;
        return ({
            balance: (_a = getCurrencyAmount({ value: data === null || data === void 0 ? void 0 : data.balance, valueType: ValueType.Raw, currency })) !== null && _a !== void 0 ? _a : undefined,
            isLoading: !(data === null || data === void 0 ? void 0 : data.balance),
            error,
        });
    }, [data === null || data === void 0 ? void 0 : data.balance, currency, error]);
}
export function useOnChainNativeCurrencyBalance(chain, accountAddress) {
    const currency = NativeCurrency.onChain(chain);
    const { balance, isLoading } = useOnChainCurrencyBalance(currency, accountAddress);
    return { balance: balance, isLoading };
}
//# sourceMappingURL=api.js.map