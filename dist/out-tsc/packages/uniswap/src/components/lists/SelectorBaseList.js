import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useCallback, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimateTransition, Flex, Loader, Skeleton, Text } from 'ui/src';
import { fonts } from 'ui/src/theme';
import { BaseCard } from 'uniswap/src/components/BaseCard/BaseCard';
import { ITEM_SECTION_HEADER_ROW_HEIGHT } from 'uniswap/src/components/TokenSelector/constants';
import { OnchainItemList, } from 'uniswap/src/components/lists/OnchainItemList/OnchainItemList';
import { SectionHeader } from 'uniswap/src/components/lists/SectionHeader';
function EmptyResults() {
    const { t } = useTranslation();
    return (_jsx(Flex, { children: _jsx(Text, { color: "$neutral3", mt: "$spacing16", textAlign: "center", variant: "subheading2", children: t('common.noResults') }) }));
}
function _SelectorBaseList({ renderItem, sections, chainFilter, refetch, loading, hasError, emptyElement, errorText, keyExtractor, expandedItems, focusedRowControl, }) {
    const { t } = useTranslation();
    const sectionListRef = useRef();
    useEffect(() => {
        var _a;
        if (sections === null || sections === void 0 ? void 0 : sections.length) {
            (_a = sectionListRef.current) === null || _a === void 0 ? void 0 : _a.scrollToLocation({
                itemIndex: 0,
                sectionIndex: 0,
                animated: true,
            });
        }
    }, [chainFilter, sections === null || sections === void 0 ? void 0 : sections.length]);
    const renderSectionHeader = useCallback(({ section }) => (_jsx(SectionHeader, { rightElement: section.rightElement, endElement: section.endElement, sectionKey: section.sectionKey, name: section.name })), []);
    if (hasError) {
        return (_jsxs(_Fragment, { children: [_jsx(Flex, { grow: true, justifyContent: "center", children: _jsx(BaseCard.ErrorState, { retryButtonLabel: t('common.button.retry'), title: errorText !== null && errorText !== void 0 ? errorText : t('tokens.selector.error.load'), onRetry: refetch }) }), _jsx(Flex, { grow: true })] }));
    }
    return (_jsxs(AnimateTransition, { animationType: "fade", currentIndex: (!sections || !sections.length) && loading ? 0 : 1, children: [_jsxs(Flex, { grow: true, px: "$spacing20", children: [_jsx(Flex, { height: ITEM_SECTION_HEADER_ROW_HEIGHT, justifyContent: "center", py: "$spacing12", width: 80, children: _jsx(Skeleton, { children: _jsx(Loader.Box, { height: fonts.subheading2.lineHeight }) }) }), _jsx(Loader.Token, { gap: "$none", repeat: 15 })] }), _jsx(OnchainItemList, { ListEmptyComponent: emptyElement || _jsx(EmptyResults, {}), keyExtractor: keyExtractor, renderItem: renderItem, renderSectionHeader: renderSectionHeader, sectionListRef: sectionListRef, sections: sections !== null && sections !== void 0 ? sections : [], expandedItems: expandedItems, focusedRowControl: focusedRowControl })] }));
}
export const SelectorBaseList = memo(_SelectorBaseList);
//# sourceMappingURL=SelectorBaseList.js.map