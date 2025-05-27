type DelayAnimationKey = '200msDelayed1ms' | '200msDelayed40ms' | '200msDelayed80ms' | '200msDelayed120ms' | '200msDelayed160ms' | '200msDelayed200ms' | '200msDelayed240ms';
export declare const getDelayValue: (delay: number) => DelayAnimationKey;
export declare const delayAnimations200ms: Record<DelayAnimationKey, {
    type: 'spring';
    delay: number;
    stiff: 150;
    damping: 30;
}>;
export declare const get200MsAnimationDelayFromIndex: (index: number) => DelayAnimationKey;
export {};
//# sourceMappingURL=delay200ms.d.ts.map