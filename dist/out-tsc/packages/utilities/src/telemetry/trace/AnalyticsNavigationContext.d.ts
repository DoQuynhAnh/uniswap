import { PropsWithChildren } from 'react';
interface AnalyticsNavigationContext {
    useIsPartOfNavigationTree(): boolean;
    shouldLogScreen(direct?: boolean, screen?: string): boolean;
}
export declare const useAnalyticsNavigationContext: () => AnalyticsNavigationContext;
export declare function AnalyticsNavigationContextProvider({ useIsPartOfNavigationTree, shouldLogScreen, children, }: PropsWithChildren<AnalyticsNavigationContext>): JSX.Element;
export {};
//# sourceMappingURL=AnalyticsNavigationContext.d.ts.map