import ImageColors from 'ui/src/utils/colors/rn-image-colors';
export async function getExtractedColors(imageUrl, { fallback = 'accent1', cache = true, colorStrategy = 'vibrant' }) {
    if (!imageUrl) {
        return undefined;
    }
    const imageColors = await ImageColors.getColors(imageUrl, {
        key: imageUrl,
        ...(fallback && { fallback }),
        ...(cache && { cache }),
    });
    if (imageColors.platform === 'android') {
        return {
            primary: imageColors.dominant,
            base: imageColors.average,
            detail: imageColors.vibrant,
        };
    }
    if (imageColors.platform === 'ios') {
        return applyColorStrategy(imageColors, colorStrategy);
    }
    if (imageColors.platform === 'web') {
        return {
            primary: imageColors.dominant,
            detail: imageColors.vibrant,
        };
    }
    return undefined;
}
function applyColorStrategy(imageColors, strategy) {
    switch (strategy) {
        case 'vibrant':
            return {
                primary: imageColors.primary,
                secondary: imageColors.secondary,
                base: imageColors.background,
                detail: imageColors.detail,
            };
        case 'muted':
            return {
                primary: imageColors.dominant,
                secondary: imageColors.secondary,
                base: imageColors.average,
                detail: imageColors.detail,
            };
        default:
            return {};
    }
}
//# sourceMappingURL=getExtractedColors.js.map