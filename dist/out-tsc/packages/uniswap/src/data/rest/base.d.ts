import { Transport } from '@connectrpc/connect';
import { ConnectTransportOptions } from '@connectrpc/connect-web';
export declare const createConnectTransportWithDefaults: (options?: Partial<ConnectTransportOptions>) => Transport;
/**
 * Connectrpc transports for Uniswap REST BE service
 */
export declare const uniswapGetTransport: Transport;
export declare const uniswapPostTransport: Transport;
export declare const ALL_NETWORKS_ARG = "ALL_NETWORKS";
/**
 * To add a ConnectRPC hook for a new BE client service:
 * 1. Create a new file in the `data/rest` directory with a name matching the service
 * 2. Copy the below template replacing `newService` with the service name
 *   a. The client service, Request, and Response types are imported from the generated client
 *   b. You can use exploreStats as a reference for how to structure the hook
 * export function useNewServiceQuery(
    input?: PartialMessage<NewServiceRequest>,
  ): UseQueryResult<NewServiceResponse, ConnectError> {
    return useQuery(newService, input, { transport: uniswapGetTransport })
  }
 */
//# sourceMappingURL=base.d.ts.map