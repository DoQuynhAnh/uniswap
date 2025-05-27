import { useStyle } from 'tamagui';
import { CustomButtonText } from 'ui/src/components/buttons/Button/components/CustomButtonText/CustomButtonText';
import { useIconSizes } from 'ui/src/components/buttons/Button/hooks/useIconSizes';
import { SpinningLoader } from 'ui/src/loading/SpinningLoader';
export const ThemedSpinningLoader = ({ size = 'medium', variant, emphasis, isDisabled, typeOfButton, }) => {
    const iconSizes = useIconSizes(typeOfButton);
    // @ts-expect-error we know the color will be there; deficiency in tamagui's types
    // TODO: possibly look into this as a performance bottleneck (refer to typedef for more info)
    const { color } = useStyle({ variant, emphasis, isDisabled }, { forComponent: CustomButtonText });
    const loaderSize = iconSizes[size];
    return <SpinningLoader unstyled color={color} size={loaderSize}/>;
};
//# sourceMappingURL=ThemedSpinnerLoader.jsx.map