import { namehash } from '@ethersproject/hash';
import ms from 'ms';
import { CONVERSION_LEADS_EXTERNAL_COOKIE_DOMAIN, CONVERSION_LEADS_EXTERNAL_COOKIE_NAME, DEV_CONVERSION_PROXY_API_BASE_URL, PROD_CONVERSION_PROXY_API_BASE_URL, STAGING_CONVERSION_PROXY_API_BASE_URL, } from 'uniswap/src/data/rest/conversionTracking/constants';
import { isBetaEnv, isDevEnv } from 'utilities/src/environment/env';
const JITTER_MIN_MS = ms('10d');
const JITTER_MAX_MS = ms('14d');
const getJitter = () => {
    const min = Math.ceil(JITTER_MIN_MS);
    const max = Math.floor(JITTER_MAX_MS);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
export const addJitter = (date) => {
    return new Date(date.valueOf() + getJitter());
};
export const hashAddress = (address) => namehash(address);
export const getExternalConversionLeadsCookie = () => {
    var _a, _b, _c;
    // Note: External cookie will be set from other uniswap subdomains (e.g. wallet.uniswap.org)
    const cookieValue = (_b = (_a = document.cookie
        .split('; ')
        .find((cookie) => cookie.startsWith(CONVERSION_LEADS_EXTERNAL_COOKIE_NAME))) === null || _a === void 0 ? void 0 : _a.split('=')) === null || _b === void 0 ? void 0 : _b[1];
    let parsedCookie;
    try {
        parsedCookie = cookieValue ? JSON.parse(cookieValue) : null;
    }
    catch (e) { }
    let result;
    if (parsedCookie) {
        const key = (_c = Object.keys(parsedCookie)) === null || _c === void 0 ? void 0 : _c[0];
        if (key) {
            result = {
                key: key,
                value: parsedCookie[key],
            };
        }
        // Delete the cookie
        document.cookie = `${CONVERSION_LEADS_EXTERNAL_COOKIE_NAME}=; Path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=${CONVERSION_LEADS_EXTERNAL_COOKIE_DOMAIN}`;
    }
    return result;
};
export const getConversionProxyApiBaseUrl = () => {
    if (isDevEnv()) {
        return DEV_CONVERSION_PROXY_API_BASE_URL;
    }
    else if (isBetaEnv()) {
        return STAGING_CONVERSION_PROXY_API_BASE_URL;
    }
    else {
        return PROD_CONVERSION_PROXY_API_BASE_URL;
    }
};
//# sourceMappingURL=utils.js.map