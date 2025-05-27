import { PropsWithChildren, ReactElement } from 'react';
import { RadioGroupItemProps, RadioGroupProps } from 'tamagui';
import { SporeComponentVariant } from 'ui/src/components/types';
type RadioButtonGroupProps = PropsWithChildren<RadioGroupProps>;
/**
 * The container for RadioButtons that handles the state of the selected button.
 *
 * @param orientation - the direction in which the radio buttons are laid out
 */
export declare function RadioButtonGroup(props: RadioButtonGroupProps): ReactElement;
type RadioButtonProps = {
    variant?: SporeComponentVariant;
} & RadioGroupItemProps;
/**
 * Spore Radio Button
 *
 * Must be used within the provided RadioButtonGroup.
 * example usage:
 *
 * ```tsx
 * <RadioButtonGroup defaultValue="option1" onValueChange={<set managed state here>}>
 *  <RadioButton value="option1" variant="branded" />
 *  <RadioButton value="option2" />
 *
 *  // You can also listen for specific button presses:
 *  <RadioButton value="option3" onPress={<do something specific for option3>} />
 *
 * </RadioButtonGroup>
 *
 * @param value - the unique value for this RadioButton within it's containing RadioGroup
 * @param variant - determines the color of the button in the selected state (branded is pink)
 * @returns
 */
export declare function RadioButton({ value, variant, ...rest }: RadioButtonProps): ReactElement;
export {};
//# sourceMappingURL=Radio.d.ts.map