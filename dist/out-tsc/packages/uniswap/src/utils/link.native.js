import { Linking } from 'react-native';
export async function openURL(url) {
    await Linking.openURL(url);
}
export async function canOpenURL(url) {
    return await Linking.canOpenURL(url);
}
//# sourceMappingURL=link.native.js.map