import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Text } from 'ui/src';
import { iconSizes } from 'ui/src/theme';
import { WalletBaseOptionItem } from 'uniswap/src/components/lists/items/wallets/WalletBaseOptionItem';
import { AccountIcon } from 'uniswap/src/features/accounts/AccountIcon';
import { useENSAvatar, useENSName } from 'uniswap/src/features/ens/api';
import { getCompletedENSName } from 'uniswap/src/features/ens/useENS';
import { sanitizeAddressText } from 'uniswap/src/utils/addresses';
import { shortenAddress } from 'utilities/src/addresses';
export function ENSAddressOptionItem({ ensAddressOption, onPress }) {
    var _a;
    const { t } = useTranslation();
    // Use `savedPrimaryEnsName` for WalletSearchResults that are stored in the search history
    // so that we don't have to do an additional ENS fetch when loading search history
    const { address, ensName, primaryENSName: savedPrimaryENSName, isRawName } = ensAddressOption;
    const formattedAddress = sanitizeAddressText(shortenAddress(address));
    // Get the completed name if it's not a raw name
    const completedENSName = isRawName ? ensName : getCompletedENSName(ensName !== null && ensName !== void 0 ? ensName : null);
    /*
     * Fetch primary ENS associated with `address` since it may resolve to an
     * ENS different than the `ensName` searched
     * ex. if searching `uni.eth` resolves to 0x123, and the primary ENS for 0x123
     * is `uniswap.eth`, then we should show "uni.eth | owned by uniswap.eth"
     */
    const { data: fetchedPrimaryENSName, isLoading: isFetchingPrimaryENSName } = useENSName(savedPrimaryENSName ? undefined : address);
    const primaryENSName = savedPrimaryENSName !== null && savedPrimaryENSName !== void 0 ? savedPrimaryENSName : fetchedPrimaryENSName;
    const isPrimaryENSName = completedENSName === primaryENSName;
    const showOwnedBy = !isFetchingPrimaryENSName && !isPrimaryENSName;
    const showAddress = !showOwnedBy;
    const { data: avatar } = useENSAvatar(address);
    return (_jsx(WalletBaseOptionItem, { option: ensAddressOption, image: _jsx(AccountIcon, { address: address, avatarUri: avatar, size: iconSizes.icon40 }), title: (_a = (completedENSName || formattedAddress)) !== null && _a !== void 0 ? _a : '', subtitle: _jsxs(Text, { color: "$neutral2", ellipsizeMode: "tail", numberOfLines: 1, variant: "subheading2", children: [showOwnedBy &&
                    t('explore.search.label.ownedBy', {
                        ownerAddress: primaryENSName || formattedAddress,
                    }), showAddress && formattedAddress] }), onPress: onPress }));
}
//# sourceMappingURL=ENSAddressOptionItem.js.map