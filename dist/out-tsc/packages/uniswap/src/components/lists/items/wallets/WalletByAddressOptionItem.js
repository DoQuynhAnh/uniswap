import { jsx as _jsx } from "react/jsx-runtime";
import { iconSizes } from 'ui/src/theme';
import { OnchainItemListOptionType, } from 'uniswap/src/components/lists/items/types';
import { ENSAddressOptionItem } from 'uniswap/src/components/lists/items/wallets/ENSAddressOptionItem';
import { UnitagOptionItem } from 'uniswap/src/components/lists/items/wallets/UnitagOptionItem';
import { WalletBaseOptionItem } from 'uniswap/src/components/lists/items/wallets/WalletBaseOptionItem';
import { AccountIcon } from 'uniswap/src/features/accounts/AccountIcon';
import { DisplayNameType } from 'uniswap/src/features/accounts/types';
import { useOnchainDisplayName } from 'uniswap/src/features/accounts/useOnchainDisplayName';
import { useAvatar } from 'uniswap/src/features/address/avatar';
import { ENS_SUFFIX } from 'uniswap/src/features/ens/constants';
export function WalletByAddressOptionItem({ walletByAddressOption, onPress, }) {
    var _a;
    const { address } = walletByAddressOption;
    const { avatar } = useAvatar(address);
    // Since we only save address in search history, we should check if the associated wallet actually has an ENS/Unitag name, and display accordingly
    const displayName = useOnchainDisplayName(address);
    if ((displayName === null || displayName === void 0 ? void 0 : displayName.type) === DisplayNameType.Unitag) {
        const unitagOption = {
            type: OnchainItemListOptionType.Unitag,
            address,
            unitag: displayName.name,
        };
        return _jsx(UnitagOptionItem, { unitagOption: unitagOption, onPress: onPress });
    }
    else if ((displayName === null || displayName === void 0 ? void 0 : displayName.type) === DisplayNameType.ENS) {
        const ensAddressOption = {
            type: OnchainItemListOptionType.ENSAddress,
            address,
            ensName: displayName.name,
            isRawName: !displayName.name.endsWith(ENS_SUFFIX), // Ensure raw name is used for subdomains only
        };
        return _jsx(ENSAddressOptionItem, { ensAddressOption: ensAddressOption, onPress: onPress });
    }
    return (_jsx(WalletBaseOptionItem, { option: walletByAddressOption, image: _jsx(AccountIcon, { address: address, avatarUri: avatar, size: iconSizes.icon40 }), title: (_a = displayName === null || displayName === void 0 ? void 0 : displayName.name) !== null && _a !== void 0 ? _a : '', onPress: onPress }));
}
//# sourceMappingURL=WalletByAddressOptionItem.js.map