import React from 'react';
import { FlexProps } from 'ui/src';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
export declare const SQUIRCLE_BORDER_RADIUS_RATIO = 0.3;
type NetworkLogoProps = FlexProps & {
    chainId: UniverseChainId | null;
    size?: number;
    shape?: 'circle' | 'square';
    borderWidth?: number;
    borderRadius?: number;
};
export declare function TransactionSummaryNetworkLogo({ chainId, size, }: Pick<NetworkLogoProps, 'chainId' | 'size'>): JSX.Element;
declare function _NetworkLogo({ chainId, shape, size: sizeWithoutBorder, borderWidth, borderRadius, }: NetworkLogoProps): JSX.Element | null;
export declare const NetworkLogo: React.MemoExoticComponent<typeof _NetworkLogo>;
export {};
//# sourceMappingURL=NetworkLogo.d.ts.map