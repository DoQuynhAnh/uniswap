import { jsx as _jsx } from "react/jsx-runtime";
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { TokenSelectorList } from 'uniswap/src/components/TokenSelector/TokenSelectorList';
import { useAddToSearchHistory } from 'uniswap/src/components/TokenSelector/hooks/useAddToSearchHistory';
import { useTokenSectionsForSearchResults } from 'uniswap/src/components/TokenSelector/hooks/useTokenSectionsForSearchResults';
import { NoResultsFound } from 'uniswap/src/components/lists/NoResultsFound';
function _TokenSelectorSearchResultsList({ onSelectCurrency: parentOnSelectCurrency, activeAccountAddress, chainFilter, parsedChainFilter, searchFilter, debouncedSearchFilter, debouncedParsedSearchFilter, isBalancesOnlySearch, isKeyboardOpen, input, }) {
    const { t } = useTranslation();
    const { registerSearchTokenCurrencyInfo } = useAddToSearchHistory();
    const { data: sections, loading, error, refetch, } = useTokenSectionsForSearchResults(activeAccountAddress, chainFilter !== null && chainFilter !== void 0 ? chainFilter : parsedChainFilter, debouncedParsedSearchFilter !== null && debouncedParsedSearchFilter !== void 0 ? debouncedParsedSearchFilter : debouncedSearchFilter, isBalancesOnlySearch, input);
    const onSelectCurrency = (currencyInfo, section, index) => {
        parentOnSelectCurrency(currencyInfo, section, index);
        registerSearchTokenCurrencyInfo(currencyInfo);
    };
    const userIsTyping = Boolean(searchFilter && debouncedSearchFilter !== searchFilter);
    const emptyElement = useMemo(() => (debouncedSearchFilter ? _jsx(NoResultsFound, { searchFilter: debouncedSearchFilter }) : undefined), [debouncedSearchFilter]);
    return (_jsx(TokenSelectorList, { showTokenAddress: true, chainFilter: chainFilter, emptyElement: emptyElement, errorText: t('token.selector.search.error'), hasError: Boolean(error), isKeyboardOpen: isKeyboardOpen, loading: userIsTyping || loading, refetch: refetch, sections: sections, showTokenWarnings: true, onSelectCurrency: onSelectCurrency }));
}
export const TokenSelectorSearchResultsList = memo(_TokenSelectorSearchResultsList);
//# sourceMappingURL=TokenSelectorSearchResultsList.js.map