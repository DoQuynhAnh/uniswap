import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { V3ToV4Migrator, V3ToV4MigratorInterface } from "../V3ToV4Migrator";
export declare class V3ToV4Migrator__factory {
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
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): V3ToV4MigratorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): V3ToV4Migrator;
}
//# sourceMappingURL=V3ToV4Migrator__factory.d.ts.map