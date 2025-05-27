import React, { ReactNode } from 'react';
interface WalletOptionItemContextMenuProps {
    children: ReactNode;
    address: Address;
    isOpen: boolean;
    openMenu?: () => void;
    closeMenu: () => void;
}
declare function _WalletOptionItemContextMenu({ children, address, isOpen, openMenu, closeMenu, }: WalletOptionItemContextMenuProps): JSX.Element;
export declare const WalletOptionItemContextMenu: React.MemoExoticComponent<typeof _WalletOptionItemContextMenu>;
export {};
//# sourceMappingURL=WalletOptionItemContextMenu.d.ts.map