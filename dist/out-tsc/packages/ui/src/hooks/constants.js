import { spacing } from 'ui/src/theme';
export const DEFAULT_BOTTOM_INSET = spacing.spacing20;
// Disabling eslint rules for PascalCase enum Member name as IPhoneSE feels wrong
export var MobileDeviceHeight;
(function (MobileDeviceHeight) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    MobileDeviceHeight[MobileDeviceHeight["iPhoneSE"] = 667] = "iPhoneSE";
    // eslint-disable-next-line @typescript-eslint/naming-convention
    MobileDeviceHeight[MobileDeviceHeight["iPhone12"] = 812] = "iPhone12";
})(MobileDeviceHeight || (MobileDeviceHeight = {}));
//# sourceMappingURL=constants.js.map