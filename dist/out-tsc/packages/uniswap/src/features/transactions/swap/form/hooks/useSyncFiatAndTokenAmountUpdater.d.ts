/**
 * Updater to always populate fiatAmount, or tokenAmount in swap context. If fiat mode is enabled,
 * we reference the current fiat input amount, and update the token amount. If not enabled, we update the fiat amount based on token
 * amount. This allows us to toggle between 2 modes, without losing the entered amount.
 */
export declare function useSyncFiatAndTokenAmountUpdater({ skip }: {
    skip?: boolean;
}): void;
//# sourceMappingURL=useSyncFiatAndTokenAmountUpdater.d.ts.map