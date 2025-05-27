/// <reference types="react" />
import { SpaceTokens } from 'tamagui';
export interface SegmentedControlOption<T extends string = string> {
    value: T;
    display?: JSX.Element;
    wrapper?: JSX.Element;
}
type SegmentedControlSize = 'small' | 'smallThumbnail' | 'default' | 'large' | 'largeThumbnail';
interface SegmentedControlProps<T extends string = string> {
    options: readonly SegmentedControlOption<T>[];
    selectedOption: T;
    onSelectOption: (option: T) => void;
    size?: SegmentedControlSize;
    disabled?: boolean;
    fullWidth?: boolean;
    outlined?: boolean;
    gap?: SpaceTokens;
}
/**
 * Spore segmented control component, for selecting between multiple options.
 *
 * @param options - An array of options to display in the segmented control - must have between 2 and 6 options.
 *
 * Note: options can be just text (i.e. their value), or a value with a custom display element.
 * If you are defining custom display elements, you must ensure that each option fits within the vertical bounds of the SegmentedControl.
 *
 * For reference, the heights of the container are as follows (each with top and bottom padding of 4px):
 * - small: 30px
 * - default: 34px
 * - defaultThumbnail: 34px
 * - large: 42px
 * - largeThumbnail: 42px
 *
 * @param selectedOption - The value of the currently selected option.
 * @param onSelectOption - Callback function to be called when an option is selected.
 * @param size - The size of the segmented control which affects the height and padding.
 * @param disabled - Whether the segmented control is disabled.
 */
export declare function SegmentedControl<T extends string = string>({ options, selectedOption, onSelectOption, size, disabled, fullWidth, outlined, gap, }: SegmentedControlProps<T>): JSX.Element;
export {};
//# sourceMappingURL=SegmentedControl.d.ts.map