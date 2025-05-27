import { forwardRef } from 'react';
import { styled } from 'tamagui';
import { CustomButtonFrame } from 'ui/src/components/buttons/Button/components/CustomButtonFrame/CustomButtonFrame';
import { ThemedIcon } from 'ui/src/components/buttons/Button/components/ThemedIcon';
import { ThemedSpinningLoader } from 'ui/src/components/buttons/Button/components/ThemedSpinnerLoader';
import { useButtonAnimationOnChange } from 'ui/src/components/buttons/Button/hooks/useButtonAnimationOnChange';
import { getIsButtonDisabled } from 'ui/src/components/buttons/Button/utils/getIsButtonDisabled';
const IconButtonFrame = styled(CustomButtonFrame, {
    variants: {
        size: {
            xxsmall: {
                p: '$spacing6',
                borderRadius: '$rounded12',
            },
            xsmall: {
                p: '$spacing8',
                borderRadius: '$rounded12',
            },
            small: {
                p: '$spacing8',
                borderRadius: '$rounded12',
            },
            medium: {
                p: '$spacing12',
                borderRadius: '$rounded16',
            },
            large: {
                p: '$spacing16',
                borderRadius: '$rounded20',
            },
        },
    },
});
export const IconButton = forwardRef(function IconButton({ icon, shouldAnimateBetweenLoadingStates = true, loading, isDisabled: propDisabled, size = 'medium', variant = 'default', emphasis = 'primary', focusScaling = 'equal:smaller-button', ...props }, ref) {
    useButtonAnimationOnChange({
        shouldAnimateBetweenLoadingStates,
        loading,
    });
    const isDisabled = getIsButtonDisabled({ isDisabled: propDisabled, loading });
    return (<IconButtonFrame ref={ref} fill={false} isDisabled={isDisabled} size={size} variant={variant} emphasis={emphasis} focusScaling={focusScaling} {...props}>
      <ThemedIcon isDisabled={isDisabled} emphasis={emphasis} size={size} variant={variant} typeOfButton="icon">
        {loading ? undefined : icon}
      </ThemedIcon>

      {loading ? (<ThemedSpinningLoader isDisabled={isDisabled} emphasis={emphasis} size={size} variant={variant} typeOfButton="icon"/>) : null}
    </IconButtonFrame>);
});
//# sourceMappingURL=IconButton.jsx.map