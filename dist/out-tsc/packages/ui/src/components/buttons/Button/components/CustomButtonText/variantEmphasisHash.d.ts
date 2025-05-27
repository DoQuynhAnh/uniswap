import { TextProps } from 'tamagui';
import type { ButtonEmphasis, ButtonVariant } from 'ui/src/components/buttons/Button/types';
type TextStyleLookup = {
    [variant in ButtonVariant]: {
        [emphasis in ButtonEmphasis]: Pick<TextProps, 'color' | '$group-item-hover'>;
    };
};
export declare const variantEmphasisHash: TextStyleLookup;
export {};
//# sourceMappingURL=variantEmphasisHash.d.ts.map