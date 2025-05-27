import type { BottomSheetView } from '@gorhom/bottom-sheet';
import { ComponentProps } from 'react';
import type { TransactionSettingConfig } from 'uniswap/src/features/transactions/components/settings/types';
interface SwapFormScreenProps {
    hideContent: boolean;
    hideFooter?: boolean;
    settings: TransactionSettingConfig[];
    tokenColor?: string;
    focusHook?: ComponentProps<typeof BottomSheetView>['focusHook'];
}
/**
 * IMPORTANT: In the Extension, this component remains mounted when the user moves to the `SwapReview` screen.
 *            Make sure you take this into consideration when adding/modifying any hooks that run on this component.
 */
export declare function SwapFormScreen({ hideContent, settings, tokenColor, focusHook, }: SwapFormScreenProps): JSX.Element;
export {};
//# sourceMappingURL=SwapFormScreen.d.ts.map