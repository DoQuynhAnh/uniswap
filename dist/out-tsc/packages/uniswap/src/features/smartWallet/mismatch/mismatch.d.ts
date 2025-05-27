import type { DelegationService } from 'uniswap/src/features/smartWallet/delegation/delegation';
import type { Logger } from 'utilities/src/logger/logger';
interface MismatchCtx {
    delegationService: DelegationService;
    getIsAtomicBatchingSupported: (input: {
        chainId: number;
    }) => Promise<boolean>;
    onMismatchDetected?: (payload: {
        chainId: number;
        isDelegated: boolean;
        delegatedAddress: Address;
    }) => void;
    logger?: Logger;
}
export type HasMismatchUtil = (input: {
    address: Address;
    chainId: number;
}) => Promise<boolean>;
export declare function createHasMismatchUtil(ctx: MismatchCtx): HasMismatchUtil;
export {};
//# sourceMappingURL=mismatch.d.ts.map