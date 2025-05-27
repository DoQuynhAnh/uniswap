/* eslint-disable consistent-return */
import { NativeCurrency } from '@uniswap/sdk-core';
import { useTranslation } from 'react-i18next';
import { getAlertColor } from 'uniswap/src/components/modals/WarningModal/getAlertColor';
import { WarningSeverity } from 'uniswap/src/components/modals/WarningModal/types';
import { ProtectionResult } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
import { AttackType, TokenList } from 'uniswap/src/features/dataApi/types';
import { useLocalizationContext } from 'uniswap/src/features/language/LocalizationContext';
import { isInterface } from 'utilities/src/platform';
export var TokenProtectionWarning;
(function (TokenProtectionWarning) {
    // THESE NUMERIC VALUES MATTER -- they are used for severity comparison
    TokenProtectionWarning[TokenProtectionWarning["Blocked"] = 10] = "Blocked";
    TokenProtectionWarning[TokenProtectionWarning["MaliciousHoneypot"] = 9] = "MaliciousHoneypot";
    TokenProtectionWarning[TokenProtectionWarning["FotVeryHigh"] = 8] = "FotVeryHigh";
    TokenProtectionWarning[TokenProtectionWarning["MaliciousImpersonator"] = 7] = "MaliciousImpersonator";
    TokenProtectionWarning[TokenProtectionWarning["FotHigh"] = 6] = "FotHigh";
    TokenProtectionWarning[TokenProtectionWarning["MaliciousGeneral"] = 5] = "MaliciousGeneral";
    TokenProtectionWarning[TokenProtectionWarning["PotentialHoneypot"] = 4.5] = "PotentialHoneypot";
    TokenProtectionWarning[TokenProtectionWarning["SpamAirdrop"] = 4] = "SpamAirdrop";
    TokenProtectionWarning[TokenProtectionWarning["FotLow"] = 3] = "FotLow";
    TokenProtectionWarning[TokenProtectionWarning["NonDefault"] = 2] = "NonDefault";
    TokenProtectionWarning[TokenProtectionWarning["None"] = 1] = "None";
})(TokenProtectionWarning || (TokenProtectionWarning = {}));
export const TOKEN_PROTECTION_FOT_HONEYPOT_BREAKPOINT = 100;
export const TOKEN_PROTECTION_FOT_HIGH_FEE_BREAKPOINT = 80;
export const TOKEN_PROTECTION_FOT_FEE_BREAKPOINT = 15;
// Gets the FoT percentages from Currency, populated by our internal fees DB
export function getCurrencyFeeOnTransfer(currency) {
    if (!currency) {
        return {
            buyFeePercent: undefined,
            sellFeePercent: undefined,
        };
    }
    if (currency.isNative) {
        return {
            buyFeePercent: 0,
            sellFeePercent: 0,
        };
    }
    const sellFeePercent = currency.sellFeeBps ? currency.sellFeeBps.toNumber() / 100 : undefined;
    const buyFeePercent = currency.buyFeeBps ? currency.buyFeeBps.toNumber() / 100 : undefined;
    // Returns the percent (i.e. 5.1 for 5.1%)
    return {
        buyFeePercent,
        sellFeePercent,
    };
}
/** If Blockaid marks the token as having high fees, but we don't have data on token fees, show Blockaid's fees data in token protection warnings.
 * Is *NOT* shown in swap review, which shows fees from TradingApi swap simulation.
 */
export function getTokenProtectionFeeOnTransfer(currencyInfo) {
    var _a;
    const { buyFeePercent, sellFeePercent } = getCurrencyFeeOnTransfer(currencyInfo === null || currencyInfo === void 0 ? void 0 : currencyInfo.currency);
    const blockaidFeesData = (_a = currencyInfo === null || currencyInfo === void 0 ? void 0 : currencyInfo.safetyInfo) === null || _a === void 0 ? void 0 : _a.blockaidFees;
    const displayedBuyFeePercent = buyFeePercent !== null && buyFeePercent !== void 0 ? buyFeePercent : blockaidFeesData === null || blockaidFeesData === void 0 ? void 0 : blockaidFeesData.buyFeePercent;
    const displayedSellFeePercent = sellFeePercent !== null && sellFeePercent !== void 0 ? sellFeePercent : blockaidFeesData === null || blockaidFeesData === void 0 ? void 0 : blockaidFeesData.sellFeePercent;
    // Returns the percent (i.e. 5.1 for 5.1%)
    return {
        buyFeePercent: displayedBuyFeePercent,
        sellFeePercent: displayedSellFeePercent,
        maxFeePercent: displayedSellFeePercent || displayedBuyFeePercent
            ? Math.max(displayedSellFeePercent !== null && displayedSellFeePercent !== void 0 ? displayedSellFeePercent : 0, displayedBuyFeePercent !== null && displayedBuyFeePercent !== void 0 ? displayedBuyFeePercent : 0)
            : undefined,
    };
}
// eslint-disable-next-line complexity
export function getTokenProtectionWarning(currencyInfo) {
    if (!(currencyInfo === null || currencyInfo === void 0 ? void 0 : currencyInfo.currency) || !(currencyInfo === null || currencyInfo === void 0 ? void 0 : currencyInfo.safetyInfo)) {
        return TokenProtectionWarning.NonDefault;
    }
    const { currency, safetyInfo } = currencyInfo;
    const { protectionResult, attackType } = safetyInfo;
    if (currency instanceof NativeCurrency) {
        return TokenProtectionWarning.None;
    }
    const { maxFeePercent: feeOnTransfer } = getTokenProtectionFeeOnTransfer(currencyInfo);
    // prioritize high > medium > low warning levels
    if (safetyInfo.tokenList === TokenList.Blocked) {
        return TokenProtectionWarning.Blocked;
    }
    else if (feeOnTransfer === TOKEN_PROTECTION_FOT_HONEYPOT_BREAKPOINT) {
        return TokenProtectionWarning.MaliciousHoneypot;
    }
    else if ((feeOnTransfer && feeOnTransfer >= TOKEN_PROTECTION_FOT_HIGH_FEE_BREAKPOINT) ||
        ((protectionResult === ProtectionResult.Malicious || protectionResult === ProtectionResult.Spam) &&
            attackType === AttackType.HighFees)) {
        return TokenProtectionWarning.FotVeryHigh;
    }
    else if ((protectionResult === ProtectionResult.Malicious || protectionResult === ProtectionResult.Spam) &&
        attackType === AttackType.Impersonator) {
        return TokenProtectionWarning.MaliciousImpersonator;
    }
    else if (feeOnTransfer && feeOnTransfer >= TOKEN_PROTECTION_FOT_FEE_BREAKPOINT) {
        return TokenProtectionWarning.FotHigh;
    }
    else if (protectionResult === ProtectionResult.Malicious) {
        return TokenProtectionWarning.MaliciousGeneral;
    }
    else if (attackType === AttackType.Honeypot) {
        return TokenProtectionWarning.PotentialHoneypot;
    }
    else if (protectionResult === ProtectionResult.Spam && attackType === AttackType.Airdrop) {
        return TokenProtectionWarning.SpamAirdrop;
    }
    else if (feeOnTransfer && feeOnTransfer > 0 && feeOnTransfer < TOKEN_PROTECTION_FOT_FEE_BREAKPOINT) {
        return TokenProtectionWarning.FotLow;
    }
    else if (safetyInfo.tokenList === TokenList.NonDefault) {
        return TokenProtectionWarning.NonDefault;
    }
    return TokenProtectionWarning.None;
}
export function getIsFeeRelatedWarning(tokenProtectionWarning) {
    return (tokenProtectionWarning === TokenProtectionWarning.MaliciousHoneypot ||
        tokenProtectionWarning === TokenProtectionWarning.FotVeryHigh ||
        tokenProtectionWarning === TokenProtectionWarning.FotHigh ||
        tokenProtectionWarning === TokenProtectionWarning.FotLow);
}
export function getFeeWarning(feePercent) {
    // WarningSeverity for styling. Same logic as getTokenWarningSeverity but without non-fee-related cases.
    // If fee >= 5% then HIGH, else 0% < fee < 5% then MEDIUM, else NONE
    let tokenProtectionWarning = TokenProtectionWarning.None;
    if (feePercent >= TOKEN_PROTECTION_FOT_HONEYPOT_BREAKPOINT) {
        tokenProtectionWarning = TokenProtectionWarning.MaliciousHoneypot;
    }
    else if (feePercent >= TOKEN_PROTECTION_FOT_HIGH_FEE_BREAKPOINT) {
        tokenProtectionWarning = TokenProtectionWarning.FotVeryHigh;
    }
    else if (feePercent >= TOKEN_PROTECTION_FOT_FEE_BREAKPOINT) {
        tokenProtectionWarning = TokenProtectionWarning.FotHigh;
    }
    else if (feePercent > 0) {
        tokenProtectionWarning = TokenProtectionWarning.FotLow;
    }
    return tokenProtectionWarning;
}
export function getTokenWarningSeverity(currencyInfo) {
    if (!currencyInfo) {
        return WarningSeverity.None;
    }
    const tokenProtectionWarning = getTokenProtectionWarning(currencyInfo);
    return getSeverityFromTokenProtectionWarning(tokenProtectionWarning);
}
export function getSeverityFromTokenProtectionWarning(tokenProtectionWarning) {
    switch (tokenProtectionWarning) {
        case TokenProtectionWarning.Blocked:
            return WarningSeverity.Blocked;
        case TokenProtectionWarning.MaliciousHoneypot:
        case TokenProtectionWarning.MaliciousImpersonator:
        case TokenProtectionWarning.MaliciousGeneral:
        case TokenProtectionWarning.FotVeryHigh:
        case TokenProtectionWarning.FotHigh:
            return WarningSeverity.High;
        case TokenProtectionWarning.PotentialHoneypot:
        case TokenProtectionWarning.SpamAirdrop:
        case TokenProtectionWarning.FotLow:
            return WarningSeverity.Medium;
        case TokenProtectionWarning.NonDefault:
            return WarningSeverity.Low;
        case TokenProtectionWarning.None:
            return WarningSeverity.None;
    }
}
// Only combine into one plural-languaged modal if there are two tokens prefilled at the same time, and BOTH are low or BOTH are blocked
// i.e. interface PDP, or interface prefilled via URL `?inputCurrency=0x...&outputCurrency=0x...`
export function getShouldHaveCombinedPluralTreatment(currencyInfo0, currencyInfo1) {
    const designTreatment0 = getTokenWarningSeverity(currencyInfo0);
    const designTreatment1 = getTokenWarningSeverity(currencyInfo1);
    const pluralLowWarnings = currencyInfo1 && designTreatment0 === WarningSeverity.Low && designTreatment1 === WarningSeverity.Low;
    const pluralBlockedWarnings = currencyInfo1 && designTreatment0 === WarningSeverity.Blocked && designTreatment1 === WarningSeverity.Blocked;
    const plural = pluralLowWarnings || pluralBlockedWarnings;
    return plural !== null && plural !== void 0 ? plural : false;
}
export function useModalHeaderText({ tokenProtectionWarning, tokenSymbol0, tokenSymbol1, shouldHavePluralTreatment, }) {
    const { t } = useTranslation();
    if (!tokenProtectionWarning) {
        return null;
    }
    if (!shouldHavePluralTreatment && tokenSymbol1) {
        throw new Error('Should only combine into one plural-languaged modal if BOTH are low or BOTH are blocked');
    }
    switch (tokenProtectionWarning) {
        case TokenProtectionWarning.Blocked:
            return shouldHavePluralTreatment && tokenSymbol1
                ? t('token.safety.blocked.title.tokensNotAvailable', {
                    tokenSymbol0: tokenSymbol0 !== null && tokenSymbol0 !== void 0 ? tokenSymbol0 : t('common.thisToken'),
                    tokenSymbol1,
                })
                : t('token.safety.blocked.title.tokenNotAvailable', { tokenSymbol: tokenSymbol0 !== null && tokenSymbol0 !== void 0 ? tokenSymbol0 : t('common.thisToken') });
        case TokenProtectionWarning.MaliciousHoneypot:
            return t('token.safety.warning.sellFee100.title');
        case TokenProtectionWarning.FotVeryHigh:
            return t('token.safety.warning.fotVeryHigh.title');
        case TokenProtectionWarning.MaliciousImpersonator:
            return t('token.safety.warning.impersonator.title');
        case TokenProtectionWarning.FotHigh:
            return t('token.safety.warning.fotHigh.title');
        case TokenProtectionWarning.MaliciousGeneral:
            return t('token.safety.warning.malicious.title');
        case TokenProtectionWarning.PotentialHoneypot:
            return t('token.safety.warning.potentialHoneypot.title');
        case TokenProtectionWarning.SpamAirdrop:
            return t('token.safety.warning.spam.title');
        case TokenProtectionWarning.FotLow:
            return t('token.safety.warning.fotLow.title');
        case TokenProtectionWarning.NonDefault:
            return t('token.safety.warning.alwaysDoYourResearch');
        case TokenProtectionWarning.None:
            return null;
    }
}
// eslint-disable-next-line complexity
export function useModalSubtitleText({ tokenProtectionWarning, tokenSymbol, buyFeePercent, sellFeePercent, shouldHavePluralTreatment, }) {
    const { formatPercent } = useLocalizationContext();
    const { t } = useTranslation();
    if (!tokenProtectionWarning) {
        return null;
    }
    const tokenSymbolWithFallback = tokenSymbol !== null && tokenSymbol !== void 0 ? tokenSymbol : t('common.thisToken');
    const formattedBuyFeePercent = buyFeePercent && buyFeePercent > 0 ? formatPercent(buyFeePercent) : undefined;
    const formattedSellFeePercent = sellFeePercent && sellFeePercent > 0 ? formatPercent(sellFeePercent) : undefined;
    switch (tokenProtectionWarning) {
        case TokenProtectionWarning.Blocked:
            return isInterface
                ? shouldHavePluralTreatment
                    ? t('token.safety.warning.blocked.description.default_other')
                    : t('token.safety.warning.blocked.description.default_one')
                : t('token.safetyLevel.blocked.message');
        case TokenProtectionWarning.MaliciousHoneypot:
            return t('token.safety.warning.honeypot.message', { tokenSymbol: tokenSymbolWithFallback });
        case TokenProtectionWarning.MaliciousGeneral:
            return (t('token.safety.warning.malicious.general.message', { tokenSymbol: tokenSymbolWithFallback }) +
                ' ' +
                t('token.safety.warning.doYourOwnResearch'));
        case TokenProtectionWarning.MaliciousImpersonator:
            return t('token.safety.warning.malicious.impersonator.message', { tokenSymbol: tokenSymbolWithFallback });
        case TokenProtectionWarning.PotentialHoneypot:
            return t('token.safety.warning.potentialHoneypot.modal.message', { tokenSymbol: tokenSymbolWithFallback });
        case TokenProtectionWarning.SpamAirdrop:
            return (t('token.safety.warning.spam.message', { tokenSymbol: tokenSymbolWithFallback }) +
                ' ' +
                t('token.safety.warning.doYourOwnResearch'));
        case TokenProtectionWarning.FotVeryHigh:
        case TokenProtectionWarning.FotHigh:
        case TokenProtectionWarning.FotLow: {
            const feePercentCopy = !!formattedBuyFeePercent && !!formattedSellFeePercent
                ? t('token.safety.warning.tokenChargesFee.both.message', {
                    tokenSymbol: tokenSymbolWithFallback,
                    buyFeePercent: formattedBuyFeePercent,
                    sellFeePercent: formattedSellFeePercent,
                })
                : formattedBuyFeePercent
                    ? t('token.safety.warning.tokenChargesFee.buy.message', {
                        tokenSymbol: tokenSymbolWithFallback,
                        feePercent: formattedBuyFeePercent,
                    })
                    : formattedSellFeePercent
                        ? t('token.safety.warning.tokenChargesFee.sell.message', {
                            tokenSymbol: tokenSymbolWithFallback,
                            feePercent: formattedSellFeePercent,
                        })
                        : t('token.safety.warning.tokenChargesFee.unknownFee.message', {
                            tokenSymbol: tokenSymbolWithFallback,
                        });
            return (feePercentCopy +
                ' ' +
                t('token.safety.warning.mayResultInLoss') +
                ' ' +
                t('token.safety.fees.uniswapLabsDoesNotReceive'));
        }
        case TokenProtectionWarning.NonDefault:
            return shouldHavePluralTreatment
                ? t('token.safetyLevel.medium.message.plural')
                : t('token.safety.warning.medium.heading.named', { tokenSymbol: tokenSymbolWithFallback });
        case TokenProtectionWarning.None:
            return null;
    }
}
export function useTokenWarningCardText(currencyInfo) {
    const tokenProtectionWarning = getTokenProtectionWarning(currencyInfo);
    const { buyFeePercent, sellFeePercent } = getTokenProtectionFeeOnTransfer(currencyInfo);
    const heading = useCardHeaderText({ tokenProtectionWarning });
    const description = useCardSubtitleText({
        tokenProtectionWarning,
        tokenSymbol: currencyInfo === null || currencyInfo === void 0 ? void 0 : currencyInfo.currency.symbol,
        buyFeePercent,
        sellFeePercent,
    });
    if (!currencyInfo || !(currencyInfo === null || currencyInfo === void 0 ? void 0 : currencyInfo.safetyInfo)) {
        return {
            heading: null,
            description: null,
        };
    }
    return {
        heading,
        description,
    };
}
export function useCardHeaderText({ tokenProtectionWarning, }) {
    const { t } = useTranslation();
    switch (tokenProtectionWarning) {
        case TokenProtectionWarning.MaliciousHoneypot:
            return t('token.safety.warning.honeypot.title');
        case TokenProtectionWarning.FotVeryHigh:
            return t('token.safety.warning.fotVeryHigh.title');
        case TokenProtectionWarning.MaliciousImpersonator:
            return t('token.safety.warning.impersonator.title');
        case TokenProtectionWarning.FotHigh:
            return t('token.safety.warning.fotHigh.title');
        case TokenProtectionWarning.MaliciousGeneral:
            return t('token.safety.warning.malicious.title');
        case TokenProtectionWarning.PotentialHoneypot:
            return t('token.safety.warning.potentialHoneypot.title');
        case TokenProtectionWarning.SpamAirdrop:
            return t('token.safety.warning.spam.title');
        case TokenProtectionWarning.FotLow:
            return t('token.safety.warning.fotLow.title');
        case TokenProtectionWarning.NonDefault:
        case TokenProtectionWarning.None:
        default:
            return null;
    }
}
// eslint-disable-next-line complexity
export function useCardSubtitleText({ tokenProtectionWarning, tokenSymbol, buyFeePercent, sellFeePercent, }) {
    const { t } = useTranslation();
    const { formatPercent } = useLocalizationContext();
    const tokenSymbolWithFallback = tokenSymbol !== null && tokenSymbol !== void 0 ? tokenSymbol : t('common.thisToken');
    const formattedBuyFeePercent = buyFeePercent && buyFeePercent > 0 ? formatPercent(buyFeePercent) : undefined;
    const formattedSellFeePercent = sellFeePercent && sellFeePercent > 0 ? formatPercent(sellFeePercent) : undefined;
    switch (tokenProtectionWarning) {
        case TokenProtectionWarning.Blocked:
            return isInterface
                ? t('token.safety.warning.blocked.description.default_one')
                : t('token.safetyLevel.blocked.message');
        case TokenProtectionWarning.MaliciousHoneypot:
            return t('token.safety.warning.sellFee100.message', { tokenSymbol: tokenSymbolWithFallback });
        case TokenProtectionWarning.MaliciousGeneral:
            return t('token.safety.warning.malicious.general.message', { tokenSymbol: tokenSymbolWithFallback });
        case TokenProtectionWarning.MaliciousImpersonator:
            return t('token.safety.warning.malicious.impersonator.message.short', { tokenSymbol: tokenSymbolWithFallback });
        case TokenProtectionWarning.PotentialHoneypot:
            return t('token.safety.warning.potentialHoneypot.card.message', { tokenSymbol: tokenSymbolWithFallback });
        case TokenProtectionWarning.SpamAirdrop:
            return t('token.safety.warning.spam.message', { tokenSymbol: tokenSymbolWithFallback });
        case TokenProtectionWarning.FotVeryHigh:
        case TokenProtectionWarning.FotHigh:
        case TokenProtectionWarning.FotLow: {
            const feePercentCopy = !!formattedBuyFeePercent && !!formattedSellFeePercent
                ? t('token.safety.warning.tokenChargesFee.both.message', {
                    tokenSymbol: tokenSymbolWithFallback,
                    buyFeePercent: formattedBuyFeePercent,
                    sellFeePercent: formattedSellFeePercent,
                })
                : formattedBuyFeePercent
                    ? t('token.safety.warning.tokenChargesFee.buy.message', {
                        tokenSymbol: tokenSymbolWithFallback,
                        feePercent: formattedBuyFeePercent,
                    })
                    : formattedSellFeePercent
                        ? t('token.safety.warning.tokenChargesFee.sell.message', {
                            tokenSymbol: tokenSymbolWithFallback,
                            feePercent: formattedSellFeePercent,
                        })
                        : t('token.safety.warning.tokenChargesFee.unknownFee.message', {
                            tokenSymbol: tokenSymbolWithFallback,
                        });
            return feePercentCopy;
        }
        case TokenProtectionWarning.NonDefault:
            return t('token.safety.warning.medium.heading.named', { tokenSymbol: tokenSymbolWithFallback });
        case TokenProtectionWarning.None:
            return null;
    }
}
export function getFeeColor(feePercent) {
    const tokenProtectionWarning = getFeeWarning(feePercent);
    const severity = getSeverityFromTokenProtectionWarning(tokenProtectionWarning);
    const { headerText: textColor } = getAlertColor(severity);
    return textColor;
}
//# sourceMappingURL=safetyUtils.js.map