import { jsx as _jsx } from "react/jsx-runtime";
import { useForceRTL } from 'utilities/src/storybook/hooks/useForceRTL';
export const withSetRTL = (rtl) => function WithSetRTL(Story) {
    useForceRTL(rtl);
    return _jsx(Story, {});
};
//# sourceMappingURL=withSetRTL.js.map