export type SvgData = {
    content: string;
    aspectRatio: number;
};
export declare function fetchSVG(uri: string, autoplay: boolean, signal?: AbortSignal): Promise<SvgData>;
export declare function useSvgData(uri: string, autoplay?: boolean): SvgData | undefined;
//# sourceMappingURL=utils.d.ts.map