import { logger } from 'utilities/src/logger/logger';
/**
 * Given a URI that may be ipfs, ipns, http, https, ar, or data protocol, return the fetch-able http(s) URLs for the same content
 * @param uri to convert to fetch-able http url
 */
export function uriToHttpUrls(uri, options) {
    var _a, _b, _c, _d;
    const protocol = (_a = uri.split(':')[0]) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    switch (protocol) {
        case uri: {
            // If the result of protocol equals the uri, it means the uri has no protocol and is a local file (ie. a relative or absolute path).
            return (options === null || options === void 0 ? void 0 : options.allowLocalUri) ? [uri] : [];
        }
        case 'data':
            return [uri];
        case 'https':
            return [uri];
        case 'http':
            return ['https' + uri.slice(4), uri];
        case 'ipfs': {
            const hash = (_b = uri.match(/^ipfs:(\/\/)?(ipfs\/)?(.*)$/i)) === null || _b === void 0 ? void 0 : _b[3];
            return [`https://ipfs.io/ipfs/${hash}/`, `https://hardbin.com/ipfs/${hash}/`];
        }
        case 'ipns': {
            const name = (_c = uri.match(/^ipns:(\/\/)?(.*)$/i)) === null || _c === void 0 ? void 0 : _c[2];
            return [`https://ipfs.io/ipns/${name}/`, `https://hardbin.com/ipns/${name}/`];
        }
        case 'ar': {
            const tx = (_d = uri.match(/^ar:(\/\/)?(.*)$/i)) === null || _d === void 0 ? void 0 : _d[2];
            return [`https://arweave.net/${tx}`];
        }
        default:
            return [];
    }
}
export function isSegmentUri(uri, extension) {
    if (typeof uri !== 'string' || !uri.trim()) {
        return false;
    }
    try {
        // Validate URI structure by checking for presence of scheme
        if (!/^https?:\/\/.+/i.test(uri)) {
            return false;
        }
        const url = new URL(uri);
        const pathname = url.pathname;
        // Check if pathname ends with an '.svg' (or other) extension, case-insensitive
        return pathname.toLowerCase().endsWith(extension);
    }
    catch {
        // URI parsing failed, indicating an invalid URI
        return false;
    }
}
/**
 * Checks if the provided URI points to an SVG file.
 *
 * This examines the path of a URI to determine if it ends with an ".svg" extension,
 * accounting for potential query parameters or anchors. The check is case-insensitive.
 *
 * @param {Maybe<string>} uri The URI to check.
 * @returns {boolean} True if the URI points to an SVG file, false otherwise.
 */
export function isSVGUri(uri) {
    return isSegmentUri(uri, '.svg');
}
/**
 * Checks if the provided URI points to a GIF file.
 *
 * This examines the path of a URI to determine if it ends with an ".gif" extension,
 * accounting for potential query parameters or anchors. The check is case-insensitive.
 *
 * @param {Maybe<string>} uri The URI to check.
 * @returns {boolean} True if the URI points to an GIF file, false otherwise.
 */
export function isGifUri(uri) {
    return isSegmentUri(uri, '.gif');
}
function parseUrl(url) {
    if (!url) {
        return undefined;
    }
    try {
        return new URL(url);
    }
    catch (error) {
        logger.error(error, {
            tags: { file: 'format/urls', function: 'parseUrl' },
            extra: { url },
        });
        return undefined;
    }
}
/**
 * Formats the app url by only returning the host url. If the url is not
 * secure, the base url is shown instead. If the url is not a valid url, the
 * a shortened version of the invalid string is shown instead.
 *
 * See tests for examples.
 */
export function formatDappURL(url) {
    var _a, _b, _c;
    return (_c = (_b = (_a = parseUrl(url)) === null || _a === void 0 ? void 0 : _a.origin) === null || _b === void 0 ? void 0 : _b.replace('https://', '')) !== null && _c !== void 0 ? _c : url === null || url === void 0 ? void 0 : url.slice(0, 20);
}
/** Returns the url host (doesn't include http or https) */
export function extractUrlHost(url) {
    var _a;
    return (_a = parseUrl(url)) === null || _a === void 0 ? void 0 : _a.host;
}
/** Returns the url origin (includes http or https) */
export function extractBaseUrl(url) {
    var _a;
    return (_a = parseUrl(url)) === null || _a === void 0 ? void 0 : _a.origin;
}
//# sourceMappingURL=urls.js.map