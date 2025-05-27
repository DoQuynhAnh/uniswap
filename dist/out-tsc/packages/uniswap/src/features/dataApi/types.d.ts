import { Currency } from '@uniswap/sdk-core';
import { ProtectionResult } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
import { SpamCode } from 'uniswap/src/data/types';
import { FoTPercent } from 'uniswap/src/features/tokens/TokenWarningModal';
import { CurrencyId } from 'uniswap/src/types/currency';
export declare enum TokenList {
    Default = "default",
    NonDefault = "non_default",
    Blocked = "blocked"
}
export declare enum AttackType {
    Honeypot = "honeypot",
    Airdrop = "airdrop",
    Impersonator = "impersonator",
    HighFees = "high-fees",
    Other = "other"
}
export type SafetyInfo = {
    tokenList: TokenList;
    attackType?: AttackType;
    protectionResult: ProtectionResult;
    blockaidFees?: FoTPercent;
};
export type CurrencyInfo = {
    currency: Currency;
    currencyId: CurrencyId;
    safetyInfo?: Maybe<SafetyInfo>;
    spamCode?: Maybe<SpamCode>;
    logoUrl: Maybe<string>;
    isSpam?: Maybe<boolean>;
    isFromOtherNetwork?: boolean;
};
export type PortfolioBalance = {
    id: string;
    cacheId: string;
    quantity: number;
    balanceUSD: Maybe<number>;
    currencyInfo: CurrencyInfo;
    relativeChange24: Maybe<number>;
    isHidden: Maybe<boolean>;
};
//# sourceMappingURL=types.d.ts.map