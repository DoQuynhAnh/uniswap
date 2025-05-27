import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import isArray from 'lodash/isArray';
import isEqual from 'lodash/isEqual';
import React, { Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { VariableSizeList as List } from 'react-window';
import { Flex, useWindowDimensions } from 'ui/src';
import { zIndexes } from 'ui/src/theme';
import { ITEM_SECTION_HEADER_ROW_HEIGHT } from 'uniswap/src/components/TokenSelector/constants';
import { OnchainItemSectionName } from 'uniswap/src/components/lists/OnchainItemList/types';
import { KeyAction } from 'utilities/src/device/keyboard/types';
import { useKeyDown } from 'utilities/src/device/keyboard/useKeyDown';
const ITEM_ROW_HEIGHT = 64;
function isSectionHeader(rowInfo) {
    return !('renderItem' in rowInfo);
}
function isHorizontalTokenRowInfo(rowInfo) {
    const isHeader = isSectionHeader(rowInfo);
    return !isHeader && isArray(rowInfo.item);
}
export function OnchainItemList({ ListEmptyComponent, keyExtractor, renderItem, renderSectionHeader, sections, sectionListRef, expandedItems, focusedRowControl, }) {
    const ref = useRef(null);
    const listOuterRef = useRef(null);
    const rowHeightMap = useRef({});
    const [firstVisibleIndex, setFirstVisibleIndex] = useState(-1);
    const { width: windowWidth } = useWindowDimensions();
    useEffect(() => {
        if (sectionListRef) {
            sectionListRef.current = {
                scrollToLocation: ({ itemIndex, sectionIndex }) => {
                    var _a, _b, _c;
                    let listIndex = 0;
                    for (let i = 0; i < sectionIndex; i++) {
                        const section = sections[i];
                        listIndex += (_b = (_a = section === null || section === void 0 ? void 0 : section.data) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
                    }
                    listIndex += itemIndex;
                    (_c = ref.current) === null || _c === void 0 ? void 0 : _c.scrollToItem(listIndex);
                },
            };
        }
    }, [sectionListRef, sections]);
    const items = useMemo(() => {
        let rowIndex = 0;
        return sections.reduce((acc, section) => {
            if (section.sectionKey !== OnchainItemSectionName.SuggestedTokens) {
                const sectionInfo = {
                    section: {
                        sectionKey: section.sectionKey,
                        rightElement: section.rightElement,
                        endElement: section.endElement,
                    },
                    key: section.sectionKey,
                    renderSectionHeader,
                };
                rowIndex += 1;
                acc.push(sectionInfo);
            }
            const rows = acc.concat(section.data.map((item, index) => {
                var _a, _b;
                const itemInfo = {
                    item,
                    rowIndex,
                    section,
                    index,
                    key: keyExtractor === null || keyExtractor === void 0 ? void 0 : keyExtractor(item, index),
                    renderItem,
                    expanded: (_b = expandedItems === null || expandedItems === void 0 ? void 0 : expandedItems.includes((_a = keyExtractor === null || keyExtractor === void 0 ? void 0 : keyExtractor(item, index)) !== null && _a !== void 0 ? _a : '')) !== null && _b !== void 0 ? _b : false,
                };
                rowIndex += 1;
                return itemInfo;
            }));
            return rows;
        }, []);
    }, [sections, renderSectionHeader, keyExtractor, renderItem, expandedItems]);
    // Used for rendering the sticky header
    const activeSessionIndex = useMemo(() => {
        return items.slice(0, firstVisibleIndex + 1).reduceRight((acc, item, index) => {
            return acc === -1 && isSectionHeader(item) ? index : acc;
        }, -1);
    }, [firstVisibleIndex, items]);
    const updateRowHeight = useCallback((index, height) => {
        var _a;
        if (rowHeightMap.current[index] !== height) {
            rowHeightMap.current[index] = height;
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.resetAfterIndex(index);
        }
    }, []);
    const getRowHeight = useCallback((index) => {
        const item = items[index];
        if (!item) {
            return 0;
        }
        if (isHorizontalTokenRowInfo(item)) {
            if (!isSectionHeader(item)) {
                if (isArray(item.item) && !item.item.length) {
                    return 0;
                }
            }
            const measuredHeight = rowHeightMap.current[index];
            if (measuredHeight) {
                return measuredHeight;
            }
        }
        return isSectionHeader(item) ? ITEM_SECTION_HEADER_ROW_HEIGHT : ITEM_ROW_HEIGHT;
    }, [items]);
    const ListContent = useCallback(({ data, index, style }) => {
        if (activeSessionIndex === index) {
            return null;
        }
        return (_jsx(OnchainItemListRow, { data: data, index: index, style: style, updateRowHeight: updateRowHeight, windowWidth: windowWidth }));
    }, [updateRowHeight, windowWidth, activeSessionIndex]);
    const handleArrowKeyListScrolling = useCallback((event) => {
        if (!focusedRowControl) {
            return;
        }
        const { focusedRowIndex, setFocusedRowIndex } = focusedRowControl;
        if (listOuterRef.current) {
            listOuterRef.current.tabIndex = 0;
        }
        event.preventDefault();
        const firstItemRowIndex = items.length && items[0] && isSectionHeader(items[0]) ? 1 : 0; // if first row is a header, skip to the next row
        if (focusedRowIndex === undefined) {
            setFocusedRowIndex(firstItemRowIndex);
            return;
        }
        if (event.key === 'ArrowDown') {
            const newFocusedIndex = Math.min(items.length - 1, focusedRowIndex + 1);
            const itemAtNewFocusedIndex = items[newFocusedIndex];
            if (itemAtNewFocusedIndex && isSectionHeader(itemAtNewFocusedIndex)) {
                // skip focusing on section header
                setFocusedRowIndex(Math.min(items.length - 1, focusedRowIndex + 2));
            }
            else {
                setFocusedRowIndex(newFocusedIndex);
            }
        }
        if (event.key === 'ArrowUp') {
            const newFocusedIndex = Math.max(firstItemRowIndex, focusedRowIndex - 1);
            const itemAtNewFocusedIndex = items[newFocusedIndex];
            if (itemAtNewFocusedIndex && isSectionHeader(itemAtNewFocusedIndex)) {
                // skip focusing on section header
                setFocusedRowIndex(Math.max(firstItemRowIndex, focusedRowIndex - 2));
            }
            else {
                setFocusedRowIndex(newFocusedIndex);
            }
        }
    }, [focusedRowControl, items]);
    useKeyDown({
        callback: handleArrowKeyListScrolling,
        keys: ['ArrowDown', 'ArrowUp'],
        disabled: !sections.length || !focusedRowControl,
        keyAction: KeyAction.UP,
        preventDefault: true,
        shouldTriggerInInput: true,
    });
    useEffect(() => {
        const list = ref.current;
        const { focusedRowIndex } = focusedRowControl !== null && focusedRowControl !== void 0 ? focusedRowControl : {};
        if (!list || focusedRowIndex === undefined) {
            return;
        }
        list.scrollToItem(focusedRowIndex);
    }, [focusedRowControl]);
    return (_jsxs(Flex, { grow: true, maxHeight: "100dvh", children: [!sections.length && ListEmptyComponent, _jsx(AutoSizer, { disableWidth: true, children: ({ height }) => {
                    if (!sections.length) {
                        return _jsx(Fragment, {});
                    }
                    return (_jsxs(Flex, { position: "relative", children: [_jsx(Flex, { position: "absolute", top: 0, width: "100%", zIndex: zIndexes.sticky, children: activeSessionIndex >= 0 && (_jsx(OnchainItemListRow, { data: items, index: activeSessionIndex, windowWidth: windowWidth })) }), _jsx(List, { ref: ref, outerRef: listOuterRef, height: height, itemCount: items.length, itemData: items, itemSize: getRowHeight, width: "100%", onItemsRendered: ({ visibleStartIndex }) => {
                                    setFirstVisibleIndex(visibleStartIndex);
                                }, children: ListContent })] }));
                } })] }));
}
function OnchainItemListRow({ index, data, style, windowWidth, updateRowHeight, }) {
    const itemData = data[index];
    return (_jsx(_Fragment, { children: itemData && (_jsx(Row, { index: index, itemData: itemData, style: style, updateRowHeight: updateRowHeight, windowWidth: windowWidth })) }));
}
function _Row({ index, itemData, style, updateRowHeight }) {
    var _a;
    const rowRef = useRef(null);
    const handleLayout = useCallback((e) => {
        const height = e.nativeEvent.layout.height;
        if (height && updateRowHeight) {
            updateRowHeight(index, height);
        }
    }, [updateRowHeight, index]);
    const item = useMemo(() => {
        var _a, _b;
        if (!itemData) {
            return null;
        }
        if (isSectionHeader(itemData)) {
            return (_b = (_a = itemData.renderSectionHeader) === null || _a === void 0 ? void 0 : _a.call(itemData, itemData)) !== null && _b !== void 0 ? _b : null;
        }
        return itemData.renderItem(itemData);
    }, [itemData]);
    return (_jsx(Flex, { grow: true, alignItems: "center", justifyContent: "center", style: style, children: _jsx(Flex, { ref: rowRef, width: "100%", onLayout: handleLayout, children: item }) }, (_a = itemData === null || itemData === void 0 ? void 0 : itemData.key) !== null && _a !== void 0 ? _a : index));
}
const Row = React.memo(_Row, isEqual);
//# sourceMappingURL=OnchainItemList.web.js.map