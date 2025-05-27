import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { TouchableArea, useMedia, useSporeColors } from 'ui/src';
import { iconSizes } from 'ui/src/theme';
import { TokenLogo } from 'uniswap/src/components/CurrencyLogo/TokenLogo';
import { Pill } from 'uniswap/src/components/pill/Pill';
import { getSymbolDisplayText } from 'uniswap/src/utils/currency';
function _TokenPill({ onSelectCurrency, token, index, section, }) {
    const { currency, logoUrl } = token.currencyInfo;
    const colors = useSporeColors();
    const media = useMedia();
    const onPress = () => {
        onSelectCurrency === null || onSelectCurrency === void 0 ? void 0 : onSelectCurrency(token.currencyInfo, section, index);
    };
    return (_jsx(TouchableArea, { hoverable: true, borderRadius: "$roundedFull", testID: `token-option-${currency.chainId}-${currency.symbol}`, onPress: onPress, children: _jsx(Pill, { borderColor: "$surface3Solid", borderRadius: "$roundedFull", borderWidth: "$spacing1", foregroundColor: colors.neutral1.val, icon: _jsx(TokenLogo, { chainId: currency.chainId, name: currency.name, size: iconSizes.icon24, symbol: currency.symbol, url: logoUrl }), label: getSymbolDisplayText(currency.symbol), pl: "$spacing4", pr: "$spacing12", py: "$spacing4", textVariant: media.xxs ? 'buttonLabel2' : 'buttonLabel1' }) }));
}
export const TokenPill = memo(_TokenPill);
//# sourceMappingURL=SuggestedToken.js.map