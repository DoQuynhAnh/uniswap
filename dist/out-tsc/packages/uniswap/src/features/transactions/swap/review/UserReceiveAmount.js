import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Flex, Text } from 'ui/src';
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { formatCurrencyAmount } from 'utilities/src/format/localeBased';
import { NumberType } from 'utilities/src/format/types';
export function UserReceiveAmount({ amountUserWillReceive, outputCurrency, }) {
    const { t } = useTranslation();
    const receivedAmountPostFees = formatCurrencyAmount({
        amount: amountUserWillReceive,
        locale: 'en-US',
        type: NumberType.TokenTx,
        placeholder: '',
    });
    const formattedPostFeesAmount = outputCurrency ? `${receivedAmountPostFees} ${outputCurrency.symbol}` : '-';
    return (_jsxs(Flex, { row: true, alignItems: "center", justifyContent: "space-between", children: [_jsx(Text, { color: "$neutral2", variant: "body3", children: t('common.youReceive') }), _jsx(Text, { variant: "body3", children: formattedPostFeesAmount })] }));
}
//# sourceMappingURL=UserReceiveAmount.js.map