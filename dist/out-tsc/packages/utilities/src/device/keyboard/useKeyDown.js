import { PlatformSplitStubError } from 'utilities/src/errors';
/** On desktop, this will trigger a keyboard event listener. No-op on mobile. */
export const useKeyDown = (_) => {
    throw new PlatformSplitStubError('useKeyDown');
};
//# sourceMappingURL=useKeyDown.js.map