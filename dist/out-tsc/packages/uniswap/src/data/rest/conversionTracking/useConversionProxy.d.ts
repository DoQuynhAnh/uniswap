import type { PartialMessage } from '@bufbuild/protobuf';
import { ConnectError } from '@connectrpc/connect';
import { UseMutationResult } from '@tanstack/react-query';
import { ProxyRequest, ProxyResponse } from 'uniswap/src/data/rest/conversionTracking/api/api_pb';
export declare function useConversionProxy(): UseMutationResult<ProxyResponse, ConnectError, PartialMessage<ProxyRequest>>;
//# sourceMappingURL=useConversionProxy.d.ts.map