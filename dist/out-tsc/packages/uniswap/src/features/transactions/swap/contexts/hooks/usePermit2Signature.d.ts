import { PermitSingle } from '@uniswap/permit2-sdk';
import { Permit } from 'uniswap/src/data/tradingApi/__generated__/index';
export type PermitSignatureInfo = {
    signature: string;
    permitMessage: PermitSingle;
    nonce: number;
    expiry: number;
};
export declare function usePermit2SignatureWithData({ permitData, skip }: {
    permitData: Maybe<Permit>;
    skip?: boolean;
}): {
    isLoading: boolean;
    signature: string | undefined;
};
//# sourceMappingURL=usePermit2Signature.d.ts.map