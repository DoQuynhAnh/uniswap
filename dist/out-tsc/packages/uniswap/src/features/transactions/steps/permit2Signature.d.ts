import type { TypedDataDomain, TypedDataField } from '@ethersproject/abstract-signer';
import type { Currency } from '@uniswap/sdk-core';
import { TransactionStepType } from 'uniswap/src/features/transactions/steps/types';
import { ValidatedPermit } from 'uniswap/src/features/transactions/swap/utils/trade';
export interface SignTypedDataStepFields {
    domain: TypedDataDomain;
    types: Record<string, TypedDataField[]>;
    values: Record<string, unknown>;
}
export interface Permit2SignatureStep extends SignTypedDataStepFields {
    type: TransactionStepType.Permit2Signature;
    token: Currency;
}
export declare function createPermit2SignatureStep(permitData: ValidatedPermit, token: Currency): Permit2SignatureStep;
//# sourceMappingURL=permit2Signature.d.ts.map