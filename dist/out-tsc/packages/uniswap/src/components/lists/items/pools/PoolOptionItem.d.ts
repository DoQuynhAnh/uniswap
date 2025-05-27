/// <reference types="react" />
import { FocusedRowControl } from 'uniswap/src/components/lists/items/OptionItem';
import { ProtocolVersion } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { CurrencyInfo } from 'uniswap/src/features/dataApi/types';
interface PoolOptionItemProps {
    token0CurrencyInfo: CurrencyInfo;
    token1CurrencyInfo: CurrencyInfo;
    poolId: string;
    chainId: UniverseChainId;
    onPress: () => void;
    protocolVersion: ProtocolVersion;
    hookAddress?: string;
    feeTier: number;
    focusedRowControl?: FocusedRowControl;
}
declare function _PoolOptionItem({ token0CurrencyInfo, token1CurrencyInfo, poolId, chainId, onPress, protocolVersion, hookAddress, feeTier, focusedRowControl, }: PoolOptionItemProps): JSX.Element;
export declare const PoolOptionItem: import("react").MemoExoticComponent<typeof _PoolOptionItem>;
export {};
//# sourceMappingURL=PoolOptionItem.d.ts.map