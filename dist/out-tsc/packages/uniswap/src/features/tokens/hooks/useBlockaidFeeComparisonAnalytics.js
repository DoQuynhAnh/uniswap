import { useEffect, useRef } from 'react';
import { getNativeAddress } from 'uniswap/src/constants/addresses';
import { FeatureFlags } from 'uniswap/src/features/gating/flags';
import { useFeatureFlag } from 'uniswap/src/features/gating/hooks';
import { UniswapEventName } from 'uniswap/src/features/telemetry/constants/uniswap';
import { sendAnalyticsEvent } from 'uniswap/src/features/telemetry/send.web';
import { getTokenProtectionFeeOnTransfer } from 'uniswap/src/features/tokens/safetyUtils';
/**
 * Logs an analytics event when there are discrepancies between our backend's and Blockaid's fee-on-transfer (FOT) detection.
 * This data helps the protocols team identify and improve FOT detection accuracy.
 *
 * @param currencyInfo - The result of useCurrencyInfo()
 */
export function useBlockaidFeeComparisonAnalytics(currencyInfo) {
    var _a, _b, _c, _d, _e, _f;
    const isBlockaidFotLoggingEnabled = useFeatureFlag(FeatureFlags.BlockaidFotLogging);
    const sentEventCurrencyIdRef = useRef();
    const { buyFeePercent, sellFeePercent } = getTokenProtectionFeeOnTransfer(currencyInfo);
    const blockaidBuyFeePercent = (_c = (_b = (_a = currencyInfo === null || currencyInfo === void 0 ? void 0 : currencyInfo.safetyInfo) === null || _a === void 0 ? void 0 : _a.blockaidFees) === null || _b === void 0 ? void 0 : _b.buyFeePercent) !== null && _c !== void 0 ? _c : 0;
    const blockaidSellFeePercent = (_f = (_e = (_d = currencyInfo === null || currencyInfo === void 0 ? void 0 : currencyInfo.safetyInfo) === null || _d === void 0 ? void 0 : _d.blockaidFees) === null || _e === void 0 ? void 0 : _e.sellFeePercent) !== null && _f !== void 0 ? _f : 0;
    useEffect(() => {
        var _a, _b, _c, _d, _e, _f;
        if (!currencyInfo || !isBlockaidFotLoggingEnabled) {
            return;
        }
        const normalizedBuyFee = buyFeePercent !== null && buyFeePercent !== void 0 ? buyFeePercent : 0;
        const normalizedSellFee = sellFeePercent !== null && sellFeePercent !== void 0 ? sellFeePercent : 0;
        // Only send if fees are different and we haven't sent for this token before
        if (sentEventCurrencyIdRef.current !== currencyInfo.currencyId &&
            currencyInfo.currency.symbol &&
            currencyInfo.currency.chainId &&
            (normalizedBuyFee !== blockaidBuyFeePercent || normalizedSellFee !== blockaidSellFeePercent)) {
            const address = currencyInfo.currency.isToken
                ? currencyInfo.currency.address
                : getNativeAddress(currencyInfo.currency.chainId);
            sendAnalyticsEvent(UniswapEventName.BlockaidFeesMismatch, {
                symbol: currencyInfo.currency.symbol,
                address,
                chainId: currencyInfo.currency.chainId,
                buyFeePercent,
                sellFeePercent,
                blockaidBuyFeePercent: (_b = (_a = currencyInfo === null || currencyInfo === void 0 ? void 0 : currencyInfo.safetyInfo) === null || _a === void 0 ? void 0 : _a.blockaidFees) === null || _b === void 0 ? void 0 : _b.buyFeePercent,
                blockaidSellFeePercent: (_d = (_c = currencyInfo === null || currencyInfo === void 0 ? void 0 : currencyInfo.safetyInfo) === null || _c === void 0 ? void 0 : _c.blockaidFees) === null || _d === void 0 ? void 0 : _d.sellFeePercent,
                attackType: (_e = currencyInfo.safetyInfo) === null || _e === void 0 ? void 0 : _e.attackType,
                protectionResult: (_f = currencyInfo.safetyInfo) === null || _f === void 0 ? void 0 : _f.protectionResult,
            });
            sentEventCurrencyIdRef.current = currencyInfo.currencyId;
        }
    }, [
        buyFeePercent,
        sellFeePercent,
        blockaidBuyFeePercent,
        blockaidSellFeePercent,
        currencyInfo,
        isBlockaidFotLoggingEnabled,
    ]);
}
//# sourceMappingURL=useBlockaidFeeComparisonAnalytics.js.map