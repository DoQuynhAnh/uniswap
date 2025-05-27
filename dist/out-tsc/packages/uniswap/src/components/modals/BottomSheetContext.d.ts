import { ReactNode } from 'react';
type BottomSheetContextState = {
    isSheetReady: boolean;
};
export declare function BottomSheetContextProvider({ children, isSheetReady, }: {
    children: ReactNode;
    isSheetReady: boolean;
}): JSX.Element;
export declare const useBottomSheetContext: () => BottomSheetContextState;
export {};
//# sourceMappingURL=BottomSheetContext.d.ts.map