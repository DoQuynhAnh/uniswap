import { isAndroid } from 'utilities/src/platform';
export function getCloudProviderName() {
    if (isAndroid) {
        return 'Google Drive';
    }
    return 'iCloud';
}
//# sourceMappingURL=getCloudProviderName.js.map