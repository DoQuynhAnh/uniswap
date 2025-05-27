import { createStyledContext } from 'tamagui';
// this ensures that the variant can be passed to the frame but will also thread down to the inner text
export const buttonStyledContext = createStyledContext({
    size: 'medium',
    variant: 'default',
    emphasis: 'primary',
    isDisabled: false,
    'custom-background-color': undefined,
});
export const lineHeights = {
    xxsmall: '$micro',
    xsmall: '$small',
    small: '$small',
    medium: '$large',
    large: '$large',
};
export const lineHeightFallbacks = {
    $micro: 16,
    $small: 16,
    $medium: 20,
    $large: 24,
};
//# sourceMappingURL=constants.js.map