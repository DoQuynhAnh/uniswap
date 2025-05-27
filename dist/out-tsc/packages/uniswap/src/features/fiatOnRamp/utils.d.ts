import { PortfolioBalance } from 'uniswap/src/features/dataApi/types';
import { FORCurrencyOrBalance, FORLogo, FORQuote, FiatOnRampCurrency, InitialQuoteSelection } from 'uniswap/src/features/fiatOnRamp/types';
export declare function transformPaymentMethods(paymentMethods: string[]): string[];
export declare function getCountryFlagSvgUrl(countryCode: string): string;
export interface FORApiError {
    data: {
        statusCode: number;
        errorName: string;
        message: string;
        context: object | undefined;
    };
}
export interface InvalidRequestAmountTooLow extends FORApiError {
    data: FORApiError['data'] & {
        statusCode: 400;
        errorName: 'InvalidRequestAmountTooLow';
        context: {
            minimumAllowed: number;
            unit?: 'token' | 'fiat';
        };
    };
}
export declare function isInvalidRequestAmountTooLow(error: FORApiError): error is InvalidRequestAmountTooLow;
export interface InvalidRequestAmountTooHigh extends FORApiError {
    data: FORApiError['data'] & {
        statusCode: 400;
        errorName: 'InvalidRequestAmountTooHigh';
        context: {
            maximumAllowed: number;
            unit?: 'token' | 'fiat';
        };
    };
}
export declare function isInvalidRequestAmountTooHigh(error: FORApiError): error is InvalidRequestAmountTooHigh;
export interface NoQuotesError extends FORApiError {
    data: FORApiError['data'] & {
        statusCode: 400;
        errorName: 'NoQuotes';
    };
}
export declare function isNoQuotesError(error: FORApiError): error is InvalidRequestAmountTooHigh;
export declare function isFiatOnRampApiError(error: unknown): error is FORApiError;
export declare function getOptionalServiceProviderLogo(logos: FORLogo | undefined, isDarkMode: boolean): string | undefined;
export declare function getServiceProviderLogo(logos: FORLogo, isDarkMode: boolean): string;
export declare function createOnRampTransactionId(serviceProvider?: string, idSuffix?: string): string;
export declare function selectInitialQuote(quotes: FORQuote[] | undefined): {
    quote: FORQuote | undefined;
    type: InitialQuoteSelection | undefined;
};
export declare function isSupportedFORCurrency(currency: FORCurrencyOrBalance): currency is FiatOnRampCurrency;
export declare function getUnsupportedFORTokensWithBalance(supportedCurrencies: FiatOnRampCurrency[], balancesById: Record<string, PortfolioBalance> | undefined): PortfolioBalance[];
//# sourceMappingURL=utils.d.ts.map