// until the web app needs all of tamagui, avoid heavy imports there
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { useThemeName } from '@tamagui/core';
export function useIsDarkMode() {
    const themeName = useThemeName();
    return themeName.startsWith('dark');
}
//# sourceMappingURL=useIsDarkMode.jsx.map