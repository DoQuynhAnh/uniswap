import { Signer, TypedDataDomain, TypedDataField, Wallet } from 'ethers/lib/ethers';
export interface SignsTypedData {
    _signTypedData: Wallet['_signTypedData'];
}
export declare function signTypedData(domain: TypedDataDomain, types: Record<string, TypedDataField[]>, value: Record<string, unknown>, signer: Signer): Promise<string>;
//# sourceMappingURL=signing.d.ts.map