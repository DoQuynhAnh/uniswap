import { config } from 'uniswap/src/config';
import { isBetaEnv, isDevEnv, isPlaywrightEnv, isTestEnv } from 'utilities/src/environment/env';
import { isAndroid, isExtension, isInterface, isMobileApp } from 'utilities/src/platform';
var TrafficFlows;
(function (TrafficFlows) {
    TrafficFlows["GraphQL"] = "graphql";
    TrafficFlows["Metrics"] = "metrics";
    TrafficFlows["Gating"] = "gating";
    TrafficFlows["TradingApi"] = "trading-api-labs";
    TrafficFlows["Unitags"] = "unitags";
    TrafficFlows["FOR"] = "for";
    TrafficFlows["Scantastic"] = "scantastic";
})(TrafficFlows || (TrafficFlows = {}));
const FLOWS_USING_BETA = [TrafficFlows.FOR];
const isDevOrBeta = isPlaywrightEnv() ? false : isDevEnv() || isBetaEnv();
export const UNISWAP_WEB_HOSTNAME = 'app.uniswap.org';
const EMBEDDED_WALLET_HOSTNAME = isPlaywrightEnv() || isDevEnv() ? 'staging.ew.unihq.org' : UNISWAP_WEB_HOSTNAME;
export const UNISWAP_WEB_URL = `https://${UNISWAP_WEB_HOSTNAME}`;
export const UNISWAP_APP_URL = 'https://uniswap.org/app';
export const UNISWAP_MOBILE_REDIRECT_URL = 'https://uniswap.org/mobile-redirect';
const helpUrl = 'https://support.uniswap.org/hc/en-us';
// The trading api uses custom builds for testing which may not use the v1 prefix
const tradingApiVersionPrefix = config.tradingApiWebTestEnv === 'true' ? '' : '/v1';
export const uniswapUrls = {
    // Help and web articles/items
    helpUrl,
    helpRequestUrl: `${helpUrl}/requests/new`,
    helpArticleUrls: {
        acrossRoutingInfo: `${helpUrl}/articles/30677918339341`,
        approvalsExplainer: `${helpUrl}/articles/8120520483085-What-is-an-approval-transaction`,
        batchedSwaps: `${helpUrl}/articles/36393697148045`,
        batchedSwapsFailure: `${helpUrl}/articles/36393697148045#error-messages-and-troubleshooting`,
        batchedSwapsReview: `${helpUrl}/articles/36394497329933`,
        cexTransferKorea: `${helpUrl}/articles/29425131525901-How-to-transfer-crypto-to-a-Uniswap-Wallet-in-Korea`,
        contractAddressExplainer: `${helpUrl}/articles/26757826138637-What-is-a-token-contract-address`,
        extensionHelp: `${helpUrl}/articles/24458735271181`,
        extensionDappTroubleshooting: `${helpUrl}/articles/25811698471565-Connecting-Uniswap-Extension-Beta-to-other-dapps`,
        feeOnTransferHelp: `${helpUrl}/articles/18673568523789-What-is-a-token-fee-`,
        howToSwapTokens: `${helpUrl}/articles/8370549680909-How-to-swap-tokens-`,
        hiddenTokenInfo: `${helpUrl}/articles/30432674756749-How-to-hide-and-unhide-tokens-in-the-Uniswap-Wallet`,
        hiddenNFTInfo: `${helpUrl}/articles/14185028445837-How-to-hide-and-unhide-NFTs-in-the-Uniswap-Wallet`,
        impermanentLoss: `${helpUrl}/articles/20904453751693-What-is-Impermanent-Loss`,
        limitsFailure: `${helpUrl}/articles/24300813697933-Why-did-my-limit-order-fail-or-not-execute`,
        limitsInfo: `${helpUrl}/articles/24470337797005`,
        limitsNetworkSupport: `${helpUrl}/articles/24470251716237-What-networks-do-limits-support`,
        lpIncentiveInfo: `${helpUrl}/articles/35506888223501`,
        fiatOnRampHelp: `${helpUrl}/articles/11306574799117`,
        fiatOffRampHelp: `${helpUrl}/articles/34006552258957`,
        transferCryptoHelp: `${helpUrl}/articles/27103878635661-How-to-transfer-crypto-from-a-Robinhood-or-Coinbase-account-to-the-Uniswap-Wallet`,
        mismatchedImports: `${helpUrl}/articles/36393527081997`,
        mobileWalletHelp: `${helpUrl}/articles/20317941356429`,
        moonpayRegionalAvailability: `${helpUrl}/articles/11306664890381-Why-isn-t-MoonPay-available-in-my-region-`,
        multichainDelegation: `${helpUrl}/articles/36392482755341`,
        networkFeeInfo: `${helpUrl}/articles/8370337377805-What-is-a-network-fee-`,
        poolOutOfSync: `${helpUrl}/articles/25845512413069`,
        positionsLearnMore: `${helpUrl}/articles/8829880740109`,
        priceImpact: `${helpUrl}/articles/8671539602317-What-is-Price-Impact`,
        providingLiquidityInfo: `${helpUrl}/sections/20982919867021`,
        recoveryPhraseHowToImport: `${helpUrl}/articles/11380692567949-How-to-import-a-recovery-phrase-into-the-Uniswap-Wallet`,
        recoveryPhraseHowToFind: `${helpUrl}/articles/11306360177677-How-to-find-my-recovery-phrase-in-the-Uniswap-Wallet`,
        recoveryPhraseForgotten: `${helpUrl}/articles/11306367118349`,
        revokeExplainer: `${helpUrl}/articles/15724901841037-How-to-revoke-a-token-approval`,
        supportedNetworks: `${helpUrl}/articles/14569415293325`,
        swapFeeInfo: `${helpUrl}/articles/20131678274957`,
        passkeysInfo: `${helpUrl}/articles/35522111260173`,
        smartWalletDelegation: `${helpUrl}/articles/36391987158797`,
        swapProtection: `${helpUrl}/articles/18814993155853`,
        swapSlippage: `${helpUrl}/articles/8643879653261-What-is-Price-Slippage-`,
        tokenWarning: `${helpUrl}/articles/8723118437133-What-are-token-warnings-`,
        transactionFailure: `${helpUrl}/articles/8643975058829-Why-did-my-transaction-fail-`,
        uniswapXInfo: `${helpUrl}/articles/17544708791821`,
        uniswapXFailure: `${helpUrl}/articles/17515489874189-Why-can-my-swap-not-be-filled-`,
        unsupportedTokenPolicy: `${helpUrl}/articles/18783694078989-Unsupported-Token-Policy`,
        addingV4Hooks: `${helpUrl}/articles/32402040565133`,
        routingSettings: `${helpUrl}/articles/27362707722637`,
        v4HooksInfo: `${helpUrl}/articles/30998263256717`,
        walletSecurityMeasures: `${helpUrl}/articles/28278904584077-Uniswap-Wallet-Security-Measures`,
        wethExplainer: `${helpUrl}/articles/16015852009997-Why-do-ETH-swaps-involve-converting-to-WETH`,
    },
    termsOfServiceUrl: 'https://uniswap.org/terms-of-service',
    privacyPolicyUrl: 'https://uniswap.org/privacy-policy',
    chromeExtension: 'http://uniswap.org/ext',
    // Download links
    appStoreDownloadUrl: 'https://apps.apple.com/us/app/uniswap-crypto-nft-wallet/id6443944476',
    playStoreDownloadUrl: 'https://play.google.com/store/apps/details?id=com.uniswap.mobile&pcampaignid=web_share',
    // Core API Urls
    apiOrigin: 'https://api.uniswap.org',
    apiBaseUrl: config.apiBaseUrlOverride || getCloudflareApiBaseUrl(),
    apiBaseUrlV2: config.apiBaseUrlV2Override || `${getCloudflareApiBaseUrl()}/v2`,
    graphQLUrl: config.graphqlUrlOverride || `${getCloudflareApiBaseUrl(TrafficFlows.GraphQL)}/v1/graphql`,
    // Proxies
    amplitudeProxyUrl: config.amplitudeProxyUrlOverride || `${getCloudflareApiBaseUrl(TrafficFlows.Metrics)}/v1/amplitude-proxy`,
    statsigProxyUrl: config.statsigProxyUrlOverride || `${getCloudflareApiBaseUrl(TrafficFlows.Gating)}/v1/statsig-proxy`,
    // Feature service URL's
    unitagsApiUrl: config.unitagsApiUrlOverride || `${getCloudflareApiBaseUrl(TrafficFlows.Unitags)}/v2/unitags`,
    scantasticApiUrl: config.scantasticApiUrlOverride || `${getCloudflareApiBaseUrl(TrafficFlows.Scantastic)}/v2/scantastic`,
    forApiUrl: config.forApiUrlOverride || `${getCloudflareApiBaseUrl(TrafficFlows.FOR)}/v2/FOR.v1.FORService`,
    tradingApiUrl: config.tradingApiUrlOverride || getCloudflareApiBaseUrl(TrafficFlows.TradingApi),
    // Merkl Docs for LP Incentives
    merklDocsUrl: 'https://docs.merkl.xyz/earn-with-merkl/faq-earn#how-are-aprs-calculated',
    // Embedded Wallet URL's
    // Totally fine that these are public
    evervaultDevUrl: 'https://embedded-wallet-dev.app-907329d19a06.enclave.evervault.com',
    evervaultStagingUrl: 'https://embedded-wallet-staging.app-907329d19a06.enclave.evervault.com',
    evervaultProductionUrl: 'https://embedded-wallet.app-907329d19a06.enclave.evervault.com',
    embeddedWalletUrl: `https://${EMBEDDED_WALLET_HOSTNAME}`,
    passkeysManagementUrl: `https://${EMBEDDED_WALLET_HOSTNAME}/manage/passkey`,
    // API Paths
    trmPath: '/v1/screen',
    gasServicePath: '/v1/gas-fee',
    tradingApiPaths: {
        quote: `${tradingApiVersionPrefix}/quote`,
        indicativeQuote: `${tradingApiVersionPrefix}/indicative_quote`,
        approval: `${tradingApiVersionPrefix}/check_approval`,
        swap: `${tradingApiVersionPrefix}/swap`,
        swap5792: `${tradingApiVersionPrefix}/swap_5792`,
        order: `${tradingApiVersionPrefix}/order`,
        orders: `${tradingApiVersionPrefix}/orders`,
        swaps: `${tradingApiVersionPrefix}/swaps`,
        swappableTokens: `${tradingApiVersionPrefix}/swappable_tokens`,
        createLp: `${tradingApiVersionPrefix}/lp/create`,
        increaseLp: `${tradingApiVersionPrefix}/lp/increase`,
        decreaseLp: `${tradingApiVersionPrefix}/lp/decrease`,
        claimLpFees: `${tradingApiVersionPrefix}/lp/claim`,
        lpApproval: `${tradingApiVersionPrefix}/lp/approve`,
        migrate: `${tradingApiVersionPrefix}/lp/migrate`,
        claimRewards: `${tradingApiVersionPrefix}/lp/claim_rewards`,
        wallet: {
            checkDelegation: `${tradingApiVersionPrefix}/wallet/check_delegation`,
            encode7702: `${tradingApiVersionPrefix}/wallet/encode_7702`,
        },
        swap7702: `${tradingApiVersionPrefix}/swap_7702`,
    },
    // App and Redirect URL's
    appBaseUrl: UNISWAP_APP_URL,
    redirectUrlBase: UNISWAP_MOBILE_REDIRECT_URL,
    requestOriginUrl: UNISWAP_WEB_URL,
    // Web Interface Urls
    webInterfaceSwapUrl: `${UNISWAP_WEB_URL}/#/swap`,
    webInterfaceTokensUrl: `${UNISWAP_WEB_URL}/explore/tokens`,
    webInterfaceAddressUrl: `${UNISWAP_WEB_URL}/address`,
    webInterfaceNftItemUrl: `${UNISWAP_WEB_URL}/nfts/asset`,
    webInterfaceNftCollectionUrl: `${UNISWAP_WEB_URL}/nfts/collection`,
    webInterfaceBuyUrl: `${UNISWAP_WEB_URL}/buy`,
    // Feedback Links
    walletFeedbackForm: 'https://docs.google.com/forms/d/e/1FAIpQLSepzL5aMuSfRhSgw0zDw_gVmc2aeVevfrb1UbOwn6WGJ--46w/viewform',
    dataApiServiceUrl: `${getCloudflareApiBaseUrl()}/v2/data.v1.DataApiService`,
    dataApiServicePaths: {
        report: '/SubmitReport',
    },
};
function getCloudflarePrefix(flow) {
    if (flow && isDevOrBeta && FLOWS_USING_BETA.includes(flow)) {
        return `beta`;
    }
    if (isMobileApp) {
        return `${isAndroid ? 'android' : 'ios'}.wallet`;
    }
    if (isExtension) {
        return 'extension';
    }
    if (isPlaywrightEnv() || isInterface) {
        return 'interface';
    }
    if (isTestEnv()) {
        return 'wallet';
    }
    throw new Error('Could not determine app to generate Cloudflare prefix');
}
function getServicePrefix(flow) {
    if (flow && (isPlaywrightEnv() || !(isDevOrBeta && FLOWS_USING_BETA.includes(flow)))) {
        return flow + '.';
    }
    else {
        return '';
    }
}
function getCloudflareApiBaseUrl(flow) {
    return `https://${getServicePrefix(flow)}${getCloudflarePrefix(flow)}.gateway.uniswap.org`;
}
//# sourceMappingURL=urls.js.map