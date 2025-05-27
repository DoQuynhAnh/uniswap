import type { LayoutChangeEvent } from 'react-native';
export declare function useDynamicFontSizing(maxCharWidthAtMaxFontSize: number, maxFontSize: number, minFontSize: number): {
    onLayout: (event: LayoutChangeEvent) => void;
    fontSize: number;
    onSetFontSize: (amount: string) => void;
};
//# sourceMappingURL=useDynamicFontSizing.d.ts.map