import { NullablePermit } from 'uniswap/src/data/tradingApi/__generated__';
export type PresignPermitFn = (permitData: NullablePermit) => Promise<string | undefined>;
/**
 * Returns a signing utility that can be used to sign permits needed for legacy /swap calldata fetching,
 * for applicable environments.
 */
export declare function usePresignPermit(): PresignPermitFn | undefined;
//# sourceMappingURL=hooks.d.ts.map