import { PlatformSplitStubError } from 'utilities/src/errors';
export async function registerPasskey(_challenge) {
    throw new PlatformSplitStubError('registerPasskey');
}
export async function authenticatePasskey(_challenge) {
    throw new PlatformSplitStubError('authenticatePasskey');
}
//# sourceMappingURL=passkey.js.map