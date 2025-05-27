import { createStyledContext } from 'tamagui';
export const EXPANDED_COLOR = '$neutral2';
export const EXPANDED_HOVER_COLOR = '$neutral2Hovered';
// this ensures that the variant can be passed to the frame but will also thread down to the inner `DropdownButtonText`
export const dropdownButtonStyledContext = createStyledContext({
    size: 'medium',
    variant: 'default',
    emphasis: 'primary',
    isDisabled: false,
    isExpanded: false,
});
//# sourceMappingURL=constants.js.map