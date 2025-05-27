import { PlatformSplitStubError } from 'utilities/src/errors';
export function sendAnalyticsEvent(..._args) {
    throw new PlatformSplitStubError('sendWalletAnalyticsEvent');
}
export async function sendAppsFlyerEvent(..._args) {
    throw new PlatformSplitStubError('sendWalletAppsFlyerEvent');
}
//# sourceMappingURL=send.js.map