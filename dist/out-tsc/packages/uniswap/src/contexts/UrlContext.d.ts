import { ParsedQs } from 'qs';
import { ReactNode } from 'react';
interface UrlContext {
    useParsedQueryString: () => ParsedQs;
    usePathname: () => string;
}
export declare const UrlContext: import("react").Context<UrlContext | null>;
export declare function ReactRouterUrlProvider({ children }: {
    children: ReactNode | undefined;
}): JSX.Element;
export declare function BlankUrlProvider({ children }: {
    children: ReactNode | undefined;
}): JSX.Element;
export declare function useUrlContext(): UrlContext;
export {};
//# sourceMappingURL=UrlContext.d.ts.map