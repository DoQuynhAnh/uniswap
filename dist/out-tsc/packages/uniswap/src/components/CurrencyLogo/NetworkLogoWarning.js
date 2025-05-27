import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Flex, useSporeColors } from 'ui/src';
import { RoundExclamation } from 'ui/src/components/icons/RoundExclamation';
import { borderRadii, iconSizes, zIndexes } from 'ui/src/theme';
import { STATUS_RATIO } from 'uniswap/src/components/CurrencyLogo/CurrencyLogo';
import { NetworkLogo } from 'uniswap/src/components/CurrencyLogo/NetworkLogo';
import { TestID } from 'uniswap/src/test/fixtures/testIDs';
const size = iconSizes.icon40;
const networkLogoSize = Math.round(size * STATUS_RATIO);
const imageStyle = {
    width: iconSizes.icon20,
    height: iconSizes.icon20,
    borderRadius: borderRadii.roundedFull,
};
export const NetworkLogoWarning = memo(function _NetworkLogoWarning({ chainId }) {
    const colors = useSporeColors();
    return (_jsx(Flex, { centered: true, height: size, width: size, children: _jsxs(Flex, { centered: true, height: size, testID: TestID.TokenLogo, pointerEvents: "auto", width: size, position: "relative", children: [_jsx(Flex, { opacity: 0.5, borderRadius: "$rounded8", backgroundColor: colors.white.val, children: _jsx(NetworkLogo, { chainId: chainId, size: iconSizes.icon28 }) }), _jsx(Flex, { bottom: -2, position: "absolute", right: -3, zIndex: zIndexes.mask, children: _jsx(Flex, { backgroundColor: "$surface1", borderRadius: "$roundedFull", alignItems: "center", justifyContent: "center", style: {
                            ...imageStyle,
                        }, children: _jsx(RoundExclamation, { size: networkLogoSize }) }) })] }) }));
});
//# sourceMappingURL=NetworkLogoWarning.js.map