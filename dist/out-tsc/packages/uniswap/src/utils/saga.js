import { createAction } from '@reduxjs/toolkit';
import { call, take } from 'typed-redux-saga';
import { logger } from 'utilities/src/logger/logger';
/**
 * A convenience utility to create a saga and trigger action
 * Use to create simple sagas, for more complex ones use createMonitoredSaga.
 * Note: the wrapped saga this returns must be added to rootSaga.ts
 */
export function createSaga(saga, name) {
    const triggerAction = createAction(`${name}/trigger`);
    const wrappedSaga = function* () {
        while (true) {
            try {
                const trigger = yield* take(triggerAction.type);
                logger.debug('saga', 'wrappedSaga', `${name} triggered`);
                yield* call(saga, trigger.payload);
            }
            catch (error) {
                logger.error(error, {
                    tags: { file: 'utils/saga', function: 'createSaga' },
                    extra: { sagaName: name },
                });
            }
        }
    };
    return {
        wrappedSaga,
        actions: {
            trigger: triggerAction,
        },
    };
}
// Below are global, stateless transaction flow actions that are not specific to any one saga.
// This allows cross-platform code to generically interrupt or cancel an active transaction flow
// without being coupled to a specific package's transaction flow implementation.
/** Transaction flow 'interruption' actions are handled gracefully within a saga, see the `watchForInterruption` util. */
export const interruptTransactionFlow = createAction(`interruptTransactionFlow`);
//# sourceMappingURL=saga.js.map