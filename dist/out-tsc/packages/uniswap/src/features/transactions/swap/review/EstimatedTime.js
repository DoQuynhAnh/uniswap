import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flex, Text } from 'ui/src';
import { ONE_MINUTE_MS, ONE_SECOND_MS } from 'utilities/src/time/time';
export function EstimatedTime({ timeMs, visibleIfLong }) {
    const { t } = useTranslation();
    const estimatedBridgingTime = useMemo(() => {
        if (!timeMs) {
            return null;
        }
        const minutes = Math.floor(timeMs / ONE_MINUTE_MS);
        const seconds = Math.floor((timeMs % ONE_MINUTE_MS) / ONE_SECOND_MS);
        if (seconds === 0) {
            return t('bridging.estimatedTime.minutesOnly', { minutes });
        }
        else if (minutes === 0) {
            return t('bridging.estimatedTime.secondsOnly', { seconds });
        }
        else {
            return t('bridging.estimatedTime.minutesAndSeconds', {
                minutes,
                seconds,
            });
        }
    }, [timeMs, t]);
    if (!timeMs ||
        !estimatedBridgingTime ||
        (visibleIfLong && timeMs < ONE_MINUTE_MS) ||
        (!visibleIfLong && timeMs >= ONE_MINUTE_MS)) {
        return null;
    }
    return (_jsxs(Flex, { row: true, alignItems: "center", justifyContent: "space-between", children: [_jsx(Text, { color: "$neutral2", variant: "body3", children: t('swap.bridging.estimatedTime') }), _jsx(Text, { adjustsFontSizeToFit: true, color: "$neutral1", numberOfLines: 1, variant: "body3", children: estimatedBridgingTime })] }));
}
//# sourceMappingURL=EstimatedTime.js.map