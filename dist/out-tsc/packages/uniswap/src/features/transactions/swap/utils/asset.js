import { AssetType } from 'uniswap/src/entities/assets';
import { currencyAddress } from 'uniswap/src/utils/currencyId';
export const currencyToAsset = (currency) => {
    if (!currency) {
        return null;
    }
    return {
        address: currencyAddress(currency),
        chainId: currency.chainId,
        type: AssetType.Currency,
    };
};
//# sourceMappingURL=asset.js.map