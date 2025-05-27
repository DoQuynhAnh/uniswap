export declare enum PlatformIdType {
    Google = "gclid",
    Twitter = "twclid",
    Reddit = "rdt_cid"
}
export type ConversionLead = {
    id: string;
    type: PlatformIdType;
    timestamp: number;
    executedEvents: TrackConversionArgs['eventId'][];
};
export type TrackConversionArgs = {
    platformIdType: PlatformIdType;
    eventId: string;
    eventName: string;
};
export declare enum RequestType {
    POST = "POST"
}
export type BuildProxyRequestArgs = {
    lead: ConversionLead;
    address: Address;
    eventId: string;
    eventName: string;
};
//# sourceMappingURL=types.d.ts.map