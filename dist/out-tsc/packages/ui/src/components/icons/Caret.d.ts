/// <reference types="react" />
import { IconSizeTokens } from 'ui/src/theme';
type Props = {
    size?: IconSizeTokens;
    direction?: 'n' | 's';
    color?: string;
};
export declare function _Caret({ size, color, direction }: Props): JSX.Element;
export declare const Caret: import("react").MemoExoticComponent<typeof _Caret>;
export declare const AnimatedCaretChange: import("react").ComponentClass<import("react-native-reanimated").AnimateProps<Omit<Omit<import("@tamagui/helpers-icon").IconProps, "size" | "height" | "width">, "color"> & {
    size?: number | "$icon.40" | "$icon.100" | "$icon.12" | "$icon.20" | "$icon.18" | "$icon.70" | "$icon.36" | "$icon.24" | "$icon.16" | "$icon.8" | "$icon.true" | "$icon.28" | "$icon.48" | "$icon.64" | {
        width: number;
        height: number;
    } | undefined;
    color?: string | (symbol & {
        __TYPE__: "Color";
    }) | (string & {}) | null | undefined;
    Component?: import("react").FunctionComponent<import("react-native-svg").SvgProps & {
        ref: import("react").ForwardedRef<import("react-native-svg").default>;
        style?: {
            color?: string | undefined;
        } | undefined;
    }> | undefined;
} & {
    hoverColor?: string | (symbol & {
        __TYPE__: "Color";
    }) | (string & {}) | null | undefined;
} & import("react").RefAttributes<import("react-native-svg").default>>, any>;
export {};
//# sourceMappingURL=Caret.d.ts.map