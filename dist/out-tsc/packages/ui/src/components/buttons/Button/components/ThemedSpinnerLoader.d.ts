import type { TypeOfButton } from 'ui/src/components/buttons/Button/components/types';
import type { ButtonVariantProps } from 'ui/src/components/buttons/Button/types';
type ThemedSpinningLoaderProps = Pick<ButtonVariantProps, 'size' | 'variant' | 'emphasis' | 'isDisabled'> & {
    typeOfButton: TypeOfButton;
};
export declare const ThemedSpinningLoader: ({ size, variant, emphasis, isDisabled, typeOfButton, }: ThemedSpinningLoaderProps) => JSX.Element;
export {};
//# sourceMappingURL=ThemedSpinnerLoader.d.ts.map