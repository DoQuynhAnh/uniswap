/// <reference types="react" />
import { TypeOfButton } from 'ui/src/components/buttons/Button/components/types';
import type { ButtonVariantProps } from 'ui/src/components/buttons/Button/types';
export type ThemedIconProps = ButtonVariantProps & {
    typeOfButton: TypeOfButton;
    children?: JSX.Element;
};
declare const ThemedIcon: import("react").MemoExoticComponent<({ children, size, variant, isDisabled, emphasis, typeOfButton, "custom-background-color": customBackgroundColor, }: ThemedIconProps) => JSX.Element | null>;
export { ThemedIcon };
//# sourceMappingURL=ThemedIcon.d.ts.map