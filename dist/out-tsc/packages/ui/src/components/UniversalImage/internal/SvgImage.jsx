import { PlainImage } from 'ui/src/components/UniversalImage/internal/PlainImage';
import { useSvgData } from 'ui/src/components/UniversalImage/utils';
import { Flex } from 'ui/src/components/layout/Flex';
export function SvgImage({ uri, size, autoplay, fallback }) {
    const svgData = useSvgData(uri, autoplay);
    if (!(svgData === null || svgData === void 0 ? void 0 : svgData.content) || !(svgData === null || svgData === void 0 ? void 0 : svgData.aspectRatio)) {
        return fallback !== null && fallback !== void 0 ? fallback : <Flex />;
    }
    // Since this would violate HTTP CSP for images to use the direct data
    // from a fetch call, we use plain image for SVG's on web
    return <PlainImage fallback={fallback} size={size} uri={uri}/>;
}
//# sourceMappingURL=SvgImage.jsx.map