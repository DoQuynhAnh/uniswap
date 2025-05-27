function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
export function unique(array, isUnique = onlyUnique) {
    return array.filter(isUnique);
}
export function next(array, current) {
    const i = array.findIndex((v) => v === current);
    if (i < 0) {
        return undefined;
    }
    return array[(i + 1) % array.length];
}
// get items in `array` that are not in `without`
// e.g. difference([B, C, D], [A, B, C]) would return ([D])
export function differenceWith(array, without, comparator) {
    return array.filter((item) => {
        const inWithout = Boolean(without.find((otherItem) => comparator(item, otherItem)));
        return !inWithout;
    });
}
export function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
export function bubbleToTop(arr, predicate) {
    if (!arr.length) {
        return arr;
    }
    const result = [...arr];
    const index = result.findIndex(predicate);
    if (index > 0) {
        const element = result[index];
        if (element) {
            result.splice(index, 1);
            result.unshift(element);
        }
    }
    return result;
}
//# sourceMappingURL=array.js.map