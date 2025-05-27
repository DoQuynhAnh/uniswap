import { ReactElement } from 'react';
import { CheckboxProps as TamaguiCheckboxPops } from 'tamagui';
import { SporeComponentVariant } from 'ui/src/components/types';
export type CheckboxSizeTokens = '$icon.16' | '$icon.18' | '$icon.20';
type CheckboxProps = {
    variant?: SporeComponentVariant;
    checked: boolean;
    size?: CheckboxSizeTokens;
} & Omit<TamaguiCheckboxPops, 'size'>;
/**
 * Spore Checkbox
 *
 * @param checked - boolean value that determines if the checkbox is checked
 * @param variant - determines the color of the button in the selected state (branded is pink)
 * @param size - determines size of the checkbox - currently supports $icon.16 $icon.18 $icon.20
 * @returns
 */
export declare function Checkbox({ checked, variant, size, ...rest }: CheckboxProps): ReactElement;
export {};
//# sourceMappingURL=Checkbox.d.ts.map