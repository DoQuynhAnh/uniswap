import { jsx as _jsx } from "react/jsx-runtime";
import { iconSizes } from 'ui/src/theme';
import { TokenLogo } from 'uniswap/src/components/CurrencyLogo/TokenLogo';
export const STATUS_RATIO = 0.4;
export function CurrencyLogo({ currencyInfo, size = iconSizes.icon40, hideNetworkLogo, networkLogoBorderWidth, }) {
    if (!currencyInfo) {
        return null;
    }
    const { currency, logoUrl } = currencyInfo;
    const { chainId, symbol, name } = currency;
    return (_jsx(TokenLogo, { chainId: chainId, hideNetworkLogo: hideNetworkLogo, name: name, networkLogoBorderWidth: networkLogoBorderWidth, size: size, symbol: symbol, url: logoUrl }));
}
//# sourceMappingURL=CurrencyLogo.js.map