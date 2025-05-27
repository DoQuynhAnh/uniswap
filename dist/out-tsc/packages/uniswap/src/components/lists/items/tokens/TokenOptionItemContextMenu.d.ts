import { Currency } from '@uniswap/sdk-core';
import React, { ReactNode } from 'react';
import { ContextMenuProps } from 'uniswap/src/components/menus/ContextMenuV2';
import { ContextMenuTriggerMode } from 'uniswap/src/components/menus/types';
export declare enum TokenContextMenuAction {
    CopyAddress = "copyAddress",
    Favorite = "favorite",// wallet-only
    Swap = "swap",
    Send = "send",
    Receive = "receive",
    Share = "share",
    ViewDetails = "viewDetails",
    HideToken = "hideToken"
}
interface TokenOptionItemContextMenuProps {
    children: ReactNode;
    currency: Currency;
    isHiddenFromPortfolio?: boolean;
    isOpen: boolean;
    openMenu?: ContextMenuProps['openMenu'];
    closeMenu: ContextMenuProps['closeMenu'];
    triggerMode?: ContextMenuTriggerMode;
    actions: TokenContextMenuAction[];
}
declare function _TokenOptionItemContextMenu({ children, currency, isOpen, openMenu, closeMenu, triggerMode, actions, }: TokenOptionItemContextMenuProps): JSX.Element;
export declare const TokenOptionItemContextMenu: React.MemoExoticComponent<typeof _TokenOptionItemContextMenu>;
export {};
//# sourceMappingURL=TokenOptionItemContextMenu.d.ts.map