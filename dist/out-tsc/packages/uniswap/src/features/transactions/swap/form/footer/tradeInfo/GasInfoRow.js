import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, Text } from 'ui/src';
import { Gas } from 'ui/src/components/icons/Gas';
import { UniswapXFee } from 'uniswap/src/components/gas/NetworkFee';
import { NetworkFeeWarning } from 'uniswap/src/features/transactions/modals/NetworkFeeWarning';
import { usePriceUXEnabled } from 'uniswap/src/features/transactions/swap/hooks/usePriceUXEnabled';
import { TestID } from 'uniswap/src/test/fixtures/testIDs';
import { isInterface } from 'utilities/src/platform';
function NetworkFeeWarningContent({ gasInfo }) {
    var _a;
    const priceUXEnabled = usePriceUXEnabled();
    if (!gasInfo.fiatPriceFormatted) {
        return null;
    }
    const color = gasInfo.isHighRelativeToValue && !isInterface
        ? '$statusCritical'
        : priceUXEnabled && gasInfo.isLoading
            ? '$neutral3'
            : '$neutral2'; // Avoid high gas UI on interface
    const uniswapXSavings = (_a = gasInfo.uniswapXGasFeeInfo) === null || _a === void 0 ? void 0 : _a.preSavingsGasFeeFormatted;
    return uniswapXSavings ? (_jsx(UniswapXFee, { gasFee: gasInfo.fiatPriceFormatted, preSavingsGasFee: uniswapXSavings })) : (_jsxs(_Fragment, { children: [_jsx(Gas, { color: color, size: "$icon.16" }), _jsx(Text, { color: color, variant: "body3", children: gasInfo.fiatPriceFormatted })] }));
}
export function GasInfoRow({ gasInfo, hidden }) {
    const priceUXEnabled = usePriceUXEnabled();
    if (!gasInfo.fiatPriceFormatted) {
        return null;
    }
    return (_jsx(Flex, { centered: true, row: true, animation: "quick", enterStyle: { opacity: 0 }, opacity: priceUXEnabled ? 1 : hidden ? 0 : gasInfo.isLoading ? 0.6 : 1, children: _jsx(NetworkFeeWarning, { gasFeeHighRelativeToValue: gasInfo.isHighRelativeToValue, placement: isInterface ? 'top' : 'bottom', tooltipTrigger: _jsx(Flex, { centered: true, row: true, gap: "$spacing4", testID: TestID.GasInfoRow, children: _jsx(NetworkFeeWarningContent, { gasInfo: gasInfo }) }), uniswapXGasFeeInfo: gasInfo.uniswapXGasFeeInfo, chainId: gasInfo.chainId }) }));
}
//# sourceMappingURL=GasInfoRow.js.map