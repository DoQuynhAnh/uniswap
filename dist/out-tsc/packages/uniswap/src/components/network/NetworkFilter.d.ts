/// <reference types="react" />
import { ActionSheetDropdownStyleProps } from 'uniswap/src/components/dropdowns/ActionSheetDropdown';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
interface NetworkFilterProps {
    chainIds: UniverseChainId[];
    selectedChain: UniverseChainId | null;
    onPressChain: (chainId: UniverseChainId | null) => void;
    onDismiss?: () => void;
    includeAllNetworks?: boolean;
    showUnsupportedConnectedChainWarning?: boolean;
    styles?: ActionSheetDropdownStyleProps;
    hideArrow?: boolean;
}
type EllipsisPosition = 'start' | 'end';
export declare function NetworksInSeries({ networks, ellipsisPosition, networkIconSize, }: {
    networks: UniverseChainId[];
    ellipsisPosition?: EllipsisPosition;
    networkIconSize?: number;
}): JSX.Element;
export declare function NetworkFilter({ chainIds, selectedChain, onPressChain, onDismiss, includeAllNetworks, showUnsupportedConnectedChainWarning, styles, hideArrow, }: NetworkFilterProps): JSX.Element;
export {};
//# sourceMappingURL=NetworkFilter.d.ts.map