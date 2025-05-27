export function getHandleOnUpdateDelegatedState(ctx) {
    const { getOriginalState, getState, logger } = ctx;
    function handleOnUpdateDelegatedState(input) {
        var _a;
        const { action } = input;
        logger === null || logger === void 0 ? void 0 : logger.debug('effects.ts', 'handleOnUpdateDelegatedState', `Updating delegated state for chain id ${action.payload.chainId}`);
        const originalState = getOriginalState();
        const currentState = getState();
        // we compare the original state to the current state
        const delegatedState = originalState.delegation.delegations;
        const isNewDelegatedState = !delegatedState[action.payload.chainId] || delegatedState[action.payload.chainId] !== action.payload.address;
        // we want the latest state (not the original state) for activeChainId
        const activeChainId = (_a = currentState.delegation.activeChainId) === null || _a === void 0 ? void 0 : _a.toString();
        const isActiveChain = (chainId) => activeChainId === chainId;
        if (isNewDelegatedState) {
            logger === null || logger === void 0 ? void 0 : logger.info('effects.ts', 'handleOnUpdateDelegatedState', `New delegated state detected for chain id ${JSON.stringify(action.payload)}`);
            ctx.onNewDelegateState({
                delegations: currentState.delegation.delegations,
            });
            // track delegation detected event
            logger === null || logger === void 0 ? void 0 : logger.info('effects.ts', 'handleOnUpdateDelegatedState', `Tracking delegation detected event for chain id ${JSON.stringify(action.payload)}`);
            ctx.onDelegationDetected({
                chainId: parseInt(action.payload.chainId, 10),
                address: action.payload.address,
                isActiveChain: isActiveChain(action.payload.chainId),
            });
        }
    }
    return handleOnUpdateDelegatedState;
}
export function getHandleOnSetActiveChainId(ctx) {
    const { getState, logger } = ctx;
    function handleOnSetActiveChainId(input) {
        const { action } = input;
        if (action.payload.chainId) {
            logger === null || logger === void 0 ? void 0 : logger.info('effects.ts', 'handleOnSetActiveChainId', `Setting active chain id to ${action.payload.chainId}`);
            const chainId = action.payload.chainId.toString();
            const state = getState();
            const delegationAddress = state.delegation.delegations[chainId];
            if (delegationAddress) {
                logger === null || logger === void 0 ? void 0 : logger.info('effects.ts', 'handleOnSetActiveChainId', `Delegation address found for chain id ${chainId}`);
                ctx.onDelegationDetected({
                    chainId: parseInt(chainId, 10),
                    address: delegationAddress,
                    isActiveChain: true,
                });
            }
        }
    }
    return handleOnSetActiveChainId;
}
//# sourceMappingURL=effects.js.map