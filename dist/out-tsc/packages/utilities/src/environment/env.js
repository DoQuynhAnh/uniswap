import { PlatformSplitStubError } from 'utilities/src/errors';
// Ugly hack to get around the fact that _playwright_ doesn't have a window object
// during setup so we need to early return
function checkWindowForPlaywright() {
    return typeof window === 'undefined';
}
export function isTestEnv() {
    if (checkWindowForPlaywright()) {
        return false;
    }
    throw new PlatformSplitStubError('isTestEnv');
}
export function isPlaywrightEnv() {
    if (checkWindowForPlaywright()) {
        return true;
    }
    throw new PlatformSplitStubError('isPlaywrightEnv');
}
export function isDevEnv() {
    if (checkWindowForPlaywright()) {
        return false;
    }
    throw new PlatformSplitStubError('isDevEnv');
}
export function isBetaEnv() {
    if (checkWindowForPlaywright()) {
        return false;
    }
    throw new PlatformSplitStubError('isBetaEnv');
}
export function isProdEnv() {
    throw new PlatformSplitStubError('isProdEnv');
}
export function isRNDev() {
    if (checkWindowForPlaywright()) {
        return false;
    }
    // Ugly hack to get around the fact that cypress accesses this function during setup
    // and doesn't know it's actually a web function it just throws the PlatformSplitStubError
    // so we need to early return false here
    if (window.Cypress) {
        return false;
    }
    throw new PlatformSplitStubError('isRNDev');
}
//# sourceMappingURL=env.js.map