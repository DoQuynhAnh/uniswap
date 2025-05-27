import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { MMKV } from 'react-native-mmkv';
import { REACT_QUERY_PERSISTER_KEY } from 'uniswap/src/data/apiClients/constants';
import { ONE_SECOND_MS } from 'utilities/src/time/time';
const mmkv = new MMKV();
const mmkvStorageWrapper = {
    async getItem(key) {
        return mmkv.getString(key);
    },
    async setItem(key, value) {
        mmkv.set(key, value);
    },
    async removeItem(key) {
        mmkv.delete(key);
    },
};
export function createPersister(key = REACT_QUERY_PERSISTER_KEY) {
    return createAsyncStoragePersister({
        key,
        storage: mmkvStorageWrapper,
        throttleTime: 5 * ONE_SECOND_MS,
    });
}
//# sourceMappingURL=createPersister.native.js.map