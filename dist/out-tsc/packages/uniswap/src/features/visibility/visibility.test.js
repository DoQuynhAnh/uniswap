/* eslint-disable @typescript-eslint/no-explicit-any */
import { selectNftsVisibility, selectPositionsVisibility, selectTokensVisibility, } from 'uniswap/src/features/visibility/selectors';
import { setNftVisibility, setTokenVisibility, togglePositionVisibility, visibilityReducer, } from 'uniswap/src/features/visibility/slice';
import { getUniquePositionId } from 'uniswap/src/features/visibility/utils';
jest.mock('uniswap/src/features/visibility/utils', () => ({
    getUniquePositionId: jest.fn(),
}));
const mockedGetUniquePositionId = getUniquePositionId;
describe('visibility slice', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('should return the initial state', () => {
        expect(visibilityReducer(undefined, { type: 'unknown' })).toEqual({
            positions: {},
            tokens: {},
            nfts: {},
        });
    });
    describe('togglePositionVisibility', () => {
        const poolId = 'pool1';
        const tokenId = 'token1';
        const chainId = 1;
        const positionId = 'position1';
        beforeEach(() => {
            mockedGetUniquePositionId.mockReturnValue(positionId);
        });
        it('should toggle visibility from undefined to false', () => {
            var _a;
            const initialState = {
                positions: {},
                tokens: {},
                nfts: {},
            };
            const action = togglePositionVisibility({ poolId, tokenId, chainId });
            const newState = visibilityReducer(initialState, action);
            expect((_a = newState.positions[positionId]) === null || _a === void 0 ? void 0 : _a.isVisible).toBe(false);
            expect(getUniquePositionId).toHaveBeenCalledWith(poolId, tokenId, chainId);
        });
        it('should toggle visibility from false to true', () => {
            var _a;
            const initialState = {
                positions: {
                    [positionId]: { isVisible: false },
                },
                tokens: {},
                nfts: {},
            };
            const action = togglePositionVisibility({ poolId, tokenId, chainId });
            const newState = visibilityReducer(initialState, action);
            expect((_a = newState.positions[positionId]) === null || _a === void 0 ? void 0 : _a.isVisible).toBe(true);
        });
        it('should toggle visibility from true to false', () => {
            var _a;
            const initialState = {
                positions: {
                    [positionId]: { isVisible: true },
                },
                tokens: {
                    [tokenId]: { isVisible: true },
                },
                nfts: {},
            };
            const action = togglePositionVisibility({ poolId, tokenId, chainId });
            const newState = visibilityReducer(initialState, action);
            expect((_a = newState.positions[positionId]) === null || _a === void 0 ? void 0 : _a.isVisible).toBe(false);
        });
    });
    describe('selectors', () => {
        it('selectPositionsVisibility should return correct visibility map', () => {
            const positionId1 = 'pos1';
            const positionId2 = 'pos2';
            const state = {
                visibility: {
                    positions: {
                        [positionId1]: { isVisible: true },
                        [positionId2]: { isVisible: false },
                    },
                    tokens: {},
                },
            };
            const result = selectPositionsVisibility(state);
            expect(result).toEqual({
                [positionId1]: { isVisible: true },
                [positionId2]: { isVisible: false },
            });
        });
        it('selectPositionsVisibility should return empty object if context not present', () => {
            const state = {
                visibility: {
                    positions: {},
                    tokens: {},
                },
            };
            const result = selectPositionsVisibility(state);
            expect(result).toEqual({});
        });
    });
    describe('setTokenVisibility', () => {
        const currencyId = 'token1';
        it('should set token visibility from undefined to false', () => {
            var _a;
            const initialState = {
                positions: {},
                tokens: {},
                nfts: {},
            };
            const action = setTokenVisibility({ currencyId, isVisible: false });
            const newState = visibilityReducer(initialState, action);
            expect((_a = newState.tokens[currencyId]) === null || _a === void 0 ? void 0 : _a.isVisible).toBe(false);
        });
        it('should set token visibility from false to true', () => {
            var _a;
            const initialState = {
                positions: {},
                tokens: {
                    [currencyId]: { isVisible: false },
                },
                nfts: {},
            };
            const action = setTokenVisibility({ currencyId, isVisible: true });
            const newState = visibilityReducer(initialState, action);
            expect((_a = newState.tokens[currencyId]) === null || _a === void 0 ? void 0 : _a.isVisible).toBe(true);
        });
        it('should set token visibility from true to false', () => {
            var _a;
            const initialState = {
                positions: {},
                tokens: {
                    [currencyId]: { isVisible: true },
                },
                nfts: {},
            };
            const action = setTokenVisibility({ currencyId, isVisible: false });
            const newState = visibilityReducer(initialState, action);
            expect((_a = newState.tokens[currencyId]) === null || _a === void 0 ? void 0 : _a.isVisible).toBe(false);
        });
        it('selectTokensVisibility should return empty object if context not present', () => {
            const state = {
                visibility: {
                    positions: {},
                    tokens: {},
                    nfts: {},
                },
            };
            const result = selectTokensVisibility(state);
            expect(result).toEqual({});
        });
    });
    describe('setNftVisibility', () => {
        const nftKey = 'nft1';
        it('should set nft visibility from undefined to false', () => {
            var _a;
            const initialState = {
                positions: {},
                tokens: {},
                nfts: {},
            };
            const action = setNftVisibility({ nftKey, isVisible: false });
            const newState = visibilityReducer(initialState, action);
            expect((_a = newState.nfts[nftKey]) === null || _a === void 0 ? void 0 : _a.isVisible).toBe(false);
        });
        it('should set nft visibility from false to true', () => {
            var _a;
            const initialState = {
                positions: {},
                tokens: {},
                nfts: {
                    [nftKey]: { isVisible: false },
                },
            };
            const action = setNftVisibility({ nftKey, isVisible: true });
            const newState = visibilityReducer(initialState, action);
            expect((_a = newState.nfts[nftKey]) === null || _a === void 0 ? void 0 : _a.isVisible).toBe(true);
        });
        it('should set nft visibility from true to false', () => {
            var _a;
            const initialState = {
                positions: {},
                tokens: {},
                nfts: {
                    [nftKey]: { isVisible: true },
                },
            };
            const action = setNftVisibility({ nftKey, isVisible: false });
            const newState = visibilityReducer(initialState, action);
            expect((_a = newState.nfts[nftKey]) === null || _a === void 0 ? void 0 : _a.isVisible).toBe(false);
        });
        it('selectNftsVisibility should return empty object if context not present', () => {
            const state = {
                visibility: {
                    positions: {},
                    tokens: {},
                    nfts: {},
                },
            };
            const result = selectNftsVisibility(state);
            expect(result).toEqual({});
        });
    });
});
//# sourceMappingURL=visibility.test.js.map