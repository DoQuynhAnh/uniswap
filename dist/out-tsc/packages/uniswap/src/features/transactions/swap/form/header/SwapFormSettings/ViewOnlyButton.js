import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Flex, Text, TouchableArea } from 'ui/src';
import { Eye } from 'ui/src/components/icons/Eye';
export const ViewOnlyButton = ({ onPress }) => {
    const { t } = useTranslation();
    return (_jsx(TouchableArea, { backgroundColor: "$surface2", borderRadius: "$rounded12", justifyContent: "center", px: "$spacing8", py: "$spacing4", onPress: onPress, children: _jsxs(Flex, { row: true, alignItems: "center", gap: "$spacing4", children: [_jsx(Eye, { color: "$neutral2", size: "$icon.16" }), _jsx(Text, { color: "$neutral2", variant: "buttonLabel2", children: t('swap.header.viewOnly') })] }) }));
};
//# sourceMappingURL=ViewOnlyButton.js.map