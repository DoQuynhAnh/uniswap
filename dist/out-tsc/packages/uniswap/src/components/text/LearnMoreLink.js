import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Text, TouchableArea, isWeb } from 'ui/src';
import { openUri } from 'uniswap/src/utils/linking';
import { isMobileApp } from 'utilities/src/platform';
const onPressLearnMore = (url) => openUri(url);
export const LearnMoreLink = ({ url, textVariant = 'buttonLabel2', textColor = '$accent1', centered = false, display, componentType = 'TouchableArea', hoverStyle, }) => {
    const { t } = useTranslation();
    const handleOnPress = useCallback(() => onPressLearnMore(url), [url]);
    if (componentType === 'Button') {
        return (_jsx(Button, { size: isWeb ? 'medium' : 'large', emphasis: "text-only", onPress: handleOnPress, children: _jsx(Button.Text, { color: textColor, children: t('common.button.learn') }) }));
    }
    return isMobileApp ? (_jsx(Text, { color: textColor, variant: textVariant, textAlign: centered ? 'center' : undefined, onPress: handleOnPress, children: t('common.button.learn') })) : (_jsx(TouchableArea, { display: display, style: { textAlign: centered ? 'center' : 'left' }, onPress: handleOnPress, children: _jsx(Text, { color: textColor, variant: textVariant, hoverStyle: hoverStyle, children: t('common.button.learn') }) }));
};
//# sourceMappingURL=LearnMoreLink.js.map