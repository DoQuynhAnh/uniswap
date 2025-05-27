import { Currency } from '@uniswap/sdk-core';
import { WrapType } from 'uniswap/src/features/transactions/types/wrap';
export declare function getWrapType(inputCurrency: Currency | null | undefined, outputCurrency: Currency | null | undefined): WrapType;
export declare function isWrapAction(wrapType: WrapType): wrapType is WrapType.Unwrap | WrapType.Wrap;
//# sourceMappingURL=wrap.d.ts.map