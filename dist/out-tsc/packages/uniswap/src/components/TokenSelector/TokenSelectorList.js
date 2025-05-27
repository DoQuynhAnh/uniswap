import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Text } from 'ui/src';
import { HorizontalTokenList } from 'uniswap/src/components/TokenSelector/lists/HorizontalTokenList/HorizontalTokenList';
import { SelectorBaseList } from 'uniswap/src/components/lists/SelectorBaseList';
import { TokenOptionItem as BaseTokenOptionItem, TokenContextMenuVariant, } from 'uniswap/src/components/lists/items/tokens/TokenOptionItem';
import { WarningSeverity } from 'uniswap/src/components/modals/WarningModal/types';
import { setHasSeenBridgingTooltip } from 'uniswap/src/features/behaviorHistory/slice';
import { useEnabledChains } from 'uniswap/src/features/chains/hooks/useEnabledChains';
import { FeatureFlags } from 'uniswap/src/features/gating/flags';
import { useFeatureFlag } from 'uniswap/src/features/gating/hooks';
import { useLocalizationContext } from 'uniswap/src/features/language/LocalizationContext';
import TokenWarningModal from 'uniswap/src/features/tokens/TokenWarningModal';
import { getTokenWarningSeverity } from 'uniswap/src/features/tokens/safetyUtils';
import { useDismissedTokenWarnings } from 'uniswap/src/features/tokens/slice/hooks';
import { NumberType } from 'utilities/src/format/types';
import { DDRumManualTiming } from 'utilities/src/logger/datadog/datadogEvents';
import { usePerformanceLogger } from 'utilities/src/logger/usePerformanceLogger';
function isHorizontalListTokenItem(data) {
    return Array.isArray(data);
}
const TokenOptionItem = memo(function _TokenOptionItem({ tokenOption, onSelectCurrency, section, index, showWarnings, showTokenAddress, isKeyboardOpen, }) {
    const { currencyInfo } = tokenOption;
    const searchRevampEnabled = useFeatureFlag(FeatureFlags.SearchRevamp);
    const onPress = useCallback(() => onSelectCurrency(currencyInfo, section, index), [index, onSelectCurrency, section, currencyInfo]);
    const dispatch = useDispatch();
    const onPressTokenOption = useCallback(() => {
        dispatch(setHasSeenBridgingTooltip(true));
        onPress();
    }, [dispatch, onPress]);
    // Balance & quantity formatting
    const { convertFiatAmountFormatted, formatNumberOrString } = useLocalizationContext();
    const tokenBalance = formatNumberOrString({
        value: tokenOption.quantity,
        type: NumberType.TokenTx,
    });
    const fiatBalance = convertFiatAmountFormatted(tokenOption.balanceUSD, NumberType.FiatTokenPrice);
    const { isTestnetModeEnabled } = useEnabledChains();
    const balanceText = isTestnetModeEnabled ? tokenBalance : fiatBalance;
    const quantityText = isTestnetModeEnabled ? undefined : tokenBalance;
    // Token protection modal
    const severity = getTokenWarningSeverity(currencyInfo);
    const [showWarningModal, setShowWarningModal] = useState(false);
    const { tokenWarningDismissed } = useDismissedTokenWarnings(currencyInfo.currency);
    const isBlocked = severity === WarningSeverity.Blocked;
    const shouldShowWarningModalOnPress = isBlocked || (severity !== WarningSeverity.None && !tokenWarningDismissed);
    const onAcceptTokenWarning = useCallback(() => {
        setShowWarningModal(false);
        onPress();
    }, [onPress]);
    const legacyTokenOptionItemProps = {
        balance: balanceText,
        isKeyboardOpen,
        quantity: tokenOption.quantity,
        quantityFormatted: quantityText,
        showWarnings,
        tokenWarningDismissed,
    };
    return (_jsx(BaseTokenOptionItem, { option: tokenOption, showTokenAddress: showTokenAddress, contextMenuVariant: TokenContextMenuVariant.TokenSelector, rightElement: tokenOption.quantity && tokenOption.quantity !== 0 ? (_jsxs(_Fragment, { children: [_jsx(Text, { variant: "body1", children: balanceText }), quantityText && (_jsx(Text, { color: "$neutral2", variant: "body3", children: quantityText }))] })) : undefined, showDisabled: Boolean((showWarnings && isBlocked) || tokenOption.isUnsupported), modalInfo: {
            modal: (_jsx(TokenWarningModal, { currencyInfo0: currencyInfo, isVisible: showWarningModal, closeModalOnly: () => setShowWarningModal(false), onAcknowledge: onAcceptTokenWarning })),
            modalShouldShow: showWarnings && shouldShowWarningModalOnPress,
            modalSetIsOpen: setShowWarningModal,
        }, onPress: onPressTokenOption, ...(!searchRevampEnabled && legacyTokenOptionItemProps) }));
});
function _TokenSelectorList({ onSelectCurrency, sections, chainFilter, showTokenWarnings, isKeyboardOpen, refetch, loading, hasError, emptyElement, errorText, showTokenAddress, }) {
    const [expandedItems, setExpandedItems] = useState([]);
    usePerformanceLogger(DDRumManualTiming.TokenSelectorListRender, [chainFilter]);
    const handleExpand = useCallback((item) => {
        setExpandedItems((prev) => [...prev, key(item)]);
    }, [setExpandedItems]);
    const isExpandedItem = useCallback((item) => {
        return expandedItems.includes(key(item));
    }, [expandedItems]);
    const renderItem = ({ item, section, index }) => {
        if (isHorizontalListTokenItem(item)) {
            return (_jsx(HorizontalTokenList, { tokens: item, section: section, index: index, expanded: isExpandedItem(item), onSelectCurrency: onSelectCurrency, onExpand: () => handleExpand(item) }));
        }
        return (_jsx(TokenOptionItem, { index: index, isKeyboardOpen: isKeyboardOpen, section: section, showTokenAddress: showTokenAddress, showWarnings: showTokenWarnings, tokenOption: item, onSelectCurrency: onSelectCurrency }));
    };
    return (_jsx(SelectorBaseList, { renderItem: renderItem, sections: sections, chainFilter: chainFilter, refetch: refetch, loading: loading, hasError: hasError, emptyElement: emptyElement, errorText: errorText, keyExtractor: key, expandedItems: expandedItems }));
}
function key(item) {
    if (isHorizontalListTokenItem(item)) {
        return item.map((token) => token.currencyInfo.currencyId).join('-');
    }
    return item.currencyInfo.currencyId;
}
export const TokenSelectorList = memo(_TokenSelectorList);
//# sourceMappingURL=TokenSelectorList.js.map