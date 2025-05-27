/// <reference types="react" />
import { ColorTokens } from 'ui/src';
import { IconSizeTokens } from 'ui/src/theme';
type SwapFormSettingsButtonProps = {
    shouldShowCustomSlippage: boolean;
    shouldShowTooltip: boolean;
    customSlippageTolerance?: number;
    onPress: () => void;
    iconColor?: ColorTokens;
    iconSize?: IconSizeTokens;
};
export declare function SwapFormSettingsButton({ shouldShowTooltip, ...rest }: SwapFormSettingsButtonProps): JSX.Element;
export {};
//# sourceMappingURL=SwapFormSettingsButton.d.ts.map