import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Flex, Text, UniswapXText } from 'ui/src';
import { UniswapX } from 'ui/src/components/icons/UniswapX';
import { iconSizes } from 'ui/src/theme';
import { NetworkLogo } from 'uniswap/src/components/CurrencyLogo/NetworkLogo';
import { IndicativeLoadingWrapper } from 'uniswap/src/components/misc/IndicativeLoadingWrapper';
import { useFormattedUniswapXGasFeeInfo, useGasFeeFormattedDisplayAmounts, useGasFeeHighRelativeToValue, } from 'uniswap/src/features/gas/hooks';
import { NetworkFeeWarning } from 'uniswap/src/features/transactions/modals/NetworkFeeWarning';
import { usePriceUXEnabled } from 'uniswap/src/features/transactions/swap/hooks/usePriceUXEnabled';
import { isInterface } from 'utilities/src/platform';
export function NetworkFee({ chainId, gasFee, uniswapXGasBreakdown, transactionUSDValue, indicative, }) {
    const { t } = useTranslation();
    const { gasFeeFormatted, gasFeeUSD } = useGasFeeFormattedDisplayAmounts({
        gasFee,
        chainId,
        placeholder: '-',
    });
    const uniswapXGasFeeInfo = useFormattedUniswapXGasFeeInfo(uniswapXGasBreakdown, chainId);
    const gasFeeHighRelativeToValue = useGasFeeHighRelativeToValue(gasFeeUSD, transactionUSDValue);
    const showHighGasFeeUI = gasFeeHighRelativeToValue && !isInterface; // Avoid high gas UI on interface
    return (_jsxs(Flex, { row: true, alignItems: "center", gap: "$spacing12", justifyContent: "space-between", children: [_jsx(NetworkFeeWarning, { gasFeeHighRelativeToValue: gasFeeHighRelativeToValue, uniswapXGasFeeInfo: uniswapXGasFeeInfo, chainId: chainId, children: _jsx(Text, { color: "$neutral2", flexShrink: 1, numberOfLines: 3, variant: "body3", children: t('transaction.networkCost.label') }) }), _jsx(IndicativeLoadingWrapper, { loading: indicative || (!gasFee.value && gasFee.isLoading), children: _jsxs(Flex, { row: true, alignItems: "center", gap: uniswapXGasBreakdown ? '$spacing4' : '$spacing8', children: [(!uniswapXGasBreakdown || gasFee.error) && (_jsx(NetworkLogo, { chainId: chainId, shape: "square", size: iconSizes.icon16 })), gasFee.error ? (_jsx(Text, { color: "$neutral2", variant: "body3", children: t('common.text.notAvailable') })) : uniswapXGasBreakdown ? (_jsx(UniswapXFee, { gasFee: gasFeeFormatted, preSavingsGasFee: uniswapXGasFeeInfo === null || uniswapXGasFeeInfo === void 0 ? void 0 : uniswapXGasFeeInfo.preSavingsGasFeeFormatted })) : (_jsx(Text, { color: gasFee.isLoading ? '$neutral3' : showHighGasFeeUI ? '$statusCritical' : '$neutral1', variant: "body3", children: gasFeeFormatted }))] }) })] }));
}
export function UniswapXFee({ gasFee, preSavingsGasFee, smaller = false, loading = false, }) {
    const priceUxEnabled = usePriceUXEnabled();
    if (priceUxEnabled) {
        return (_jsxs(Flex, { centered: true, row: true, gap: "$spacing4", children: [_jsx(UniswapX, { marginEnd: "$spacing2", size: smaller ? '$icon.12' : '$icon.16' }), _jsx(UniswapXText, { mr: "$spacing6", variant: smaller ? 'body4' : 'body3', children: gasFee }), preSavingsGasFee && (_jsx(Text, { color: loading ? '$neutral3' : '$neutral2', textDecorationLine: "line-through", variant: smaller ? 'body4' : 'body3', children: preSavingsGasFee }))] }));
    }
    return (_jsxs(Flex, { centered: true, row: true, children: [_jsx(UniswapX, { marginEnd: "$spacing2", size: smaller ? '$icon.12' : '$icon.16' }), _jsx(UniswapXText, { mr: "$spacing6", variant: smaller ? 'body4' : 'body3', children: gasFee }), preSavingsGasFee && (_jsx(Text, { color: "$neutral2", textDecorationLine: "line-through", variant: smaller ? 'body4' : 'body3', children: preSavingsGasFee }))] }));
}
//# sourceMappingURL=NetworkFee.js.map