import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useMemo } from 'react';
import { isWeb } from 'utilities/src/platform';
const BottomSheetContext = createContext(undefined);
export function BottomSheetContextProvider({ children, isSheetReady, }) {
    const state = useMemo(() => ({
        isSheetReady,
    }), [isSheetReady]);
    return _jsx(BottomSheetContext.Provider, { value: state, children: children });
}
export const useBottomSheetContext = () => {
    const bottomSheetContext = useContext(BottomSheetContext);
    if (isWeb) {
        return { isSheetReady: true };
    }
    if (bottomSheetContext === undefined) {
        throw new Error('`useBottomSheetContext` must be used inside of `BottomSheetContextProvider`');
    }
    return bottomSheetContext;
};
//# sourceMappingURL=BottomSheetContext.js.map