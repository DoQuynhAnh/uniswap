import { XStackProps } from 'tamagui';
import type { ButtonEmphasis, ButtonVariant } from 'ui/src/components/buttons/Button/types';
type ButtonStyleLookup = {
    [variant in ButtonVariant]: {
        [emphasis in ButtonEmphasis]: Pick<XStackProps, 'backgroundColor' | 'borderColor' | 'hoverStyle' | 'focusVisibleStyle' | 'pressStyle'>;
    };
};
export declare const variantEmphasisHash: ButtonStyleLookup;
export {};
//# sourceMappingURL=variantEmphasisHash.d.ts.map