import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Flex, Text, TouchableArea } from 'ui/src';
import { iconSizes } from 'ui/src/theme';
import { TokenLogo } from 'uniswap/src/components/CurrencyLogo/TokenLogo';
import { getSymbolDisplayText } from 'uniswap/src/utils/currency';
function _TokenCard({ onSelectCurrency, token, index, section, }) {
    const { currency, logoUrl } = token.currencyInfo;
    const onPress = () => {
        onSelectCurrency === null || onSelectCurrency === void 0 ? void 0 : onSelectCurrency(token.currencyInfo, section, index);
    };
    const tokenLabel = getSymbolDisplayText(currency.symbol);
    return (_jsx(TouchableArea, { hoverable: true, borderRadius: "$roundedFull", testID: `token-option-${currency.chainId}-${currency.symbol}`, onPress: onPress, children: _jsxs(Flex, { centered: true, backgroundColor: "$surface2", hoverStyle: { backgroundColor: '$surface1Hovered' }, borderRadius: "$rounded16", px: "$spacing16", py: "$spacing12", gap: "$gap4", children: [_jsx(TokenLogo, { chainId: currency.chainId, name: currency.name, size: iconSizes.icon24, symbol: currency.symbol, url: logoUrl }), _jsx(Text, { color: "$neutral1", variant: "buttonLabel3", children: tokenLabel })] }) }));
}
export const TokenCard = memo(_TokenCard);
//# sourceMappingURL=TokenCard.js.map