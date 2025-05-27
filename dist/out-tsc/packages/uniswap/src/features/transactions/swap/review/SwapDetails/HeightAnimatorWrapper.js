import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { HeightAnimator } from 'ui/src';
import { isMobileApp, isMobileWeb } from 'utilities/src/platform';
/**
 * We don't need to animate the height on mobile or mobile web because the bottom sheet already handles the animation.
 */
export function HeightAnimatorWrapper({ children }) {
    if (isMobileApp || isMobileWeb) {
        return _jsx(_Fragment, { children: children });
    }
    return (_jsx(HeightAnimator, { useInitialHeight: true, animation: "fast", children: children }));
}
//# sourceMappingURL=HeightAnimatorWrapper.js.map