import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Flex, Shine } from 'ui/src';
export function IndicativeLoadingWrapper({ children, loading }) {
    if (loading) {
        return (_jsx(Shine, { children: _jsx(Flex, { backgroundColor: "$surface3", borderRadius: 8, height: 20, width: 60 }) }));
    }
    return _jsx(_Fragment, { children: children });
}
//# sourceMappingURL=IndicativeLoadingWrapper.js.map