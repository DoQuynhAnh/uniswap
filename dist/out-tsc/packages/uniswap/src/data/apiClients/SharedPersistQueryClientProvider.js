import { jsx as _jsx } from "react/jsx-runtime";
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { SharedQueryClient } from 'uniswap/src/data/apiClients/SharedQueryClient';
import { createPersister } from 'uniswap/src/data/apiClients/createPersister';
import { MAX_REACT_QUERY_CACHE_TIME_MS } from 'utilities/src/time/time';
const persister = createPersister();
const persistOptions = {
    // Change this unique string whenever we want to bust the entire cache.
    buster: 'v0',
    maxAge: MAX_REACT_QUERY_CACHE_TIME_MS,
    persister,
};
export function SharedPersistQueryClientProvider({ children }) {
    return (_jsx(PersistQueryClientProvider, { client: SharedQueryClient, persistOptions: persistOptions, children: children }));
}
//# sourceMappingURL=SharedPersistQueryClientProvider.js.map