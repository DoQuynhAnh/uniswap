import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Lock, LockInterface } from "../Lock";
export declare class Lock__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Lock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Lock;
    connect(signer: Signer): Lock__factory;
    static readonly bytecode = "0x608080604052346013576010908160188239f35b5f80fdfe5f80fdfea164736f6c634300081a000a";
    static readonly abi: {
        inputs: never[];
        name: string;
        type: string;
    }[];
    static createInterface(): LockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Lock;
}
//# sourceMappingURL=Lock__factory.d.ts.map