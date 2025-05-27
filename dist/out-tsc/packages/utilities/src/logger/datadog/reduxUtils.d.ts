import { Action } from 'redux';
type GenericReduxState = Record<string, unknown>;
export declare function handleReduxAction({ newState, shouldLogState, action, }: {
    shouldLogState: boolean;
    newState: unknown;
    action: Action<unknown>;
}): {
    isAction: boolean;
    reduxStateToLog: GenericReduxState | undefined;
};
export {};
//# sourceMappingURL=reduxUtils.d.ts.map