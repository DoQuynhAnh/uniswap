import { PlatformIdType } from 'uniswap/src/data/rest/conversionTracking/types';
export declare const CONVERSION_LEADS_EXPIRATION_MS: number;
export declare const CONVERSION_LEADS_STORAGE_KEY = "conversion.leads";
export declare const CONVERSION_LEADS_EXTERNAL_COOKIE_NAME = "conversion.leads.external";
export declare const CONVERSION_LEADS_EXTERNAL_COOKIE_DOMAIN: string;
export declare const DEV_CONVERSION_PROXY_API_BASE_URL = "https://erasld2vrf.execute-api.us-east-2.amazonaws.com";
export declare const STAGING_CONVERSION_PROXY_API_BASE_URL = "https://x6ahx1oagk.execute-api.us-east-2.amazonaws.com";
export declare const PROD_CONVERSION_PROXY_API_BASE_URL = "https://8mr3mthjba.execute-api.us-east-2.amazonaws.com";
export declare const DEFAULT_HEADERS: {
    key: string;
    value: string;
}[];
export declare const TWITTER_CONVERSION_URL = "https://ads-api.x.com/12/measurement/conversions/ojxcz";
export declare const REDDIT_CONVERSION_URL = "https://ads-api.reddit.com/api/v2.0/conversions/events/t2_tic7kuip";
export declare const GOOGLE_CONVERSION_URL = "https://googleads.googleapis.com/v18/customers/3416874723:uploadClickConversions";
export declare const GOOGLE_CONVERSION_DATETIME_FORMAT = "yyyy-MM-dd HH:mm:ssXXX";
export declare const GOOGLE_CONVERSION_EVENTS: {
    Web: {
        WalletConnected: {
            platformIdType: PlatformIdType;
            eventId: string;
            eventName: string;
        };
        WalletFunded: {
            platformIdType: PlatformIdType;
            eventId: string;
            eventName: string;
        };
    };
    Extension: {
        Download: {
            platformIdType: PlatformIdType;
            eventId: string;
            eventName: string;
        };
        WalletFunded: {
            platformIdType: PlatformIdType;
            eventId: string;
            eventName: string;
        };
    };
};
export declare const CONVERSION_EVENTS: {
    Web: {
        WalletConnected: {
            platformIdType: PlatformIdType;
            eventId: string;
            eventName: string;
        }[];
        WalletFunded: {
            platformIdType: PlatformIdType;
            eventId: string;
            eventName: string;
        }[];
    };
    Extension: {
        Downloaded: {
            platformIdType: PlatformIdType;
            eventId: string;
            eventName: string;
        }[];
        WalletFunded: {
            platformIdType: PlatformIdType;
            eventId: string;
            eventName: string;
        }[];
    };
};
//# sourceMappingURL=constants.d.ts.map