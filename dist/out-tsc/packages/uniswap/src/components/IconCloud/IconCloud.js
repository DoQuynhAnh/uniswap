import { jsx as _jsx } from "react/jsx-runtime";
import PoissonDiskSampling from 'poisson-disk-sampling';
import { useMemo, useRef } from 'react';
import { Flex } from 'ui/src';
import { CloudItem } from 'uniswap/src/components/IconCloud/CloudItem';
import { randomFloat, randomInt } from 'uniswap/src/components/IconCloud/utils';
export function IconCloud({ data, minItemSize = 50, maxItemSize = 96, onPress, renderOuterElement, getElementRounded, }) {
    const pts = useMemo(() => {
        const w = window.innerWidth;
        const h = window.innerHeight - 72;
        const leftThreshold = w / 2 - 240;
        const rightThreshold = w / 2 + 240;
        const poissonConfig = {
            shape: [w, h],
            minDistance: 250,
            maxDistance: 375,
            tries: 10,
        };
        const poissonDiskSampling = new PoissonDiskSampling(poissonConfig);
        const points = poissonDiskSampling
            .fill()
            // Order by distance from center, ie idx = 0 is closest to center
            .sort((a, b) => { var _a, _b; return Math.abs((_a = a[0]) !== null && _a !== void 0 ? _a : 0 - w / 2) - Math.abs((_b = b[0]) !== null && _b !== void 0 ? _b : 0 - w / 2); })
            .map(([x = 0, y = 0], idx) => {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const item = data[idx % data.length];
            const size = randomInt(minItemSize, maxItemSize);
            return {
                x,
                y,
                blur: (1 / size) * 500 * ((x > leftThreshold && x < rightThreshold) || y < 100 ? 5 : 1), // make blur bigger for smaller icons
                size,
                color: item.color,
                opacity: randomFloat(0.5, 1.0) * ((x > leftThreshold && x < rightThreshold) || y < 100 ? 0.75 : 1),
                rotation: randomInt(-20, 20),
                delay: Math.abs(x - w / 2) / 800,
                floatDuration: randomFloat(3, 6),
                floatingElementPosition: (x < leftThreshold && x + 100 > leftThreshold) || x + 200 > w ? 'left' : 'right',
                itemData: item,
            };
        })
            .map((p) => {
            var _a, _b, _c, _d;
            return {
                ...p,
                y: ((_a = p === null || p === void 0 ? void 0 : p.y) !== null && _a !== void 0 ? _a : 0) - 0.5 * ((_b = p === null || p === void 0 ? void 0 : p.size) !== null && _b !== void 0 ? _b : 0),
                x: ((_c = p === null || p === void 0 ? void 0 : p.x) !== null && _c !== void 0 ? _c : 0) - 0.5 * ((_d = p === null || p === void 0 ? void 0 : p.size) !== null && _d !== void 0 ? _d : 0),
            };
        });
        return points;
    }, [data, maxItemSize, minItemSize]);
    const constraintsRef = useRef(null);
    return (_jsx(Flex, { ref: constraintsRef, centered: true, width: "100vw", position: "absolute", overflow: "hidden", inset: 0, pointerEvents: "none", contain: "strict", children: pts.map((point, idx) => {
            return (_jsx(CloudItem, { point: point, renderOuterElement: renderOuterElement, getElementRounded: getElementRounded, onPress: onPress }, `token-${idx}`));
        }) }));
}
//# sourceMappingURL=IconCloud.js.map