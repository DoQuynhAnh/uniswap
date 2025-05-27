import { I18nManager } from 'react-native';
import { LeftArrow, RightArrow } from 'ui/src/components/icons';
export function BackArrow(props) {
    return I18nManager.isRTL ? <RightArrow size="$icon.24" {...props}/> : <LeftArrow size="$icon.24" {...props}/>;
}
//# sourceMappingURL=BackArrow.jsx.map