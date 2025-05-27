import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dismissedWarningTokensSelector } from 'uniswap/src/features/tokens/slice/selectors';
import { dismissTokenWarning } from 'uniswap/src/features/tokens/slice/slice';
import { isBasicTokenInfo } from 'uniswap/src/features/tokens/slice/types';
import { getValidAddress } from 'uniswap/src/utils/addresses';
import { serializeToken } from 'uniswap/src/utils/currency';
export function useDismissedTokenWarnings(info) {
    var _a;
    const dispatch = useDispatch();
    const dismissedTokens = useSelector(dismissedWarningTokensSelector);
    const isBasicInfo = isBasicTokenInfo(info);
    const lowercasedAddress = getValidAddress(isBasicInfo ? info.address : (info === null || info === void 0 ? void 0 : info.isToken) ? info === null || info === void 0 ? void 0 : info.address : undefined, false);
    const tokenWarningDismissed = Boolean(info && lowercasedAddress && dismissedTokens && ((_a = dismissedTokens[info.chainId]) === null || _a === void 0 ? void 0 : _a[lowercasedAddress]));
    const onDismissTokenWarning = useCallback(() => {
        if (isBasicInfo) {
            // handle basic info
            dispatch(dismissTokenWarning({ token: info }));
        }
        else {
            // handle tokens
            if (info === null || info === void 0 ? void 0 : info.isToken) {
                dispatch(dismissTokenWarning({ token: serializeToken(info) }));
            }
        }
    }, [isBasicInfo, info, dispatch]);
    return { tokenWarningDismissed, onDismissTokenWarning };
}
//# sourceMappingURL=hooks.js.map