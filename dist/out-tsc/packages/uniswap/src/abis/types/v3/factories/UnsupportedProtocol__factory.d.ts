import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UnsupportedProtocol, UnsupportedProtocolInterface } from "../UnsupportedProtocol";
export declare class UnsupportedProtocol__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<UnsupportedProtocol>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): UnsupportedProtocol;
    connect(signer: Signer): UnsupportedProtocol__factory;
    static readonly bytecode = "0x60808060405234601357603c908160188239f35b5f80fdfe34602b577fea3559ef000000000000000000000000000000000000000000000000000000005f5260045ffd5b5f80fdfea164736f6c634300081a000a";
    static readonly abi: ({
        inputs: never[];
        name: string;
        type: string;
        stateMutability?: undefined;
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        name?: undefined;
    })[];
    static createInterface(): UnsupportedProtocolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): UnsupportedProtocol;
}
//# sourceMappingURL=UnsupportedProtocol__factory.d.ts.map