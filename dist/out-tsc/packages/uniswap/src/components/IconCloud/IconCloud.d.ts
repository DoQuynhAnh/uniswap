/// <reference types="react" />
export type FloatingElementPosition = 'left' | 'right';
export interface ItemData {
    color?: string;
    logoUrl: string;
}
export interface ItemPoint<T extends ItemData> {
    x: number;
    y: number;
    blur: number;
    size: number;
    color?: string;
    opacity: number;
    rotation: number;
    delay: number;
    floatDuration: number;
    floatingElementPosition: FloatingElementPosition;
    itemData: T;
}
export declare function IconCloud<T extends ItemData>({ data, minItemSize, maxItemSize, onPress, renderOuterElement, getElementRounded, }: {
    data: T[];
    minItemSize?: number;
    maxItemSize?: number;
    onPress?: (item: ItemPoint<T>) => void;
    renderOuterElement?: (item: ItemPoint<T>) => JSX.Element;
    getElementRounded?: (item: ItemPoint<T>) => boolean;
}): JSX.Element;
//# sourceMappingURL=IconCloud.d.ts.map