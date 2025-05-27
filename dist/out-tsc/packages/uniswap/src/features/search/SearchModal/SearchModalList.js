import { jsx as _jsx } from "react/jsx-runtime";
import { memo, useEffect, useState } from 'react';
import { Flex, TouchableArea } from 'ui/src';
import { MoreHorizontal } from 'ui/src/components/icons/MoreHorizontal';
import { iconSizes } from 'ui/src/theme';
import { useAddToSearchHistory } from 'uniswap/src/components/TokenSelector/hooks/useAddToSearchHistory';
import { SelectorBaseList } from 'uniswap/src/components/lists/SelectorBaseList';
import { NFTCollectionOptionItem } from 'uniswap/src/components/lists/items/nfts/NFTCollectionOptionItem';
import { PoolOptionItem } from 'uniswap/src/components/lists/items/pools/PoolOptionItem';
import { TokenContextMenuVariant, TokenOptionItem } from 'uniswap/src/components/lists/items/tokens/TokenOptionItem';
import { TokenContextMenuAction, TokenOptionItemContextMenu, } from 'uniswap/src/components/lists/items/tokens/TokenOptionItemContextMenu';
import { OnchainItemListOptionType } from 'uniswap/src/components/lists/items/types';
import { ENSAddressOptionItem } from 'uniswap/src/components/lists/items/wallets/ENSAddressOptionItem';
import { UnitagOptionItem } from 'uniswap/src/components/lists/items/wallets/UnitagOptionItem';
import { WalletByAddressOptionItem } from 'uniswap/src/components/lists/items/wallets/WalletByAddressOptionItem';
import { ContextMenuTriggerMode } from 'uniswap/src/components/menus/types';
import { useUniswapContext } from 'uniswap/src/contexts/UniswapContext';
import { sendSearchOptionItemClickedAnalytics } from 'uniswap/src/features/search/SearchModal/analytics/analytics';
import { isHoverable, isWeb } from 'utilities/src/platform';
import { usePrevious } from 'utilities/src/react/hooks';
import noop from 'utilities/src/react/noop';
import { useBooleanState } from 'utilities/src/react/useBooleanState';
export const SearchModalList = memo(function _SearchModalList({ sections, refetch, loading, hasError, emptyElement, errorText, onSelect, searchFilters, }) {
    const { navigateToTokenDetails, navigateToExternalProfile, navigateToNftCollection } = useUniswapContext();
    const { registerSearchItem } = useAddToSearchHistory();
    const { value: isContextMenuOpen, setFalse: closeContextMenu, toggle: toggleContextMenu } = useBooleanState(false);
    const [focusedRowIndex, setFocusedRowIndex] = useState(1); // set to 1st item hovered on first open
    // to handle closing the left-click '...' context menu when the focused row changes
    const previousFocusedRowIndex = usePrevious(focusedRowIndex);
    useEffect(() => {
        if (isWeb && previousFocusedRowIndex !== focusedRowIndex) {
            closeContextMenu();
        }
    }, [previousFocusedRowIndex, focusedRowIndex, closeContextMenu]);
    // eslint-disable-next-line consistent-return
    const renderItem = ({ item, section, rowIndex }) => {
        switch (item.type) {
            case OnchainItemListOptionType.Pool:
                return (_jsx(PoolOptionItem, { token0CurrencyInfo: item.token0CurrencyInfo, token1CurrencyInfo: item.token1CurrencyInfo, poolId: item.poolId, chainId: item.chainId, protocolVersion: item.protocolVersion, hookAddress: item.hookAddress, feeTier: item.feeTier, focusedRowControl: {
                        rowIndex,
                        setFocusedRowIndex,
                        focusedRowIndex,
                    }, onPress: () => {
                        registerSearchItem(item);
                        // TODO: navigate to pool details
                        sendSearchOptionItemClickedAnalytics({
                            item,
                            section,
                            rowIndex,
                            searchFilters,
                        });
                        onSelect === null || onSelect === void 0 ? void 0 : onSelect();
                    } }));
            case OnchainItemListOptionType.Token:
                return (_jsx(TokenOptionItem, { showTokenAddress: true, option: item, contextMenuVariant: TokenContextMenuVariant.Search, focusedRowControl: {
                        focusedRowIndex,
                        setFocusedRowIndex,
                        rowIndex,
                    }, rightElement: isHoverable && rowIndex === focusedRowIndex ? (_jsx(TouchableArea, { borderWidth: 1, hoverStyle: {
                            borderColor: '$surface3Hovered',
                        }, borderRadius: "$rounded12", onPress: (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleContextMenu();
                        }, children: _jsx(TokenOptionItemContextMenu, { actions: [
                                TokenContextMenuAction.CopyAddress,
                                ...(isWeb ? [] : [TokenContextMenuAction.Favorite]),
                                TokenContextMenuAction.Swap,
                                TokenContextMenuAction.Send,
                                TokenContextMenuAction.Receive,
                                TokenContextMenuAction.Share,
                            ], triggerMode: ContextMenuTriggerMode.Primary, currency: item.currencyInfo.currency, isOpen: previousFocusedRowIndex === focusedRowIndex && isContextMenuOpen, openMenu: noop, closeMenu: noop, children: _jsx(Flex, { p: "$spacing6", children: _jsx(MoreHorizontal, { size: iconSizes.icon16, color: "$neutral2" }) }) }) })) : undefined, onPress: () => {
                        registerSearchItem(item);
                        navigateToTokenDetails(item.currencyInfo.currencyId);
                        sendSearchOptionItemClickedAnalytics({
                            item,
                            section,
                            rowIndex,
                            searchFilters,
                        });
                        onSelect === null || onSelect === void 0 ? void 0 : onSelect();
                    } }));
            case OnchainItemListOptionType.WalletByAddress:
                return (_jsx(WalletByAddressOptionItem, { walletByAddressOption: item, onPress: () => {
                        navigateToExternalProfile({ address: item.address });
                        registerSearchItem(item);
                        sendSearchOptionItemClickedAnalytics({
                            item,
                            section,
                            rowIndex,
                            searchFilters,
                        });
                        onSelect === null || onSelect === void 0 ? void 0 : onSelect();
                    } }));
            case OnchainItemListOptionType.ENSAddress:
                return (_jsx(ENSAddressOptionItem, { ensAddressOption: item, onPress: () => {
                        navigateToExternalProfile({ address: item.address });
                        registerSearchItem(item);
                        sendSearchOptionItemClickedAnalytics({
                            item,
                            section,
                            rowIndex,
                            searchFilters,
                        });
                        onSelect === null || onSelect === void 0 ? void 0 : onSelect();
                    } }));
            case OnchainItemListOptionType.Unitag:
                return (_jsx(UnitagOptionItem, { unitagOption: item, onPress: () => {
                        navigateToExternalProfile({ address: item.address });
                        registerSearchItem(item);
                        sendSearchOptionItemClickedAnalytics({
                            item,
                            section,
                            rowIndex,
                            searchFilters,
                        });
                        onSelect === null || onSelect === void 0 ? void 0 : onSelect();
                    } }));
            case OnchainItemListOptionType.NFTCollection:
                return (_jsx(NFTCollectionOptionItem, { collectionOption: item, onPress: () => {
                        const { address, chainId } = item;
                        navigateToNftCollection({ collectionAddress: address, chainId });
                        registerSearchItem(item);
                        sendSearchOptionItemClickedAnalytics({
                            item,
                            section,
                            rowIndex,
                            searchFilters,
                        });
                        onSelect === null || onSelect === void 0 ? void 0 : onSelect();
                    } }));
        }
    };
    return (_jsx(SelectorBaseList, { focusedRowControl: {
            focusedRowIndex,
            setFocusedRowIndex,
        }, renderItem: renderItem, sections: sections, chainFilter: searchFilters.searchChainFilter, refetch: refetch, loading: loading, hasError: hasError, emptyElement: emptyElement, errorText: errorText, keyExtractor: key }));
});
// eslint-disable-next-line consistent-return
function key(item) {
    switch (item.type) {
        case OnchainItemListOptionType.Pool:
            return `pool-${item.chainId}-${item.poolId}-${item.protocolVersion}-${item.hookAddress}-${item.feeTier}`;
        case OnchainItemListOptionType.Token:
            return `token-${item.currencyInfo.currency.chainId}-${item.currencyInfo.currencyId}`;
        case OnchainItemListOptionType.WalletByAddress:
            return `wallet-${item.address}`;
        case OnchainItemListOptionType.ENSAddress:
            return `ens-${item.address}`;
        case OnchainItemListOptionType.Unitag:
            return `unitag-${item.address}`;
        case OnchainItemListOptionType.NFTCollection:
            return `nft-${item.chainId}-${item.address}`;
    }
}
//# sourceMappingURL=SearchModalList.js.map