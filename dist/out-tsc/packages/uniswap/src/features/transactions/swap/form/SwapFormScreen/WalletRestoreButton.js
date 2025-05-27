import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Flex, Text, TouchableArea } from 'ui/src';
import { InfoCircleFilled } from 'ui/src/components/icons/InfoCircleFilled';
import { useTransactionModalContext } from 'uniswap/src/features/transactions/components/TransactionModal/TransactionModalContext';
import { useEvent } from 'utilities/src/react/hooks';
export const WalletRestoreButton = () => {
    const { t } = useTranslation();
    const { openWalletRestoreModal } = useTransactionModalContext();
    const onRestorePress = useEvent(() => {
        if (!openWalletRestoreModal) {
            throw new Error('Invalid call to `onRestorePress` with missing `openWalletRestoreModal`');
        }
        openWalletRestoreModal();
    });
    return (_jsx(TouchableArea, { onPress: onRestorePress, children: _jsxs(Flex, { grow: true, row: true, alignItems: "center", alignSelf: "stretch", backgroundColor: "$surface2", borderBottomLeftRadius: "$rounded16", borderBottomRightRadius: "$rounded16", borderTopColor: "$surface1", borderTopWidth: 1, gap: "$spacing8", px: "$spacing12", py: "$spacing12", children: [_jsx(InfoCircleFilled, { color: "$statusWarning", size: "$icon.20" }), _jsx(Text, { color: "$statusWarning", variant: "subheading2", children: t('swap.form.warning.restore') })] }) }));
};
//# sourceMappingURL=WalletRestoreButton.js.map