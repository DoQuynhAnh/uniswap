import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Flex } from 'ui/src';
import { useAccountMeta } from 'uniswap/src/contexts/UniswapContext';
import { InsufficientNativeTokenWarning } from 'uniswap/src/features/transactions/components/InsufficientNativeTokenWarning/InsufficientNativeTokenWarning';
import { BlockedAddressWarning } from 'uniswap/src/features/transactions/modals/BlockedAddressWarning';
import { useDebouncedGasInfo } from 'uniswap/src/features/transactions/swap/form/footer/hooks/useDebouncedGasInfo';
import { TradeInfoRow } from 'uniswap/src/features/transactions/swap/form/footer/tradeInfo/TradeInfoRow';
import { useParsedSwapWarnings } from 'uniswap/src/features/transactions/swap/hooks/useSwapWarnings';
import { useIsBlocked } from 'uniswap/src/features/trm/hooks';
export function GasAndWarningRows() {
    const account = useAccountMeta();
    const { isBlocked } = useIsBlocked(account === null || account === void 0 ? void 0 : account.address);
    const { formScreenWarning, warnings } = useParsedSwapWarnings();
    const inlineWarning = formScreenWarning && formScreenWarning.displayedInline && !isBlocked ? formScreenWarning.warning : undefined;
    const debouncedGasInfo = useDebouncedGasInfo();
    return (_jsx(_Fragment, { children: _jsxs(Flex, { gap: "$spacing12", children: [isBlocked && (
                // TODO: review design of this warning.
                _jsx(BlockedAddressWarning, { row: true, alignItems: "center", alignSelf: "stretch", backgroundColor: "$surface2", borderBottomLeftRadius: "$rounded16", borderBottomRightRadius: "$rounded16", flexGrow: 1, px: "$spacing16", py: "$spacing12" })), _jsx(Flex, { gap: "$spacing8", px: "$spacing8", py: "$spacing4", children: _jsx(TradeInfoRow, { gasInfo: debouncedGasInfo, warning: inlineWarning }) }), _jsx(InsufficientNativeTokenWarning, { flow: "swap", gasFee: debouncedGasInfo.gasFee, warnings: warnings })] }) }));
}
//# sourceMappingURL=GasAndWarningRows.web.js.map