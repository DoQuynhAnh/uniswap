/// <reference types="react" />
import { OptionItemProps } from 'uniswap/src/components/lists/items/OptionItem';
import { UnitagOption } from 'uniswap/src/components/lists/items/types';
type UnitagOptionItemProps = {
    unitagOption: UnitagOption;
    onPress: OptionItemProps['onPress'];
};
export declare function UnitagOptionItem({ unitagOption, onPress }: UnitagOptionItemProps): JSX.Element;
export {};
//# sourceMappingURL=UnitagOptionItem.d.ts.map