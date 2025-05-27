import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { InterfaceEventName, InterfaceModalName } from '@uniswap/analytics-events';
import { hasStringAsync } from 'expo-clipboard';
import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Flex, ModalCloseIcon, Text, isWeb, useMedia, useScrollbarStyles, useSporeColors } from 'ui/src';
import { InfoCircleFilled } from 'ui/src/components/icons/InfoCircleFilled';
import { spacing, zIndexes } from 'ui/src/theme';
import { TokenSelectorEmptySearchList } from 'uniswap/src/components/TokenSelector/lists/TokenSelectorEmptySearchList';
import { TokenSelectorSearchResultsList } from 'uniswap/src/components/TokenSelector/lists/TokenSelectorSearchResultsList';
import { TokenSelectorSendList } from 'uniswap/src/components/TokenSelector/lists/TokenSelectorSendList';
import { TokenSelectorSwapInputList } from 'uniswap/src/components/TokenSelector/lists/TokenSelectorSwapInputList';
import { TokenSelectorSwapOutputList } from 'uniswap/src/components/TokenSelector/lists/TokenSelectorSwapOutputList';
import { TokenSelectorFlow } from 'uniswap/src/components/TokenSelector/types';
import { flowToModalName } from 'uniswap/src/components/TokenSelector/utils';
import PasteButton from 'uniswap/src/components/buttons/PasteButton';
import { OnchainItemSectionName } from 'uniswap/src/components/lists/OnchainItemList/types';
import { useBottomSheetContext } from 'uniswap/src/components/modals/BottomSheetContext';
import { Modal } from 'uniswap/src/components/modals/Modal';
import { NetworkFilter } from 'uniswap/src/components/network/NetworkFilter';
import { useUniswapContext } from 'uniswap/src/contexts/UniswapContext';
import { useEnabledChains } from 'uniswap/src/features/chains/hooks/useEnabledChains';
import { useFilterCallbacks } from 'uniswap/src/features/search/SearchModal/hooks/useFilterCallbacks';
import { SearchTextInput } from 'uniswap/src/features/search/SearchTextInput';
import Trace from 'uniswap/src/features/telemetry/Trace';
import { ElementName, ModalName, SectionName, UniswapEventName } from 'uniswap/src/features/telemetry/constants';
import { sendAnalyticsEvent } from 'uniswap/src/features/telemetry/send';
import useIsKeyboardOpen from 'uniswap/src/hooks/useIsKeyboardOpen';
import { CurrencyField } from 'uniswap/src/types/currency';
import { getClipboard } from 'uniswap/src/utils/clipboard';
import { currencyAddress } from 'uniswap/src/utils/currencyId';
import { dismissNativeKeyboard } from 'utilities/src/device/keyboard/dismissNativeKeyboard';
import { isExtension, isInterface, isMobileApp, isMobileWeb } from 'utilities/src/platform';
import { useTrace } from 'utilities/src/telemetry/trace/TraceContext';
import { useDebounce } from 'utilities/src/time/timing';
export const TOKEN_SELECTOR_WEB_MAX_WIDTH = 400;
export const TOKEN_SELECTOR_WEB_MAX_HEIGHT = 700;
export var TokenSelectorVariation;
(function (TokenSelectorVariation) {
    // used for Send flow, only show currencies with a balance
    TokenSelectorVariation["BalancesOnly"] = "balances-only";
    // Swap input and output sections specced in 'Multichain UX: Token Selector and Swap' doc on Notion
    TokenSelectorVariation["SwapInput"] = "swap-input";
    TokenSelectorVariation["SwapOutput"] = "swap-output";
})(TokenSelectorVariation || (TokenSelectorVariation = {}));
export function TokenSelectorContent({ currencyField, flow, variation, input, output, activeAccountAddress, chainId, chainIds, isSurfaceReady = true, isLimits, onClose, onSelectChain, onSelectCurrency, }) {
    const { onChangeChainFilter, onChangeText, searchFilter, chainFilter, parsedChainFilter, parsedSearchFilter } = useFilterCallbacks(chainId !== null && chainId !== void 0 ? chainId : null, flowToModalName(flow));
    const debouncedSearchFilter = useDebounce(searchFilter);
    const debouncedParsedSearchFilter = useDebounce(parsedSearchFilter);
    const scrollbarStyles = useScrollbarStyles();
    const isKeyboardOpen = useIsKeyboardOpen();
    const { navigateToBuyOrReceiveWithEmptyWallet } = useUniswapContext();
    const media = useMedia();
    const isSmallScreen = (media.sm && isInterface) || isMobileApp || isMobileWeb;
    const [hasClipboardString, setHasClipboardString] = useState(false);
    const { chains: enabledChains, isTestnetModeEnabled } = useEnabledChains();
    // Check if user clipboard has any text to show paste button
    useEffect(() => {
        async function checkClipboard() {
            const result = await hasStringAsync();
            setHasClipboardString(result);
        }
        // Browser doesn't have permissions to access clipboard by default
        // so it will prompt the user to allow clipboard access which is
        // quite jarring and unnecessary.
        if (isInterface) {
            return;
        }
        checkClipboard().catch(() => undefined);
    }, []);
    const { t } = useTranslation();
    const { page } = useTrace();
    // Log currency field only for swap as for send it's always input
    const currencyFieldName = flow === TokenSelectorFlow.Swap
        ? currencyField === CurrencyField.INPUT
            ? ElementName.TokenInputSelector
            : ElementName.TokenOutputSelector
        : undefined;
    const onSelectCurrencyCallback = useCallback((currencyInfo, section, index) => {
        var _a;
        const searchContext = {
            category: section.sectionKey,
            query: debouncedSearchFilter !== null && debouncedSearchFilter !== void 0 ? debouncedSearchFilter : undefined,
            position: index + 1,
            suggestionCount: section.data.length,
            searchChainFilter: chainFilter,
        };
        // log event that a currency was selected
        const tokenOption = section.data[index];
        const balanceUSD = Array.isArray(tokenOption) ? undefined : (_a = tokenOption === null || tokenOption === void 0 ? void 0 : tokenOption.balanceUSD) !== null && _a !== void 0 ? _a : undefined;
        sendAnalyticsEvent(UniswapEventName.TokenSelected, {
            name: currencyInfo.currency.name,
            address: currencyAddress(currencyInfo.currency),
            chain: currencyInfo.currency.chainId,
            modal: flowToModalName(flow),
            page,
            field: currencyField,
            token_balance_usd: balanceUSD,
            category: searchContext.category,
            position: searchContext.position,
            suggestion_count: searchContext.suggestionCount,
            query: searchContext.query,
            tokenSection: section.sectionKey,
            preselect_asset: false,
        });
        const forceIsBridgePair = section.sectionKey === OnchainItemSectionName.BridgingTokens;
        onSelectCurrency({
            currency: currencyInfo.currency,
            field: currencyField,
            forceIsBridgePair,
            isPreselectedAsset: false,
        });
    }, [debouncedSearchFilter, chainFilter, flow, page, currencyField, onSelectCurrency]);
    const handlePaste = async () => {
        const clipboardContent = await getClipboard();
        if (clipboardContent) {
            onChangeText(clipboardContent);
        }
    };
    const [searchInFocus, setSearchInFocus] = useState(false);
    const onSendEmptyActionPress = useCallback(() => {
        onClose();
        navigateToBuyOrReceiveWithEmptyWallet === null || navigateToBuyOrReceiveWithEmptyWallet === void 0 ? void 0 : navigateToBuyOrReceiveWithEmptyWallet();
    }, [navigateToBuyOrReceiveWithEmptyWallet, onClose]);
    function onCancel() {
        setSearchInFocus(false);
    }
    function onFocus() {
        if (!isWeb) {
            setSearchInFocus(true);
        }
    }
    const shouldAutoFocusSearch = isWeb && !media.sm;
    const tokenSelector = useMemo(() => {
        if (searchInFocus && !searchFilter && !isTestnetModeEnabled) {
            return (_jsx(TokenSelectorEmptySearchList, { activeAccountAddress: activeAccountAddress, chainFilter: chainFilter, onSelectCurrency: onSelectCurrencyCallback }));
        }
        if (searchFilter) {
            return (_jsx(TokenSelectorSearchResultsList, { activeAccountAddress: activeAccountAddress, chainFilter: chainFilter, debouncedParsedSearchFilter: debouncedParsedSearchFilter, debouncedSearchFilter: debouncedSearchFilter, isBalancesOnlySearch: variation === TokenSelectorVariation.BalancesOnly, isKeyboardOpen: isKeyboardOpen, parsedChainFilter: parsedChainFilter, searchFilter: searchFilter, input: input, onSelectCurrency: onSelectCurrencyCallback }));
        }
        switch (variation) {
            case TokenSelectorVariation.BalancesOnly:
                return (_jsx(TokenSelectorSendList, { activeAccountAddress: activeAccountAddress, chainFilter: chainFilter, isKeyboardOpen: isKeyboardOpen, onEmptyActionPress: onSendEmptyActionPress, onSelectCurrency: onSelectCurrencyCallback }));
            case TokenSelectorVariation.SwapInput:
                return (_jsx(TokenSelectorSwapInputList, { oppositeSelectedToken: output, activeAccountAddress: activeAccountAddress, chainFilter: chainFilter, isKeyboardOpen: isKeyboardOpen, onSelectCurrency: onSelectCurrencyCallback }));
            case TokenSelectorVariation.SwapOutput:
                return (_jsx(TokenSelectorSwapOutputList, { oppositeSelectedToken: input, activeAccountAddress: activeAccountAddress, chainFilter: chainFilter, isKeyboardOpen: isKeyboardOpen, onSelectCurrency: onSelectCurrencyCallback }));
            default:
                return undefined;
        }
    }, [
        searchInFocus,
        searchFilter,
        isTestnetModeEnabled,
        variation,
        activeAccountAddress,
        chainFilter,
        onSelectCurrencyCallback,
        debouncedParsedSearchFilter,
        debouncedSearchFilter,
        isKeyboardOpen,
        parsedChainFilter,
        input,
        onSendEmptyActionPress,
        output,
    ]);
    return (_jsx(Trace, { logImpression: isInterface, eventOnTrigger: InterfaceEventName.TOKEN_SELECTOR_OPENED, modal: InterfaceModalName.TOKEN_SELECTOR, children: _jsx(Trace, { logImpression: true, element: currencyFieldName, section: SectionName.TokenSelector, children: _jsxs(Flex, { grow: true, gap: "$spacing8", style: scrollbarStyles, children: [!isSmallScreen && (_jsxs(Flex, { row: true, justifyContent: "space-between", pt: "$spacing16", px: "$spacing16", children: [_jsx(Text, { variant: "subheading1", children: t('common.selectToken.label') }), _jsx(ModalCloseIcon, { onClose: onClose })] })), _jsx(SearchTextInput, { autoFocus: shouldAutoFocusSearch, backgroundColor: "$surface2", endAdornment: _jsxs(Flex, { row: true, alignItems: "center", children: [hasClipboardString && _jsx(PasteButton, { inline: true, textVariant: "buttonLabel3", onPress: handlePaste }), _jsx(NetworkFilter, { includeAllNetworks: !isTestnetModeEnabled, chainIds: chainIds || enabledChains, selectedChain: chainFilter, styles: isExtension || isMobileWeb ? { dropdownZIndex: zIndexes.overlay } : undefined, onDismiss: dismissNativeKeyboard, onPressChain: (newChainId) => {
                                        onChangeChainFilter(newChainId);
                                        onSelectChain === null || onSelectChain === void 0 ? void 0 : onSelectChain(newChainId);
                                    } })] }), placeholder: t('tokens.selector.search.placeholder'), px: "$spacing16", py: "$none", mx: spacing.spacing16, my: "$spacing4", value: searchFilter !== null && searchFilter !== void 0 ? searchFilter : '', onCancel: isWeb ? undefined : onCancel, onChangeText: onChangeText, onFocus: onFocus }), isLimits && (_jsxs(Flex, { row: true, backgroundColor: "$surface2", borderRadius: "$rounded12", gap: "$spacing12", mx: "$spacing8", p: "$spacing12", children: [_jsx(InfoCircleFilled, { color: "$neutral2", size: "$icon.20" }), _jsx(Text, { variant: "body3", children: t('limits.form.disclaimer.mainnet.short') })] })), isSurfaceReady && _jsx(Flex, { grow: true, children: tokenSelector })] }) }) }));
}
function TokenSelectorModalContent(props) {
    const { isModalOpen } = props;
    const { isSheetReady } = useBottomSheetContext();
    useEffect(() => {
        if (isModalOpen) {
            // Dismiss native keyboard when opening modal in case it was opened by the current screen.
            dismissNativeKeyboard();
        }
    }, [isModalOpen]);
    return _jsx(TokenSelectorContent, { ...props, isSurfaceReady: isSheetReady });
}
function _TokenSelectorModal(props) {
    const colors = useSporeColors();
    const { isModalOpen, onClose, focusHook } = props;
    return (_jsx(Modal, { extendOnKeyboardVisible: true, fullScreen: true, hideKeyboardOnDismiss: true, hideKeyboardOnSwipeDown: true, renderBehindBottomInset: true, backgroundColor: colors.surface1.val, isModalOpen: isModalOpen, maxWidth: isWeb ? TOKEN_SELECTOR_WEB_MAX_WIDTH : undefined, maxHeight: isInterface ? TOKEN_SELECTOR_WEB_MAX_HEIGHT : undefined, name: ModalName.TokenSelector, padding: "$none", snapPoints: ['65%', '100%'], height: isInterface ? '100vh' : undefined, focusHook: focusHook, onClose: onClose, children: _jsx(TokenSelectorModalContent, { ...props }) }));
}
export const TokenSelectorModal = memo(_TokenSelectorModal);
//# sourceMappingURL=TokenSelector.js.map