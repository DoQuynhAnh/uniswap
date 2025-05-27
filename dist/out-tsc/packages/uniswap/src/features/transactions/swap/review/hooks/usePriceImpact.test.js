import { CurrencyAmount, Percent } from '@uniswap/sdk-core';
import { DAI, USDC } from 'uniswap/src/constants/tokens';
import { Routing } from 'uniswap/src/data/tradingApi/__generated__';
import { usePriceImpact } from 'uniswap/src/features/transactions/swap/review/hooks/usePriceImpact';
import { renderHook } from 'uniswap/src/test/test-utils';
const mockUniswapXTrade = {
    quote: {
        quote: {
            classicGasUseEstimateUSD: '5.32',
        },
    },
    routing: Routing.DUTCH_V2,
    swapFee: {
        amount: '100000000',
    },
    outputAmount: CurrencyAmount.fromRawAmount(USDC, '95000000'),
};
const mockClassicTrade = {
    priceImpact: new Percent(5, 100),
    routing: Routing.CLASSIC,
};
const baseSwapInfo = {
    trade: {
        trade: null,
    },
    currencyAmounts: {
        input: CurrencyAmount.fromRawAmount(USDC, '100000000'),
        output: CurrencyAmount.fromRawAmount(DAI, '9500000000000000000000'),
    },
    currencyAmountsUSDValue: {
        input: CurrencyAmount.fromRawAmount(USDC, '100000000'),
        output: CurrencyAmount.fromRawAmount(USDC, '95000000'),
    },
};
describe('usePriceImpact', () => {
    it('should return undefined values when no trade exists', () => {
        const { result } = renderHook(() => usePriceImpact({ derivedSwapInfo: baseSwapInfo }));
        expect(result.current).toEqual({
            priceImpact: undefined,
            formattedPriceImpact: undefined,
        });
    });
    it('should calculate UniswapX price impact correctly', () => {
        const swapInfo = {
            ...baseSwapInfo,
            trade: { trade: mockUniswapXTrade },
        };
        const { result } = renderHook(() => usePriceImpact({ derivedSwapInfo: swapInfo }));
        expect(result.current.formattedPriceImpact).toEqual('+1.32%');
    });
    it('should return classic trade price impact directly', () => {
        const swapInfo = {
            ...baseSwapInfo,
            trade: { trade: mockClassicTrade },
        };
        const { result } = renderHook(() => usePriceImpact({ derivedSwapInfo: swapInfo }));
        expect(result.current.formattedPriceImpact).toEqual('-5.00%');
    });
    it('should handle negative price impact formatting', () => {
        const negativeImpactTrade = {
            ...mockUniswapXTrade,
            quote: {
                quote: {
                    classicGasUseEstimateUSD: '2.01',
                },
            },
        };
        const swapInfo = {
            ...baseSwapInfo,
            trade: { trade: negativeImpactTrade },
        };
        const { result } = renderHook(() => usePriceImpact({ derivedSwapInfo: swapInfo }));
        expect(result.current.formattedPriceImpact).toEqual('-1.99%');
    });
});
//# sourceMappingURL=usePriceImpact.test.js.map