import { jsx as _jsx } from "react/jsx-runtime";
import { RelativeChange } from 'uniswap/src/components/RelativeChange/RelativeChange';
import { Locale } from 'uniswap/src/features/language/constants';
import { renderWithProviders } from 'uniswap/src/test/render';
const mockLocale = Locale.EnglishUnitedStates;
jest.mock('uniswap/src/features/language/hooks', () => ({
    useCurrentLocale: () => mockLocale,
}));
const mockFiatCurrencyInfo = {
    name: 'United States Dollar',
    shortName: 'USD ($)',
    code: 'USD',
    symbol: '$',
    groupingSeparator: ',',
    decimalSeparator: '.',
    fullSymbol: '$',
    symbolAtFront: true,
};
jest.mock('uniswap/src/features/fiatCurrency/hooks', () => ({
    useAppFiatCurrencyInfo: () => mockFiatCurrencyInfo,
}));
it('renders a relative change', () => {
    const tree = renderWithProviders(_jsx(RelativeChange, { change: 12 }));
    expect(tree).toMatchSnapshot();
});
it('renders placeholders without a change', () => {
    const tree = renderWithProviders(_jsx(RelativeChange, {}));
    expect(tree).toMatchSnapshot();
});
it('renders placeholders with absolute change', () => {
    const tree = renderWithProviders(_jsx(RelativeChange, { absoluteChange: 100, change: 12 }));
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=RelativeChange.test.js.map