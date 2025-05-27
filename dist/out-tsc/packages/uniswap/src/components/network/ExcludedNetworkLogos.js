import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { memo } from 'react';
import { Flex } from 'ui/src';
import { iconSizes, zIndexes } from 'ui/src/theme';
import { NetworkLogo } from 'uniswap/src/components/CurrencyLogo/NetworkLogo';
import { TestID } from 'uniswap/src/test/fixtures/testIDs';
const BANNER_SIZE = iconSizes.icon40;
const LOGO_SIZES = {
    single: iconSizes.icon24,
    singleInner: iconSizes.icon20,
    multi: iconSizes.icon20,
    multiInner: iconSizes.icon16,
};
const LOGO_STYLES = {
    single: { width: LOGO_SIZES.single, height: LOGO_SIZES.single },
    multi: { width: LOGO_SIZES.multi, height: LOGO_SIZES.multi },
};
const MAX_LOGOS = 4;
// Adds a solid background layer to prevent visibility through the logo
// due to the semi-transparent $statusCritical2 background color.
const BackgroundMask = ({ borderRadius, style }) => (_jsx(Flex, { backgroundColor: "$surface1", borderRadius: borderRadius, style: style, position: "absolute" }));
const SingleLogo = ({ chainId }) => (_jsx(Flex, { centered: true, borderRadius: "$rounded8", style: LOGO_STYLES.single, children: _jsx(NetworkLogo, { chainId: chainId, size: LOGO_SIZES.single }) }));
const TwoLogos = ({ chainIds }) => (_jsxs(_Fragment, { children: [_jsx(Flex, { position: "absolute", top: 0, left: 0, zIndex: zIndexes.mask, children: _jsx(Flex, { centered: true, borderRadius: "$rounded8", style: LOGO_STYLES.single, children: _jsx(NetworkLogo, { chainId: chainIds[0], size: LOGO_SIZES.singleInner }) }) }), _jsxs(Flex, { position: "absolute", bottom: 1, right: 1, zIndex: zIndexes.mask + 1, children: [_jsx(BackgroundMask, { borderRadius: "$rounded8", style: LOGO_STYLES.single }), _jsx(Flex, { backgroundColor: "$statusCritical2", borderRadius: "$rounded8", style: LOGO_STYLES.single, children: _jsx(Flex, { centered: true, style: LOGO_STYLES.single, children: _jsx(NetworkLogo, { chainId: chainIds[1], size: LOGO_SIZES.singleInner }) }) })] })] }));
const MultiLogo = ({ chainId, position, }) => (_jsxs(Flex, { position: "absolute", zIndex: zIndexes.mask, ...position, children: [_jsx(BackgroundMask, { borderRadius: "$rounded6", style: LOGO_STYLES.multi }), _jsx(Flex, { centered: true, backgroundColor: "$statusCritical2", borderRadius: "$rounded6", style: LOGO_STYLES.multi, children: _jsx(NetworkLogo, { chainId: chainId, size: LOGO_SIZES.multiInner }) })] }));
const ThreeLogos = ({ chainIds }) => (_jsxs(_Fragment, { children: [_jsx(MultiLogo, { chainId: chainIds[0], position: { top: -1, left: -1 } }), _jsx(MultiLogo, { chainId: chainIds[2], position: { bottom: -1, right: -1 } }), _jsx(MultiLogo, { chainId: chainIds[1] })] }));
const FourLogos = ({ chainIds, }) => (_jsxs(_Fragment, { children: [_jsx(MultiLogo, { chainId: chainIds[0], position: { top: -1, left: -1 } }), _jsx(MultiLogo, { chainId: chainIds[1], position: { bottom: -1, left: -1 } }), _jsx(MultiLogo, { chainId: chainIds[2], position: { bottom: -1, right: -1 } }), _jsx(MultiLogo, { chainId: chainIds[3], position: { top: -1, right: -1 } })] }));
export const ExcludedNetworkLogos = memo(function ExcludedNetworkLogos({ chainIds = [], }) {
    const renderLogos = () => {
        const validChainIds = chainIds.filter((id) => id !== undefined);
        const logoCount = Math.min(validChainIds.length, MAX_LOGOS);
        if (!validChainIds.length) {
            return null;
        }
        const logoComponents = {
            1: validChainIds[0] ? _jsx(SingleLogo, { chainId: validChainIds[0] }) : null,
            2: validChainIds.length >= 2 ? (_jsx(TwoLogos, { chainIds: [validChainIds[0], validChainIds[1]] })) : null,
            3: validChainIds.length >= 3 ? (_jsx(ThreeLogos, { chainIds: [validChainIds[0], validChainIds[1], validChainIds[2]] })) : null,
            4: validChainIds.length >= 4 ? (_jsx(FourLogos, { chainIds: [validChainIds[0], validChainIds[1], validChainIds[2], validChainIds[3]] })) : null,
        };
        return logoComponents[logoCount];
    };
    return (_jsx(Flex, { centered: true, height: BANNER_SIZE, width: BANNER_SIZE, children: _jsx(Flex, { centered: true, height: BANNER_SIZE, testID: TestID.ExcludedNetworkBanner, pointerEvents: "auto", width: BANNER_SIZE, position: "relative", children: renderLogos() }) }));
});
//# sourceMappingURL=ExcludedNetworkLogos.js.map