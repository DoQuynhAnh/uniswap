import { jsx as _jsx } from "react/jsx-runtime";
import { configureStore } from '@reduxjs/toolkit';
import { render as RNRender, renderHook as RNRenderHook, } from '@testing-library/react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { TamaguiProvider as OGTamaguiProvider } from 'ui/src';
import { config } from 'ui/src/tamagui.config';
import { UrlContext } from 'uniswap/src/contexts/UrlContext';
import { SharedPersistQueryClientProvider } from 'uniswap/src/data/apiClients/SharedPersistQueryClientProvider';
import 'uniswap/src/i18n';
import { uniswapReducer } from 'uniswap/src/state/uniswapReducer';
import { AutoMockedApolloProvider } from 'uniswap/src/test/mocks';
/**
 *
 * @param ui Component to render
 * @param resolvers Custom resolvers that override the default ones
 * @param preloadedState and store
 * @returns `ui` wrapped with providers
 */
export function renderWithProviders(ui, { cache, resolvers, preloadedState = {}, 
// Automatically create a store instance if no store was passed in
store = configureStore({
    reducer: uniswapReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
}), ...renderOptions } = {}) {
    function Wrapper({ children }) {
        return (_jsx(AutoMockedApolloProvider, { cache: cache, resolvers: resolvers, children: _jsx(ReduxProvider, { store: store, children: _jsx(SharedUniswapProvider, { children: children }) }) }));
    }
    // Return an object with the store and all of RTL's query functions
    return { store, ...RNRender(ui, { wrapper: Wrapper, ...renderOptions }) };
}
/**
 *
 * @param hook Hook to render
 * @param resolvers Custom resolvers that override the default ones
 * @param preloadedState and store
 * @returns `hook` wrapped with providers
 */
export function renderHookWithProviders(hook, hookOptions) {
    const { cache, resolvers, preloadedState = {}, 
    // Automatically create a store instance if no store was passed in
    store = configureStore({
        reducer: uniswapReducer,
        preloadedState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    }), ...renderOptions } = (hookOptions !== null && hookOptions !== void 0 ? hookOptions : {});
    function Wrapper({ children }) {
        return (_jsx(AutoMockedApolloProvider, { cache: cache, resolvers: resolvers, children: _jsx(ReduxProvider, { store: store, children: _jsx(SharedUniswapProvider, { children: children }) }) }));
    }
    const options = {
        wrapper: Wrapper,
        ...renderOptions,
    };
    const { rerender, ...rest } = RNRenderHook((args) => hook(...(args !== null && args !== void 0 ? args : [])), options);
    // Return an object with the store and all of RTL's query functions
    return {
        store,
        rerender: rerender,
        ...rest,
    };
}
function SharedUniswapProvider({ children }) {
    return (_jsx(UrlContext.Provider, { value: { useParsedQueryString: () => ({}), usePathname: () => '' }, children: _jsx(SharedPersistQueryClientProvider, { children: _jsx(OGTamaguiProvider, { config: config, defaultTheme: "dark", children: children }) }) }));
}
//# sourceMappingURL=render.js.map