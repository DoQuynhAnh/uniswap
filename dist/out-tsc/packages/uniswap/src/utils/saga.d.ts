import { PayloadActionCreator } from '@reduxjs/toolkit';
/**
 * A convenience utility to create a saga and trigger action
 * Use to create simple sagas, for more complex ones use createMonitoredSaga.
 * Note: the wrapped saga this returns must be added to rootSaga.ts
 */
export declare function createSaga<SagaParams, SagaYieldType, SagaResultType>(saga: (params: SagaParams) => Generator<SagaYieldType, SagaResultType, unknown>, name: string): {
    wrappedSaga: () => Generator<unknown, void, unknown>;
    actions: {
        trigger: PayloadActionCreator<SagaParams>;
    };
};
/** Transaction flow 'interruption' actions are handled gracefully within a saga, see the `watchForInterruption` util. */
export declare const interruptTransactionFlow: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>;
//# sourceMappingURL=saga.d.ts.map