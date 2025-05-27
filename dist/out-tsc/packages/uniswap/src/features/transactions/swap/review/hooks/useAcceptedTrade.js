import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { requireAcceptNewTrade } from 'uniswap/src/features/transactions/swap/utils/trade';
import { interruptTransactionFlow } from 'uniswap/src/utils/saga';
import { isInterface } from 'utilities/src/platform';
export function useAcceptedTrade({ derivedSwapInfo, isSubmitting, }) {
    var _a;
    const [acceptedDerivedSwapInfo, setAcceptedDerivedSwapInfo] = useState();
    const dispatch = useDispatch();
    const { trade, indicativeTrade } = (_a = derivedSwapInfo === null || derivedSwapInfo === void 0 ? void 0 : derivedSwapInfo.trade) !== null && _a !== void 0 ? _a : {};
    const acceptedTrade = acceptedDerivedSwapInfo === null || acceptedDerivedSwapInfo === void 0 ? void 0 : acceptedDerivedSwapInfo.trade.trade;
    // In wallet, once swap is clicked / submission is in progress, it is too late to prompt user to accept new trade.
    // On interface, we can prompt the user to accept a new trade mid-flow.
    const avoidPromptingUserToAcceptNewTrade = isSubmitting && !isInterface;
    // Avoid prompting user to accept new trade if submission is in progress
    const newTradeRequiresAcceptance = !avoidPromptingUserToAcceptNewTrade && requireAcceptNewTrade(acceptedTrade, trade);
    useEffect(() => {
        if ((!trade && !indicativeTrade) || trade === acceptedTrade) {
            return;
        }
        // auto-accept: 1) first valid trade for the user or 2) new trade if price movement is below threshold
        if (!acceptedTrade || !newTradeRequiresAcceptance) {
            setAcceptedDerivedSwapInfo(derivedSwapInfo);
        }
        // If a new trade requires acceptance, interrupt interface's transaction flow
        if (isInterface && newTradeRequiresAcceptance) {
            dispatch(interruptTransactionFlow());
        }
    }, [trade, acceptedTrade, indicativeTrade, newTradeRequiresAcceptance, derivedSwapInfo, dispatch]);
    const onAcceptTrade = () => {
        if (!trade) {
            return;
        }
        setAcceptedDerivedSwapInfo(derivedSwapInfo);
    };
    return {
        onAcceptTrade,
        acceptedDerivedSwapInfo,
        newTradeRequiresAcceptance,
    };
}
//# sourceMappingURL=useAcceptedTrade.js.map