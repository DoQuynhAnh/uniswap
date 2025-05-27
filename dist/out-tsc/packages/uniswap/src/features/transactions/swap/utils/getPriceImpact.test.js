import { CurrencyAmount, Percent, Token } from '@uniswap/sdk-core';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { getPriceImpact } from 'uniswap/src/features/transactions/swap/utils/getPriceImpact';
import { getSwapFeeUsdFromDerivedSwapInfo } from 'uniswap/src/features/transactions/swap/utils/getSwapFeeUsd';
import { isClassic, isUniswapX } from 'uniswap/src/features/transactions/swap/utils/routing';
import { WrapType } from 'uniswap/src/features/transactions/types/wrap';
import { CurrencyField } from 'uniswap/src/types/currency';
// Mocks for routing and getSwapFeeUsd
jest.mock('uniswap/src/features/transactions/swap/utils/routing', () => ({
    isClassic: jest.fn(),
    isUniswapX: jest.fn(),
}));
jest.mock('uniswap/src/features/transactions/swap/utils/getSwapFeeUsd', () => ({
    getSwapFeeUsdFromDerivedSwapInfo: jest.fn(),
}));
// Type the mocks for TypeScript
const isClassicMock = isClassic;
const isUniswapXMock = isUniswapX;
const getSwapFeeUsdFromDerivedSwapInfoMock = getSwapFeeUsdFromDerivedSwapInfo;
// Minimal ClassicTrade mock
class ClassicTradeMock {
    constructor(priceImpact) {
        this.priceImpact = priceImpact;
    }
}
// Minimal UniswapXTrade mock
class UniswapXTradeMock {
    constructor(quote) {
        this.quote = quote;
    }
}
describe('getPriceImpact', () => {
    const mockPercent = (value) => {
        return new Percent(value, 100);
    };
    const mockCurrency = new Token(1, '0x0000000000000000000000000000000000000000', 6, 'USDC', 'USD Coin');
    const mockCurrencyAmount = (amount) => {
        return CurrencyAmount.fromRawAmount(mockCurrency, amount);
    };
    const makeTradeWithStatus = (trade = null) => ({
        isLoading: false,
        error: null,
        trade,
        indicativeTrade: undefined,
        isIndicativeLoading: false,
        gasEstimates: undefined,
    });
    const makeDerivedSwapInfo = (trade, overrides = {}) => ({
        chainId: UniverseChainId.Mainnet,
        currencies: {
            [CurrencyField.INPUT]: null,
            [CurrencyField.OUTPUT]: null,
        },
        currencyAmounts: {
            [CurrencyField.INPUT]: null,
            [CurrencyField.OUTPUT]: null,
        },
        currencyBalances: {
            [CurrencyField.INPUT]: null,
            [CurrencyField.OUTPUT]: null,
        },
        currencyAmountsUSDValue: {
            [CurrencyField.INPUT]: null,
            [CurrencyField.OUTPUT]: null,
        },
        outputAmountUserWillReceive: null,
        focusOnCurrencyField: null,
        trade: makeTradeWithStatus(trade),
        wrapType: WrapType.NotApplicable,
        exactAmountToken: '',
        exactCurrencyField: CurrencyField.INPUT,
        ...overrides,
    });
    afterEach(() => {
        jest.resetAllMocks();
    });
    it('returns undefined if there is no trade', () => {
        // Arrange
        const derivedSwapInfo = makeDerivedSwapInfo(undefined);
        // Act
        const result = getPriceImpact(derivedSwapInfo);
        // Assert
        expect(result).toBeUndefined();
    });
    it('returns trade.priceImpact for classic trades', () => {
        // Arrange
        const priceImpact = mockPercent(7);
        const trade = new ClassicTradeMock(priceImpact);
        isClassicMock.mockReturnValue(true);
        isUniswapXMock.mockReturnValue(false);
        const derivedSwapInfo = makeDerivedSwapInfo(trade);
        // Act
        const result = getPriceImpact(derivedSwapInfo);
        // Assert
        expect(result).toBe(priceImpact);
    });
    it('returns calculated price impact for UniswapX trades', () => {
        // Arrange
        const trade = new UniswapXTradeMock({ quote: { classicGasUseEstimateUSD: '100' } });
        isClassicMock.mockReturnValue(false);
        isUniswapXMock.mockReturnValue(true);
        const inputUSD = mockCurrencyAmount('1000');
        const outputUSD = mockCurrencyAmount('900');
        getSwapFeeUsdFromDerivedSwapInfoMock.mockReturnValue(50);
        const derivedSwapInfo = makeDerivedSwapInfo(trade, {
            currencyAmountsUSDValue: {
                [CurrencyField.INPUT]: inputUSD,
                [CurrencyField.OUTPUT]: outputUSD,
            },
        });
        // Act
        const result = getPriceImpact(derivedSwapInfo);
        // Assert
        expect(result).toBeDefined();
        expect(typeof (result === null || result === void 0 ? void 0 : result.toFixed)).toBe('function');
    });
    it('returns undefined for non-classic, non-UniswapX trades', () => {
        // Arrange
        const trade = null;
        isClassicMock.mockReturnValue(false);
        isUniswapXMock.mockReturnValue(false);
        const derivedSwapInfo = makeDerivedSwapInfo(trade);
        // Act
        const result = getPriceImpact(derivedSwapInfo);
        // Assert
        expect(result).toBeUndefined();
    });
    it('returns undefined for UniswapX trade with missing USD values', () => {
        // Arrange
        const trade = new UniswapXTradeMock({ quote: { classicGasUseEstimateUSD: '100' } });
        isClassicMock.mockReturnValue(false);
        isUniswapXMock.mockReturnValue(true);
        const derivedSwapInfo = makeDerivedSwapInfo(trade, {
            currencyAmountsUSDValue: {
                [CurrencyField.INPUT]: null,
                [CurrencyField.OUTPUT]: null,
            },
        });
        // Act
        const result = getPriceImpact(derivedSwapInfo);
        // Assert
        expect(result).toBeUndefined();
    });
    it('returns undefined for UniswapX trade with missing classicGasEstimateUSD', () => {
        // Arrange
        const trade = new UniswapXTradeMock({ quote: {} });
        isClassicMock.mockReturnValue(false);
        isUniswapXMock.mockReturnValue(true);
        const inputUSD = mockCurrencyAmount('1000');
        const outputUSD = mockCurrencyAmount('900');
        const derivedSwapInfo = makeDerivedSwapInfo(trade, {
            currencyAmountsUSDValue: {
                [CurrencyField.INPUT]: inputUSD,
                [CurrencyField.OUTPUT]: outputUSD,
            },
        });
        // Act
        const result = getPriceImpact(derivedSwapInfo);
        // Assert
        expect(result).toBeUndefined();
    });
});
//# sourceMappingURL=getPriceImpact.test.js.map