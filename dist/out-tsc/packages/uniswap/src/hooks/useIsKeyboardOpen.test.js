import { act, renderHook } from '@testing-library/react-hooks';
import useIsKeyboardOpen from 'uniswap/src/hooks/useIsKeyboardOpen';
describe('useIsKeyboardOpen', () => {
    // Mock the visualViewport object
    const originalVisualViewport = window.visualViewport;
    beforeEach(() => {
        Object.defineProperty(window.screen, 'height', {
            configurable: true, // Allow the property to be redefined
            writable: true,
            value: 960, // Default screen height
        });
        const listeners = {};
        // @ts-expect-error no need to mock everything
        window.visualViewport = {
            height: 800,
            addEventListener: jest.fn((event, callback) => {
                var _a;
                listeners[event] = listeners[event] || [];
                (_a = listeners[event]) === null || _a === void 0 ? void 0 : _a.push(callback);
            }),
            dispatchEvent: (event) => {
                var _a;
                if (listeners[event.type]) {
                    (_a = listeners[event.type]) === null || _a === void 0 ? void 0 : _a.forEach((listener) => listener(event));
                }
                return true;
            },
        };
    });
    afterEach(() => {
        window.visualViewport = originalVisualViewport;
    });
    it('should initially set isKeyboardOpen to false', () => {
        const { result } = renderHook(() => useIsKeyboardOpen());
        expect(result.current).toBe(false);
    });
    it('should set isKeyboardOpen to true when the keyboard opens', () => {
        const { result } = renderHook(() => useIsKeyboardOpen(300));
        act(() => {
            if (window.visualViewport) {
                Object.defineProperty(window.visualViewport, 'height', {
                    value: 500,
                });
                window.visualViewport.dispatchEvent(new Event('resize'));
            }
        });
        expect(result.current).toBe(true);
    });
    it('should set isKeyboardOpen to false when the keyboard closes', () => {
        const { result } = renderHook(() => useIsKeyboardOpen(300));
        // Simulate keyboard opening
        act(() => {
            if (window.visualViewport) {
                Object.defineProperty(window.visualViewport, 'height', {
                    value: 500,
                });
                window.visualViewport.dispatchEvent(new Event('resize'));
            }
        });
        // Simulate keyboard closing
        act(() => {
            if (window.visualViewport) {
                Object.defineProperty(window.visualViewport, 'height', {
                    value: 800,
                });
                window.visualViewport.dispatchEvent(new Event('resize'));
            }
        });
        expect(result.current).toBe(false);
    });
});
//# sourceMappingURL=useIsKeyboardOpen.test.js.map