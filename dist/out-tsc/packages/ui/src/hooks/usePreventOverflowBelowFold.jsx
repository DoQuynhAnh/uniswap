import { useEffect, useRef, useState } from 'react';
export function usePreventOverflowBelowFold(isVisible = true) {
    const ref = useRef(null);
    const [maxHeight, setMaxHeight] = useState(0);
    const getMaxHeight = () => {
        var _a;
        const menuTopY = ((_a = ref.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().top) || 0;
        const diff = window.innerHeight - menuTopY;
        return diff > 0 ? diff : 0;
    };
    useEffect(() => {
        // Effectively waits for the menu to render before calculating the offset
        setTimeout(() => {
            setMaxHeight(getMaxHeight());
        }, 0);
    }, [isVisible]);
    return { maxHeight, ref };
}
//# sourceMappingURL=usePreventOverflowBelowFold.jsx.map