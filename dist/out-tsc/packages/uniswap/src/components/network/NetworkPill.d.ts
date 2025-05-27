import { ComponentProps } from 'react';
import { Pill } from 'uniswap/src/components/pill/Pill';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
export type NetworkPillProps = {
    chainId: UniverseChainId;
    showBackgroundColor?: boolean;
    showBorder?: boolean;
    showIcon?: boolean;
    iconSize?: number;
} & ComponentProps<typeof Pill>;
export declare function NetworkPill({ chainId, showBackgroundColor, showBorder, showIcon, iconSize, ...rest }: NetworkPillProps): JSX.Element;
export declare function InlineNetworkPill(props: NetworkPillProps): JSX.Element;
//# sourceMappingURL=NetworkPill.d.ts.map