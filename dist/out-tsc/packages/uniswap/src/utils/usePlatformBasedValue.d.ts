export type UsePlatformBasedValue<T> = {
    defaultValue: T;
    mobile?: {
        defaultValue?: T;
    };
    web?: {
        defaultValue?: T;
    };
    extension?: {
        defaultValue?: T;
        windowNotFocused?: T;
    };
};
export declare function usePlatformBasedValue<T>({ defaultValue, web, extension }: UsePlatformBasedValue<T>): T;
//# sourceMappingURL=usePlatformBasedValue.d.ts.map