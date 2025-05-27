import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Flex, SpinningLoader } from 'ui/src';
import { iconSizes } from 'ui/src/theme';
import { TransactionModalInnerContainer } from 'uniswap/src/features/transactions/components/TransactionModal/TransactionModal';
import { useTransactionModalContext } from 'uniswap/src/features/transactions/components/TransactionModal/TransactionModalContext';
export const SwapReviewLoadingView = memo(function SwapReviewLoadingView() {
    const { bottomSheetViewStyles } = useTransactionModalContext();
    return (_jsx(TransactionModalInnerContainer, { bottomSheetViewStyles: bottomSheetViewStyles, fullscreen: false, children: _jsx(Flex, { centered: true, height: 377, mb: "$spacing28", children: _jsx(SpinningLoader, { size: iconSizes.icon40 }) }) }));
});
//# sourceMappingURL=SwapReviewLoadingView.js.map