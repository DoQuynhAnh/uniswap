import { BigNumber } from '@ethersproject/bignumber';
import { Token } from '@uniswap/sdk-core';
import { useRef } from 'react';
import { Chain, ProtectionAttackType, ProtectionResult, SafetyLevel, } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { fromGraphQLChain, toGraphQLChain } from 'uniswap/src/features/chains/utils';
import { AttackType, TokenList } from 'uniswap/src/features/dataApi/types';
import { NativeCurrency } from 'uniswap/src/features/tokens/NativeCurrency';
import { currencyId, currencyIdToChain, currencyIdToGraphQLAddress, isNativeCurrencyAddress, } from 'uniswap/src/utils/currencyId';
import { sortKeysRecursively } from 'utilities/src/primitives/objects';
// Converts CurrencyId to ContractInput format for GQL token queries
export function currencyIdToContractInput(id) {
    var _a, _b, _c;
    return {
        // TODO: WALL-4919: Remove hardcoded Mainnet
        chain: (_b = toGraphQLChain((_a = currencyIdToChain(id)) !== null && _a !== void 0 ? _a : UniverseChainId.Mainnet)) !== null && _b !== void 0 ? _b : Chain.Ethereum,
        address: (_c = currencyIdToGraphQLAddress(id)) !== null && _c !== void 0 ? _c : undefined,
    };
}
export function tokenProjectToCurrencyInfos(tokenProjects, chainFilter) {
    return tokenProjects === null || tokenProjects === void 0 ? void 0 : tokenProjects.flatMap((project) => project === null || project === void 0 ? void 0 : project.tokens.map((token) => {
        const { logoUrl, safetyLevel } = project !== null && project !== void 0 ? project : {};
        const { name, chain, address, decimals, symbol, feeData, protectionInfo } = token !== null && token !== void 0 ? token : {};
        const chainId = fromGraphQLChain(chain);
        if (chainFilter && chainFilter !== chainId) {
            return null;
        }
        const currency = buildCurrency({
            chainId,
            address,
            decimals,
            symbol,
            name,
            buyFeeBps: feeData === null || feeData === void 0 ? void 0 : feeData.buyFeeBps,
            sellFeeBps: feeData === null || feeData === void 0 ? void 0 : feeData.sellFeeBps,
        });
        if (!currency) {
            return null;
        }
        const currencyInfo = buildCurrencyInfo({
            currency,
            currencyId: currencyId(currency),
            logoUrl,
            safetyInfo: getCurrencySafetyInfo(safetyLevel, protectionInfo),
        });
        return currencyInfo;
    })).filter(Boolean);
}
// use inverse check here (instead of isNativeAddress) so we can typeguard address as must be string if this is true
function isNonNativeAddress(chainId, address) {
    return !isNativeCurrencyAddress(chainId, address);
}
const CURRENCY_CACHE = new Map();
/**
 * Creates a new instance of Token or NativeCurrency, or returns an existing copy if one was already created.
 *
 * @param params The parameters for building the currency.
 * @param params.chainId The ID of the chain where the token resides. If not provided, the function will return undefined.
 * @param params.address The token's address. If not provided, an instance of NativeCurrency is returned.
 * @param params.decimals The decimal count used by the token. If not provided, the function will return undefined.
 * @param params.symbol The token's symbol. This parameter is optional.
 * @param params.name The token's name. This parameter is optional.
 * @param params.bypassChecksum If true, bypasses the EIP-55 checksum on the token address. This parameter is optional and defaults to true.
 * @returns A new instance of Token or NativeCurrency if the parameters are valid, otherwise returns undefined.
 */
export function buildCurrency(args) {
    const { chainId, address, decimals, symbol, name, bypassChecksum = true, buyFeeBps, sellFeeBps } = args;
    if (!chainId || decimals === undefined || decimals === null) {
        return undefined;
    }
    const cacheKey = JSON.stringify(sortKeysRecursively(args));
    const cachedCurrency = CURRENCY_CACHE.get(cacheKey);
    if (cachedCurrency) {
        // This allows us to better memoize components that use a `Currency` as a dependency.
        return cachedCurrency;
    }
    const buyFee = buyFeeBps && BigNumber.from(buyFeeBps).gt(0) ? BigNumber.from(buyFeeBps) : undefined;
    const sellFee = sellFeeBps && BigNumber.from(sellFeeBps).gt(0) ? BigNumber.from(sellFeeBps) : undefined;
    const result = isNonNativeAddress(chainId, address)
        ? new Token(chainId, address, decimals, symbol !== null && symbol !== void 0 ? symbol : undefined, name !== null && name !== void 0 ? name : undefined, bypassChecksum, buyFee, sellFee)
        : NativeCurrency.onChain(chainId);
    CURRENCY_CACHE.set(cacheKey, result);
    return result;
}
const CURRENCY_INFO_CACHE = new Map();
export function buildCurrencyInfo(args) {
    const cacheKey = JSON.stringify(sortKeysRecursively(args));
    const cachedCurrencyInfo = CURRENCY_INFO_CACHE.get(cacheKey);
    if (cachedCurrencyInfo) {
        // This allows us to better memoize components that use a `CurrencyInfo` as a dependency.
        return cachedCurrencyInfo;
    }
    CURRENCY_INFO_CACHE.set(cacheKey, args);
    return args;
}
function getTokenListFromSafetyLevel(safetyInfo) {
    switch (safetyInfo) {
        case SafetyLevel.Blocked:
            return TokenList.Blocked;
        case SafetyLevel.Verified:
            return TokenList.Default;
        default:
            return TokenList.NonDefault;
    }
}
// Priority based on Token Protection PRD spec
function getHighestPriorityAttackType(attackTypes) {
    if (!attackTypes || attackTypes.length === 0) {
        return undefined;
    }
    const attackTypeSet = new Set(attackTypes);
    if (attackTypeSet.has(ProtectionAttackType.Honeypot)) {
        return AttackType.Honeypot;
    }
    else if (attackTypeSet.has(ProtectionAttackType.Impersonator)) {
        return AttackType.Impersonator;
    }
    else if (attackTypeSet.has(ProtectionAttackType.AirdropPattern)) {
        return AttackType.Airdrop;
    }
    else if (attackTypeSet.has(ProtectionAttackType.HighFees)) {
        return AttackType.HighFees;
    }
    else {
        return AttackType.Other;
    }
}
export function getCurrencySafetyInfo(safetyLevel, protectionInfo) {
    var _a;
    return {
        tokenList: getTokenListFromSafetyLevel(safetyLevel),
        attackType: getHighestPriorityAttackType(protectionInfo === null || protectionInfo === void 0 ? void 0 : protectionInfo.attackTypes),
        protectionResult: (_a = protectionInfo === null || protectionInfo === void 0 ? void 0 : protectionInfo.result) !== null && _a !== void 0 ? _a : ProtectionResult.Unknown,
        blockaidFees: (protectionInfo === null || protectionInfo === void 0 ? void 0 : protectionInfo.blockaidFees)
            ? {
                buyFeePercent: protectionInfo.blockaidFees.buy ? protectionInfo.blockaidFees.buy * 100 : undefined,
                sellFeePercent: protectionInfo.blockaidFees.sell ? protectionInfo.blockaidFees.sell * 100 : undefined,
            }
            : undefined,
    };
}
export function gqlTokenToCurrencyInfo(token) {
    var _a;
    const { name, chain, address, decimals, symbol, project, feeData, protectionInfo } = token;
    const chainId = fromGraphQLChain(chain);
    const currency = buildCurrency({
        chainId,
        address,
        decimals,
        symbol,
        name,
        buyFeeBps: feeData === null || feeData === void 0 ? void 0 : feeData.buyFeeBps,
        sellFeeBps: feeData === null || feeData === void 0 ? void 0 : feeData.sellFeeBps,
    });
    if (!currency) {
        return null;
    }
    return buildCurrencyInfo({
        currency,
        currencyId: currencyId(currency),
        logoUrl: project === null || project === void 0 ? void 0 : project.logoUrl,
        safetyInfo: getCurrencySafetyInfo(project === null || project === void 0 ? void 0 : project.safetyLevel, protectionInfo),
        // defaulting to not spam. currently this flow triggers when a user is searching
        // for a token, in which case the user probably doesn't expect the token to be spam
        isSpam: (_a = project === null || project === void 0 ? void 0 : project.isSpam) !== null && _a !== void 0 ? _a : false,
    });
}
/*
Apollo client clears errors when repolling, so if there's an error and we have a
polling interval defined for the endpoint, then `error` will flicker between
being defined and not defined. This hook helps persist returned errors when polling
until the network request returns.

Feature request to enable persisted errors: https://github.com/apollographql/apollo-feature-requests/issues/348
*/
export function usePersistedError(loading, error) {
    const persistedErrorRef = useRef();
    if (error || !loading) {
        persistedErrorRef.current = error;
    }
    return persistedErrorRef.current;
}
export function sortByName(unsortedBalances) {
    if (!unsortedBalances) {
        return [];
    }
    return unsortedBalances.sort((a, b) => {
        var _a;
        if (!a.currencyInfo.currency.name) {
            return 1;
        }
        if (!b.currencyInfo.currency.name) {
            return -1;
        }
        return (_a = a.currencyInfo.currency.name) === null || _a === void 0 ? void 0 : _a.localeCompare(b.currencyInfo.currency.name);
    });
}
//# sourceMappingURL=utils.js.map