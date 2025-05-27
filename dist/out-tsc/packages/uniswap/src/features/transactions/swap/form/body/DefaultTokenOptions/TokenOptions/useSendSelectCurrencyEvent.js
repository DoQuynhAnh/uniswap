import { useCallback } from 'react';
import { DEFAULT_NATIVE_ADDRESS_LEGACY } from 'uniswap/src/features/chains/chainInfo';
import { UniswapEventName } from 'uniswap/src/features/telemetry/constants';
import { sendAnalyticsEvent } from 'uniswap/src/features/telemetry/send';
import { useTrace } from 'utilities/src/telemetry/trace/TraceContext';
export function useSendSelectCurrencyEvent({ currencyField, }) {
    const { page } = useTrace();
    return useCallback(({ position, suggestion_count, currencyInfo }) => {
        sendAnalyticsEvent(UniswapEventName.TokenSelected, {
            name: currencyInfo.currency.name,
            address: currencyInfo.currency.isToken ? currencyInfo.currency.address : DEFAULT_NATIVE_ADDRESS_LEGACY,
            chain: currencyInfo.currency.chainId,
            page,
            field: currencyField,
            position,
            suggestion_count,
            preselect_asset: true,
        });
    }, [page, currencyField]);
}
//# sourceMappingURL=useSendSelectCurrencyEvent.js.map