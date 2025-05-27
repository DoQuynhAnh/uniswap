import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { TokenSelectorList } from 'uniswap/src/components/TokenSelector/TokenSelectorList';
import { useTokenSectionsForEmptySearch } from 'uniswap/src/components/TokenSelector/hooks/useTokenSectionsForEmptySearch';
function _TokenSelectorEmptySearchList({ activeAccountAddress, chainFilter, onSelectCurrency, }) {
    const { t } = useTranslation();
    const { data: sections, loading, error, refetch, } = useTokenSectionsForEmptySearch({
        activeAccountAddress,
        chainFilter,
    });
    return (_jsx(TokenSelectorList, { showTokenAddress: true, errorText: t('token.selector.search.error'), hasError: Boolean(error), loading: loading, refetch: refetch, sections: sections, showTokenWarnings: true, onSelectCurrency: onSelectCurrency }));
}
export const TokenSelectorEmptySearchList = memo(_TokenSelectorEmptySearchList);
//# sourceMappingURL=TokenSelectorEmptySearchList.js.map