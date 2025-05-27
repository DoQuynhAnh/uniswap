import { jsx as _jsx } from "react/jsx-runtime";
import { parse } from 'qs';
import { createContext, useContext, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
export const UrlContext = createContext(null);
function useParsedQueryString() {
    const { search } = useLocation();
    return useMemo(() => {
        const hash = window.location.hash;
        const query = search || hash.substr(hash.indexOf('?'));
        return query && query.length > 1 ? parse(query, { parseArrays: false, ignoreQueryPrefix: true }) : {};
    }, [search]);
}
function usePathname() {
    const { pathname } = useLocation();
    return useMemo(() => {
        const windowPathname = window.location.pathname;
        return pathname || windowPathname;
    }, [pathname]);
}
export function ReactRouterUrlProvider({ children }) {
    return _jsx(UrlContext.Provider, { value: { useParsedQueryString, usePathname }, children: children });
}
export function BlankUrlProvider({ children }) {
    const value = useMemo(() => {
        return {
            useParsedQueryString: () => {
                return {};
            },
            usePathname: () => {
                return '';
            },
        };
    }, []);
    return _jsx(UrlContext.Provider, { value: value, children: children });
}
export function useUrlContext() {
    const context = useContext(UrlContext);
    if (!context) {
        throw new Error('useUrlContext must be used within a UrlProvider');
    }
    return context;
}
//# sourceMappingURL=UrlContext.js.map