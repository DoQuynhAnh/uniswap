import { del, get, set } from 'idb-keyval';
import { REACT_QUERY_PERSISTER_KEY } from 'uniswap/src/data/apiClients/constants';
// Based on example from https://tanstack.com/query/latest/docs/framework/react/plugins/persistQueryClient#building-a-persister
export function createPersister(key = REACT_QUERY_PERSISTER_KEY) {
    const persister = {
        persistClient: async (client) => {
            await set(key, client);
        },
        restoreClient: async () => {
            return await get(key);
        },
        removeClient: async () => {
            await del(key);
        },
    };
    return persister;
}
//# sourceMappingURL=createPersister.js.map