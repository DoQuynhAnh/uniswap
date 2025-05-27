import { ColorTokens, GeneratedIcon } from 'ui/src';
import { WarningSeverity } from 'uniswap/src/components/modals/WarningModal/types';
import { SafetyLevel } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
export declare function safetyLevelToWarningSeverity(safetyLevel: Maybe<SafetyLevel>): WarningSeverity;
export declare function getWarningIcon(severity: WarningSeverity): GeneratedIcon | null;
export declare function getWarningIconColors(severity?: WarningSeverity): {
    color: ColorTokens;
    /** `colorSecondary` used instead of `color` in certain places, such as token selector & mobile search */
    colorSecondary?: ColorTokens;
    /** `inModalColor` used instead of `color` when the icon is inside a modal */
    inModalColor?: ColorTokens;
    backgroundColor: ColorTokens;
    textColor: ColorTokens;
};
//# sourceMappingURL=utils.d.ts.map