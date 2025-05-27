import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Flex, Text, TouchableArea, isWeb } from 'ui/src';
import { X } from 'ui/src/components/icons/X';
import { useTransactionModalContext } from 'uniswap/src/features/transactions/components/TransactionModal/TransactionModalContext';
import { TestID } from 'uniswap/src/test/fixtures/testIDs';
export const SwapFormHeader = () => {
    const { t } = useTranslation();
    const { onClose } = useTransactionModalContext();
    return (_jsxs(Flex, { row: true, alignItems: "center", justifyContent: "flex-start", mb: "$spacing16", mt: "$spacing4", testID: TestID.SwapFormHeader, children: [_jsx(TouchableArea, { testID: TestID.SwapSettings, onPress: onClose, children: _jsx(Flex, { centered: true, row: true, backgroundColor: isWeb ? undefined : '$surface2', borderRadius: "$roundedFull", px: "$spacing4", py: "$spacing4", children: _jsx(X, { color: "$neutral2", size: "$icon.24" }) }) }), _jsx(Flex, { position: "absolute", left: "50%", transform: "translateX(-50%)", children: _jsx(Text, { variant: "subheading1", children: t('swap.form.header') }) })] }));
};
//# sourceMappingURL=SwapFormHeader.web.js.map