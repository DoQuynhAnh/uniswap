import { jsx as _jsx } from "react/jsx-runtime";
import { Text } from 'ui/src';
import { iconSizes } from 'ui/src/theme';
import { WalletBaseOptionItem } from 'uniswap/src/components/lists/items/wallets/WalletBaseOptionItem';
import { AccountIcon } from 'uniswap/src/features/accounts/AccountIcon';
import { useAvatar } from 'uniswap/src/features/address/avatar';
import { UnitagName } from 'uniswap/src/features/unitags/UnitagName';
import { sanitizeAddressText } from 'uniswap/src/utils/addresses';
import { shortenAddress } from 'utilities/src/addresses';
export function UnitagOptionItem({ unitagOption, onPress }) {
    const { address, unitag } = unitagOption;
    const { avatar } = useAvatar(address);
    return (_jsx(WalletBaseOptionItem, { option: unitagOption, image: _jsx(AccountIcon, { address: address, avatarUri: avatar, size: iconSizes.icon40 }), title: _jsx(UnitagName, { displayUnitagSuffix: true, displayIconInline: true, name: unitag, textProps: { variant: 'body1', lineHeight: undefined } }), subtitle: _jsx(Text, { color: "$neutral2", variant: "body2", children: sanitizeAddressText(shortenAddress(address)) }), onPress: onPress }));
}
//# sourceMappingURL=UnitagOptionItem.js.map