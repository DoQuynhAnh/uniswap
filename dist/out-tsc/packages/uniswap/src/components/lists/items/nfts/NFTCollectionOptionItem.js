import { jsx as _jsx } from "react/jsx-runtime";
import { Text, UniversalImage } from 'ui/src';
import { Verified } from 'ui/src/components/icons/Verified';
import { borderRadii, iconSizes } from 'ui/src/theme';
import { OptionItem } from 'uniswap/src/components/lists/items/OptionItem';
import { TestID } from 'uniswap/src/test/fixtures/testIDs';
import { uriToHttpUrls } from 'utilities/src/format/urls';
export function NFTCollectionOptionItem({ collectionOption, onPress }) {
    const { name, isVerified, imageUrl } = collectionOption;
    return (_jsx(OptionItem, { image: _jsx(UniversalImage, { fallback: _jsx(Text, { color: "$neutral1", numberOfLines: 1, textAlign: "center", children: name.slice(0, 1) }), uri: imageUrl ? uriToHttpUrls(imageUrl)[0] : undefined, autoplay: false, size: { width: iconSizes.icon40, height: iconSizes.icon40 }, style: { image: { borderRadius: borderRadii.roundedFull } } }), title: name, badge: isVerified ? _jsx(Verified, { color: "$accent1", size: "$icon.16" }) : undefined, testID: TestID.SearchNFTCollectionItem, onPress: onPress }));
}
//# sourceMappingURL=NFTCollectionOptionItem.js.map