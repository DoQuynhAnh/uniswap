export type ExtractedColors = {
    primary?: string;
    secondary?: string;
    base?: string;
    detail?: string;
};
export type ColorStrategy = 'vibrant' | 'muted';
type ExtractedColorsOptions = {
    fallback?: string;
    cache?: boolean;
    colorStrategy?: ColorStrategy;
};
export declare function getExtractedColors(imageUrl: Maybe<string>, { fallback, cache, colorStrategy }: ExtractedColorsOptions): Promise<ExtractedColors | undefined>;
export {};
//# sourceMappingURL=getExtractedColors.d.ts.map