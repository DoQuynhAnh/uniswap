/// <reference types="react" />
interface SwapReviewScreenProps {
    hideContent: boolean;
    onSubmitSwap?: () => Promise<void> | void;
}
export declare function SwapReviewScreen(props: SwapReviewScreenProps): JSX.Element | null;
export declare function SwapReviewScreenProviders(props: Omit<SwapReviewScreenProps, 'swapCallback' | 'wrapCallback'>): JSX.Element | null;
export {};
//# sourceMappingURL=SwapReviewScreen.d.ts.map