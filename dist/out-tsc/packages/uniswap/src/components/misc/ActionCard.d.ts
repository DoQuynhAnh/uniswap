/// <reference types="react" />
import { FlexProps } from 'ui/src';
import { ElementNameType } from 'uniswap/src/features/telemetry/constants';
export interface ActionCardItem {
    title: string;
    blurb: string;
    icon: JSX.Element;
    elementName: ElementNameType;
    badgeText?: string;
    containerProps?: FlexProps;
    hoverStyle?: FlexProps;
    leftAlign?: boolean;
    onPress?: () => void;
    BackgroundImageWrapperCallback?: React.FC<{
        children: React.ReactNode;
    }>;
}
export declare const ActionCard: ({ title, blurb, onPress, icon, elementName, containerProps, hoverStyle, leftAlign, BackgroundImageWrapperCallback, }: ActionCardItem) => JSX.Element;
//# sourceMappingURL=ActionCard.d.ts.map