import { UniswapEventName } from 'uniswap/src/features/telemetry/constants';
import { sendAnalyticsEvent } from 'uniswap/src/features/telemetry/send';
export function reportBalancesForAnalytics({ balances, totalBalancesUsd, totalBalancesUsdPerChain, wallet, wallets, isViewOnly = false, }) {
    if (!totalBalancesUsd || !totalBalancesUsdPerChain || !wallets.length || !wallet) {
        return;
    }
    sendAnalyticsEvent(UniswapEventName.BalancesReport, {
        total_balances_usd: totalBalancesUsd,
        wallets,
        balances,
    });
    sendAnalyticsEvent(UniswapEventName.BalancesReportPerChain, {
        total_balances_usd_per_chain: totalBalancesUsdPerChain,
        wallet,
        view_only: isViewOnly,
    });
}
//# sourceMappingURL=reportBalancesForAnalytics.js.map