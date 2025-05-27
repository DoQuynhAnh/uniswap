/**
 * Workaround for performance issues where a user action may result in a heavy
 * rerender which can seem like the first action has hung.
 *
 * For example, if a user selects an item on a dropdown, the first call that closes
 * the dropdown may hang if the second action is called in the same batch.
 *
 * @param firstAction Action to prioritize
 * @param secondAction Action to delay
 * @param frames Number of frames to delay the second action.
 */
export declare function executeWithFrameDelay(firstAction: () => void, secondAction: () => void, frames?: number): void;
export declare const waitFrame: () => Promise<void>;
//# sourceMappingURL=delayUtils.d.ts.map