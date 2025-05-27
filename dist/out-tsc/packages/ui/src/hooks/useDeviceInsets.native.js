// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DEFAULT_BOTTOM_INSET } from 'ui/src/hooks/constants';
export function useDeviceInsets() {
    const insets = useSafeAreaInsets();
    if (insets.bottom === 0) {
        // Add bottom padding on devices which don't have on-screen navigation bar
        insets.bottom = DEFAULT_BOTTOM_INSET;
    }
    return insets;
}
//# sourceMappingURL=useDeviceInsets.native.js.map