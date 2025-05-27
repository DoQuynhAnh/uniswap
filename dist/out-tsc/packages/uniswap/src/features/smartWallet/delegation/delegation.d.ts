import type { Logger } from 'utilities/src/logger/logger';
export declare function createDelegationService(ctx: {
    logger?: Logger;
    delegationRepository: DelegationRepository;
    onDelegationDetected?: (input: {
        address: Address;
        chainId: number;
    }) => void;
}): DelegationService;
export type DelegatedResult = {
    isDelegated: true;
    delegatedAddress: Address;
} | {
    isDelegated: false;
    delegatedAddress: null;
};
export interface DelegationService {
    getIsAddressDelegated: (input: {
        address: Address;
        chainId: number;
    }) => Promise<DelegatedResult>;
}
export interface DelegationRepository {
    getWalletBytecode: (input: {
        address: Address;
        chainId: number;
    }) => Promise<string>;
}
//# sourceMappingURL=delegation.d.ts.map