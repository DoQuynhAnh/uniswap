import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { TouchableArea } from 'ui/src';
export function TradeWarningRow(props) {
    if (!props.warning.message) {
        return _jsx(_Fragment, { children: props.children });
    }
    return _jsx(TouchableArea, { ...props });
}
//# sourceMappingURL=TradeWarningRow.js.map