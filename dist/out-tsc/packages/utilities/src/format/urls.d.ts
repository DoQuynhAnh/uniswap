/**
 * Given a URI that may be ipfs, ipns, http, https, ar, or data protocol, return the fetch-able http(s) URLs for the same content
 * @param uri to convert to fetch-able http url
 */
export declare function uriToHttpUrls(uri: string, options?: {
    allowLocalUri?: boolean;
}): string[];
export declare function isSegmentUri(uri: Maybe<string>, extension: string): boolean;
/**
 * Checks if the provided URI points to an SVG file.
 *
 * This examines the path of a URI to determine if it ends with an ".svg" extension,
 * accounting for potential query parameters or anchors. The check is case-insensitive.
 *
 * @param {Maybe<string>} uri The URI to check.
 * @returns {boolean} True if the URI points to an SVG file, false otherwise.
 */
export declare function isSVGUri(uri: Maybe<string>): boolean;
/**
 * Checks if the provided URI points to a GIF file.
 *
 * This examines the path of a URI to determine if it ends with an ".gif" extension,
 * accounting for potential query parameters or anchors. The check is case-insensitive.
 *
 * @param {Maybe<string>} uri The URI to check.
 * @returns {boolean} True if the URI points to an GIF file, false otherwise.
 */
export declare function isGifUri(uri: Maybe<string>): boolean;
/**
 * Formats the app url by only returning the host url. If the url is not
 * secure, the base url is shown instead. If the url is not a valid url, the
 * a shortened version of the invalid string is shown instead.
 *
 * See tests for examples.
 */
export declare function formatDappURL(url: string): string;
/** Returns the url host (doesn't include http or https) */
export declare function extractUrlHost(url?: string): string | undefined;
/** Returns the url origin (includes http or https) */
export declare function extractBaseUrl(url?: string): string | undefined;
//# sourceMappingURL=urls.d.ts.map