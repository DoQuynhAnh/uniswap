/// <reference types="react" />
type MicroConfirmationProps = {
    /** Intended to be a micro toast/tooltip, text should not be more than 4 words */
    text: string;
    /** Overrides the default tooltip hover behavior; controls whether the tooltip should be displayed */
    showTooltip: boolean;
    trigger: JSX.Element;
    icon?: JSX.Element;
};
/** A tiny little confirmation notification that triggers after some action.

- On web, this is a tooltip that only displays when show=true (not on hover)
- On mobile/extension, this is a micro notification toast
 */
export declare function MicroConfirmation({ text, showTooltip, trigger, icon }: MicroConfirmationProps): JSX.Element | null;
export {};
//# sourceMappingURL=MicroConfirmation.d.ts.map