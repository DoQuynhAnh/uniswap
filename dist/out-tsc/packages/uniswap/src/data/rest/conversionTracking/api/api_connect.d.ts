import { ProxyRequest, ProxyResponse } from "./api_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service conversionproxy.v1.ConversionProxyService
 */
export declare const ConversionProxyService: {
    readonly typeName: "conversionproxy.v1.ConversionProxyService";
    readonly methods: {
        /**
         * @generated from rpc conversionproxy.v1.ConversionProxyService.Proxy
         */
        readonly proxy: {
            readonly name: "Proxy";
            readonly I: typeof ProxyRequest;
            readonly O: typeof ProxyResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=api_connect.d.ts.map