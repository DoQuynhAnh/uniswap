import { BasicTokenInfo, SerializedToken, SerializedTokenMap } from 'uniswap/src/features/tokens/slice/types';
export interface TokensState {
    dismissedTokenWarnings: SerializedTokenMap;
}
export declare const initialTokensState: TokensState;
export declare const resetTokens: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"tokens/resetTokens">, dismissTokenWarning: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    token: SerializedToken | BasicTokenInfo;
}, "tokens/dismissTokenWarning">, resetDismissedWarnings: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"tokens/resetDismissedWarnings">;
export declare const tokensReducer: import("redux").Reducer<TokensState>;
//# sourceMappingURL=slice.d.ts.map