import { Signer, BytesLike, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UniswapImmutables, UniswapImmutablesInterface } from "../UniswapImmutables";
export declare class UniswapImmutables__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(params: {
        v2Factory: string;
        v3Factory: string;
        pairInitCodeHash: BytesLike;
        poolInitCodeHash: BytesLike;
    }, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<UniswapImmutables>;
    getDeployTransaction(params: {
        v2Factory: string;
        v3Factory: string;
        pairInitCodeHash: BytesLike;
        poolInitCodeHash: BytesLike;
    }, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): UniswapImmutables;
    connect(signer: Signer): UniswapImmutables__factory;
    static readonly bytecode = "0x610100604052346100f157604051601f61011a38819003918201601f19168301916001600160401b038311848410176100dd578084926080946040528339810103126100f15760405190608082016001600160401b038111838210176100dd5760405261006b816100f5565b9081835261007b602082016100f5565b60208401908152604082810151818601908152606093840151939095019283526001600160a01b03938416608052935160a0525190911660c0525160e052516010908161010a823960805181505060a05181505060c05181505060e051815050f35b634e487b7160e01b5f52604160045260245ffd5b5f80fd5b51906001600160a01b03821682036100f15756fe5f80fdfea164736f6c634300081a000a";
    static readonly abi: {
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): UniswapImmutablesInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): UniswapImmutables;
}
//# sourceMappingURL=UniswapImmutables__factory.d.ts.map