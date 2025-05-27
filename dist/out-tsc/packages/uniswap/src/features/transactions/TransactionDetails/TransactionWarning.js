import { jsx as _jsx } from "react/jsx-runtime";
import { TouchableArea } from 'ui/src';
import { InlineWarningCard } from 'uniswap/src/components/InlineWarningCard/InlineWarningCard';
export const TransactionWarning = ({ warning, onShowWarning, }) => {
    const { title, severity, message, link } = warning;
    return (_jsx(TouchableArea, { onPress: onShowWarning, children: _jsx(InlineWarningCard, { hideCtaIcon: true, severity: severity, heading: title, description: message, learnMoreUrl: link }) }));
};
//# sourceMappingURL=TransactionWarning.js.map