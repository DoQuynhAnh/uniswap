import { useSelector } from 'react-redux';
import { selectPositionsVisibility } from 'uniswap/src/features/visibility/selectors';
import { getUniquePositionId } from 'uniswap/src/features/visibility/utils';
export function usePositionVisibilityCheck() {
    const positionVisibilities = useSelector((state) => selectPositionsVisibility(state));
    const isPositionVisible = ({ poolId, tokenId, chainId, isFlaggedSpam = false }) => {
        const positionId = getUniquePositionId(poolId, tokenId, chainId);
        const positionState = positionVisibilities[positionId];
        if (positionState === undefined) {
            // If undefined, default to visible unless flagged as spam by the API (i.e. the isHidden property on Position)
            return !isFlaggedSpam;
        }
        // Return the explicitly set visibility
        return positionState.isVisible;
    };
    return isPositionVisible;
}
//# sourceMappingURL=usePositionVisibilityCheck.js.map