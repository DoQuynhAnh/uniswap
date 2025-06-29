import { useMemo } from 'react';
import { I18nManager } from 'react-native';
import { Spacer } from 'tamagui';
import { CheckCircleFilled } from 'ui/src/components/icons';
import { Flex } from 'ui/src/components/layout';
import { Text } from 'ui/src/components/text';
import { TouchableArea } from 'ui/src/components/touchable';
import { useEvent } from 'utilities/src/react/hooks';
// Designated by Design Spec
// https://www.notion.so/uniswaplabs/Dropdown-Selector-91299ddf1ba94e2d8f0168350d2dc923?pvs=4
export const MAX_WIDTH = 250;
export const DropdownMenuSheetItem = ({ label, icon, isSelected, onPress, disabled, closeDelay, textColor, handleCloseMenu, variant, height, }) => {
    const handlePress = useEvent((e) => {
        e.stopPropagation();
        e.preventDefault();
        onPress();
        if (handleCloseMenu) {
            if (typeof closeDelay === 'number') {
                setTimeout(handleCloseMenu, closeDelay);
            }
            else {
                handleCloseMenu();
            }
        }
    });
    const flexDirection = I18nManager.isRTL ? 'row-reverse' : 'row';
    const hoverStyle = useMemo(() => ({ opacity: disabled ? 1 : 0.8 }), [disabled]);
    return (<TouchableArea hoverable flexGrow={1} py="$spacing8" px={variant === 'small' ? '$spacing12' : '$spacing8'} gap="$spacing8" flexDirection={flexDirection} justifyContent="space-between" alignItems="center" maxWidth={MAX_WIDTH} disabled={disabled} borderRadius="$rounded12" width="100%" userSelect="none" cursor={disabled ? 'default' : 'pointer'} backgroundColor="$background" height={height} onPress={handlePress}>
      <Flex shrink flexDirection={flexDirection} alignItems="center">
        {icon && <Flex flexShrink={0}>{icon}</Flex>}
        {icon && <Spacer size="$spacing8"/>}
        <Text flexShrink={1} numberOfLines={1} ellipsizeMode="tail" variant={variant === 'small' ? 'buttonLabel3' : 'buttonLabel2'} color={textColor !== null && textColor !== void 0 ? textColor : (disabled ? '$neutral2' : '$neutral1')} hoverStyle={hoverStyle}>
          {label}
        </Text>
      </Flex>
      <Flex flexShrink={0}>{isSelected ? <CheckCircleFilled size="$icon.20"/> : <Spacer size="$spacing20"/>}</Flex>
    </TouchableArea>);
};
//# sourceMappingURL=DropdownMenuSheetItem.jsx.map