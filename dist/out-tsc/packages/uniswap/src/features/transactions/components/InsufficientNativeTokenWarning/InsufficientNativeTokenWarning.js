import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Flex, Text, TouchableArea } from 'ui/src';
import { CurrencyLogo } from 'uniswap/src/components/CurrencyLogo/CurrencyLogo';
import { WarningModal } from 'uniswap/src/components/modals/WarningModal/WarningModal';
import { LearnMoreLink } from 'uniswap/src/components/text/LearnMoreLink';
import { uniswapUrls } from 'uniswap/src/constants/urls';
import { useAccountMeta } from 'uniswap/src/contexts/UniswapContext';
import { useBridgingTokenWithHighestBalance } from 'uniswap/src/features/bridging/hooks/tokens';
import { useEnabledChains } from 'uniswap/src/features/chains/hooks/useEnabledChains';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { ModalName } from 'uniswap/src/features/telemetry/constants';
import { BridgeTokenButton } from 'uniswap/src/features/transactions/components/InsufficientNativeTokenWarning/BridgeTokenButton';
import { BuyNativeTokenButton } from 'uniswap/src/features/transactions/components/InsufficientNativeTokenWarning/BuyNativeTokenButton';
import { InsufficientNativeTokenBaseComponent } from 'uniswap/src/features/transactions/components/InsufficientNativeTokenWarning/InsufficientNativeTokenBaseComponent';
import { useInsufficientNativeTokenWarning } from 'uniswap/src/features/transactions/components/InsufficientNativeTokenWarning/useInsufficientNativeTokenWarning';
import { currencyIdToAddress } from 'uniswap/src/utils/currencyId';
import { logger } from 'utilities/src/logger/logger';
export function InsufficientNativeTokenWarning({ warnings, flow, gasFee, }) {
    var _a;
    const parsedInsufficientNativeTokenWarning = useInsufficientNativeTokenWarning({
        warnings,
        flow,
        gasFee,
    });
    const { nativeCurrency, nativeCurrencyInfo } = parsedInsufficientNativeTokenWarning !== null && parsedInsufficientNativeTokenWarning !== void 0 ? parsedInsufficientNativeTokenWarning : {};
    const address = (_a = useAccountMeta()) === null || _a === void 0 ? void 0 : _a.address;
    if (!parsedInsufficientNativeTokenWarning || !nativeCurrencyInfo || !nativeCurrency) {
        return null;
    }
    if (!address) {
        logger.error(new Error('Unexpected render of `InsufficientNativeTokenWarning` without an active address'), {
            tags: {
                file: 'InsufficientNativeTokenWarning.tsx',
                function: 'InsufficientNativeTokenWarning',
            },
        });
        return null;
    }
    return (_jsx(InsufficientNativeTokenWarningContent, { address: address, parsedInsufficientNativeTokenWarning: parsedInsufficientNativeTokenWarning, nativeCurrencyInfo: nativeCurrencyInfo, nativeCurrency: nativeCurrency }));
}
function InsufficientNativeTokenWarningContent({ address, parsedInsufficientNativeTokenWarning, nativeCurrencyInfo, nativeCurrency, }) {
    var _a, _b;
    const { t } = useTranslation();
    const [showModal, setShowModal] = useState(false);
    const { isTestnetModeEnabled } = useEnabledChains();
    const { networkName, modalOrTooltipMainMessage } = parsedInsufficientNativeTokenWarning;
    const currencyAddress = currencyIdToAddress(nativeCurrencyInfo.currencyId);
    const { data: bridgingTokenWithHighestBalance } = useBridgingTokenWithHighestBalance({
        address,
        currencyAddress,
        currencyChainId: nativeCurrencyInfo.currency.chainId,
    });
    const shouldShowNetworkName = nativeCurrency.symbol === 'ETH' && nativeCurrency.chainId !== UniverseChainId.Mainnet;
    const onClose = () => {
        setShowModal(false);
    };
    return (_jsxs(_Fragment, { children: [_jsx(TouchableArea, { onPress: () => setShowModal(true), children: _jsx(InsufficientNativeTokenBaseComponent, { parsedInsufficientNativeTokenWarning: parsedInsufficientNativeTokenWarning }) }), showModal && (_jsxs(WarningModal, { isOpen: true, backgroundIconColor: false, icon: _jsx(CurrencyLogo, { currencyInfo: nativeCurrencyInfo }), modalName: ModalName.SwapWarning, title: shouldShowNetworkName
                    ? t('transaction.warning.insufficientGas.modal.title.withNetwork', {
                        tokenSymbol: (_a = nativeCurrency.symbol) !== null && _a !== void 0 ? _a : '',
                        networkName,
                    })
                    : t('transaction.warning.insufficientGas.modal.title.withoutNetwork', {
                        tokenSymbol: (_b = nativeCurrency.symbol) !== null && _b !== void 0 ? _b : '',
                    }), onClose: onClose, children: [_jsx(Text, { color: "$neutral2", textAlign: "center", variant: "body3", children: modalOrTooltipMainMessage }), _jsx(Flex, { row: true, py: "$spacing12", children: _jsx(LearnMoreLink, { textColor: "$accent3", textVariant: "buttonLabel3", url: uniswapUrls.helpArticleUrls.networkFeeInfo }) }), _jsxs(Flex, { width: "100%", gap: "$spacing12", children: [bridgingTokenWithHighestBalance && (_jsx(BridgeTokenButton, { inputToken: bridgingTokenWithHighestBalance.currencyInfo, outputToken: nativeCurrencyInfo, outputNetworkName: networkName, onPress: onClose })), !isTestnetModeEnabled && (_jsx(BuyNativeTokenButton, { nativeCurrencyInfo: nativeCurrencyInfo, usesStaticText: !!bridgingTokenWithHighestBalance, usesStaticTheme: !!bridgingTokenWithHighestBalance, onPress: onClose }))] })] }))] }));
}
//# sourceMappingURL=InsufficientNativeTokenWarning.js.map