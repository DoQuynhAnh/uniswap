import { logger } from 'utilities/src/logger/logger';
const Clipboard = {
    setClipboard: async (value) => {
        await navigator.clipboard.writeText(value);
    },
    getClipboard: async () => {
        const value = await navigator.clipboard.readText();
        return value;
    },
    setClipboardImage: async (_imageUrl) => {
        throw new Error('setClipboardImage not implemented on web');
    },
};
export async function setClipboard(value) {
    try {
        await navigator.clipboard.writeText(value);
    }
    catch (error) {
        logger.error(error, { tags: { file: 'clipboard', function: 'setClipboard' } });
    }
}
export async function getClipboard() {
    return Clipboard.getClipboard();
}
export async function setClipboardImage(imageUrl) {
    return Clipboard.setClipboardImage(imageUrl);
}
//# sourceMappingURL=clipboard.web.js.map