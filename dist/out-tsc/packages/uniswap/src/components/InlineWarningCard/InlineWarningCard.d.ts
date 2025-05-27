/// <reference types="react" />
import { GeneratedIcon } from 'ui/src';
import { WarningSeverity } from 'uniswap/src/components/modals/WarningModal/types';
type InlineWarningCardProps = {
    severity: WarningSeverity;
    heading?: string;
    description?: string;
    learnMoreUrl?: string;
    checkboxLabel?: string;
    onPressCtaButton?: () => void;
    checked?: boolean;
    setChecked?: (checked: boolean) => void;
    hideCtaIcon?: boolean;
    headingTestId?: string;
    descriptionTestId?: string;
    analyticsProperties?: Record<string, unknown>;
    Icon?: GeneratedIcon;
    heroIcon?: boolean;
};
export declare function InlineWarningCard({ severity, heading, description, learnMoreUrl, checkboxLabel, heroIcon, onPressCtaButton, checked, setChecked, hideCtaIcon, headingTestId, descriptionTestId, analyticsProperties, Icon, }: InlineWarningCardProps): JSX.Element | null;
export {};
//# sourceMappingURL=InlineWarningCard.d.ts.map