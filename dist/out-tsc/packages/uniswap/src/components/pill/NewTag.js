import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flex, Text } from 'ui/src';
function _NewTag({ backgroundColor = '$accent2Hovered', textColor = '$accent1Hovered', ml = '$spacing6', exclamation = false, }) {
    const { t } = useTranslation();
    return (_jsx(Flex, { shrink: true, pt: "$spacing2", display: "inline-flex", children: _jsx(Flex, { shrink: true, ml: ml, px: "$spacing4", pb: "$spacing2", pt: 3, backgroundColor: backgroundColor, borderRadius: "$rounded6", alignItems: "center", children: _jsx(Text, { variant: "buttonLabel4", color: textColor, children: exclamation ? t('common.new.exclamation') : t('common.new') }) }) }));
}
export const NewTag = memo(_NewTag);
//# sourceMappingURL=NewTag.js.map