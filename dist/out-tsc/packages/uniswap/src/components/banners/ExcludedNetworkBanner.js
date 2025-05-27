import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flex, Text } from 'ui/src';
import { spacing } from 'ui/src/theme';
import { ExcludedNetworkLogos } from 'uniswap/src/components/network/ExcludedNetworkLogos';
import { getChainInfo } from 'uniswap/src/features/chains/chainInfo';
export const ExcludedNetworkBanner = memo(function ExcludedNetworkBanner({ chainIds, }) {
    const { t } = useTranslation();
    const chainInfo = chainIds.length === 1 && chainIds[0] !== undefined ? getChainInfo(chainIds[0]) : null;
    const titleText = chainInfo
        ? t('smartWallet.InsufficientFunds.single.network.banner.title', { chain: chainInfo.name })
        : t('smartWallet.InsufficientFunds.network.banner.title', { count: chainIds.length });
    return (_jsx(Flex, { grow: true, backgroundColor: "$statusCritical2", borderRadius: "$rounded16", flexDirection: "row", p: "$spacing12", children: _jsxs(Flex, { row: true, alignItems: "center", gap: "$gap12", overflow: "hidden", children: [_jsx(ExcludedNetworkLogos, { chainIds: chainIds }), _jsxs(Flex, { alignItems: "flex-start", children: [_jsx(Text, { color: "$statusCritical", ellipsizeMode: "tail", numberOfLines: 1, variant: "buttonLabel3", children: titleText }), _jsx(Flex, { row: true, alignItems: "center", gap: "$gap8", minHeight: spacing.spacing20, children: _jsx(Text, { ellipsizeMode: "tail", numberOfLines: 1, variant: "body4", color: "$neutral2", children: t('smartWallet.InsufficientFunds.network.banner.description') }) })] })] }) }));
});
//# sourceMappingURL=ExcludedNetworkBanner.js.map