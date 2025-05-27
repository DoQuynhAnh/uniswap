import { Checkbox } from 'ui/src/components/checkbox/Checkbox';
import { Flex } from 'ui/src/components/layout';
import { Text } from 'ui/src/components/text';
import { TouchableArea } from 'ui/src/components/touchable';
export function LabeledCheckbox({ checked, checkboxPosition = 'start', text, variant, size = '$icon.20', gap = '$spacing12', px = '$spacing4', py, hoverStyle, containerStyle, onCheckPressed, }) {
    const onPress = (e) => {
        // Prevent event from bubbling up to parent
        e.preventDefault();
        e.stopPropagation();
        onCheckPressed === null || onCheckPressed === void 0 ? void 0 : onCheckPressed(checked);
    };
    const textElement = typeof text === 'string' ? (<Text $short={{ variant: 'buttonLabel4' }} variant="subheading2">
        {text}
      </Text>) : (text);
    return (<TouchableArea hoverable={!!hoverStyle} hoverStyle={hoverStyle} style={containerStyle} onPress={onPress}>
      <Flex row alignItems="center" gap={gap} px={px} py={py}>
        {checkboxPosition === 'start' && <Checkbox checked={checked} size={size} variant={variant} onPress={onPress}/>}
        {text && (<Flex grow shrink>
            {textElement}
          </Flex>)}
        {checkboxPosition === 'end' && <Checkbox checked={checked} size={size} variant={variant} onPress={onPress}/>}
      </Flex>
    </TouchableArea>);
}
//# sourceMappingURL=LabeledCheckbox.jsx.map