import { jsx as _jsx } from "react/jsx-runtime";
import { Button, Flex, useIsShortMobileDevice } from 'ui/src';
import { SwapFormButtonTrace } from 'uniswap/src/features/transactions/swap/form/body/SwapFormButton/SwapFormButtonTrace';
import { useIsSwapButtonDisabled } from 'uniswap/src/features/transactions/swap/form/body/SwapFormButton/hooks/useIsSwapButtonDisabled';
import { useIsTradeIndicative } from 'uniswap/src/features/transactions/swap/form/body/SwapFormButton/hooks/useIsTradeIndicative';
import { useOnReviewPress } from 'uniswap/src/features/transactions/swap/form/body/SwapFormButton/hooks/useOnReviewPress';
import { useSwapFormButtonColors } from 'uniswap/src/features/transactions/swap/form/body/SwapFormButton/hooks/useSwapFormButtonColors';
import { useSwapFormButtonText } from 'uniswap/src/features/transactions/swap/form/body/SwapFormButton/hooks/useSwapFormButtonText';
import { TestID } from 'uniswap/src/test/fixtures/testIDs';
export const SWAP_BUTTON_TEXT_VARIANT = 'buttonLabel1';
export function SwapFormButton({ tokenColor }) {
    const isShortMobileDevice = useIsShortMobileDevice();
    const indicative = useIsTradeIndicative();
    const { handleOnReviewPress } = useOnReviewPress();
    const disabled = useIsSwapButtonDisabled();
    const buttonText = useSwapFormButtonText();
    const { backgroundColor: buttonBackgroundColor, variant: buttonVariant, emphasis: buttonEmphasis, buttonTextColor, } = useSwapFormButtonColors(tokenColor);
    return (_jsx(Flex, { alignItems: "center", gap: isShortMobileDevice ? '$spacing8' : '$spacing16', children: _jsx(SwapFormButtonTrace, { children: _jsx(Flex, { row: true, alignSelf: "stretch", children: _jsx(Button, { variant: buttonVariant, emphasis: buttonEmphasis, loading: !!indicative, isDisabled: disabled, backgroundColor: buttonBackgroundColor, size: isShortMobileDevice ? 'small' : 'large', testID: TestID.ReviewSwap, animation: "simple", onPress: handleOnReviewPress, children: buttonTextColor ? _jsx(Button.Text, { color: buttonTextColor, children: buttonText }) : buttonText }) }) }) }));
}
//# sourceMappingURL=SwapFormButton.js.map