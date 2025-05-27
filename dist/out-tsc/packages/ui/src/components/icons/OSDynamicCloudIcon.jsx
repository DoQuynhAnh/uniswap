import { memo } from 'react';
import { Platform } from 'react-native';
import { Cloud, GoogleDrive } from 'ui/src/components/icons';
function _OSDynamicCloudIcon(iconProps) {
    if (Platform.OS === 'ios') {
        return <Cloud {...iconProps}/>;
    }
    else {
        return <GoogleDrive {...iconProps}/>;
    }
}
export const OSDynamicCloudIcon = memo(_OSDynamicCloudIcon);
//# sourceMappingURL=OSDynamicCloudIcon.jsx.map