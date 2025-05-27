import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Trans } from 'react-i18next';
import { Flex, Text } from 'ui/src';
import { OnchainItemSectionName } from 'uniswap/src/components/lists/OnchainItemList/types';
import { SectionHeader } from 'uniswap/src/components/lists/SectionHeader';
export function NoResultsFound({ searchFilter }) {
    return (_jsxs(Flex, { children: [_jsx(SectionHeader, { sectionKey: OnchainItemSectionName.SearchResults }), _jsx(Text, { color: "$neutral3", mt: "$spacing16", mx: "$spacing20", textAlign: "center", variant: "subheading2", children: _jsx(Trans, { components: { highlight: _jsx(Text, { color: "$neutral1", variant: "subheading2" }) }, i18nKey: "tokens.selector.search.empty", values: { searchText: searchFilter } }) })] }));
}
//# sourceMappingURL=NoResultsFound.js.map