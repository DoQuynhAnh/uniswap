export const isUwULinkAllowlistType = (x) => {
    const hasFields = x !== null && typeof x === 'object' && Object.hasOwn(x, 'contracts') && Object.hasOwn(x, 'tokenRecipients');
    if (!hasFields) {
        return false;
    }
    const castedObj = x;
    return Array.isArray(castedObj.contracts) && Array.isArray(castedObj.tokenRecipients);
};
export const isUniverseChainIdArrayType = (x) => Array.isArray(x) && x.every((c) => typeof c === 'number');
export const isContractInputArrayType = (x) => Array.isArray(x) &&
    x.every((val) => typeof val.chain === 'string' && (!val.address || typeof val.address === 'string'));
//# sourceMappingURL=typeGuards.js.map