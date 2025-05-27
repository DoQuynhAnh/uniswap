import { useWindowDimensions } from 'react-native';
const DEFAULT_FONT_SCALE = 1;
export const useEnableFontScaling = (allowFontScaling) => {
    const { fontScale } = useWindowDimensions();
    return allowFontScaling !== null && allowFontScaling !== void 0 ? allowFontScaling : fontScale > DEFAULT_FONT_SCALE;
};
//# sourceMappingURL=useEnableFontScaling.native.jsx.map