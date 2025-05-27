import { Platform } from 'react-native';
export function getCloudProviderName() {
    switch (Platform.OS) {
        case 'android':
            return 'Google Drive';
        case 'ios':
            return 'iCloud';
        default:
            return '';
    }
}
//# sourceMappingURL=getCloudProviderName.native.js.map