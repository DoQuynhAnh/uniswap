import { useEffect, useState } from 'react';
const useIsKeyboardOpen = (minKeyboardHeight = 300) => {
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
    useEffect(() => {
        const listener = () => {
            if (!window.visualViewport) {
                return;
            }
            const newState = window.screen.height - minKeyboardHeight > window.visualViewport.height;
            setIsKeyboardOpen(newState);
        };
        if (window.visualViewport) {
            window.visualViewport.addEventListener('resize', listener);
        }
        return () => {
            if (window.visualViewport) {
                window.visualViewport.removeEventListener('resize', listener);
            }
        };
    }, [minKeyboardHeight]);
    return isKeyboardOpen;
};
export default useIsKeyboardOpen;
//# sourceMappingURL=useIsKeyboardOpen.js.map