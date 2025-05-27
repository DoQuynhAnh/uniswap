import React, { Suspense, lazy } from 'react';
import { getUniconColors, getUniconsDeterministicHash } from 'ui/src/components/Unicon/utils';
import { Flex } from 'ui/src/components/layout/Flex';
import { useIsDarkMode } from 'ui/src/hooks/useIsDarkMode';
import { isAddress } from 'utilities/src/addresses';
// In test environments, import Icons synchronously
const isTestEnv = process.env.NODE_ENV === 'test';
const { Icons } = isTestEnv ? require('ui/src/components/Unicon/UniconSVGs') : { Icons: {} };
function UniconSVGInner({ address, size = 32, icons, }) {
    const isDarkMode = useIsDarkMode();
    if (!address || !isAddress(address)) {
        return null;
    }
    const hashValue = getUniconsDeterministicHash(address);
    const { color } = getUniconColors(address, isDarkMode);
    const iconKeys = Object.keys(icons);
    const iconIndex = Math.abs(Number(hashValue)) % iconKeys.length;
    const selectedIconKey = iconKeys[iconIndex];
    const selectedIconPaths = icons[selectedIconKey];
    const ORIGINAL_CONTAINER_SIZE = 48;
    const scaleValue = size / ORIGINAL_CONTAINER_SIZE / 1.5;
    const scaledSVGSize = ORIGINAL_CONTAINER_SIZE * scaleValue;
    const translateX = (size - scaledSVGSize) / 2;
    const translateY = (size - scaledSVGSize) / 2;
    return (<svg height={size} viewBox={`0 0 ${size} ${size}`} width={size} xmlns="http://www.w3.org/2000/svg">
      <g style={{ transformOrigin: 'center center' }}>
        <circle cx={size / 2} cy={size / 2} fill={color + `${isDarkMode ? '29' : '1F'}`} r={size / 2}/>
        <g transform={`translate(${translateX}, ${translateY}) scale(${scaleValue})`}>
          {selectedIconPaths === null || selectedIconPaths === void 0 ? void 0 : selectedIconPaths.map((pathData, index) => (<path key={index} clipRule="evenodd" d={pathData} fill={color} fillRule="evenodd"/>))}
        </g>
      </g>
    </svg>);
}
const UniconSVGBase = (props) => UniconSVGInner({ ...props, icons: Icons });
const UniconSVGComponent = isTestEnv
    ? UniconSVGBase
    : lazy(async () => {
        const { Icons: LazyIcons } = await import('ui/src/components/Unicon/UniconSVGs');
        return {
            default: (props) => UniconSVGInner({ ...props, icons: LazyIcons }),
        };
    });
export const Unicon = (props) => (<Suspense fallback={<Flex width={props.size} height={props.size}/>}>
    <UniconSVGComponent {...props}/>
  </Suspense>);
//# sourceMappingURL=index.web.jsx.map