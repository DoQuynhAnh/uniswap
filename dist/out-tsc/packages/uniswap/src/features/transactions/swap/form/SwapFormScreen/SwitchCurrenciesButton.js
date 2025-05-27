import { jsx as _jsx } from "react/jsx-runtime";
import { SwapEventName } from '@uniswap/analytics-events';
import { memo } from 'react';
import { Flex, useIsShortMobileDevice } from 'ui/src';
import { iconSizes, spacing } from 'ui/src/theme';
import Trace from 'uniswap/src/features/telemetry/Trace';
import { ElementName } from 'uniswap/src/features/telemetry/constants';
import { SwapArrowButton } from 'uniswap/src/features/transactions/swap/form/body/SwapArrowButton';
import { TestID } from 'uniswap/src/test/fixtures/testIDs';
const SWAP_DIRECTION_BUTTON_SIZE = {
    size: {
        regular: iconSizes.icon24,
        small: iconSizes.icon12,
    },
    innerPadding: {
        regular: spacing.spacing8 + spacing.spacing2,
        small: spacing.spacing8,
    },
    borderWidth: {
        regular: spacing.spacing4,
        small: spacing.spacing1,
    },
};
export const SwitchCurrenciesButton = memo(function _SwitchCurrenciesButton({ onSwitchCurrencies, }) {
    const isShortMobileDevice = useIsShortMobileDevice();
    const smallOrRegular = isShortMobileDevice ? 'small' : 'regular';
    return (_jsx(Flex, { zIndex: "$mask", children: _jsx(Flex, { alignItems: "center", height: 0, children: _jsx(Flex, { alignItems: "center", bottom: -(
                // (icon size + (top + bottom padding) + (top + bottom border)) / 2
                // to center the swap direction button vertically
                (SWAP_DIRECTION_BUTTON_SIZE.size[smallOrRegular] +
                    SWAP_DIRECTION_BUTTON_SIZE.innerPadding[smallOrRegular] * 2 +
                    SWAP_DIRECTION_BUTTON_SIZE.borderWidth[smallOrRegular] * 2)) / 2, position: "absolute", children: _jsx(Trace, { logPress: true, element: ElementName.SwitchCurrenciesButton, eventOnTrigger: SwapEventName.SWAP_TOKENS_REVERSED, children: _jsx(SwapArrowButton, { backgroundColor: "$surface2", iconSize: SWAP_DIRECTION_BUTTON_SIZE.size[smallOrRegular], testID: TestID.SwitchCurrenciesButton, onPress: onSwitchCurrencies }) }) }) }) }));
});
//# sourceMappingURL=SwitchCurrenciesButton.js.map