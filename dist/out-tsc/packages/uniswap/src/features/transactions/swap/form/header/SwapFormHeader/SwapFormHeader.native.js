import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Flex, Text } from 'ui/src';
import { TestID } from 'uniswap/src/test/fixtures/testIDs';
export const SwapFormHeader = () => {
    const { t } = useTranslation();
    return (_jsx(Flex, { row: true, alignItems: "center", position: "relative", justifyContent: "flex-start", mb: "$spacing12", mt: "$spacing8", pl: "$spacing12", py: "$spacing4", testID: TestID.SwapFormHeader, children: _jsx(Text, { variant: "subheading1", children: t('swap.form.header') }) }));
};
//# sourceMappingURL=SwapFormHeader.native.js.map