import { createPromiseClient } from '@connectrpc/connect';
import { createConnectTransport } from '@connectrpc/connect-web';
import { EmbeddedWalletService } from '@uniswap/client-embeddedwallet/dist/uniswap/embeddedwallet/v1/service_connect';
import { uniswapUrls } from 'uniswap/src/constants/urls';
import { getVersionHeader, REQUEST_SOURCE } from 'uniswap/src/data/constants';
import { isBetaEnv, isProdEnv } from 'utilities/src/environment/env';
import { isExtension, isMobileApp } from 'utilities/src/platform';
const isWalletBeta = (isExtension || isMobileApp) && isBetaEnv();
const enclaveTransport = createConnectTransport({
    baseUrl: isProdEnv() || isWalletBeta ? uniswapUrls.evervaultProductionUrl : uniswapUrls.evervaultStagingUrl,
    credentials: 'include',
    interceptors: [
        (next) => (request) => {
            if (isMobileApp) {
                request.header.set('Origin', uniswapUrls.requestOriginUrl);
            }
            request.header.set('x-request-source', REQUEST_SOURCE);
            request.header.set('x-app-version', getVersionHeader());
            return next(request);
        },
    ],
});
export const EMBEDDED_WALLET_CLIENT = createPromiseClient(EmbeddedWalletService, enclaveTransport);
/* DATA FETCHING FUNCTIONS */
export async function fetchChallengeRequest({ type, action, options, }) {
    return await EMBEDDED_WALLET_CLIENT.challenge({ type, action, options });
}
export async function fetchSecuredChallengeRequest({ type, action, b64EncryptionPublicKey, }) {
    return await EMBEDDED_WALLET_CLIENT.securedChallenge({ type, action, b64EncryptionPublicKey });
}
export async function fetchCreateWalletRequest({ credential }) {
    return await EMBEDDED_WALLET_CLIENT.createWallet({ credential });
}
export async function fetchWalletSigninRequest({ credential }) {
    return await EMBEDDED_WALLET_CLIENT.walletSignin({ credential });
}
export async function fetchSignMessagesRequest({ messages, credential, }) {
    return await EMBEDDED_WALLET_CLIENT.signMessages({ messages, credential });
}
export async function fetchSignTransactionRequest({ transactions, credential, }) {
    return await EMBEDDED_WALLET_CLIENT.signTransactions({ transactions, credential });
}
export async function fetchSignTypedDataRequest({ typedDataBatch, credential, }) {
    return await EMBEDDED_WALLET_CLIENT.signTypedDataBatch({ typedDataBatch, credential });
}
export async function fetchExportSeedPhraseRequest({ encryptionKey, credential, }) {
    return await EMBEDDED_WALLET_CLIENT.exportSeedPhrase({ credential, b64EncryptionPublicKey: encryptionKey });
}
export async function fetchDisconnectRequest() {
    return await EMBEDDED_WALLET_CLIENT.disconnectWallet({});
}
export async function fetchListAuthenticatorsRequest({ credential, }) {
    return await EMBEDDED_WALLET_CLIENT.listAuthenticators({ credential });
}
export async function fetchRegisterNewAuthenticatorRequest({ newCredential, newAuthenticationType, existingCredential, existingAuthenticationType, }) {
    return await EMBEDDED_WALLET_CLIENT.registerNewAuthenticator({
        newCredential,
        newAuthenticationType,
        existingCredential,
        existingAuthenticationType,
    });
}
export async function fetchDeleteAuthenticatorRequest({ credential, authenticationType, authenticatorId, authenticatorType, }) {
    return await EMBEDDED_WALLET_CLIENT.deleteAuthenticator({
        credential,
        type: authenticationType,
        authenticatorId,
        authenticatorType,
    });
}
//# sourceMappingURL=requests.js.map