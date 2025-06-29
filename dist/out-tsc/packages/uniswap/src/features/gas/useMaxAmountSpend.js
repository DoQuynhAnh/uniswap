import JSBI from 'jsbi';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { DynamicConfigs, SwapConfigKey } from 'uniswap/src/features/gating/configs';
import { useDynamicConfigValue } from 'uniswap/src/features/gating/hooks';
import { ValueType, getCurrencyAmount } from 'uniswap/src/features/tokens/getCurrencyAmount';
import { TransactionType } from 'uniswap/src/features/transactions/types/transactionDetails';
import { logger } from 'utilities/src/logger/logger';
const NATIVE_CURRENCY_DECIMAL = 18;
const NATIVE_CURRENCY_DECIMAL_OFFSET = NATIVE_CURRENCY_DECIMAL - 4;
/**
 * Given some token amount, return the max that can be spent of it
 * @param currencyAmount to return max of
 * @param transactionType to determine cost of transaction
 * @param isExtraTx adds a gas buffer to cover one additional transaction
 */
export function useMaxAmountSpend({ currencyAmount, txType, isExtraTx = false, }) {
    const minAmountPerTx = useGetMinAmount(currencyAmount === null || currencyAmount === void 0 ? void 0 : currencyAmount.currency.chainId, txType);
    const multiplierAsPercent = useLowBalanceWarningGasPercentage();
    if (!currencyAmount || !minAmountPerTx) {
        return undefined;
    }
    // if isExtraTx: minAmountPerTx * multiplierAsPercent / 100%
    // else: minAmountPerTx
    const minAmount = JSBI.divide(JSBI.multiply(minAmountPerTx, JSBI.BigInt(isExtraTx ? multiplierAsPercent : 100)), JSBI.BigInt(100));
    if (!currencyAmount.currency.isNative) {
        return currencyAmount;
    }
    // If amount is negative then set it to 0
    const amount = JSBI.greaterThan(currencyAmount.quotient, minAmount)
        ? JSBI.subtract(currencyAmount.quotient, minAmount).toString()
        : '0';
    return getCurrencyAmount({
        value: amount,
        valueType: ValueType.Raw,
        currency: currencyAmount.currency,
    });
}
function useGetMinAmount(chainId, txType) {
    const MIN_ETH_FOR_GAS = useMinEthForGas(txType);
    const MIN_POLYGON_FOR_GAS = useMinPolygonForGas(txType);
    const MIN_AVALANCHE_FOR_GAS = useMinAvalancheForGas(txType);
    const MIN_CELO_FOR_GAS = useMinCeloForGas(txType);
    const MIN_MON_FOR_GAS = useMinMonForGas(txType);
    const MIN_L2_FOR_GAS = useMinGenericL2ForGas(txType);
    if (!chainId) {
        return undefined;
    }
    switch (chainId) {
        case UniverseChainId.Mainnet:
            return MIN_ETH_FOR_GAS;
        case UniverseChainId.Sepolia:
            return MIN_ETH_FOR_GAS;
        case UniverseChainId.Polygon:
            return MIN_POLYGON_FOR_GAS;
        case UniverseChainId.Avalanche:
            return MIN_AVALANCHE_FOR_GAS;
        case UniverseChainId.Celo:
            return MIN_CELO_FOR_GAS;
        case UniverseChainId.MonadTestnet:
            return MIN_MON_FOR_GAS;
        case UniverseChainId.ArbitrumOne:
        case UniverseChainId.Optimism:
        case UniverseChainId.Base:
        case UniverseChainId.Bnb:
        case UniverseChainId.Blast:
        case UniverseChainId.WorldChain:
        case UniverseChainId.Zora:
        case UniverseChainId.Zksync:
        case UniverseChainId.Unichain:
        case UniverseChainId.UnichainSepolia:
        case UniverseChainId.Soneium:
            return MIN_L2_FOR_GAS;
        default:
            logger.error(new Error('unhandled chain when getting min gas amount'), {
                tags: {
                    file: 'useMaxAmountSpend.ts',
                    function: 'getMinAmount',
                },
            });
            return MIN_L2_FOR_GAS;
    }
}
export function useMinEthForGas(txType) {
    return useCalculateMinForGas(isSend(txType) ? SwapConfigKey.EthSendMinGasAmount : SwapConfigKey.EthSwapMinGasAmount, isSend(txType) ? 150 : 20);
}
export function useMinPolygonForGas(txType) {
    return useCalculateMinForGas(isSend(txType) ? SwapConfigKey.PolygonSendMinGasAmount : SwapConfigKey.PolygonSwapMinGasAmount, isSend(txType) ? 600 : 75);
}
export function useMinAvalancheForGas(txType) {
    return useCalculateMinForGas(isSend(txType) ? SwapConfigKey.AvalancheSendMinGasAmount : SwapConfigKey.AvalancheSwapMinGasAmount, isSend(txType) ? 200 : 25);
}
export function useMinCeloForGas(txType) {
    return useCalculateMinForGas(isSend(txType) ? SwapConfigKey.CeloSendMinGasAmount : SwapConfigKey.CeloSwapMinGasAmount, isSend(txType) ? 100 : 13);
}
export function useMinMonForGas(txType) {
    return useCalculateMinForGas(isSend(txType) ? SwapConfigKey.MonSendMinGasAmount : SwapConfigKey.MonSwapMinGasAmount, isSend(txType) ? 150 : 20);
}
export function useMinGenericL2ForGas(txType) {
    return useCalculateMinForGas(isSend(txType) ? SwapConfigKey.GenericL2SendMinGasAmount : SwapConfigKey.GenericL2SwapMinGasAmount, isSend(txType) ? 8 : 1);
}
export function useLowBalanceWarningGasPercentage() {
    return useDynamicConfigValue(DynamicConfigs.Swap, SwapConfigKey.LowBalanceWarningGasPercentage, 100);
}
export function useCalculateMinForGas(amount, defaultAmount) {
    const multiplier = useDynamicConfigValue(DynamicConfigs.Swap, amount, defaultAmount);
    return JSBI.multiply(JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(NATIVE_CURRENCY_DECIMAL_OFFSET)), JSBI.BigInt(multiplier));
}
function isSend(transactionType) {
    return transactionType === TransactionType.Send;
}
//# sourceMappingURL=useMaxAmountSpend.js.map