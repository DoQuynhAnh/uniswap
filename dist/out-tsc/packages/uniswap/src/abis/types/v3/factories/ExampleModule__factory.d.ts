import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ExampleModule, ExampleModuleInterface } from "../ExampleModule";
export declare class ExampleModule__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ExampleModule>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ExampleModule;
    connect(signer: Signer): ExampleModule__factory;
    static readonly bytecode = "0x6080806040523460155761011e908161001a8239f35b5f80fdfe60806040526004361015610011575f80fd5b5f3560e01c806367192b63146100bb5763a5fe08721461002f575f80fd5b346100b7575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100b7577ff173516ab337f2e7729ba9acd5771deab6be31f2ad8d5dd42dab5269e61701b9606060405160208152600960208201527f746573744576656e7400000000000000000000000000000000000000000000006040820152a1005b5f80fd5b346100b7575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100b7577f39492f34000000000000000000000000000000000000000000000000000000005f5260045ffdfea164736f6c634300081a000a";
    static readonly abi: ({
        inputs: never[];
        name: string;
        type: string;
        anonymous?: undefined;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): ExampleModuleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ExampleModule;
}
//# sourceMappingURL=ExampleModule__factory.d.ts.map