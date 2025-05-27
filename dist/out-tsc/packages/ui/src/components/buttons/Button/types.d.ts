/// <reference types="react" />
import type { GetProps } from 'tamagui';
import { CustomButtonFrame } from 'ui/src/components/buttons/Button/components/CustomButtonFrame/CustomButtonFrame';
import type { FlexProps } from 'ui/src/components/layout';
export type ButtonVariant = 'default' | 'branded' | 'critical' | 'warning';
export type ButtonEmphasis = 'primary' | 'secondary' | 'tertiary' | 'text-only';
type ButtonSize = 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large';
type CustomButtonFrameProps = GetProps<typeof CustomButtonFrame>;
export type ButtonVariantProps = {
    size?: ButtonSize;
    variant?: ButtonVariant;
    emphasis?: ButtonEmphasis;
    isDisabled?: boolean;
    'custom-background-color'?: FlexProps['backgroundColor'];
};
export type ButtonProps = Omit<CustomButtonFrameProps, 'variant' | 'disabled'> & ButtonVariantProps & {
    /**
     * add icon before or after, passes color and size automatically if it's a Component
     */
    icon?: JSX.Element;
    /**
     * Will display a spinning loader instead of the button text
     * Color will be the same as the button text
     * Button will not be interactive
     */
    loading?: boolean;
    /**
     * Whether to apply a LayoutAnimation when the loading state changes
     */
    shouldAnimateBetweenLoadingStates?: boolean;
    /**
     * The Datadog action name for the button
     */
    'dd-action-name'?: string;
    /**
     * Callback function to be called when the button is disabled
     */
    onDisabledPress?: () => void;
};
export {};
//# sourceMappingURL=types.d.ts.map