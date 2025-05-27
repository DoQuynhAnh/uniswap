import { ConnectError } from '@connectrpc/connect';
import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { parse } from 'qs';
import { useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { CONVERSION_LEADS_EXPIRATION_MS, CONVERSION_LEADS_STORAGE_KEY, } from 'uniswap/src/data/rest/conversionTracking/constants';
import { buildProxyRequest } from 'uniswap/src/data/rest/conversionTracking/tracking';
import { PlatformIdType } from 'uniswap/src/data/rest/conversionTracking/types';
import { useConversionProxy } from 'uniswap/src/data/rest/conversionTracking/useConversionProxy';
import { getExternalConversionLeadsCookie } from 'uniswap/src/data/rest/conversionTracking/utils';
import { FeatureFlags } from 'uniswap/src/features/gating/flags';
import { useFeatureFlag } from 'uniswap/src/features/gating/hooks';
import { UniswapEventName } from 'uniswap/src/features/telemetry/constants';
import { sendAnalyticsEvent } from 'uniswap/src/features/telemetry/send';
const conversionLeadsAtom = atomWithStorage(CONVERSION_LEADS_STORAGE_KEY, []);
export function useConversionTracking(accountAddress) {
    const { search } = useLocation();
    const queryParams = useMemo(() => parse(search, { ignoreQueryPrefix: true }), [search]);
    const [conversionLeads, setConversionLeads] = useAtom(conversionLeadsAtom);
    const isConversionTrackingEnabled = useFeatureFlag(FeatureFlags.ConversionTracking);
    const isTwitterConversionTrackingEnabled = useFeatureFlag(FeatureFlags.TwitterConversionTracking);
    const isGoogleConversionTrackingEnabled = useFeatureFlag(FeatureFlags.GoogleConversionTracking);
    const conversionProxy = useConversionProxy();
    const trackConversion = useCallback(async ({ platformIdType, eventId, eventName }) => {
        const lead = conversionLeads.find(({ type }) => type === platformIdType);
        let setAsExecuted = false;
        // Prevent triggering events under the following conditions:
        // - No corresponding lead
        // - Wallet not connected
        // - Tracking has already been fired for a given event
        // - Conversion tracking is not enabled
        // - Google or Twitter conversion tracking is not enabled
        if (!lead ||
            !accountAddress ||
            lead.executedEvents.includes(eventId) ||
            !isConversionTrackingEnabled ||
            (platformIdType === PlatformIdType.Google && !isGoogleConversionTrackingEnabled) ||
            (platformIdType === PlatformIdType.Twitter && !isTwitterConversionTrackingEnabled)) {
            return;
        }
        const proxyRequest = buildProxyRequest({ lead, address: accountAddress, eventId, eventName });
        try {
            const response = await conversionProxy.mutateAsync(proxyRequest);
            // Prevent success handler if the underlying request is bad
            if (response.status !== 200) {
                throw new Error();
            }
            setAsExecuted = true;
            sendAnalyticsEvent(UniswapEventName.ConversionEventSubmitted, {
                id: lead.id,
                eventId,
                eventName,
                platformIdType,
            });
        }
        catch (error) {
            // Note: The request will be retried until it exists in executedEvents
            // If the event has already been executed, but doesn't exist in executedEvents, this will ensure we don't retry errors
            if (error instanceof ConnectError) {
                if (error.message.includes('limit for this (user, event)')) {
                    setAsExecuted = true;
                }
            }
        }
        finally {
            if (setAsExecuted) {
                setConversionLeads((leads) => [
                    ...leads.filter(({ id }) => lead.id !== id),
                    {
                        ...lead,
                        executedEvents: lead.executedEvents.concat([eventId]),
                    },
                ]);
            }
        }
    }, 
    // TODO: Investigate why conversionProxy as a dependency causes a rendering loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        accountAddress,
        conversionLeads,
        isConversionTrackingEnabled,
        isGoogleConversionTrackingEnabled,
        isTwitterConversionTrackingEnabled,
        setConversionLeads,
    ]);
    const trackConversions = useCallback((events) => events.forEach(trackConversion), [trackConversion]);
    const initConversionTracking = useCallback(() => {
        if (!isConversionTrackingEnabled) {
            return;
        }
        const now = new Date().getTime();
        const newLeads = [];
        // Grab the lead from the cookie and pass it to localstorage if it exists
        const externalCookie = getExternalConversionLeadsCookie();
        if (externalCookie) {
            newLeads.push({
                id: externalCookie.value,
                type: externalCookie.key,
                timestamp: now,
                executedEvents: [],
            });
        }
        Object.values(PlatformIdType).forEach((type) => {
            const id = queryParams[type];
            const existingLead = conversionLeads.find((lead) => lead.id === id);
            // Since the querystring isn't changing we need to make sure we haven't already captured the lead
            if (id && !existingLead) {
                newLeads.push({
                    id,
                    type,
                    timestamp: now,
                    executedEvents: [],
                });
            }
        });
        const expiredLeadIds = conversionLeads
            .filter(({ timestamp }) => timestamp + CONVERSION_LEADS_EXPIRATION_MS < now)
            .map(({ id }) => id);
        if (newLeads.length || expiredLeadIds.length) {
            const newLeadTypes = newLeads.map(({ type }) => type);
            const activeLeads = conversionLeads.filter(({ id, type }) => !expiredLeadIds.includes(id) && !newLeadTypes.includes(type));
            setConversionLeads([...activeLeads, ...newLeads]);
        }
    }, [conversionLeads, isConversionTrackingEnabled, queryParams, setConversionLeads]);
    return { trackConversions, initConversionTracking };
}
//# sourceMappingURL=useConversionTracking.js.map