/// <reference types="react" />
import { ItemData, ItemPoint } from 'uniswap/src/components/IconCloud/IconCloud';
export declare function CloudItem<T extends ItemData>({ point, renderOuterElement, getElementRounded, onPress, }: {
    point: ItemPoint<T>;
    renderOuterElement?: (point: ItemPoint<T>) => JSX.Element;
    getElementRounded?: (point: ItemPoint<T>) => boolean;
    onPress?: (point: ItemPoint<T>) => void;
}): JSX.Element;
//# sourceMappingURL=CloudItem.d.ts.map