/** Dummy clipboard class. Overridden by mobile or extension related code. */
export interface IClipboard {
    setClipboard(value: string): Promise<void>;
    getClipboard(): Promise<string | void>;
    setClipboardImage(imageUrl: string | undefined): Promise<void>;
}
export declare function setClipboard(value: string): Promise<void>;
export declare function getClipboard(): Promise<string | void>;
export declare function setClipboardImage(imageUrl: string | undefined): Promise<void>;
//# sourceMappingURL=clipboard.d.ts.map