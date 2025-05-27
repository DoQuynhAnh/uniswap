import { TrackConversionArgs } from 'uniswap/src/data/rest/conversionTracking/types';
type UseConversionTracking = {
    /**
     * trackConversions will execute each conversion event at most once per platform
     */
    trackConversions: (events: TrackConversionArgs[]) => void;
    /**
     * initConversionTracking grabs the platform ids from the querystring and cookie and stores them in local storage
     */
    initConversionTracking: () => void;
};
export declare function useConversionTracking(accountAddress?: `0x${string}`): UseConversionTracking;
export {};
//# sourceMappingURL=useConversionTracking.d.ts.map