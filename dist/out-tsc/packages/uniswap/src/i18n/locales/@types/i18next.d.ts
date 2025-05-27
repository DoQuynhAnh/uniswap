import 'i18next';
declare const resources: {
    readonly translation: Record<string, string>;
};
declare module 'i18next' {
    interface CustomTypeOptions {
        resources: typeof resources;
    }
}
export {};
//# sourceMappingURL=i18next.d.ts.map