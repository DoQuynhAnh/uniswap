import { MethodKind } from '@bufbuild/protobuf';
import { ProxyRequest, ProxyResponse } from './api_pb.ts';
/**
 * @generated from rpc conversionproxy.v1.ConversionProxyService.Proxy
 */
export declare const proxy: {
    readonly localName: "proxy";
    readonly name: "Proxy";
    readonly kind: MethodKind.Unary;
    readonly I: typeof ProxyRequest;
    readonly O: typeof ProxyResponse;
    readonly service: {
        readonly typeName: "conversionproxy.v1.ConversionProxyService";
    };
};
//# sourceMappingURL=api-ConversionProxyService_connectquery.d.ts.map