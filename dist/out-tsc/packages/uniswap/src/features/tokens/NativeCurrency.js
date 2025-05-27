import { getNativeAddress } from 'uniswap/src/constants/addresses';
import { getChainInfo } from 'uniswap/src/features/chains/chainInfo';
import { toSupportedChainId } from 'uniswap/src/features/chains/utils';
import { wrappedNativeCurrency } from 'uniswap/src/utils/currency';
export class NativeCurrency {
    constructor(chainId) {
        const supportedChainId = toSupportedChainId(chainId);
        if (!supportedChainId) {
            throw new Error(`Unsupported chain ID: ${chainId}`);
        }
        const { nativeCurrency } = getChainInfo(supportedChainId);
        this.chainId = supportedChainId;
        this.decimals = nativeCurrency.decimals;
        this.name = nativeCurrency.name;
        this.symbol = nativeCurrency.symbol;
        this.isNative = true;
        this.isToken = false;
        this.address = getNativeAddress(this.chainId);
    }
    equals(currency) {
        return currency.isNative && currency.chainId === this.chainId;
    }
    get wrapped() {
        return wrappedNativeCurrency(this.chainId);
    }
    static onChain(chainId) {
        var _a;
        return (_a = this._cachedNativeCurrency[chainId]) !== null && _a !== void 0 ? _a : (this._cachedNativeCurrency[chainId] = new NativeCurrency(chainId));
    }
}
NativeCurrency._cachedNativeCurrency = {};
//# sourceMappingURL=NativeCurrency.js.map