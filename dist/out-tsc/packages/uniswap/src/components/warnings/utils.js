import { AlertTriangleFilled } from 'ui/src/components/icons/AlertTriangleFilled';
import { Blocked } from 'ui/src/components/icons/Blocked';
import { InfoCircleFilled } from 'ui/src/components/icons/InfoCircleFilled';
import { OctagonExclamation } from 'ui/src/components/icons/OctagonExclamation';
import { WarningSeverity } from 'uniswap/src/components/modals/WarningModal/types';
import { SafetyLevel } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
export function safetyLevelToWarningSeverity(safetyLevel) {
    switch (safetyLevel) {
        case SafetyLevel.Blocked:
            return WarningSeverity.Blocked;
        case SafetyLevel.Verified:
            return WarningSeverity.None;
        case SafetyLevel.StrongWarning:
            return WarningSeverity.High;
        case SafetyLevel.MediumWarning:
        default:
            return WarningSeverity.Medium;
    }
}
export function getWarningIcon(severity) {
    switch (severity) {
        case WarningSeverity.High:
            return OctagonExclamation;
        case WarningSeverity.Medium:
            return AlertTriangleFilled;
        case WarningSeverity.Blocked:
            return Blocked;
        case WarningSeverity.Low:
            return InfoCircleFilled;
        case WarningSeverity.None:
        default:
            return null;
    }
}
export function getWarningIconColors(severity) {
    switch (severity) {
        case WarningSeverity.High:
            return {
                color: '$statusCritical',
                colorSecondary: '$statusCritical',
                backgroundColor: '$statusCritical2',
                textColor: '$statusCritical',
            };
        case WarningSeverity.Medium:
            return {
                color: '$statusWarning',
                colorSecondary: '$neutral2',
                backgroundColor: '$statusWarning2',
                textColor: '$statusWarning',
            };
        case WarningSeverity.Blocked:
            return {
                color: '$neutral2',
                colorSecondary: '$neutral2',
                inModalColor: '$neutral1',
                backgroundColor: '$surface3',
                textColor: '$neutral1',
            };
        case WarningSeverity.Low:
        case WarningSeverity.None:
        default:
            return {
                color: '$neutral2',
                colorSecondary: undefined,
                inModalColor: '$neutral1',
                backgroundColor: '$surface3',
                textColor: '$neutral1',
            };
    }
}
//# sourceMappingURL=utils.js.map