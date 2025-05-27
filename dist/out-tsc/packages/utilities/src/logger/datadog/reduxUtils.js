export function handleReduxAction({ newState, shouldLogState, action, }) {
    const isAction = typeof action !== 'undefined' && action !== null;
    if (shouldLogState) {
        const stateIsObject = typeof newState === 'object' && newState !== null;
        const allObjectKeysString = stateIsObject && Object.keys(newState).every((k) => typeof k === 'string');
        const validState = stateIsObject && allObjectKeysString;
        return {
            reduxStateToLog: validState ? filterReduxState(newState) : undefined,
            isAction,
        };
    }
    else {
        return {
            reduxStateToLog: undefined,
            isAction,
        };
    }
}
const ALLOWED_REDUX_FIELDS = [
    // Uniswap
    'searchHistory',
    'transactions',
    'uniswapBehaviorHistory',
    'userSettings',
    // Wallet
    'appearanceSettings',
    'behaviorHistory',
    'wallet',
    // Mobile
    'biometricSettings',
    'cloudBackup',
    // Extension
    'dappRequests',
    // Web
    'user',
];
// Filter redux state to reduce size where possible to needed information only
function filterReduxState(state) {
    if (state === undefined) {
        return {};
    }
    return Object.keys(state).reduce((filteredState, key) => {
        if (ALLOWED_REDUX_FIELDS.includes(key)) {
            filteredState[key] = state[key];
        }
        return filteredState;
    }, {});
}
//# sourceMappingURL=reduxUtils.js.map