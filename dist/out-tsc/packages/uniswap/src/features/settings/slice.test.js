import { createStore } from '@reduxjs/toolkit';
import { initialUserSettingsState, setHideSmallBalances, setHideSpamTokens, userSettingsReducer, } from 'uniswap/src/features/settings/slice';
describe(userSettingsReducer, () => {
    let store;
    beforeEach(() => {
        store = createStore(userSettingsReducer, initialUserSettingsState);
    });
    it('sets small balances setting from default', () => {
        expect(store.getState().hideSpamTokens).toEqual(true);
        store.dispatch(setHideSmallBalances(false));
        expect(store.getState().hideSmallBalances).toEqual(false);
    });
    it('sets spam tokens setting from default', () => {
        expect(store.getState().hideSpamTokens).toEqual(true);
        store.dispatch(setHideSpamTokens(false));
        expect(store.getState().hideSpamTokens).toEqual(false);
    });
});
//# sourceMappingURL=slice.test.js.map