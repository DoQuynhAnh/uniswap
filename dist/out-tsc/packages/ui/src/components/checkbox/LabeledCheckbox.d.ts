/// <reference types="react" />
import { StyleProp, ViewStyle } from 'react-native';
import { ColorTokens, SpaceTokens } from 'tamagui';
import { CheckboxSizeTokens } from 'ui/src/components/checkbox/Checkbox';
import { FlexProps } from 'ui/src/components/layout';
import { SporeComponentVariant } from 'ui/src/components/types';
export type LabeledCheckboxProps = {
    size?: CheckboxSizeTokens;
    checkboxPosition?: 'start' | 'end';
    checked: boolean;
    text?: string | JSX.Element;
    checkedColor?: ColorTokens;
    variant?: SporeComponentVariant;
    gap?: SpaceTokens;
    px?: SpaceTokens;
    py?: SpaceTokens;
    hoverStyle?: FlexProps;
    containerStyle?: StyleProp<ViewStyle | React.CSSProperties>;
    onCheckPressed?: (currentState: boolean) => void;
};
export declare function LabeledCheckbox({ checked, checkboxPosition, text, variant, size, gap, px, py, hoverStyle, containerStyle, onCheckPressed, }: LabeledCheckboxProps): JSX.Element;
//# sourceMappingURL=LabeledCheckbox.d.ts.map