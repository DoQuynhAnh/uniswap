import { useEffect, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { breakpoints } from 'ui/src/theme';
import { isExtension } from 'utilities/src/platform';
const isClient = typeof window === 'object';
function getDeviceDimensions() {
    return {
        fullHeight: window.innerHeight,
        fullWidth: window.innerWidth,
    };
}
// based on https://usehooks.com/useWindowSize/
// Additional logic added to handle getting the extension window size
export const useDeviceDimensions = () => {
    const [deviceDimensions, setDeviceDimensions] = useState(getDeviceDimensions);
    // handles interface resize
    useEffect(() => {
        function handleResize() {
            setDeviceDimensions(getDeviceDimensions());
        }
        if (isExtension) {
            handleResize();
        }
        if (!isClient) {
            return undefined;
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    // handles extension resize
    const { width: extensionWidth, height: extensionHeight } = useWindowDimensions();
    if (isExtension) {
        return {
            fullHeight: extensionHeight !== null && extensionHeight !== void 0 ? extensionHeight : 0,
            fullWidth: extensionWidth !== null && extensionWidth !== void 0 ? extensionWidth : 0,
        };
    }
    return deviceDimensions;
};
export const useIsExtraLargeScreen = () => {
    const { fullWidth } = useDeviceDimensions();
    return fullWidth >= breakpoints.xl;
};
//# sourceMappingURL=useDeviceDimensions.web.js.map