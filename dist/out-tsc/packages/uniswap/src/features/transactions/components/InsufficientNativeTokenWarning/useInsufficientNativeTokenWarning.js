import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from 'react';
import { Trans } from 'react-i18next';
import { Text } from 'ui/src';
import { WarningLabel } from 'uniswap/src/components/modals/WarningModal/types';
import { useEnabledChains } from 'uniswap/src/features/chains/hooks/useEnabledChains';
import { getChainLabel, toSupportedChainId } from 'uniswap/src/features/chains/utils';
import { useLocalizationContext } from 'uniswap/src/features/language/LocalizationContext';
import { NativeCurrency } from 'uniswap/src/features/tokens/NativeCurrency';
import { ValueType, getCurrencyAmount } from 'uniswap/src/features/tokens/getCurrencyAmount';
import { useNativeCurrencyInfo } from 'uniswap/src/features/tokens/useCurrencyInfo';
import { INSUFFICIENT_NATIVE_TOKEN_TEXT_VARIANT } from 'uniswap/src/features/transactions/components/InsufficientNativeTokenWarning/constants';
import { useUSDCValue } from 'uniswap/src/features/transactions/hooks/useUSDCPrice';
import { useNetworkColors } from 'uniswap/src/utils/colors';
import { NumberType } from 'utilities/src/format/types';
import { logger } from 'utilities/src/logger/logger';
/**
 * Shows a warning in 2 different cases:
 * 1. When the user doesn't have enough funds to cover the transaction's network cost.
 * 2. When the user is trying to swap a native token and they don't have enough of that token.
 */
export function useInsufficientNativeTokenWarning({ flow, gasFee, warnings, }) {
    var _a, _b;
    const { defaultChainId, isTestnetModeEnabled } = useEnabledChains();
    const { convertFiatAmountFormatted } = useLocalizationContext();
    const insufficientGasFundsWarning = warnings.find((w) => w.type === WarningLabel.InsufficientGasFunds);
    const insufficientFundsWarning = flow === 'swap' ? warnings.find((w) => w.type === WarningLabel.InsufficientFunds) : undefined;
    const warning = insufficientGasFundsWarning !== null && insufficientGasFundsWarning !== void 0 ? insufficientGasFundsWarning : insufficientFundsWarning;
    const shouldShowWarning = (warning === null || warning === void 0 ? void 0 : warning.type) === WarningLabel.InsufficientGasFunds ||
        ((warning === null || warning === void 0 ? void 0 : warning.type) === WarningLabel.InsufficientFunds && ((_a = warning.currency) === null || _a === void 0 ? void 0 : _a.isNative));
    const nativeCurrency = warning === null || warning === void 0 ? void 0 : warning.currency;
    const chainId = (_b = nativeCurrency === null || nativeCurrency === void 0 ? void 0 : nativeCurrency.chainId) !== null && _b !== void 0 ? _b : defaultChainId;
    const nativeCurrencyInfo = useNativeCurrencyInfo(chainId);
    const networkColors = useNetworkColors(chainId);
    const gasAmount = useMemo(() => getCurrencyAmount({
        value: gasFee.value,
        valueType: ValueType.Raw,
        currency: (nativeCurrency === null || nativeCurrency === void 0 ? void 0 : nativeCurrency.chainId) ? NativeCurrency.onChain(nativeCurrency.chainId) : undefined,
    }), [gasFee.value, nativeCurrency === null || nativeCurrency === void 0 ? void 0 : nativeCurrency.chainId]);
    const gasAmountUsd = useUSDCValue(gasAmount);
    const gasAmountFiatFormatted = convertFiatAmountFormatted(gasAmountUsd === null || gasAmountUsd === void 0 ? void 0 : gasAmountUsd.toExact(), NumberType.FiatGasPrice);
    if (!shouldShowWarning || !nativeCurrency || !nativeCurrencyInfo) {
        return null;
    }
    if (warning.type === WarningLabel.InsufficientGasFunds && !gasAmount) {
        logger.warn('useInsufficientNativeTokenWarning', 'useInsufficientNativeTokenWarning', 'No `gasAmount` found when trying to render `InsufficientNativeTokenWarning`', {
            warning,
            gasFee,
            nativeCurrency,
            nativeCurrencyInfo,
        });
        return null;
    }
    const supportedChainId = toSupportedChainId(nativeCurrency.chainId);
    if (!supportedChainId) {
        throw new Error(`Unsupported chain ID: ${nativeCurrency.chainId}`);
    }
    const networkName = getChainLabel(supportedChainId);
    const getModalOrTooltipMainMessage = () => {
        if (warning.type === WarningLabel.InsufficientGasFunds) {
            // When the user doesn't have enough funds to cover the transaction's network cost.
            const warningComponents = {
                // TODO(WALL-3901): move this to `value` once the bug in i18next is fixed.
                // We need to pass this as a `component` instead of a `value` because there seems to be a bug in i18next
                // which causes the value `<$0.01` to be incorrectly escaped.
                fiatTokenAmount: (_jsx(Text, { color: "$neutral2", variant: INSUFFICIENT_NATIVE_TOKEN_TEXT_VARIANT, children: gasAmountFiatFormatted })),
            };
            const warningValues = {
                networkName,
                tokenSymbol: nativeCurrency.symbol,
                tokenAmount: gasAmount === null || gasAmount === void 0 ? void 0 : gasAmount.toSignificant(2),
            };
            if (isTestnetModeEnabled) {
                return (_jsx(Trans, { components: warningComponents, i18nKey: "transaction.warning.insufficientGas.modal.message.noAction", values: warningValues }));
            }
            else {
                return (_jsx(Trans, { components: warningComponents, i18nKey: "transaction.warning.insufficientGas.modal.message", values: warningValues }));
            }
        }
        else {
            // When the user is trying to swap a native token and they don't have enough of that token.
            const values = {
                networkName,
                tokenSymbol: nativeCurrency.symbol,
            };
            if (isTestnetModeEnabled) {
                return (_jsx(Trans, { i18nKey: "transaction.warning.insufficientGas.modal.messageSwapWithoutTokenAmount.noAction", values: values }));
            }
            else {
                return (_jsx(Trans, { i18nKey: "transaction.warning.insufficientGas.modal.messageSwapWithoutTokenAmount", values: values }));
            }
        }
    };
    return {
        flow,
        gasAmount,
        gasAmountFiatFormatted,
        nativeCurrency,
        nativeCurrencyInfo,
        networkColors,
        networkName,
        modalOrTooltipMainMessage: getModalOrTooltipMainMessage(),
        warning,
    };
}
//# sourceMappingURL=useInsufficientNativeTokenWarning.js.map