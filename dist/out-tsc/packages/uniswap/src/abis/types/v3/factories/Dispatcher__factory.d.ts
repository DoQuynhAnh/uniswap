import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { Dispatcher, DispatcherInterface } from "../Dispatcher";
export declare class Dispatcher__factory {
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): DispatcherInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Dispatcher;
}
//# sourceMappingURL=Dispatcher__factory.d.ts.map