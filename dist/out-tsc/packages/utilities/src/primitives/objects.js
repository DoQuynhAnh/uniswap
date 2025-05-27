// To work around Object.keys losing types in Typescript
// Useful for maintaining string-like Enum types when getting keys, as for SupportedChainId
// Warning: Like Object.keys(), this returns strings
export function getKeys(obj) {
    return Object.keys(obj);
}
export function flattenObjectOfObjects(obj) {
    return Object.values(obj)
        .map((o) => Object.values(o))
        .flat();
}
// yolo copied from https://stackoverflow.com/questions/44134212/best-way-to-flatten-js-object-keys-and-values-to-a-single-depth-array
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function unnestObject(ob) {
    const toReturn = {};
    for (const i in ob) {
        // `in` is safe because keys are extracted from object properties
        if (!Object.prototype.hasOwnProperty.call(ob, i)) {
            continue;
        }
        if (typeof ob[i] !== 'object' || ob[i] === null) {
            toReturn[i] = ob[i];
            continue;
        }
        const flatObject = unnestObject(ob[i]);
        for (const x in flatObject) {
            if (!Object.prototype.hasOwnProperty.call(flatObject, x)) {
                continue;
            }
            const property = flatObject[x];
            if (property === undefined) {
                continue;
            }
            toReturn[i + '.' + x] = property;
        }
    }
    return toReturn;
}
export function getAllKeysOfNestedObject(obj, prefix = '') {
    const keys = Object.keys(obj);
    if (!keys.length && prefix !== '') {
        return [prefix.slice(0, -1)];
    }
    return keys.reduce((res, el) => {
        if (Array.isArray(obj[el])) {
            return [...res];
        }
        if (typeof obj[el] === 'object' && obj[el] !== null) {
            return [
                ...res,
                ...getAllKeysOfNestedObject(obj[el], prefix + el + '.'),
            ];
        }
        return [...res, prefix + el];
    }, []);
}
export function sortKeysRecursively(input) {
    if (typeof input !== 'object' || input === null || Array.isArray(input)) {
        return input;
    }
    const sortedKeys = Object.keys(input).sort();
    const sortedObj = sortedKeys.reduce((acc, key) => {
        acc[key] = sortKeysRecursively(input[key]);
        return acc;
    }, {});
    return sortedObj;
}
//# sourceMappingURL=objects.js.map