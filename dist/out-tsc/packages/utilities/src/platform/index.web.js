/**
 * Note, this file has one counterpart:
 *
 *   - index.native.ts
 *
 * Be sure to keep it in sync! They should export the exact same set of constants
 * to avoid type mis-matches.
 *
 * Also - we need to check globals exist (document, navigator), because this
 * runs in a service worker for extension.
 *
 */
// Platform
export const isAndroid = false;
export const isIOS = false;
// see: https://stackoverflow.com/a/14301832
export const isWeb = true;
export const isMobileWeb = 
// https://stackoverflow.com/a/29509267
typeof navigator !== 'undefined' && /iPhone|iPad|iPod|Android|Mobi/i.test(navigator.userAgent);
// Operating System
// via https://stackoverflow.com/questions/9038625/detect-if-device-is-ios
export const isWebIOS = typeof document !== 'undefined' &&
    typeof navigator !== 'undefined' &&
    (['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone'].includes(navigator.platform) ||
        // iPad on iOS 13 detection
        (navigator.userAgent.includes('Mac') && 'ontouchend' in document));
// via https://stackoverflow.com/questions/6031412/detect-android-phone-via-javascript-jquery
export const isWebAndroid = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().includes('android');
// Capability
export const isTouchable = typeof window !== 'undefined' &&
    typeof navigator !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0);
export const isHoverable = isWeb && !isMobileWeb;
// Browser
export const isChrome = typeof navigator !== 'undefined' && /Chrome/.test(navigator.userAgent || '');
export const isSafari = typeof navigator !== 'undefined' && /Safari/.test(navigator.userAgent || '');
export const isMobileWebSafari = isTouchable && isSafari;
export const isMobileWebAndroid = isTouchable && isWebAndroid;
// App
export const isExtension = process.env.IS_UNISWAP_EXTENSION === 'true';
export const isMobileApp = false;
export const isInterface = process.env.REACT_APP_IS_UNISWAP_INTERFACE === 'true';
export const isInterfaceDesktop = isInterface && !isMobileWeb;
//# sourceMappingURL=index.web.js.map