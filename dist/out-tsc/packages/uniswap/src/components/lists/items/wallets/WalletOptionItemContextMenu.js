import { jsx as _jsx } from "react/jsx-runtime";
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Heart } from 'ui/src/components/icons/Heart';
import { ContextMenu } from 'uniswap/src/components/menus/ContextMenuV2';
import { ContextMenuTriggerMode } from 'uniswap/src/components/menus/types';
import { selectWatchedAddressSet } from 'uniswap/src/features/favorites/selectors';
import { useToggleWatchedWalletCallback } from 'uniswap/src/features/favorites/useToggleWatchedWalletCallback';
function _WalletOptionItemContextMenu({ children, address, isOpen, openMenu, closeMenu, }) {
    const { t } = useTranslation();
    const isFavorited = useSelector(selectWatchedAddressSet).has(address);
    const toggleFavoriteWallet = useToggleWatchedWalletCallback(address);
    const dropdownOptions = useMemo(() => [
        {
            onPress: toggleFavoriteWallet,
            label: isFavorited ? t('explore.wallets.favorite.action.remove') : t('explore.wallets.favorite.action.add'),
            Icon: Heart,
            iconColor: '$neutral2',
        },
    ], [isFavorited, t, toggleFavoriteWallet]);
    return (_jsx(ContextMenu, { menuItems: dropdownOptions, triggerMode: ContextMenuTriggerMode.Secondary, isOpen: isOpen, closeMenu: closeMenu, openMenu: openMenu, children: children }));
}
export const WalletOptionItemContextMenu = React.memo(_WalletOptionItemContextMenu);
//# sourceMappingURL=WalletOptionItemContextMenu.js.map