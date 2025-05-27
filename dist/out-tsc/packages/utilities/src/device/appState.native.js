import { useEffect, useRef } from 'react';
import { AppState } from 'react-native';
export function useOnMobileAppState(expectedAppState, callback) {
    const appState = useRef(AppState.currentState);
    useEffect(() => {
        const subscription = AppState.addEventListener('change', (nextAppState) => {
            if (expectedAppState === nextAppState) {
                callback();
            }
            appState.current = nextAppState;
        });
        return () => {
            subscription.remove();
        };
    }, [callback, expectedAppState]);
}
//# sourceMappingURL=appState.native.js.map