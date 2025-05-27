/// <reference types="react" />
type Direction = 'n' | 'e' | 's' | 'w' | 'ne' | 'se';
type Props = {
    size?: number;
    direction?: Direction;
    color?: string;
};
export declare function _Arrow({ size, color, direction }: Props): JSX.Element;
export declare const Arrow: import("react").MemoExoticComponent<typeof _Arrow>;
export {};
//# sourceMappingURL=Arrow.d.ts.map