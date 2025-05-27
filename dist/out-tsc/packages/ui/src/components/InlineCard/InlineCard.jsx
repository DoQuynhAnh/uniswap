import { Flex } from 'ui/src/components/layout/Flex';
import { Text } from 'ui/src/components/text/Text';
import { TouchableArea } from 'ui/src/components/touchable/TouchableArea/TouchableArea';
export function InlineCard({ Icon, iconColor, color, backgroundColor = '$surface2', iconBackgroundColor, heading, description, CtaButtonIcon, CtaButtonIconColor = '$neutral3', onPressCtaButton, }) {
    const icon = <Icon color={iconColor !== null && iconColor !== void 0 ? iconColor : color} size="$icon.20"/>;
    const iconElement = iconBackgroundColor ? (<Flex backgroundColor={iconBackgroundColor} borderRadius="$rounded12" p="$spacing8">
      {icon}
    </Flex>) : (icon);
    const descriptionElement = typeof description === 'string' ? (<Text color="$neutral2" variant="body3">
        {description}
      </Text>) : (description);
    const headingElement = typeof heading === 'string' ? (<Text color={color} variant="body3">
        {heading}
      </Text>) : (heading);
    return (<Flex row backgroundColor={backgroundColor} borderRadius="$rounded16" gap="$spacing12" p="$spacing12">
      <Flex>{iconElement}</Flex>
      <Flex fill grow row gap="$spacing4" justifyContent="space-between">
        <Flex fill grow gap="$spacing2">
          {headingElement}
          {descriptionElement}
        </Flex>
        {CtaButtonIcon && (<TouchableArea onPress={onPressCtaButton}>
            <CtaButtonIcon color={CtaButtonIconColor} size="$icon.20"/>
          </TouchableArea>)}
      </Flex>
    </Flex>);
}
//# sourceMappingURL=InlineCard.jsx.map