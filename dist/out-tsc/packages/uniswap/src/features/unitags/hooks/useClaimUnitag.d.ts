import { SignMessageFunc } from 'uniswap/src/data/utils';
import { UnitagClaim, UnitagClaimContext } from 'uniswap/src/features/unitags/types';
/**
 * A custom async hook that handles the process of claiming a Unitag
 * Hook must be used inside the OnboardingContext
 */
export declare const useClaimUnitag: () => (claim: UnitagClaim, context: UnitagClaimContext, address?: string, signMessage?: SignMessageFunc) => Promise<{
    claimError?: string;
}>;
//# sourceMappingURL=useClaimUnitag.d.ts.map