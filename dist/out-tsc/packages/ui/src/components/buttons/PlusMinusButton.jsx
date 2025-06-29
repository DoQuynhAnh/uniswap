import { Plus as PlusIcon } from 'ui/src/components/icons';
import { Flex } from 'ui/src/components/layout/Flex';
import { TouchableArea } from 'ui/src/components/touchable/TouchableArea/TouchableArea';
import { iconSizes } from 'ui/src/theme';
export var PlusMinusButtonType;
(function (PlusMinusButtonType) {
    PlusMinusButtonType[PlusMinusButtonType["Plus"] = 0] = "Plus";
    PlusMinusButtonType[PlusMinusButtonType["Minus"] = 1] = "Minus";
})(PlusMinusButtonType || (PlusMinusButtonType = {}));
export function PlusMinusButton({ type, disabled, onPress, }) {
    return (<TouchableArea alignItems="center" backgroundColor={disabled ? '$surface3' : '$neutral2'} borderRadius="$roundedFull" disabled={disabled} height={iconSizes.icon28} justifyContent="center" width={iconSizes.icon28} onPress={() => onPress(type)}>
      {type === PlusMinusButtonType.Plus ? (<PlusIcon color="$surface1" size="$icon.12" strokeWidth={2.5}/>) : (<Flex backgroundColor="$surface1" borderRadius="$rounded12" height={2} width={10}/>)}
    </TouchableArea>);
}
//# sourceMappingURL=PlusMinusButton.jsx.map