import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { V4SwapRouter, V4SwapRouterInterface } from "../V4SwapRouter";
export declare class V4SwapRouter__factory {
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
    static createInterface(): V4SwapRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): V4SwapRouter;
}
//# sourceMappingURL=V4SwapRouter__factory.d.ts.map