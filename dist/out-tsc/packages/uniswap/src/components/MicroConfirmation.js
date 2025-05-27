import { jsx as _jsx } from "react/jsx-runtime";
import { InfoTooltip } from 'uniswap/src/components/tooltip/InfoTooltip';
import { isInterface } from 'utilities/src/platform';
/** A tiny little confirmation notification that triggers after some action.

- On web, this is a tooltip that only displays when show=true (not on hover)
- On mobile/extension, this is a micro notification toast
 */
export function MicroConfirmation({ text, showTooltip, trigger, icon }) {
    if (isInterface) {
        return _jsx(InfoTooltip, { icon: icon, open: showTooltip, trigger: trigger, text: text });
    }
    // Not the greatest pattern, but callsite handles showing/hiding notification via dispatch(pushNotification(...))
    // There is an existing `CopiedNotification` set up in packages/wallet that handles the mobile/extension micro toast UI
    return trigger;
}
//# sourceMappingURL=MicroConfirmation.js.map