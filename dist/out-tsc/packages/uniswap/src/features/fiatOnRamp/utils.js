import { InitialQuoteSelection, } from 'uniswap/src/features/fiatOnRamp/types';
import { isAndroid, isIOS } from 'utilities/src/platform';
import { v4 as uuid } from 'uuid';
const APPLE_PAY = 'Apple Pay';
const GOOGLE_PAY = 'Google Pay';
export function transformPaymentMethods(paymentMethods) {
    return paymentMethods.filter((pm) => !(pm === APPLE_PAY && isAndroid) && !(pm === GOOGLE_PAY && isIOS));
}
export function getCountryFlagSvgUrl(countryCode) {
    return `https://images-country.meld.io/${countryCode}/flag.svg`;
}
export function isInvalidRequestAmountTooLow(error) {
    var _a;
    const e = error;
    return (e.data.statusCode === 400 &&
        e.data.errorName === 'InvalidRequestAmountTooLow' &&
        typeof ((_a = e.data.context) === null || _a === void 0 ? void 0 : _a.minimumAllowed) === 'number');
}
export function isInvalidRequestAmountTooHigh(error) {
    var _a;
    const e = error;
    return (e.data.statusCode === 400 &&
        e.data.errorName === 'InvalidRequestAmountTooHigh' &&
        typeof ((_a = e.data.context) === null || _a === void 0 ? void 0 : _a.maximumAllowed) === 'number');
}
export function isNoQuotesError(error) {
    const e = error;
    return e.data.statusCode === 400 && e.data.errorName === 'NoQuotes';
}
export function isFiatOnRampApiError(error) {
    if (typeof error === 'object' && error !== null) {
        const e = error;
        return (typeof e.data === 'object' &&
            e.data !== null &&
            typeof e.data.statusCode === 'number' &&
            typeof e.data.errorName === 'string');
    }
    return false;
}
export function getOptionalServiceProviderLogo(logos, isDarkMode) {
    return isDarkMode ? logos === null || logos === void 0 ? void 0 : logos.darkLogo : logos === null || logos === void 0 ? void 0 : logos.lightLogo;
}
export function getServiceProviderLogo(logos, isDarkMode) {
    return isDarkMode ? logos.darkLogo : logos.lightLogo;
}
export function createOnRampTransactionId(serviceProvider, idSuffix) {
    const id = idSuffix ? `${uuid().split('-')[0]}-${idSuffix}` : uuid();
    // The backend expects MoonPay transactions to have the MOONPAY prefix.
    return `${(serviceProvider === null || serviceProvider === void 0 ? void 0 : serviceProvider.toUpperCase()) === 'MOONPAY' ? 'MOONPAY' : ''}${id}`;
}
export function selectInitialQuote(quotes) {
    const quoteFromLastUsedProvider = quotes === null || quotes === void 0 ? void 0 : quotes.find((q) => q.isMostRecentlyUsedProvider);
    if (quoteFromLastUsedProvider) {
        return {
            quote: quoteFromLastUsedProvider,
            type: InitialQuoteSelection.MostRecent,
        };
    }
    const bestQuote = quotes && quotes.length && quotes[0];
    if (bestQuote) {
        return {
            quote: quotes.reduce((prev, curr) => {
                return curr.destinationAmount > prev.destinationAmount ? curr : prev;
            }, bestQuote),
            type: InitialQuoteSelection.Best,
        };
    }
    return { quote: undefined, type: undefined };
}
export function isSupportedFORCurrency(currency) {
    return currency.meldCurrencyCode !== undefined;
}
export function getUnsupportedFORTokensWithBalance(supportedCurrencies, balancesById) {
    const offRampCurrencyIds = supportedCurrencies.map((currency) => { var _a; return (_a = currency.currencyInfo) === null || _a === void 0 ? void 0 : _a.currencyId; });
    return Object.values(balancesById || {}).filter((balance) => !offRampCurrencyIds.includes(balance.currencyInfo.currencyId));
}
//# sourceMappingURL=utils.js.map