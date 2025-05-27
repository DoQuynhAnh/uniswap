import { PropsWithChildren } from 'react';
import { SharedValue } from 'react-native-reanimated';
export declare const SWIPEABLE_CARD_Y_OFFSET = 8;
type BaseCardProps = PropsWithChildren<{
    stackIndex: number;
    cardHeight: number;
    onLayout: ({ height, yOffset }: {
        height: number;
        yOffset: number;
    }) => void;
    panOffset?: SharedValue<number>;
}>;
export declare function BaseCard({ children, stackIndex, cardHeight, onLayout, panOffset }: BaseCardProps): JSX.Element;
export {};
//# sourceMappingURL=BaseCard.d.ts.map