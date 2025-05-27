type UseForceRTL = (startWithRTL: boolean) => {
    toggleRTL: () => void;
    isRTL: boolean;
};
/**
 * This hook is used to simulate RTL mode for stories.
 * It is used to toggle the RTL state and force a re-render when the RTL state changes.
 * @param startWithRTL - Whether to start with RTL.
 * @returns A function to toggle RTL mode.
 */
export declare const useForceRTL: UseForceRTL;
export {};
//# sourceMappingURL=useForceRTL.d.ts.map