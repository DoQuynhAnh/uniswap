import { useMutation } from '@connectrpc/connect-query';
import { createConnectTransportWithDefaults } from 'uniswap/src/data/rest/base';
import { proxy } from 'uniswap/src/data/rest/conversionTracking/api/api-ConversionProxyService_connectquery';
import { getConversionProxyApiBaseUrl } from 'uniswap/src/data/rest/conversionTracking/utils';
const conversionProxyTransport = createConnectTransportWithDefaults({
    baseUrl: getConversionProxyApiBaseUrl(),
});
export function useConversionProxy() {
    return useMutation(proxy, { transport: conversionProxyTransport });
}
//# sourceMappingURL=useConversionProxy.js.map