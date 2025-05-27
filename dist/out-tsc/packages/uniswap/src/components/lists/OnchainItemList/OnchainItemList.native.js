import { jsx as _jsx } from "react/jsx-runtime";
import { memo, useCallback, useEffect, useMemo, useRef } from 'react';
import { AnimatedBottomSheetFlashList } from 'ui/src/components/AnimatedFlashList/AnimatedFlashList';
import { ProcessedRowType, processSectionsToRows, } from 'uniswap/src/components/lists/OnchainItemList/processSectionsToRows';
import { useAppInsets } from 'uniswap/src/hooks/useAppInsets';
const TOKEN_ITEM_SIZE = 64;
const AMOUNT_TO_DRAW = 18;
export const OnchainItemList = memo(function _OnchainItemList({ sectionListRef, ListEmptyComponent, keyExtractor, renderItem, renderSectionHeader, sections, }) {
    const insets = useAppInsets();
    const ref = useRef(null);
    useEffect(() => {
        if (sectionListRef) {
            sectionListRef.current = {
                scrollToLocation: ({ itemIndex, sectionIndex, animated }) => {
                    var _a;
                    (_a = ref.current) === null || _a === void 0 ? void 0 : _a.scrollToIndex({ index: itemIndex || sectionIndex, animated });
                },
            };
        }
    }, [sectionListRef]);
    const data = useMemo(() => {
        return processSectionsToRows(sections);
    }, [sections]);
    // TODO(WALL-5889): fix sticky header indices (prevent duplicates)
    // const stickyHeaderIndices: number[] = useMemo(() => {
    //   return data
    //     .map((row, index) => (row.type === ProcessedRowType.Header ? index : null))
    //     .filter((index) => index !== null) as number[]
    // }, [data])
    const renderFlashListItem = useCallback(({ item }) => {
        var _a;
        switch (item.type) {
            case ProcessedRowType.Header:
                return (_a = renderSectionHeader === null || renderSectionHeader === void 0 ? void 0 : renderSectionHeader(item.data)) !== null && _a !== void 0 ? _a : null;
            case ProcessedRowType.Item:
                return renderItem(item.data);
            default:
                return null;
        }
    }, [renderItem, renderSectionHeader]);
    const getItemType = useCallback((item) => item.type, []);
    const makeKey = useCallback((item, index) => {
        if (!keyExtractor) {
            return String(index);
        }
        switch (item.type) {
            case ProcessedRowType.Header:
                return `${item.data.section.sectionKey}-header-${index}`;
            case ProcessedRowType.Item:
                return `${keyExtractor(item.data.item, index)}-${index}`;
            default:
                return '';
        }
    }, [keyExtractor]);
    return (_jsx(AnimatedBottomSheetFlashList, { ref: ref, data: data, ListEmptyComponent: ListEmptyComponent, estimatedItemSize: TOKEN_ITEM_SIZE, contentContainerStyle: { paddingBottom: insets.bottom }, keyboardShouldPersistTaps: "always", keyExtractor: makeKey, keyboardDismissMode: "on-drag", renderItem: renderFlashListItem, getItemType: getItemType, showsVerticalScrollIndicator: false, drawDistance: TOKEN_ITEM_SIZE * AMOUNT_TO_DRAW }));
});
//# sourceMappingURL=OnchainItemList.native.js.map