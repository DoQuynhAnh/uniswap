/// <reference types="react" />
import { type StyleProp, type ViewStyle } from 'react-native';
import type { SwitchProps } from 'ui/src/components/switch/types';
type CustomSwitchProps = Pick<SwitchProps, 'checked' | 'defaultChecked' | 'onCheckedChange' | 'disabled' | 'variant' | 'testID'> & {
    style?: StyleProp<ViewStyle>;
    pointerEvents?: Extract<SwitchProps['pointerEvents'], 'none'>;
};
export declare const Switch: import("react").NamedExoticComponent<CustomSwitchProps>;
export {};
//# sourceMappingURL=Switch.native.d.ts.map