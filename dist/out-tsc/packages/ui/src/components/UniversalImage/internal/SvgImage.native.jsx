import WebView from 'react-native-webview';
import { useSvgData } from 'ui/src/components/UniversalImage/utils';
import { Flex } from 'ui/src/components/layout/Flex';
import { Loader } from 'ui/src/loading/Loader';
import { isIOS } from 'utilities/src/platform';
const heightUnits = isIOS ? 'vh' : '%';
const getHTML = (svgContent) => `
<html>
  <head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no">
  <style>
      html, body {
        margin: 0;
        padding: 0;
        height: 100${heightUnits};
        width: 100${heightUnits};
        overflow: hidden;
        background-color: transparent;
      }
      svg {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        overflow: hidden;
      }
      * {
        -webkit-user-select: none;
      }
    </style>
  </head>
  <body>
    ${svgContent}
  </body>
</html>
`;
export function SvgImage({ uri, size, autoplay, fallback }) {
    var _a, _b;
    const svgData = useSvgData(uri, autoplay);
    if (!(svgData === null || svgData === void 0 ? void 0 : svgData.content) || !(svgData === null || svgData === void 0 ? void 0 : svgData.aspectRatio)) {
        return fallback !== null && fallback !== void 0 ? fallback : <Loader.Image />;
    }
    const html = getHTML(svgData.content);
    const aspectRatio = (_a = size.aspectRatio) !== null && _a !== void 0 ? _a : svgData.aspectRatio;
    return (<Flex aspectRatio={aspectRatio} maxHeight={(_b = size.height) !== null && _b !== void 0 ? _b : '100%'}>
      <WebView scalesPageToFit androidLayerType="hardware" geolocationEnabled={false} javaScriptEnabled={false} originWhitelist={['*']} pointerEvents="none" scrollEnabled={false} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} source={{ html }} style={{
            aspectRatio,
            backgroundColor: 'transparent',
            height: '100%',
            width: '100%',
        }} useWebKit={false}/>
    </Flex>);
}
//# sourceMappingURL=SvgImage.native.jsx.map