import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from 'react';
const defaultState = {
    useIsPartOfNavigationTree: () => false,
    shouldLogScreen: (_direct, _screen) => true,
};
const context = createContext(defaultState);
export const useAnalyticsNavigationContext = () => useContext(context);
export function AnalyticsNavigationContextProvider({ useIsPartOfNavigationTree, shouldLogScreen, children, }) {
    return _jsx(context.Provider, { value: { useIsPartOfNavigationTree, shouldLogScreen }, children: children });
}
//# sourceMappingURL=AnalyticsNavigationContext.js.map