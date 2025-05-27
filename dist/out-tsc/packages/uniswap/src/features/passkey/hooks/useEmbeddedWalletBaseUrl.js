import { UNISWAP_WEB_URL } from 'uniswap/src/constants/urls';
import { DynamicConfigs, EmbeddedWalletConfigKey } from 'uniswap/src/features/gating/configs';
import { useDynamicConfigValue } from 'uniswap/src/features/gating/hooks';
export function useEmbeddedWalletBaseUrl() {
    const baseUrl = useDynamicConfigValue(DynamicConfigs.EmbeddedWalletConfig, EmbeddedWalletConfigKey.BaseUrl, UNISWAP_WEB_URL);
    return baseUrl;
}
//# sourceMappingURL=useEmbeddedWalletBaseUrl.js.map