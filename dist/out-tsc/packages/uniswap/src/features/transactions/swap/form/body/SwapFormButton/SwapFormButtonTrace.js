import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from 'react';
import { Trace } from 'uniswap/src/features/telemetry/Trace';
import { ElementName } from 'uniswap/src/features/telemetry/constants';
import { useSwapFormContext } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
const useTraceProperties = () => {
    const { exactAmountToken, exactAmountFiat, derivedSwapInfo: { chainId }, } = useSwapFormContext();
    return useMemo(() => ({
        chainId,
        tokenAmount: exactAmountToken,
        fiatAmount: exactAmountFiat,
    }), [chainId, exactAmountToken, exactAmountFiat]);
};
export const SwapFormButtonTrace = ({ children }) => {
    const traceProperties = useTraceProperties();
    return (_jsx(Trace, { logPress: true, properties: traceProperties, element: ElementName.SwapReview, children: children }));
};
//# sourceMappingURL=SwapFormButtonTrace.js.map