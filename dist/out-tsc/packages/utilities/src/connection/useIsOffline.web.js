import { useEffect, useRef, useState } from 'react';
export function useIsOffline() {
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const isOnlineRef = useRef(isOnline);
    const handleCheck = () => {
        const newStatus = navigator.onLine;
        isOnlineRef.current = newStatus;
        setIsOnline(newStatus);
    };
    useEffect(() => {
        window.addEventListener('online', handleCheck);
        window.addEventListener('offline', handleCheck);
        return () => {
            window.removeEventListener('online', handleCheck);
            window.removeEventListener('offline', handleCheck);
        };
    }, []);
    return !isOnline;
}
//# sourceMappingURL=useIsOffline.web.js.map