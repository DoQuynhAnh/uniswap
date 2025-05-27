import { TypeOfButton } from 'ui/src/components/buttons/Button/components/types';
import { ButtonProps } from 'ui/src/components/buttons/Button/types';
import { IconButtonProps } from 'ui/src/components/buttons/IconButton/IconButton';
type Size = NonNullable<ButtonProps['size'] | IconButtonProps['size']>;
declare const getIconSizesForButton: () => Record<Size, number>;
declare const getIconSizesForIconButton: () => Record<Size, number>;
export declare const useIconSizes: (typeOfButton: TypeOfButton) => ReturnType<typeof getIconSizesForButton | typeof getIconSizesForIconButton>;
export {};
//# sourceMappingURL=useIconSizes.d.ts.map