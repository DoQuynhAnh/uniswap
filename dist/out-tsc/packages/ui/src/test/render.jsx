import { TamaguiProvider as OGTamaguiProvider } from 'tamagui';
import { config } from 'ui/src/tamagui.config';
/**
 * Helper component to wrap tests in a provider for tests.
 */
export function SharedUIUniswapProvider({ children }) {
    return (<OGTamaguiProvider config={config} defaultTheme="dark">
      {children}
    </OGTamaguiProvider>);
}
//# sourceMappingURL=render.jsx.map