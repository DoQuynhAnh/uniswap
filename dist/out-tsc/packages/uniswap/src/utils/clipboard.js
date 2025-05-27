import { PlatformSplitStubError } from 'utilities/src/errors';
/** This will be overridden by the compiler with platform-specific clipboard file. */
const Clipboard = {
    setClipboard: () => {
        throw new PlatformSplitStubError('setClipboard');
    },
    getClipboard: () => {
        throw new PlatformSplitStubError('getClipboard');
    },
    setClipboardImage: () => {
        throw new PlatformSplitStubError('setClipboardImage');
    },
};
export async function setClipboard(value) {
    return Clipboard.setClipboard(value);
}
export async function getClipboard() {
    return Clipboard.getClipboard();
}
export async function setClipboardImage(imageUrl) {
    return Clipboard.setClipboardImage(imageUrl);
}
//# sourceMappingURL=clipboard.js.map