/// <reference types="react" />
import { ColorTokens } from 'tamagui';
import { IconProps } from 'ui/src/components/factories/createIcon';
import { FlexProps } from 'ui/src/components/layout';
type Props = {
    width?: string | number;
    height?: string | number;
    direction?: 'up' | 'right' | 'down' | 'left' | 'start' | 'end';
    color?: ColorTokens;
} & Omit<FlexProps, 'direction' | '$group-item-hover'> & Pick<IconProps, '$group-item-hover'>;
declare function _RotatableChevron({ color, width, height, direction, animation, '$group-item-hover': $groupItemHover, ...rest }: Props): JSX.Element;
export declare const RotatableChevron: import("react").MemoExoticComponent<typeof _RotatableChevron>;
export {};
//# sourceMappingURL=RotatableChevron.d.ts.map