import { CurrencyAmount, TradeType } from '@uniswap/sdk-core';
import { FeeAmount, Pool, Route } from '@uniswap/v3-sdk';
import { Routing, } from 'uniswap/src/data/tradingApi/__generated__';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { ApprovalAction, ClassicTrade, UniswapXV2Trade, } from 'uniswap/src/features/transactions/swap/types/trade';
import { WrapType } from 'uniswap/src/features/transactions/types/wrap';
import { benignSafetyInfo } from 'uniswap/src/test/fixtures';
import { createGasFeeEstimates } from 'uniswap/src/test/fixtures/tradingApi';
import { CurrencyField } from 'uniswap/src/types/currency';
export const TWENTY_MINUTES_FROM_NOW = Math.floor(Date.now() / 1000) + 60 * 20; // 20 minutes from now
export const createMockCurrencyAmount = (token, amount) => CurrencyAmount.fromRawAmount(token, amount);
export const createMockTradeWithStatus = (inputAmount, outputAmount) => ({
    trade: new ClassicTrade({
        quote: { quote: {} },
        tradeType: TradeType.EXACT_INPUT,
        deadline: TWENTY_MINUTES_FROM_NOW,
        v2Routes: [],
        v3Routes: [
            {
                routev3: new Route([
                    new Pool(inputAmount.currency, outputAmount.currency, FeeAmount.HIGH, '2437312313659959819381354528', '10272714736694327408', -69633),
                ], inputAmount.currency, outputAmount.currency),
                inputAmount,
                outputAmount,
            },
        ],
        v4Routes: [],
        mixedRoutes: [],
    }),
    indicativeTrade: undefined,
    isIndicativeLoading: false,
    isLoading: false,
    error: null,
    gasEstimates: createGasFeeEstimates(),
});
export const createMockDerivedSwapInfo = (inputCurrency, outputCurrency, inputAmount, outputAmount, overrides = {}) => {
    var _a, _b;
    return ({
        chainId: UniverseChainId.Mainnet,
        currencies: {
            [CurrencyField.INPUT]: {
                currency: inputCurrency,
                currencyId: (_a = inputCurrency.symbol) !== null && _a !== void 0 ? _a : '',
                safetyInfo: benignSafetyInfo,
                logoUrl: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
            },
            [CurrencyField.OUTPUT]: {
                currency: outputCurrency,
                currencyId: (_b = outputCurrency.symbol) !== null && _b !== void 0 ? _b : '',
                safetyInfo: benignSafetyInfo,
                logoUrl: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
            },
        },
        currencyAmounts: {
            [CurrencyField.INPUT]: createMockCurrencyAmount(inputCurrency, inputAmount),
            [CurrencyField.OUTPUT]: createMockCurrencyAmount(outputCurrency, outputAmount),
        },
        currencyAmountsUSDValue: {
            [CurrencyField.INPUT]: createMockCurrencyAmount(inputCurrency, '1000000000000000000'),
            [CurrencyField.OUTPUT]: createMockCurrencyAmount(outputCurrency, '1000000000000000000'),
        },
        currencyBalances: {
            [CurrencyField.INPUT]: createMockCurrencyAmount(inputCurrency, '10000000000000000000'),
            [CurrencyField.OUTPUT]: createMockCurrencyAmount(outputCurrency, '10000000000000000000'),
        },
        focusOnCurrencyField: CurrencyField.INPUT,
        trade: createMockTradeWithStatus(createMockCurrencyAmount(inputCurrency, inputAmount), createMockCurrencyAmount(outputCurrency, outputAmount)),
        outputAmountUserWillReceive: createMockCurrencyAmount(outputCurrency, outputAmount),
        wrapType: WrapType.NotApplicable,
        exactAmountToken: CurrencyField.INPUT,
        exactCurrencyField: CurrencyField.INPUT,
        ...overrides,
    });
};
const createMockUniswapXOrder = (token) => ({
    chainId: 1,
    reactor: '0x00000011F84B9aa48e5f8aA8B9897600006289Be',
    swapper: '0x123',
    nonce: '1',
    deadline: TWENTY_MINUTES_FROM_NOW,
    additionalValidationContract: '0x0000000000000000000000000000000000000000',
    additionalValidationData: '0x',
    input: {
        token: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
        startAmount: '44000',
        endAmount: '49000',
    },
    outputs: [
        createMockDutchOutput(token, '100000000', '100000000', '0x123'),
        createMockDutchOutput(token, '250000', '250000', token),
    ],
    cosigner: '0x4449Cd34d1eb1FEDCF02A1Be3834FfDe8E6A6180',
});
export const createMockUniswapXQuote = (token) => ({
    encodedOrder: '0x000',
    orderId: '0xbbb',
    orderInfo: createMockUniswapXOrder(token),
    slippageTolerance: 0.5,
    quoteId: '123',
    classicGasUseEstimateUSD: '10',
    portionAmount: '250000',
    portionBips: 25,
    portionRecipient: token,
});
const createMockDutchOutput = (token, startAmount, endAmount, recipient) => ({
    token,
    startAmount,
    endAmount,
    recipient,
});
const createMockPermitData = (token) => ({
    domain: {
        name: 'Permit2',
        chainId: 1,
        verifyingContract: '0x000000000022d473030f116ddee9f6b43ac78ba3',
    },
    types: {
        PermitWitnessTransferFrom: [
            { name: 'permitted', type: 'TokenPermissions' },
            { name: 'spender', type: 'address' },
            { name: 'nonce', type: 'uint256' },
            { name: 'deadline', type: 'uint256' },
            { name: 'witness', type: 'V2DutchOrder' },
        ],
        TokenPermissions: [
            { name: 'token', type: 'address' },
            { name: 'amount', type: 'uint256' },
        ],
        V2DutchOrder: [
            { name: 'info', type: 'OrderInfo' },
            { name: 'cosigner', type: 'address' },
            { name: 'baseInputToken', type: 'address' },
            { name: 'baseInputStartAmount', type: 'uint256' },
            { name: 'baseInputEndAmount', type: 'uint256' },
            { name: 'baseOutputs', type: 'DutchOutput[]' },
        ],
        OrderInfo: [
            { name: 'reactor', type: 'address' },
            { name: 'swapper', type: 'address' },
            { name: 'nonce', type: 'uint256' },
            { name: 'deadline', type: 'uint256' },
            { name: 'additionalValidationContract', type: 'address' },
            { name: 'additionalValidationData', type: 'bytes' },
        ],
        DutchOutput: [
            { name: 'token', type: 'address' },
            { name: 'startAmount', type: 'uint256' },
            { name: 'endAmount', type: 'uint256' },
            { name: 'recipient', type: 'address' },
        ],
    },
    values: {
        permitted: {
            token: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            amount: '49036238629986919',
        },
        spender: '0x00000011F84B9aa48e5f8aA8B9897600006289Be',
        nonce: '1993354639219101313740460914213495166477073038470545373495356359393207136024',
        deadline: TWENTY_MINUTES_FROM_NOW,
        witness: {
            info: {
                reactor: '0x00000011F84B9aa48e5f8aA8B9897600006289Be',
                swapper: '0x123',
                nonce: '1993354639219101313740460914213495166477073038470545373495356359393207136024',
                deadline: TWENTY_MINUTES_FROM_NOW,
                additionalValidationContract: '0x0000000000000000000000000000000000000000',
                additionalValidationData: '0x',
            },
            cosigner: '0x4449Cd34d1eb1FEDCF02A1Be3834FfDe8E6A6180',
            baseInputToken: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            baseInputStartAmount: '44062551907157610',
            baseInputEndAmount: '49036238629986919',
            baseOutputs: [
                createMockDutchOutput(token, '100000000', '100000000', '0x18d'),
                createMockDutchOutput(token, '100000000', '100000000', '0x18d'),
            ],
        },
    },
});
export const createMockUniswapXTrade = (inputCurrency, outputCurrency) => {
    return new UniswapXV2Trade({
        currencyIn: inputCurrency,
        currencyOut: outputCurrency,
        tradeType: TradeType.EXACT_INPUT,
        quote: {
            requestId: '1',
            routing: Routing.DUTCH_V2,
            quote: createMockUniswapXQuote(inputCurrency.address),
            permitData: createMockPermitData(inputCurrency.address),
        },
    });
};
export const createMockTokenApprovalInfo = (overrides = {}) => ({
    action: ApprovalAction.None,
    txRequest: null,
    cancelTxRequest: null,
    ...overrides,
});
//# sourceMappingURL=swap.js.map