import { unique } from 'utilities/src/primitives/array';
export function uniqueAddressesOnly(objectsWithAddress) {
    // the input array must be objects that have an obj.address field
    // had to cast to any because ts doesn't recognize it as HasAddress... maybe issue with unique
    return unique(objectsWithAddress, (v, i, a) => a.findIndex((v2) => v2.address === v.address) === i);
}
//# sourceMappingURL=utils.js.map