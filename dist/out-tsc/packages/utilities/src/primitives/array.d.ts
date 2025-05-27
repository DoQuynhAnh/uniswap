export declare function unique<T>(array: T[], isUnique?: (value: T, index: number, self: T[]) => boolean): T[];
export declare function next<T>(array: T[], current: T): T | undefined;
export declare function differenceWith<T>(array: T[], without: T[], comparator: (item1: T, item2: T) => boolean): T[];
export declare function arraysAreEqual<T>(arr1: T[], arr2: T[]): boolean;
export declare function bubbleToTop<T>(arr: T[], predicate: (element: T) => boolean): T[];
//# sourceMappingURL=array.d.ts.map