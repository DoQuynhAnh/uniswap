import { usePlatformBasedValue } from 'uniswap/src/utils/usePlatformBasedValue';
export function usePlatformBasedFetchPolicy(props) {
    return usePlatformBasedValue({
        defaultValue: props,
        extension: {
            windowNotFocused: {
                fetchPolicy: 'cache-only',
                pollInterval: 0,
            },
        },
    });
}
//# sourceMappingURL=usePlatformBasedFetchPolicy.js.map