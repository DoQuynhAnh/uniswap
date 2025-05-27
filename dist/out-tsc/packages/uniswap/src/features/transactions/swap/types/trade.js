/* eslint-disable max-lines */
import { Trade as RouterSDKTrade, ZERO_PERCENT } from '@uniswap/router-sdk';
import { CurrencyAmount, Percent, Price } from '@uniswap/sdk-core';
import { V2DutchOrderTrade, PriorityOrderTrade as IPriorityOrderTrade, V3DutchOrderTrade } from '@uniswap/uniswapx-sdk';
import { BigNumber } from 'ethers/lib/ethers';
import { Routing, } from 'uniswap/src/data/tradingApi/__generated__/index';
import { getCurrencyAmount, ValueType } from 'uniswap/src/features/tokens/getCurrencyAmount';
import { MAX_AUTO_SLIPPAGE_TOLERANCE } from 'uniswap/src/constants/transactions';
import { getSwapFee } from 'uniswap/src/features/transactions/swap/types/getSwapFee';
/**
 * Calculates the total output amount from a quote by summing all aggregated outputs.
 *
 * @param quote - The quote response containing aggregated outputs, or undefined
 * @param outputCurrency - The currency type for the output amount
 * @returns CurrencyAmount representing the total output amount, or zero if no quote/outputs
 *
 * @example
 * const quote = { quote: { aggregatedOutputs: [{ amount: '100' }, { amount: '200' }] } }
 * const amount = getQuoteOutputAmount(quote, USDC) // Returns 300 USDC
 */
function getQuoteOutputAmount(quote, outputCurrency) {
    var _a, _b;
    if (!quote) {
        return CurrencyAmount.fromRawAmount(outputCurrency, '0');
    }
    return (_b = (_a = quote.quote.aggregatedOutputs) === null || _a === void 0 ? void 0 : _a.reduce((acc, output) => { var _a; return acc.add(CurrencyAmount.fromRawAmount(outputCurrency, (_a = output.amount) !== null && _a !== void 0 ? _a : '0')); }, CurrencyAmount.fromRawAmount(outputCurrency, '0'))) !== null && _b !== void 0 ? _b : CurrencyAmount.fromRawAmount(outputCurrency, '0');
}
/**
 * Calculates the output amount that the recipient will receive from a quote.
 * Used to calculate the amount the recipient will receive after the swap fee is applied.
 *
 * @param quote - The quote response containing aggregated outputs, or undefined
 * @param outputCurrency - The currency type for the output amount
 * @param recipient - The address of the recipient to find the output for
 * @returns CurrencyAmount representing the minimum amount the recipient will receive, or zero if not found
 *
 * @example
 * // With a quote containing a recipient's output
 * const quote = { quote: { aggregatedOutputs: [{ recipient: '0x123', minAmount: '100' }, { recipient: '0x456', minAmount: '200' }] } }
 * const amount = getQuoteOutputAmountUserWillReceive(quote, USDC, '0x123') // Returns 100 USDC
 *
 */
function getQuoteOutputAmountUserWillReceive(quote, outputCurrency, recipient) {
    var _a, _b;
    if (!quote || !recipient) {
        return CurrencyAmount.fromRawAmount(outputCurrency, '0');
    }
    const output = (_a = quote.quote.aggregatedOutputs) === null || _a === void 0 ? void 0 : _a.find((out) => out.recipient === recipient);
    return output ? CurrencyAmount.fromRawAmount(outputCurrency, (_b = output.minAmount) !== null && _b !== void 0 ? _b : '0') : CurrencyAmount.fromRawAmount(outputCurrency, '0');
}
export class UniswapXV2Trade extends V2DutchOrderTrade {
    constructor({ quote, currencyIn, currencyOut, tradeType, }) {
        var _a;
        const orderInfo = transformToV2DutchOrderInfo(quote.quote.orderInfo);
        super({ currencyIn, currenciesOut: [currencyOut], orderInfo, tradeType });
        this.routing = Routing.DUTCH_V2;
        this.indicative = false;
        this.quote = quote;
        this.slippageTolerance = (_a = this.quote.quote.slippageTolerance) !== null && _a !== void 0 ? _a : 0;
        this.swapFee = getSwapFee(quote);
    }
    get needsWrap() {
        return this.inputAmount.currency.isNative;
    }
    get deadline() {
        return this.order.info.deadline;
    }
    get inputTax() {
        return ZERO_PERCENT;
    }
    get outputTax() {
        return ZERO_PERCENT;
    }
    get quoteOutputAmount() {
        return getQuoteOutputAmount(this.quote, this.outputAmount.currency);
    }
    get quoteOutputAmountUserWillReceive() {
        return getQuoteOutputAmountUserWillReceive(this.quote, this.outputAmount.currency, this.quote.quote.orderInfo.swapper);
    }
}
export class UniswapXV3Trade extends V3DutchOrderTrade {
    constructor({ quote, currencyIn, currencyOut, tradeType, }) {
        var _a;
        const orderInfo = transformToV3DutchOrderInfo(quote.quote.orderInfo);
        const { expectedAmountIn, expectedAmountOut } = quote.quote;
        const expectedAmounts = expectedAmountIn && expectedAmountOut ? { expectedAmountIn, expectedAmountOut } : undefined;
        super({ currencyIn, currenciesOut: [currencyOut], orderInfo, tradeType, expectedAmounts });
        this.routing = Routing.DUTCH_V3;
        this.indicative = false;
        this.quote = quote;
        this.slippageTolerance = (_a = this.quote.quote.slippageTolerance) !== null && _a !== void 0 ? _a : 0;
        this.swapFee = getSwapFee(quote);
    }
    get needsWrap() {
        return this.inputAmount.currency.isNative;
    }
    get deadline() {
        return this.order.info.deadline;
    }
    get inputTax() {
        return ZERO_PERCENT;
    }
    get outputTax() {
        return ZERO_PERCENT;
    }
    get quoteOutputAmount() {
        return getQuoteOutputAmount(this.quote, this.outputAmount.currency);
    }
    get quoteOutputAmountUserWillReceive() {
        return getQuoteOutputAmountUserWillReceive(this.quote, this.outputAmount.currency, this.quote.quote.orderInfo.swapper);
    }
}
export class PriorityOrderTrade extends IPriorityOrderTrade {
    constructor({ quote, currencyIn, currencyOut, tradeType, }) {
        var _a;
        const orderInfo = transformToPriorityOrderInfo(quote.quote.orderInfo);
        const { expectedAmountIn, expectedAmountOut } = quote.quote;
        const expectedAmounts = expectedAmountIn && expectedAmountOut ? { expectedAmountIn, expectedAmountOut } : undefined;
        super({ currencyIn, currenciesOut: [currencyOut], orderInfo, tradeType, expectedAmounts });
        this.routing = Routing.PRIORITY;
        this.indicative = false;
        this.quote = quote;
        this.slippageTolerance = (_a = this.quote.quote.slippageTolerance) !== null && _a !== void 0 ? _a : 0;
        this.swapFee = getSwapFee(quote);
    }
    get needsWrap() {
        return this.inputAmount.currency.isNative;
    }
    get deadline() {
        return this.order.info.deadline;
    }
    get inputTax() {
        return ZERO_PERCENT;
    }
    get outputTax() {
        return ZERO_PERCENT;
    }
    get quoteOutputAmount() {
        return getQuoteOutputAmount(this.quote, this.outputAmount.currency);
    }
    get quoteOutputAmountUserWillReceive() {
        return getQuoteOutputAmountUserWillReceive(this.quote, this.outputAmount.currency, this.quote.quote.orderInfo.swapper);
    }
}
// TODO: [MOB-238] use composition instead of inheritance
export class ClassicTrade extends RouterSDKTrade {
    constructor({ quote, deadline, ...routes }) {
        var _a;
        super(routes);
        this.routing = Routing.CLASSIC;
        this.indicative = false;
        this.quote = quote;
        this.deadline = deadline;
        this.slippageTolerance = (_a = quote === null || quote === void 0 ? void 0 : quote.quote.slippage) !== null && _a !== void 0 ? _a : MAX_AUTO_SLIPPAGE_TOLERANCE;
        this.swapFee = getSwapFee(quote);
    }
    // Overrides trade sdk price impact with backend price impact when available, as sdk price impact formula can be inaccurate.
    get priceImpact() {
        var _a;
        if (!this._cachedPriceImpact) {
            const quotePriceImpact = (_a = this.quote) === null || _a === void 0 ? void 0 : _a.quote.priceImpact;
            this._cachedPriceImpact = quotePriceImpact ? new Percent(Math.round(quotePriceImpact * 100), 10000) : super.priceImpact;
        }
        return this._cachedPriceImpact;
    }
    get quoteOutputAmount() {
        return getQuoteOutputAmount(this.quote, this.outputAmount.currency);
    }
    get quoteOutputAmountUserWillReceive() {
        var _a;
        return getQuoteOutputAmountUserWillReceive(this.quote, this.outputAmount.currency, (_a = this.quote) === null || _a === void 0 ? void 0 : _a.quote.swapper);
    }
}
export var ApprovalAction;
(function (ApprovalAction) {
    // either native token or allowance is sufficient, no approval or permit needed
    ApprovalAction["None"] = "none";
    // erc20 approval is needed for the permit2 contract
    ApprovalAction["Permit2Approve"] = "permit2-approve";
    // revoke required before token can be approved
    ApprovalAction["RevokeAndPermit2Approve"] = "revoke-and-permit2-approve";
    // Unable to fetch approval status, should block submission UI
    ApprovalAction["Unknown"] = "unknown";
})(ApprovalAction || (ApprovalAction = {}));
// Converts from BE type to SDK type
function transformToV2DutchOrderInfo(orderInfo) {
    var _a, _b, _c, _d;
    return {
        ...orderInfo,
        nonce: BigNumber.from(orderInfo.nonce),
        additionalValidationContract: (_a = orderInfo.additionalValidationContract) !== null && _a !== void 0 ? _a : '',
        additionalValidationData: (_b = orderInfo.additionalValidationData) !== null && _b !== void 0 ? _b : '',
        input: {
            token: (_c = orderInfo.input.token) !== null && _c !== void 0 ? _c : '',
            startAmount: BigNumber.from(orderInfo.input.startAmount),
            endAmount: BigNumber.from(orderInfo.input.endAmount),
        },
        outputs: orderInfo.outputs.map((output) => {
            var _a;
            return ({
                token: (_a = output.token) !== null && _a !== void 0 ? _a : '',
                startAmount: BigNumber.from(output.startAmount),
                endAmount: BigNumber.from(output.endAmount),
                recipient: output.recipient,
            });
        }),
        cosigner: (_d = orderInfo.cosigner) !== null && _d !== void 0 ? _d : '',
    };
}
function transformToV3DutchOrderInfo(orderInfo) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    return {
        ...orderInfo,
        startingBaseFee: BigNumber.from(0),
        nonce: BigNumber.from(orderInfo.nonce),
        additionalValidationContract: (_a = orderInfo.additionalValidationContract) !== null && _a !== void 0 ? _a : '',
        additionalValidationData: (_b = orderInfo.additionalValidationData) !== null && _b !== void 0 ? _b : '',
        input: {
            token: (_c = orderInfo.input.token) !== null && _c !== void 0 ? _c : '',
            startAmount: BigNumber.from(orderInfo.input.startAmount),
            curve: {
                relativeBlocks: (_e = (_d = orderInfo.input.curve) === null || _d === void 0 ? void 0 : _d.relativeBlocks) !== null && _e !== void 0 ? _e : [],
                relativeAmounts: (_h = (_g = (_f = orderInfo.input.curve) === null || _f === void 0 ? void 0 : _f.relativeAmounts) === null || _g === void 0 ? void 0 : _g.map((amount) => BigInt(amount))) !== null && _h !== void 0 ? _h : [],
            },
            maxAmount: BigNumber.from(orderInfo.input.maxAmount),
            adjustmentPerGweiBaseFee: BigNumber.from(orderInfo.input.adjustmentPerGweiBaseFee),
        },
        outputs: orderInfo.outputs.map((output) => {
            var _a, _b, _c, _d;
            return ({
                token: (_a = output.token) !== null && _a !== void 0 ? _a : '',
                startAmount: BigNumber.from(output.startAmount),
                curve: {
                    relativeBlocks: (_b = output.curve.relativeBlocks) !== null && _b !== void 0 ? _b : [],
                    relativeAmounts: (_d = (_c = output.curve.relativeAmounts) === null || _c === void 0 ? void 0 : _c.map((amount) => BigInt(amount))) !== null && _d !== void 0 ? _d : [],
                },
                minAmount: BigNumber.from(output.minAmount),
                adjustmentPerGweiBaseFee: BigNumber.from(output.adjustmentPerGweiBaseFee),
                recipient: output.recipient,
            });
        }),
        cosigner: (_j = orderInfo.cosigner) !== null && _j !== void 0 ? _j : '',
    };
}
function transformToPriorityOrderInfo(orderInfo) {
    var _a, _b, _c;
    return {
        ...orderInfo,
        nonce: BigNumber.from(orderInfo.nonce),
        additionalValidationContract: (_a = orderInfo.additionalValidationContract) !== null && _a !== void 0 ? _a : '',
        additionalValidationData: (_b = orderInfo.additionalValidationData) !== null && _b !== void 0 ? _b : '',
        input: {
            token: (_c = orderInfo.input.token) !== null && _c !== void 0 ? _c : '',
            amount: BigNumber.from(orderInfo.input.amount),
            mpsPerPriorityFeeWei: BigNumber.from(orderInfo.input.mpsPerPriorityFeeWei),
        },
        outputs: orderInfo.outputs.map((output) => {
            var _a;
            return ({
                token: (_a = output.token) !== null && _a !== void 0 ? _a : '',
                amount: BigNumber.from(output.amount),
                mpsPerPriorityFeeWei: BigNumber.from(output.mpsPerPriorityFeeWei),
                recipient: output.recipient,
            });
        }),
        baselinePriorityFeeWei: BigNumber.from(orderInfo.baselinePriorityFeeWei),
        auctionStartBlock: BigNumber.from(orderInfo.auctionStartBlock),
    };
}
export function validateIndicativeQuoteResponse(response) {
    const { input, output } = response;
    if (response.input && response.output && response.requestId && response.type && input.amount && input.chainId && input.token && output.amount && output.chainId && output.token) {
        return { ...response, input: { amount: input.amount, chainId: input.chainId, token: output.token }, output: { amount: output.amount, chainId: output.chainId, token: output.token } };
    }
    return undefined;
}
export class IndicativeTrade {
    constructor({ quote, currencyIn, currencyOut, slippageTolerance }) {
        this.indicative = true;
        this.quote = quote;
        const inputAmount = getCurrencyAmount({ value: this.quote.input.amount, valueType: ValueType.Raw, currency: currencyIn });
        const outputAmount = getCurrencyAmount({ value: this.quote.output.amount, valueType: ValueType.Raw, currency: currencyOut });
        if (!inputAmount || !outputAmount) {
            throw new Error('Error parsing indicative quote currency amounts');
        }
        this.inputAmount = inputAmount;
        this.outputAmount = outputAmount;
        this.executionPrice = new Price(currencyIn, currencyOut, this.quote.input.amount, this.quote.output.amount);
        this.slippageTolerance = slippageTolerance;
    }
    get quoteOutputAmount() {
        return this.outputAmount;
    }
    get quoteOutputAmountUserWillReceive() {
        return this.outputAmount;
    }
}
export class BridgeTrade {
    constructor({ quote, currencyIn, currencyOut, tradeType }) {
        var _a, _b;
        this.routing = Routing.BRIDGE;
        this.indicative = false;
        this.inputTax = ZERO_PERCENT;
        this.outputTax = ZERO_PERCENT;
        this.quote = quote;
        this.swapFee = getSwapFee(quote);
        const quoteInputAmount = (_a = quote.quote.input) === null || _a === void 0 ? void 0 : _a.amount;
        const quoteOutputAmount = (_b = quote.quote.output) === null || _b === void 0 ? void 0 : _b.amount;
        if (!quoteInputAmount || !quoteOutputAmount) {
            throw new Error('Error parsing bridge quote currency amounts');
        }
        const inputAmount = getCurrencyAmount({ value: quoteInputAmount, valueType: ValueType.Raw, currency: currencyIn });
        const outputAmount = getCurrencyAmount({ value: quoteOutputAmount, valueType: ValueType.Raw, currency: currencyOut });
        if (!inputAmount || !outputAmount) {
            throw new Error('Error parsing bridge quote currency amounts');
        }
        this.inputAmount = inputAmount;
        this.outputAmount = outputAmount;
        this.executionPrice = new Price(currencyIn, currencyOut, quoteInputAmount, quoteOutputAmount);
        this.tradeType = tradeType;
    }
    /* Bridge trades have no slippage and hence a static execution price.
    The following methods are overridden for compatibility with other trade types */
    worstExecutionPrice(_threshold) {
        return this.executionPrice;
    }
    maximumAmountIn(_slippageTolerance, _amountIn) {
        return this.inputAmount;
    }
    minimumAmountOut(_slippageTolerance, _amountOut) {
        return this.outputAmount;
    }
    get quoteOutputAmount() {
        return this.outputAmount;
    }
    get quoteOutputAmountUserWillReceive() {
        const swapFeeAmount = this.swapFee ? getCurrencyAmount({ value: this.swapFee.amount, valueType: ValueType.Raw, currency: this.outputAmount.currency }) : undefined;
        if (swapFeeAmount) {
            return this.outputAmount.add(swapFeeAmount);
        }
        return this.outputAmount;
    }
}
//# sourceMappingURL=trade.js.map