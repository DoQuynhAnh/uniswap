/// <reference types="react" />
import { InMemoryCache, Resolvers } from '@apollo/client';
import type { EnhancedStore, PreloadedState } from '@reduxjs/toolkit';
import { RenderHookOptions, RenderHookResult, RenderOptions, RenderResult } from '@testing-library/react-native';
import 'uniswap/src/i18n';
import { UniswapState } from 'uniswap/src/state/uniswapReducer';
type ExtendedRenderOptions = RenderOptions & {
    cache?: InMemoryCache;
    resolvers?: Resolvers;
    preloadedState?: PreloadedState<UniswapState>;
    store?: EnhancedStore<UniswapState>;
};
/**
 *
 * @param ui Component to render
 * @param resolvers Custom resolvers that override the default ones
 * @param preloadedState and store
 * @returns `ui` wrapped with providers
 */
export declare function renderWithProviders(ui: React.ReactElement, { cache, resolvers, preloadedState, store, ...renderOptions }?: ExtendedRenderOptions): RenderResult & {
    store: EnhancedStore;
};
type ExtendedRenderHookOptions<P> = RenderHookOptions<P> & {
    cache?: InMemoryCache;
    resolvers?: Resolvers;
    preloadedState?: PreloadedState<UniswapState>;
    store?: EnhancedStore<UniswapState>;
};
type RenderHookWithProvidersResult<R, P extends any[] | undefined = undefined> = Omit<RenderHookResult<R, P>, 'rerender'> & {
    store: EnhancedStore;
    rerender: P extends any[] ? (args: P) => void : () => void;
};
export declare function renderHookWithProviders<R>(hook: () => R, hookOptions?: ExtendedRenderHookOptions<undefined>): RenderHookWithProvidersResult<R>;
export declare function renderHookWithProviders<R, P extends any[]>(hook: (...args: P) => R, hookOptions: ExtendedRenderHookOptions<P>): RenderHookWithProvidersResult<R, P>;
export {};
//# sourceMappingURL=render.d.ts.map