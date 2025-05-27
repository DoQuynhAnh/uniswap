export declare function getKeys<T extends object>(obj: T): (keyof T)[];
export declare function flattenObjectOfObjects<T>(obj: Record<string, Record<string, T>>): T[];
export declare function unnestObject(ob: Record<string, any>): Record<string, string>;
export declare function getAllKeysOfNestedObject(obj: Record<string, unknown>, prefix?: string): string[];
export declare function sortKeysRecursively<T extends Record<string, unknown>>(input: T): T;
//# sourceMappingURL=objects.d.ts.map