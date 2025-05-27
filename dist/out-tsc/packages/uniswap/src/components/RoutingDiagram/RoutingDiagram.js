import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Protocol } from '@uniswap/router-sdk';
import { Trans } from 'react-i18next';
import { Flex, styled as tamaguiStyled, Text, Tooltip } from 'ui/src';
import { DotLine } from 'ui/src/components/icons/DotLine';
import { zIndexes } from 'ui/src/theme';
import { CurrencyLogo } from 'uniswap/src/components/CurrencyLogo/CurrencyLogo';
import { SplitLogo } from 'uniswap/src/components/CurrencyLogo/SplitLogo';
import { BIPS_BASE } from 'uniswap/src/constants/misc';
import { useCurrencyInfo } from 'uniswap/src/features/tokens/useCurrencyInfo';
import { usePriceUXEnabled } from 'uniswap/src/features/transactions/swap/hooks/usePriceUXEnabled';
import { buildCurrencyId, buildNativeCurrencyId } from 'uniswap/src/utils/currencyId';
const PoolBadge = tamaguiStyled(Flex, {
    row: true,
    centered: true,
    p: '$spacing8',
});
const OpaqueBadge = tamaguiStyled(PoolBadge, {
    backgroundColor: '$surface2',
    borderRadius: '$rounded8',
    justifyContent: 'flex-start',
    p: '$spacing4',
    zIndex: zIndexes.sticky,
    '$platform-web': {
        display: 'grid',
        gridGap: '$spacing4',
        gridAutoFlow: 'column',
    },
});
const BadgeText = tamaguiStyled(Text, {
    variant: 'body4',
    '$platform-web': {
        wordBreak: 'normal',
    },
});
const currencyToCurrencyId = (currency) => {
    return 'address' in currency
        ? buildCurrencyId(currency.chainId, currency.address)
        : buildNativeCurrencyId(currency.chainId);
};
function Pool({ currency0, currency1, feeAmount, }) {
    const priceUXEnabled = usePriceUXEnabled();
    const currency0CurrencyInfo = useCurrencyInfo(currencyToCurrencyId(currency0));
    const currency1CurrencyInfo = useCurrencyInfo(currencyToCurrencyId(currency1));
    return (_jsxs(Tooltip, { placement: "top", children: [_jsx(Tooltip.Trigger, { children: _jsxs(OpaqueBadge, { children: [_jsx(Flex, { ml: 2, children: _jsx(SplitLogo, { chainId: currency0.chainId, inputCurrencyInfo: currency0CurrencyInfo, outputCurrencyInfo: currency1CurrencyInfo, size: priceUXEnabled ? 12 : 20 }) }), _jsxs(BadgeText, { children: [feeAmount / BIPS_BASE, "%"] })] }) }), _jsxs(Tooltip.Content, { children: [_jsx(Text, { variant: "body4", children: _jsx(Trans, { i18nKey: "pool.percent", values: { pct: (currency0 === null || currency0 === void 0 ? void 0 : currency0.symbol) + '/' + (currency1 === null || currency1 === void 0 ? void 0 : currency1.symbol) + ' ' + feeAmount / 10000 } }) }), _jsx(Tooltip.Arrow, {})] })] }));
}
export default function RoutingDiagram({ currencyIn, currencyOut, routes, }) {
    const currencyInCurrencyInfo = useCurrencyInfo(currencyToCurrencyId(currencyIn));
    const currencyOutCurrencyInfo = useCurrencyInfo(currencyToCurrencyId(currencyOut));
    return (_jsx(Flex, { children: routes.map((entry, index) => (_jsx(RouteRow, { entry: entry, currencyInCurrencyInfo: currencyInCurrencyInfo, currencyOutCurrencyInfo: currencyOutCurrencyInfo }, index))) }));
}
function RouteRow({ entry, currencyInCurrencyInfo, currencyOutCurrencyInfo, }) {
    const priceUXEnabled = usePriceUXEnabled();
    const { path } = entry;
    // If we only have 2 or fewer pools, show everything in one row
    if (path.length <= 2) {
        return (_jsxs(Flex, { row: true, alignItems: "center", gap: "$spacing4", children: [_jsx(CurrencyLogo, { currencyInfo: currencyInCurrencyInfo, size: priceUXEnabled ? 12 : 20 }), _jsx(Route, { entry: entry }), _jsx(CurrencyLogo, { currencyInfo: currencyOutCurrencyInfo, size: priceUXEnabled ? 12 : 20 })] }));
    }
    // For more than 2 pools, use a two-line layout
    return (_jsxs(Flex, { width: "100%", gap: "$spacing4", children: [_jsxs(Flex, { row: true, alignItems: "center", width: "100%", gap: "$spacing4", children: [_jsx(Flex, { ml: "$spacing4", children: _jsx(CurrencyLogo, { currencyInfo: currencyInCurrencyInfo, size: priceUXEnabled ? 12 : 20 }) }), _jsx(Flex, { flex: 1, children: _jsx(Route, { entry: { ...entry, path: path.slice(0, 2) } }) })] }), _jsxs(Flex, { row: true, alignItems: "center", width: "100%", gap: "$spacing4", children: [_jsx(Flex, { ml: "$spacing4", flex: 1, children: _jsx(Route, { entry: { ...entry, path: path.slice(2) }, showBadge: false }) }), _jsx(Flex, { mr: "$spacing4", children: _jsx(CurrencyLogo, { currencyInfo: currencyOutCurrencyInfo, size: priceUXEnabled ? 12 : 20 }) })] })] }));
}
function Route({ entry: { percent, path, protocol }, showBadge = true, }) {
    const badgeText = protocol === Protocol.MIXED
        ? [...new Set(path.map(([, , , p]) => p.toUpperCase()))].sort().join(' + ')
        : protocol.toUpperCase();
    return (_jsxs(Flex, { row: true, justifyContent: "space-evenly", flex: 1, position: "relative", width: "auto", py: "$spacing4", children: [_jsx(Flex, { alignItems: "center", position: "absolute", width: "100%", height: "100%", left: 0, top: 0, zIndex: 1, opacity: 0.5, children: _jsx(DotLine, { minWidth: "100%", minHeight: 35 }) }), showBadge && (_jsxs(OpaqueBadge, { children: [_jsx(BadgeText, { children: badgeText }), _jsxs(BadgeText, { style: { minWidth: 'auto' }, children: [percent.toSignificant(2), "%"] })] })), _jsx(Flex, { row: true, gap: "$spacing4", width: "auto", zIndex: 2, flex: 1, justifyContent: "space-evenly", alignItems: "center", children: path.map(([currency0, currency1, feeAmount], index) => (_jsx(Pool, { currency0: currency0, currency1: currency1, feeAmount: feeAmount }, index))) })] }));
}
//# sourceMappingURL=RoutingDiagram.js.map