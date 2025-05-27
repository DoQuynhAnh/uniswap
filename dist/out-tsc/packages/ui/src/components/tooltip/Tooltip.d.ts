/// <reference types="react" />
import { Tooltip as TamaguiTooltip, TooltipProps } from 'tamagui';
export type { TooltipProps } from 'tamagui';
type TriggerProps = React.ComponentProps<typeof TamaguiTooltip.Trigger>;
export type TooltipContentProps = React.ComponentProps<typeof TamaguiTooltip.Content> & {
    animationDirection?: 'left' | 'right' | 'top' | 'bottom';
};
type ArrowProps = React.ComponentProps<typeof TamaguiTooltip.Arrow>;
export declare const Tooltip: ((_props: TooltipProps) => never) & {
    Trigger: (_props: TriggerProps) => never;
    Content: (_props: TooltipContentProps) => never;
    Arrow: (_props: ArrowProps) => never;
};
//# sourceMappingURL=Tooltip.d.ts.map