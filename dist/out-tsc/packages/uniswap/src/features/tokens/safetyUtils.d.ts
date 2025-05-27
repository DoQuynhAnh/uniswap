import { Currency } from '@uniswap/sdk-core';
import { ColorTokens } from 'ui/src';
import { WarningSeverity } from 'uniswap/src/components/modals/WarningModal/types';
import { CurrencyInfo } from 'uniswap/src/features/dataApi/types';
export declare enum TokenProtectionWarning {
    Blocked = 10,
    MaliciousHoneypot = 9,// 100% fot
    FotVeryHigh = 8,// [80, 100)% fot
    MaliciousImpersonator = 7,
    FotHigh = 6,// [5, 80)% fot
    MaliciousGeneral = 5,
    PotentialHoneypot = 4.5,// Between SpamAirdrop (4) and MaliciousGeneral (5)
    SpamAirdrop = 4,
    FotLow = 3,// (0, 5)% fot
    NonDefault = 2,
    None = 1
}
export declare const TOKEN_PROTECTION_FOT_HONEYPOT_BREAKPOINT = 100;
export declare const TOKEN_PROTECTION_FOT_HIGH_FEE_BREAKPOINT = 80;
export declare const TOKEN_PROTECTION_FOT_FEE_BREAKPOINT = 15;
export declare function getCurrencyFeeOnTransfer(currency?: Currency): {
    buyFeePercent: number | undefined;
    sellFeePercent: number | undefined;
};
/** If Blockaid marks the token as having high fees, but we don't have data on token fees, show Blockaid's fees data in token protection warnings.
 * Is *NOT* shown in swap review, which shows fees from TradingApi swap simulation.
 */
export declare function getTokenProtectionFeeOnTransfer(currencyInfo: Maybe<CurrencyInfo>): {
    buyFeePercent: number | undefined;
    sellFeePercent: number | undefined;
    maxFeePercent: number | undefined;
};
export declare function getTokenProtectionWarning(currencyInfo?: Maybe<CurrencyInfo>): TokenProtectionWarning;
export declare function getIsFeeRelatedWarning(tokenProtectionWarning?: TokenProtectionWarning): boolean;
export declare function getFeeWarning(feePercent: number): TokenProtectionWarning;
export declare function getTokenWarningSeverity(currencyInfo: Maybe<CurrencyInfo>): WarningSeverity;
export declare function getSeverityFromTokenProtectionWarning(tokenProtectionWarning: TokenProtectionWarning): WarningSeverity;
export declare function getShouldHaveCombinedPluralTreatment(currencyInfo0: CurrencyInfo, currencyInfo1?: CurrencyInfo): boolean;
export declare function useModalHeaderText({ tokenProtectionWarning, tokenSymbol0, tokenSymbol1, shouldHavePluralTreatment, }: {
    tokenProtectionWarning?: TokenProtectionWarning;
    tokenSymbol0?: string;
    tokenSymbol1?: string;
    shouldHavePluralTreatment?: boolean;
}): string | null;
export declare function useModalSubtitleText({ tokenProtectionWarning, tokenSymbol, buyFeePercent, sellFeePercent, shouldHavePluralTreatment, }: {
    tokenProtectionWarning: TokenProtectionWarning | undefined;
    tokenSymbol?: string;
    buyFeePercent?: number;
    sellFeePercent?: number;
    shouldHavePluralTreatment?: boolean;
}): string | null;
export declare function useTokenWarningCardText(currencyInfo: Maybe<CurrencyInfo>): {
    heading: string | null;
    description: string | null;
};
export declare function useCardHeaderText({ tokenProtectionWarning, }: {
    tokenProtectionWarning: TokenProtectionWarning;
}): string | null;
export declare function useCardSubtitleText({ tokenProtectionWarning, tokenSymbol, buyFeePercent, sellFeePercent, }: {
    tokenProtectionWarning: TokenProtectionWarning;
    tokenSymbol?: string;
    buyFeePercent?: number;
    sellFeePercent?: number;
}): string | null;
export declare function getFeeColor(feePercent: number): ColorTokens;
//# sourceMappingURL=safetyUtils.d.ts.map