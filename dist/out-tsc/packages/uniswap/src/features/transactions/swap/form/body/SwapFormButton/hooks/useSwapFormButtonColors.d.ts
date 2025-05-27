import { type ButtonProps, type ColorTokens } from 'ui/src';
type ButtonColors = Pick<ButtonProps, 'backgroundColor' | 'variant' | 'emphasis'> & {
    buttonTextColor?: ColorTokens;
};
export declare const useSwapFormButtonColors: (tokenColor?: string) => ButtonColors;
export {};
//# sourceMappingURL=useSwapFormButtonColors.d.ts.map