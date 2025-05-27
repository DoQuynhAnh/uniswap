import { useSporeColors } from 'ui/src';
export declare const ScrollArrow: ({ onPress, side }: {
    onPress: () => void;
    side: 'left' | 'right';
}) => JSX.Element;
export declare const GradientOverlay: ({ position, show, width, colors, }: {
    position: 'left' | 'right';
    show: boolean;
    width: number;
    colors: ReturnType<typeof useSporeColors>;
}) => JSX.Element | null;
//# sourceMappingURL=CarouselControls.d.ts.map