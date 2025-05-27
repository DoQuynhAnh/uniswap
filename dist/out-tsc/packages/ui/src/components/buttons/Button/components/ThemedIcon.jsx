import { cloneElement, memo } from 'react';
import { useStyle } from 'tamagui';
import { CustomButtonText } from 'ui/src/components/buttons/Button/components/CustomButtonText/CustomButtonText';
import { useIconSizes } from 'ui/src/components/buttons/Button/hooks/useIconSizes';
/* Note: This will only pass the themed props to the component that is a direct child
 * If this is an icon created by `createIcon`, great
 * Otherwise, if there's a wrapper, the wrapper will need to pass the props down to the icon created by `createIcon`
 */
const _ThemedIcon = ({ children, size = 'medium', variant, isDisabled, emphasis, typeOfButton, 'custom-background-color': customBackgroundColor, }) => {
    var _a, _b, _c, _d;
    const iconSizes = useIconSizes(typeOfButton);
    // @ts-expect-error we know the color will be there; deficiency in tamagui's types
    // TODO: possibly look into this as a performance bottleneck (refer to typedef for more info)
    const { color, '$group-item-hover': groupItemHover } = useStyle({ variant, emphasis, isDisabled, 'custom-background-color': customBackgroundColor }, {
        forComponent: CustomButtonText,
    });
    if (!children) {
        return null;
    }
    const finalGroupItemHover = (_b = (_a = children.props) === null || _a === void 0 ? void 0 : _a['$group-item-hover']) !== null && _b !== void 0 ? _b : groupItemHover;
    const width = iconSizes[size];
    const height = width;
    return cloneElement(children, {
        color: (_d = (_c = children.props) === null || _c === void 0 ? void 0 : _c.color) !== null && _d !== void 0 ? _d : color,
        width,
        height,
        '$group-item-hover': finalGroupItemHover,
    });
};
const ThemedIcon = memo(_ThemedIcon);
export { ThemedIcon };
//# sourceMappingURL=ThemedIcon.jsx.map