import { jsx as _jsx } from "react/jsx-runtime";
import { memo, useCallback } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Flex } from 'ui/src';
import { spacing } from 'ui/src/theme';
import { TokenPill } from 'uniswap/src/components/TokenSelector/items/tokens/SuggestedToken';
export const HorizontalTokenList = memo(function _HorizontalTokenList({ tokens: suggestedTokens, onSelectCurrency, index, section, }) {
    const itemSeparatorComponent = useCallback(() => _jsx(Flex, { width: "$spacing8" }), []);
    return (_jsx(FlatList, { horizontal: true, contentContainerStyle: {
            paddingHorizontal: spacing.spacing16,
            paddingVertical: spacing.spacing4,
        }, data: suggestedTokens, keyExtractor: (token) => token.currencyInfo.currencyId, ItemSeparatorComponent: itemSeparatorComponent, renderItem: ({ item: token }) => (_jsx(TokenPill, { index: index, section: section, token: token, onSelectCurrency: onSelectCurrency }, token.currencyInfo.currencyId + token.currencyInfo.currency.chainId + section.sectionKey)), showsHorizontalScrollIndicator: false }));
});
//# sourceMappingURL=HorizontalTokenList.native.js.map