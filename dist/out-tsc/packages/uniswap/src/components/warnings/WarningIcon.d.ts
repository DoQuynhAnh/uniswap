/// <reference types="react" />
import { ColorTokens, IconProps } from 'ui/src';
import { WarningSeverity } from 'uniswap/src/components/modals/WarningModal/types';
import { SafetyLevel } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
interface Props {
    /** @deprecated use severity instead */
    safetyLevel?: Maybe<SafetyLevel>;
    severity?: WarningSeverity;
    strokeColorOverride?: ColorTokens;
    heroIcon?: boolean;
    inModal?: boolean;
}
export default function WarningIcon({ safetyLevel, severity, strokeColorOverride, heroIcon, inModal, ...rest }: Props & IconProps): JSX.Element | null;
export {};
//# sourceMappingURL=WarningIcon.d.ts.map