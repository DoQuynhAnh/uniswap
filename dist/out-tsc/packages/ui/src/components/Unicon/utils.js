import { keccak256, toUtf8Bytes } from 'ethers/lib/utils';
import { UNICON_COLORS } from 'ui/src/components/Unicon/Colors';
import { isAddress } from 'utilities/src/addresses';
export const getUniconsDeterministicHash = (address) => {
    if (!isAddress(address)) {
        throw new Error('Invalid Ethereum address');
    }
    const hash = keccak256(toUtf8Bytes(address));
    const hashNumber = BigInt('0x' + hash.slice(2, 12));
    return hashNumber;
};
export const getUniconColors = (activeAddress, isDark) => {
    var _a, _b;
    const hashValue = getUniconsDeterministicHash(activeAddress);
    const colorIndex = isDark ? 1 : 0;
    let colorToUse;
    if (!isNaN(Number(hashValue.toString()))) {
        const colorArrayIndex = Number(hashValue.toString()) % Number(UNICON_COLORS.length);
        colorToUse = (_a = UNICON_COLORS[colorArrayIndex]) === null || _a === void 0 ? void 0 : _a[colorIndex];
    }
    else {
        colorToUse = (_b = UNICON_COLORS[0]) === null || _b === void 0 ? void 0 : _b[colorIndex];
    }
    return {
        color: (colorToUse || '#F50DB4').toString(),
    };
};
//# sourceMappingURL=utils.js.map