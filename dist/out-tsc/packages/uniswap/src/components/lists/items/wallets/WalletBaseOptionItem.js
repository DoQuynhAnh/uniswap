import { jsx as _jsx } from "react/jsx-runtime";
import { OptionItem } from 'uniswap/src/components/lists/items/OptionItem';
import { WalletOptionItemContextMenu } from 'uniswap/src/components/lists/items/wallets/WalletOptionItemContextMenu';
import { useBooleanState } from 'utilities/src/react/useBooleanState';
export function WalletBaseOptionItem({ option, ...optionItemProps }) {
    const { value: isContextMenuOpen, setFalse: closeContextMenu, setTrue: openContextMenu } = useBooleanState(false);
    const { address, type } = option;
    return (_jsx(WalletOptionItemContextMenu, { address: address, isOpen: isContextMenuOpen, closeMenu: closeContextMenu, children: _jsx(OptionItem, { testID: `wallet-item-${type}-${address}`, onLongPress: openContextMenu, ...optionItemProps }) }));
}
//# sourceMappingURL=WalletBaseOptionItem.js.map