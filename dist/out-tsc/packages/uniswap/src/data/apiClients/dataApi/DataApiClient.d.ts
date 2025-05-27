import { UniverseChainId } from 'uniswap/src/features/chains/types';
/**
 * Defines the types of events that can be reported for a token.
 */
export declare enum TokenReportEventType {
    FalseNegative = "TOKEN_REPORT_EVENT_TYPE_FALSE_NEGATIVE",
    FalsePositive = "TOKEN_REPORT_EVENT_TYPE_FALSE_POSITIVE"
}
interface SubmitTokenReportParams {
    chainId: UniverseChainId;
    address: string;
    event: TokenReportEventType;
}
/**
 * Submits a report about a token (e.g., marking spam or correcting a false spam flag).
 * @param chainId The chain ID where the token resides.
 * @param address The address of the token contract.
 * @param event The type of report event (FalseNegative or FalsePositive).
 */
export declare function submitTokenReport({ chainId, address, event }: SubmitTokenReportParams): Promise<void>;
export {};
//# sourceMappingURL=DataApiClient.d.ts.map