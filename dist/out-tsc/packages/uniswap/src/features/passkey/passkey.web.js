import { startAuthentication, startRegistration } from '@simplewebauthn/browser';
export async function registerPasskey(_challenge) {
    return JSON.stringify(await startRegistration({
        optionsJSON: JSON.parse(_challenge),
    }));
}
export async function authenticatePasskey(_challenge) {
    // an empty challenge signifies the user is sessioned and no authentication is needed
    return _challenge.length
        ? JSON.stringify(await startAuthentication({
            optionsJSON: JSON.parse(_challenge),
        }))
        : '';
}
//# sourceMappingURL=passkey.web.js.map