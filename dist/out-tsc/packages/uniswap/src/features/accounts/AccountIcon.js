import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, Unicon, UniversalImage, UniversalImageResizeMode } from 'ui/src';
import { Eye } from 'ui/src/components/icons/Eye';
// Determines view only icon size in relation to Account Icon size
const EYE_ICON_SCALING_FACTOR = 0.4;
export function AccountIcon({ size, showViewOnlyBadge, address, avatarUri, showBackground, showBorder, borderColor = '$surface1', borderWidth = '$spacing2', }) {
    // scale eye icon to be a portion of container size
    const eyeIconSize = size * EYE_ICON_SCALING_FACTOR;
    const uniconImage = _jsx(Unicon, { address: address, size: size });
    return (_jsxs(Flex, { backgroundColor: showBackground ? '$surface1' : '$transparent', borderColor: showBorder ? borderColor : '$transparent', borderRadius: "$roundedFull", borderWidth: showBorder ? borderWidth : '$none', position: "relative", testID: "account-icon", children: [avatarUri ? (_jsx(UniversalImage, { style: { image: { borderRadius: size } }, fallback: uniconImage, size: { width: size, height: size, resizeMode: UniversalImageResizeMode.Cover }, uri: avatarUri })) : (uniconImage), showViewOnlyBadge && (_jsx(Flex, { alignItems: "center", backgroundColor: "$surface2", borderColor: "$surface1", borderRadius: "$roundedFull", borderWidth: "$spacing2", bottom: -4, justifyContent: "center", position: "absolute", right: -4, testID: "account-icon/view-only-badge", children: _jsx(Eye, { color: "$neutral2", size: eyeIconSize }) }))] }));
}
//# sourceMappingURL=AccountIcon.js.map