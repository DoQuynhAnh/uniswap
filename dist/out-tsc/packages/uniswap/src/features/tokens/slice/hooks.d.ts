import { Currency } from '@uniswap/sdk-core';
import { BasicTokenInfo } from 'uniswap/src/features/tokens/slice/types';
export declare function useDismissedTokenWarnings(info: Maybe<Currency | BasicTokenInfo>): {
    tokenWarningDismissed: boolean;
    onDismissTokenWarning: () => void;
};
//# sourceMappingURL=hooks.d.ts.map