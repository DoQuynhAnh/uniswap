import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Flex, Text, TouchableArea, useIsDarkMode, useSporeColors } from 'ui/src';
import { AlertTriangleFilled } from 'ui/src/components/icons/AlertTriangleFilled';
import { RotatableChevron } from 'ui/src/components/icons/RotatableChevron';
import { opacify } from 'ui/src/theme';
export const SHADOW_OFFSET_SMALL = { width: 0, height: 2 };
export function Shadow({ children, ...rest }) {
    const isDarkMode = useIsDarkMode();
    const colors = useSporeColors();
    const hasBackgroundColor = Boolean(rest.backgroundColor);
    return (_jsx(Flex, { borderRadius: "$rounded16", p: "$spacing12", shadowColor: isDarkMode ? '$black' : '$transparent', shadowOffset: SHADOW_OFFSET_SMALL, shadowOpacity: 0.0075, shadowRadius: 10, style: hasBackgroundColor ? undefined : { backgroundColor: opacify(isDarkMode ? 10 : 100, colors.white.val) }, ...rest, children: children }));
}
function Header({ title, subtitle, onPress, icon, ...buttonProps }) {
    return (_jsx(TouchableArea, { borderBottomColor: "$surface3", borderBottomWidth: 0.25, px: "$spacing16", py: "$spacing12", onPress: onPress, ...buttonProps, children: _jsxs(Flex, { row: true, alignItems: "center", gap: "$spacing16", justifyContent: "space-between", children: [_jsxs(Flex, { gap: "$spacing4", children: [_jsxs(Flex, { row: true, alignItems: "center", gap: "$spacing8", children: [icon, typeof title === 'string' ? (_jsx(Text, { color: "$neutral2", variant: "subheading2", children: title })) : (title)] }), subtitle ? typeof subtitle === 'string' ? _jsx(Text, { variant: "subheading1", children: subtitle }) : subtitle : null] }), _jsx(RotatableChevron, { color: "$neutral2", direction: "end", height: 20 })] }) }));
}
function EmptyState({ additionalButtonLabel, buttonLabel, description, onPress, onPressAdditional, title, icon, }) {
    return (_jsxs(Flex, { centered: true, gap: "$spacing16", width: "100%", children: [_jsxs(Flex, { centered: true, gap: "$spacing8", children: [icon, _jsxs(Flex, { centered: true, gap: "$spacing8", children: [title && (_jsx(Text, { textAlign: "center", variant: "buttonLabel2", children: title })), _jsx(Text, { color: "$neutral2", textAlign: "center", variant: "body2", children: description })] })] }), _jsxs(Flex, { row: true, gap: "$spacing16", children: [buttonLabel && (_jsx(TouchableArea, { onPress: onPress, children: _jsx(Text, { color: "$accent1", textAlign: "center", variant: "buttonLabel2", children: buttonLabel }) })), additionalButtonLabel && (_jsx(TouchableArea, { onPress: onPressAdditional, children: _jsx(Text, { color: "$accent1", variant: "buttonLabel2", children: additionalButtonLabel }) }))] })] }));
}
function ErrorState(props) {
    const { t } = useTranslation();
    const { title, description = t('common.card.error.description'), retryButtonLabel, onRetry, icon } = props;
    return (_jsxs(Flex, { centered: true, grow: true, gap: "$spacing24", p: "$spacing12", width: "100%", children: [_jsxs(Flex, { centered: true, gap: "$spacing16", children: [icon, _jsxs(Flex, { centered: true, gap: "$spacing8", children: [title ? (_jsx(Text, { textAlign: "center", variant: "buttonLabel2", children: title })) : null, _jsx(Text, { color: "$neutral2", textAlign: "center", variant: "body2", children: description })] })] }), _jsx(Flex, { row: true, children: retryButtonLabel ? (_jsx(TouchableArea, { onPress: onRetry, children: _jsx(Text, { color: "$accent1", variant: "buttonLabel2", children: retryButtonLabel }) })) : null })] }));
}
function InlineErrorState(props) {
    const { t } = useTranslation();
    const { backgroundColor = '$surface2', textColor = '$neutral1', title = t('common.card.error.title'), onRetry: retry, retryButtonLabel = t('common.button.retry'), icon = _jsx(AlertTriangleFilled, { color: "$neutral3", size: "$icon.16", testID: "error-icon" }), } = props;
    return (_jsxs(Flex, { grow: true, row: true, alignItems: "center", backgroundColor: backgroundColor, borderRadius: "$rounded16", gap: "$spacing24", justifyContent: "space-between", p: "$spacing12", width: "100%", children: [_jsxs(Flex, { row: true, shrink: true, alignItems: "center", gap: "$spacing8", children: [icon, _jsx(Text, { color: textColor, ellipsizeMode: "tail", numberOfLines: 1, textAlign: "center", variant: "subheading2", children: title })] }), retry ? (_jsx(TouchableArea, { onPress: retry, children: _jsx(Text, { color: "$accent1", variant: "buttonLabel2", children: retryButtonLabel }) })) : null] }));
}
export const BaseCard = {
    EmptyState,
    ErrorState,
    Header,
    InlineErrorState,
    Shadow,
};
//# sourceMappingURL=BaseCard.js.map