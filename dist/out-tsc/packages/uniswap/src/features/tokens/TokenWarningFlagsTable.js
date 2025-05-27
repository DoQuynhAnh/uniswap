import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Flex, Text } from 'ui/src';
import { Flag } from 'ui/src/components/icons/Flag';
import { TokenList } from 'uniswap/src/features/dataApi/types';
import { useLocalizationContext } from 'uniswap/src/features/language/LocalizationContext';
import { WarningModalInfoContainer } from 'uniswap/src/features/tokens/WarningInfoModalContainer';
import { TokenProtectionWarning, getFeeColor } from 'uniswap/src/features/tokens/safetyUtils';
function getWarningFlags({ currencyInfo, formatPercent, t, tokenProtectionWarning, }) {
    var _a, _b, _c, _d, _e, _f, _g;
    const flags = [];
    const isToken = currencyInfo.currency.isToken;
    if (isToken) {
        // If Blockaid marks the token as having high fees, but we don't have data on token fees, show Blockaid's fees data
        const buyFeePercent = currencyInfo.currency.buyFeeBps
            ? ((_a = currencyInfo.currency.buyFeeBps) === null || _a === void 0 ? void 0 : _a.toNumber()) / 100
            : (_c = (_b = currencyInfo.safetyInfo) === null || _b === void 0 ? void 0 : _b.blockaidFees) === null || _c === void 0 ? void 0 : _c.buyFeePercent;
        const sellFeePercent = currencyInfo.currency.sellFeeBps
            ? ((_d = currencyInfo.currency.sellFeeBps) === null || _d === void 0 ? void 0 : _d.toNumber()) / 100
            : (_f = (_e = currencyInfo.safetyInfo) === null || _e === void 0 ? void 0 : _e.blockaidFees) === null || _f === void 0 ? void 0 : _f.sellFeePercent;
        if (buyFeePercent) {
            const buyFeeColor = getFeeColor(buyFeePercent);
            flags.push(_jsx(WarningFlag, { children: _jsx(Trans, { i18nKey: "token.safety.warning.feeDescription", components: {
                        fee: (_jsxs(Text, { variant: "body3", color: buyFeeColor, children: [formatPercent(buyFeePercent), " ", t('common.fee').toLowerCase()] })),
                    }, values: {
                        action: t('common.bought').toLowerCase(),
                    } }) }, "buy-fee"));
        }
        if (sellFeePercent) {
            const sellFeeColor = getFeeColor(sellFeePercent);
            flags.push(_jsx(WarningFlag, { children: _jsx(Trans, { i18nKey: "token.safety.warning.feeDescription", components: {
                        fee: (_jsxs(Text, { variant: "body3", color: sellFeeColor, children: [formatPercent(sellFeePercent), " ", t('common.fee').toLowerCase()] })),
                    }, values: {
                        action: t('common.sold').toLowerCase(),
                    } }) }, "sell-fee"));
        }
    }
    if (tokenProtectionWarning === TokenProtectionWarning.SpamAirdrop) {
        flags.push(_jsx(WarningFlag, { children: t('token.safety.warning.spamsUsers') }, "spam-warning"));
    }
    if (tokenProtectionWarning === TokenProtectionWarning.MaliciousImpersonator) {
        flags.push(_jsx(WarningFlag, { children: t('token.safety.warning.impersonator') }, "impersonator-warning"));
    }
    if (tokenProtectionWarning === TokenProtectionWarning.MaliciousGeneral) {
        flags.push(_jsx(WarningFlag, { children: t('token.safety.warning.flaggedAsMalicious') }, "malicious-general-warning"));
    }
    if (tokenProtectionWarning === TokenProtectionWarning.PotentialHoneypot) {
        flags.push(_jsx(WarningFlag, { children: t('token.safety.warning.flaggedAsSuspicious') }, "potential-honeypot-warning"));
    }
    if (((_g = currencyInfo.safetyInfo) === null || _g === void 0 ? void 0 : _g.tokenList) === TokenList.NonDefault) {
        flags.push(_jsx(WarningFlag, { children: t('token.safety.warning.notListedOnExchanges') }, "exchange-warning"));
    }
    return flags;
}
function WarningFlag({ children }) {
    return (_jsxs(Flex, { row: true, width: "100%", alignItems: "center", justifyContent: "flex-start", gap: "$spacing8", children: [_jsx(Flag, { size: "$icon.16", color: "$neutral2" }), _jsx(Text, { variant: "body3", color: "$neutral2", children: children })] }));
}
export function TokenWarningFlagsTable({ currencyInfo, tokenProtectionWarning, }) {
    const { t } = useTranslation();
    const { formatPercent } = useLocalizationContext();
    const flags = useMemo(() => getWarningFlags({ currencyInfo, formatPercent, t, tokenProtectionWarning }), [currencyInfo, formatPercent, t, tokenProtectionWarning]);
    if (flags.length === 0) {
        return null;
    }
    return (_jsx(WarningModalInfoContainer, { gap: "$spacing8", py: "$spacing12", children: flags }));
}
//# sourceMappingURL=TokenWarningFlagsTable.js.map