export const getMaybeHexOrRGBColor = (color) => {
    if (!color) {
        return undefined;
    }
    if (typeof color !== 'string') {
        return undefined;
    }
    if (color.charAt(0) === '#' && (color.length === 7 || color.length === 9 || color.length === 4)) {
        return color;
    }
    if (color.charAt(0) === 'r' && color.charAt(1) === 'g' && color.charAt(2) === 'b') {
        return color;
    }
    return undefined;
};
//# sourceMappingURL=getMaybeHexOrRGBColor.js.map