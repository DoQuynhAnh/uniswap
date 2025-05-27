/**
 * Generates a unique position ID for visibility tracking
 *
 * @param poolId - The pool's unique identifier
 * @param tokenId - The token's unique identifier
 * @param chainId - The chain ID where the position exists
 * @returns A string representing the unique position identifier
 */
export const getUniquePositionId = (poolId, tokenId, chainId) => {
    return `${poolId}-${tokenId}-${chainId}`;
};
//# sourceMappingURL=utils.js.map