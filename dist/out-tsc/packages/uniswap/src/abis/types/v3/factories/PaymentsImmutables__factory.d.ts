import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PaymentsImmutables, PaymentsImmutablesInterface } from "../PaymentsImmutables";
export declare class PaymentsImmutables__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(params: {
        permit2: string;
        weth9: string;
    }, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<PaymentsImmutables>;
    getDeployTransaction(params: {
        permit2: string;
        weth9: string;
    }, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): PaymentsImmutables;
    connect(signer: Signer): PaymentsImmutables__factory;
    static readonly bytecode = "0x60c0604052346100c157604051601f6100ea38819003918201601f19168301916001600160401b038311848410176100ad5780849260409485528339810103126100c15760408051919082016001600160401b038111838210176100ad5761007891602091604052610070816100c5565b8452016100c5565b602082018190526001600160a01b0390811660805290511660a052604051601090816100da823960805181505060a051815050f35b634e487b7160e01b5f52604160045260245ffd5b5f80fd5b51906001600160a01b03821682036100c15756fe5f80fdfea164736f6c634300081a000a";
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
    static createInterface(): PaymentsImmutablesInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PaymentsImmutables;
}
//# sourceMappingURL=PaymentsImmutables__factory.d.ts.map