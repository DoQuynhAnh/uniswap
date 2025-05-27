import { Passkey } from 'react-native-passkey';
export async function registerPasskey(_options) {
    return JSON.stringify(await Passkey.create(JSON.parse(_options)));
}
export async function authenticatePasskey(_options) {
    return JSON.stringify(await Passkey.get(JSON.parse(_options)));
}
//# sourceMappingURL=passkey.native.js.map