import { renderHook } from '@testing-library/react-hooks';
import { useValueAsRef } from 'utilities/src/react/useValueAsRef';
describe('useValueAsRef', () => {
    it('returns undefined if no value is passed on first render', () => {
        var _a;
        const { result } = renderHook(() => useValueAsRef(undefined));
        expect((_a = result.current) === null || _a === void 0 ? void 0 : _a.current).toBe(undefined);
    });
    it('returns the new value on every render', () => {
        var _a, _b, _c;
        const { result, rerender } = renderHook((props) => useValueAsRef(props), {
            initialProps: 'aaa',
        });
        expect((_a = result.current) === null || _a === void 0 ? void 0 : _a.current).toBe('aaa');
        rerender('bbb');
        expect((_b = result.current) === null || _b === void 0 ? void 0 : _b.current).toBe('bbb');
        rerender('ccc');
        expect((_c = result.current) === null || _c === void 0 ? void 0 : _c.current).toBe('ccc');
    });
});
//# sourceMappingURL=useValueAsRef.test.js.map