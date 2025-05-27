import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Flex, Text } from 'ui/src';
import { iconSizes } from 'ui/src/theme';
import { SplitLogo } from 'uniswap/src/components/CurrencyLogo/SplitLogo';
import Badge from 'uniswap/src/components/badge/Badge';
import { OptionItem } from 'uniswap/src/components/lists/items/OptionItem';
import { PoolOptionItemContextMenu } from 'uniswap/src/components/lists/items/pools/PoolOptionItemContextMenu';
import { BIPS_BASE } from 'uniswap/src/constants/misc';
import { ProtocolVersion } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
import { shortenAddress } from 'utilities/src/addresses';
function _PoolOptionItem({ token0CurrencyInfo, token1CurrencyInfo, poolId, chainId, onPress, protocolVersion, hookAddress, feeTier, focusedRowControl, }) {
    const poolName = `${token0CurrencyInfo.currency.symbol}/${token1CurrencyInfo.currency.symbol}`;
    const optionItem = (_jsx(OptionItem, { image: _jsx(SplitLogo, { size: iconSizes.icon40, inputCurrencyInfo: token0CurrencyInfo, outputCurrencyInfo: token1CurrencyInfo, chainId: chainId }), title: poolName, subtitle: protocolVersion !== ProtocolVersion.V4 ? (_jsx(Text, { color: "$neutral3", numberOfLines: 1, variant: "body3", children: shortenAddress(poolId) })) : undefined, badge: _jsxs(Flex, { row: true, gap: "$spacing2", alignItems: "center", children: [_jsx(Badge, { size: "small", placement: "start", children: protocolVersion.toLowerCase() }), hookAddress && (_jsx(Badge, { size: "small", placement: "middle", children: shortenAddress(hookAddress, 4) })), _jsxs(Badge, { size: "small", placement: "end", children: [feeTier / BIPS_BASE, "%"] })] }), focusedRowControl: focusedRowControl, onPress: onPress }));
    return _jsx(PoolOptionItemContextMenu, { poolInfo: { poolId, chain: chainId }, children: optionItem });
}
export const PoolOptionItem = memo(_PoolOptionItem);
//# sourceMappingURL=PoolOptionItem.js.map