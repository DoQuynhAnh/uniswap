import { jsx as _jsx } from "react/jsx-runtime";
import { Flex, useSporeColors } from 'ui/src';
import { spacing } from 'ui/src/theme';
import { isAndroid } from 'utilities/src/platform';
const HANDLEBAR_HEIGHT = spacing.spacing4;
const HANDLEBAR_WIDTH = spacing.spacing36;
export const HandleBar = ({ indicatorColor = '$surface3', backgroundColor, hidden = false, containerFlexStyles, }) => {
    const colors = useSporeColors();
    const bg = hidden ? 'transparent' : backgroundColor !== null && backgroundColor !== void 0 ? backgroundColor : colors.surface1.get();
    return (_jsx(Flex, { mt: isAndroid ? '$spacing4' : '$none', children: _jsx(Flex, { alignItems: "center", borderTopLeftRadius: "$rounded24", borderTopRightRadius: "$rounded24", justifyContent: "center", style: {
                ...containerFlexStyles,
                backgroundColor: bg,
            }, children: _jsx(Flex, { alignSelf: "center", backgroundColor: hidden ? '$transparent' : indicatorColor, borderRadius: "$rounded24", height: HANDLEBAR_HEIGHT, overflow: "hidden", width: HANDLEBAR_WIDTH }) }) }));
};
//# sourceMappingURL=HandleBar.native.js.map