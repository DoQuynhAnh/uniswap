interface ReportBalancesParams {
    balances: number[];
    totalBalancesUsd?: number;
    totalBalancesUsdPerChain?: Record<string, number> | null | undefined;
    wallet?: string;
    wallets: string[];
    isViewOnly?: boolean;
}
export declare function reportBalancesForAnalytics({ balances, totalBalancesUsd, totalBalancesUsdPerChain, wallet, wallets, isViewOnly, }: ReportBalancesParams): void;
export {};
//# sourceMappingURL=reportBalancesForAnalytics.d.ts.map