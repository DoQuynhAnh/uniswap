import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message conversionproxy.v1.Header
 */
export declare class Header extends Message<Header> {
    /**
     * @generated from field: string key = 1;
     */
    key: string;
    /**
     * @generated from field: string value = 2;
     */
    value: string;
    constructor(data?: PartialMessage<Header>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "conversionproxy.v1.Header";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Header;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Header;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Header;
    static equals(a: Header | PlainMessage<Header> | undefined, b: Header | PlainMessage<Header> | undefined): boolean;
}
/**
 * @generated from message conversionproxy.v1.ProxyRequest
 */
export declare class ProxyRequest extends Message<ProxyRequest> {
    /**
     * @generated from field: string requestType = 1;
     */
    requestType: string;
    /**
     * @generated from field: string identifier = 2;
     */
    identifier: string;
    /**
     * @generated from field: string to = 3;
     */
    to: string;
    /**
     * @generated from field: string method = 4;
     */
    method: string;
    /**
     * @generated from field: optional string body = 5;
     */
    body?: string;
    /**
     * @generated from field: repeated conversionproxy.v1.Header headers = 6;
     */
    headers: Header[];
    constructor(data?: PartialMessage<ProxyRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "conversionproxy.v1.ProxyRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProxyRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProxyRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProxyRequest;
    static equals(a: ProxyRequest | PlainMessage<ProxyRequest> | undefined, b: ProxyRequest | PlainMessage<ProxyRequest> | undefined): boolean;
}
/**
 * @generated from message conversionproxy.v1.ProxyResponse
 */
export declare class ProxyResponse extends Message<ProxyResponse> {
    /**
     * @generated from field: int32 status = 1;
     */
    status: number;
    /**
     * @generated from field: string statusText = 2;
     */
    statusText: string;
    /**
     * @generated from field: string body = 3;
     */
    body: string;
    /**
     * @generated from field: repeated conversionproxy.v1.Header headers = 4;
     */
    headers: Header[];
    constructor(data?: PartialMessage<ProxyResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "conversionproxy.v1.ProxyResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProxyResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProxyResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProxyResponse;
    static equals(a: ProxyResponse | PlainMessage<ProxyResponse> | undefined, b: ProxyResponse | PlainMessage<ProxyResponse> | undefined): boolean;
}
//# sourceMappingURL=api_pb.d.ts.map