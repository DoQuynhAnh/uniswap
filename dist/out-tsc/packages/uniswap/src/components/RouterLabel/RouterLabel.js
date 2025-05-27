import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Flex, UniswapXText } from 'ui/src';
import { UniswapX } from 'ui/src/components/icons/UniswapX';
import { useSwapTxContext } from 'uniswap/src/features/transactions/swap/contexts/SwapTxContext';
import { isClassic, isUniswapX } from 'uniswap/src/features/transactions/swap/utils/routing';
export function RouterLabel() {
    const { trade } = useSwapTxContext();
    const { t } = useTranslation();
    if (!trade) {
        return null;
    }
    if (isUniswapX(trade)) {
        return (_jsxs(Flex, { row: true, alignItems: "center", children: [_jsx(UniswapX, { size: "$icon.16", mr: "$spacing2" }), _jsx(UniswapXText, { variant: "body3", children: t('uniswapx.label') })] }));
    }
    if (isClassic(trade)) {
        return _jsx(_Fragment, { children: "Uniswap API" });
    }
    return null;
}
//# sourceMappingURL=RouterLabel.js.map