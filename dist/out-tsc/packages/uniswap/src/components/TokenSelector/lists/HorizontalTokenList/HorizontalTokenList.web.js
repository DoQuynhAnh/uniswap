import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useEffect, useRef, useState } from 'react';
import { Flex, Text, TouchableArea } from 'ui/src/';
import { TokenCard } from 'uniswap/src/components/TokenSelector/items/tokens/TokenCard';
const MAX_CARDS_PER_ROW = 5;
export const HorizontalTokenList = memo(function _HorizontalTokenList({ tokens: suggestedTokens, onSelectCurrency, index, section, expanded, onExpand, }) {
    const containerRef = useRef(null);
    const [containerHeight, setContainerHeight] = useState(undefined);
    const shouldShowExpansion = suggestedTokens.length > MAX_CARDS_PER_ROW;
    const visibleTokens = shouldShowExpansion
        ? expanded
            ? suggestedTokens
            : suggestedTokens.slice(0, MAX_CARDS_PER_ROW - 1)
        : suggestedTokens;
    const remainingCount = shouldShowExpansion ? suggestedTokens.length - MAX_CARDS_PER_ROW + 1 : 0;
    // Hack to animate the height of the container when the tokens get expanded
    useEffect(() => {
        if (containerRef.current) {
            setContainerHeight(containerRef.current.scrollHeight);
        }
    }, [visibleTokens]);
    return (_jsxs(Flex, { ref: containerRef, row: true, gap: "$spacing4", flexWrap: "wrap", py: "$spacing8", mx: "$spacing20", animation: expanded ? '300ms' : undefined, height: containerHeight, children: [visibleTokens.map((token) => (_jsx(Flex, { style: styles.fiveTokenRowCard, children: _jsx(TokenCard, { index: index, section: section, token: token, onSelectCurrency: onSelectCurrency }, token.currencyInfo.currencyId) }, token.currencyInfo.currencyId))), !expanded && remainingCount > 0 && (_jsx(TouchableArea, { style: styles.fiveTokenRowCard, onPress: () => onExpand === null || onExpand === void 0 ? void 0 : onExpand(), children: _jsx(Flex, { fill: true, centered: true, borderRadius: "$rounded16", backgroundColor: "$surface2", children: _jsxs(Text, { variant: "buttonLabel3", color: "$neutral2", children: [remainingCount, "+"] }) }) }))] }, `horizontal-token-list-${visibleTokens.length}-${index}-${section}`));
});
const styles = {
    fiveTokenRowCard: {
        width: 'calc(20% - 4px)',
    },
};
//# sourceMappingURL=HorizontalTokenList.web.js.map