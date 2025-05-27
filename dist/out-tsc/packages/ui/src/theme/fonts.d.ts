export type TextVariantTokens = keyof typeof fonts;
export declare const NATIVE_LINE_HEIGHT_SCALE = 1.15;
export declare const fonts: {
    readonly heading1: {
        readonly family: string;
        readonly fontSize: number;
        readonly lineHeight: number;
        readonly fontWeight: "400";
        readonly maxFontSizeMultiplier: 1.2;
        readonly letterSpacing: "-2%";
    };
    readonly heading2: {
        readonly family: string;
        readonly fontSize: number;
        readonly lineHeight: 40;
        readonly fontWeight: "400";
        readonly maxFontSizeMultiplier: 1.2;
        readonly letterSpacing: "-1%";
    };
    readonly heading3: {
        readonly family: string;
        readonly fontSize: number;
        readonly lineHeight: number;
        readonly fontWeight: "400";
        readonly maxFontSizeMultiplier: 1.2;
        readonly letterSpacing: "-0.5%";
    };
    readonly subheading1: {
        readonly family: string;
        readonly fontSize: number;
        readonly lineHeight: 24;
        readonly fontWeight: "400";
        readonly maxFontSizeMultiplier: 1.4;
    };
    readonly subheading2: {
        readonly family: string;
        readonly fontSize: number;
        readonly lineHeight: 20;
        readonly fontWeight: "400";
        readonly maxFontSizeMultiplier: 1.4;
    };
    readonly body1: {
        readonly family: string;
        readonly fontSize: number;
        readonly lineHeight: number;
        readonly fontWeight: "400";
        readonly maxFontSizeMultiplier: 1.4;
    };
    readonly body2: {
        readonly family: string;
        readonly fontSize: number;
        readonly lineHeight: number;
        readonly fontWeight: "400";
        readonly maxFontSizeMultiplier: 1.4;
    };
    readonly body3: {
        readonly family: string;
        readonly fontSize: number;
        readonly lineHeight: number;
        readonly fontWeight: "400";
        readonly maxFontSizeMultiplier: 1.4;
    };
    readonly body4: {
        readonly family: string;
        readonly fontSize: number;
        readonly lineHeight: 16;
        readonly fontWeight: "400";
        readonly maxFontSizeMultiplier: 1.4;
    };
    readonly buttonLabel1: {
        readonly family: string;
        readonly fontSize: number;
        readonly lineHeight: number;
        readonly fontWeight: "500";
        readonly maxFontSizeMultiplier: 1.2;
    };
    readonly buttonLabel2: {
        readonly family: string;
        readonly fontSize: number;
        readonly lineHeight: number;
        readonly fontWeight: "500";
        readonly maxFontSizeMultiplier: 1.2;
    };
    readonly buttonLabel3: {
        readonly family: string;
        readonly fontSize: number;
        readonly lineHeight: number;
        readonly fontWeight: "500";
        readonly maxFontSizeMultiplier: 1.2;
    };
    readonly buttonLabel4: {
        readonly family: string;
        readonly fontSize: number;
        readonly lineHeight: number;
        readonly fontWeight: "500";
        readonly maxFontSizeMultiplier: 1.2;
    };
    readonly monospace: {
        readonly family: string;
        readonly fontSize: number;
        readonly lineHeight: 16;
        readonly maxFontSizeMultiplier: 1.2;
    };
};
export declare const headingFont: {
    size: {
        small: number;
        medium: number;
        true: number;
        large: number;
    };
    weight: {
        book: string;
        true: string;
        medium: string;
    };
    lineHeight: {
        small: number;
        medium: 40;
        true: 40;
        large: number;
    };
    face?: {
        [x: string]: {
            normal: string;
        };
    } | undefined;
    family: string;
};
export declare const subHeadingFont: {
    size: {
        small: number;
        large: number;
        true: number;
    };
    weight: {
        book: string;
        true: string;
        medium: string;
    };
    lineHeight: {
        small: 20;
        large: 24;
        true: 24;
    };
    face?: {
        [x: string]: {
            normal: string;
        };
    } | undefined;
    family: string;
};
export declare const bodyFont: {
    size: {
        micro: number;
        small: number;
        medium: number;
        true: number;
        large: number;
    };
    weight: {
        book: string;
        true: string;
        medium: string;
    };
    lineHeight: {
        micro: 16;
        small: number;
        medium: number;
        true: number;
        large: number;
    };
    face?: {
        [x: string]: {
            normal: string;
        };
    } | undefined;
    family: string;
};
export declare const buttonFont: {
    family: string;
    size: {
        micro: number;
        small: number;
        medium: number;
        large: number;
        true: number;
    };
    weight: {
        true: string;
        book: string;
        medium: string;
    };
    lineHeight: {
        micro: number;
        small: number;
        medium: number;
        large: number;
        true: number;
    };
};
export declare const allFonts: {
    heading: {
        size: {
            small: number;
            medium: number;
            true: number;
            large: number;
        };
        weight: {
            book: string;
            true: string;
            medium: string;
        };
        lineHeight: {
            small: number;
            medium: 40;
            true: 40;
            large: number;
        };
        face?: {
            [x: string]: {
                normal: string;
            };
        } | undefined;
        family: string;
    };
    subHeading: {
        size: {
            small: number;
            large: number;
            true: number;
        };
        weight: {
            book: string;
            true: string;
            medium: string;
        };
        lineHeight: {
            small: 20;
            large: 24;
            true: 24;
        };
        face?: {
            [x: string]: {
                normal: string;
            };
        } | undefined;
        family: string;
    };
    body: {
        size: {
            micro: number;
            small: number;
            medium: number;
            true: number;
            large: number;
        };
        weight: {
            book: string;
            true: string;
            medium: string;
        };
        lineHeight: {
            micro: 16;
            small: number;
            medium: number;
            true: number;
            large: number;
        };
        face?: {
            [x: string]: {
                normal: string;
            };
        } | undefined;
        family: string;
    };
    button: {
        family: string;
        size: {
            micro: number;
            small: number;
            medium: number;
            large: number;
            true: number;
        };
        weight: {
            true: string;
            book: string;
            medium: string;
        };
        lineHeight: {
            micro: number;
            small: number;
            medium: number;
            large: number;
            true: number;
        };
    };
};
//# sourceMappingURL=fonts.d.ts.map